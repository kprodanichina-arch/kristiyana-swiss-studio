import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }

  return serverEntryPromise;
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as {
      unhandled?: unknown;
      message?: unknown;
    };

    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

async function normalizeCatastrophicSsrResponse(
  response: Response,
): Promise<Response> {
  if (response.status < 500) {
    return response;
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return response;
  }

  const body = await response.clone().text();

  if (!isH3SwallowedErrorBody(body)) {
    return response;
  }

  console.error(
    consumeLastCapturedError() ??
      new Error(`h3 swallowed SSR error: ${body}`),
  );

  return new Response(renderErrorPage(), {
    status: 500,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

/**
 * Blocks requests coming from Bulgaria.
 *
 * Vercel provides the visitor's country through the
 * x-vercel-ip-country request header.
 *
 * This is intentionally handled server-side rather than
 * through the browser's timezone.
 */
function isBlockedCountry(request: Request): boolean {
  const country = request.headers
    .get("x-vercel-ip-country")
    ?.trim()
    .toUpperCase();

  return country === "BG";
}

function renderBlockedRegionPage(): Response {
  return new Response(
    `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <title>403 – Zugriff verweigert</title>
  </head>

  <body
    style="
      margin:0;
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#fbfbfb;
      color:#888888;
      font-family:sans-serif;
      font-size:14px;
      letter-spacing:.15em;
      text-transform:uppercase;
      text-align:center;
    "
  >
    <div
      style="
        border:1px solid #e5e5e5;
        padding:20px 40px;
        background:#ffffff;
        box-shadow:0 4px 20px rgba(0,0,0,.02);
      "
    >
      403 – Zugriff aus dieser Region verweigert
    </div>
  </body>
</html>`,
    {
      status: 403,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store, no-cache, must-revalidate",
      },
    },
  );
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      if (isBlockedCountry(request)) {
        return renderBlockedRegionPage();
      }

      const handler = await getServerEntry();

      const response = await handler.fetch(request, env, ctx);

      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);

      return new Response(renderErrorPage(), {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }
  },
};