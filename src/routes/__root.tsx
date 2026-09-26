import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const GA_MEASUREMENT_ID = "G-ENDV0PFY4G";
const GA_CONSENT_KEY = "archik-analytics-consent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Seite nicht gefunden
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Die Seite konnte nicht geladen werden
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "ArchiK | BIM- und Architekturleistungen für Architekturbüros",
        },

        {
          name: "description",
          content:
            "ArchiK unterstützt Architekturbüros in Deutschland, Österreich und der Schweiz mit BIM-Modellierung, Planungsdokumentation, IFC und Architekturvisualisierung.",
        },

        {
          name: "author",
          content: "ArchiK",
        },

        {
          name: "robots",
          content: "index, follow",
        },

        {
          property: "og:title",
          content:
            "ArchiK | BIM- und Architekturleistungen für Architekturbüros",
        },

        {
          property: "og:description",
          content:
            "BIM- und Architekturleistungen für Architekturbüros in Deutschland, Österreich und der Schweiz.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:url",
          content: "https://archikprojekt.com/",
        },

        {
          property: "og:site_name",
          content: "ArchiK",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content:
            "ArchiK | BIM- und Architekturleistungen für Architekturbüros",
        },

        {
          name: "twitter:description",
          content:
            "BIM- und Architekturleistungen für Architekturbüros in Deutschland, Österreich und der Schweiz.",
        },

        {
          name: "referrer",
          content: "strict-origin-when-cross-origin",
        },

        {
          "http-equiv": "Content-Security-Policy",
          content: "frame-ancestors 'self'",
        },

        {
          "http-equiv": "X-Content-Type-Options",
          content: "nosniff",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap",
        },

        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.localStorage.getItem(GA_CONSENT_KEY) !== "granted") {
      return;
    }

    if (document.getElementById("archik-google-analytics")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "archik-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.id = "archik-google-analytics-config";
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        anonymize_ip: true
      });
    `;

    document.head.appendChild(inlineScript);

    return () => {
      script.remove();
      inlineScript.remove();
    };
  }, []);

  return null;
}

function AnalyticsConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = window.localStorage.getItem(GA_CONSENT_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAnalytics = () => {
    window.localStorage.setItem(GA_CONSENT_KEY, "granted");
    setVisible(false);
    window.location.reload();
  };

  const rejectAnalytics = () => {
    window.localStorage.setItem(GA_CONSENT_KEY, "denied");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 p-4 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-foreground">
            Datenschutz & Analyse
          </p>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Wir verwenden Google Analytics, um zu verstehen, wie Besucher
            unsere Website nutzen und woher sie kommen. Die Analyse erfolgt
            nur mit Ihrer Zustimmung. Sie können Ihre Auswahl jederzeit
            ändern.
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={rejectAnalytics}
            className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ablehnen
          </button>

          <button
            type="button"
            onClick={acceptAnalytics}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

function useImageProtection() {
  useEffect(() => {
    const isImage = (t: EventTarget | null) =>
      t instanceof HTMLElement &&
      (t.tagName === "IMG" || t.closest("[data-protect-image]"));

    const isFormField = (t: EventTarget | null) =>
      t instanceof HTMLElement &&
      t.closest(
        "input, textarea, select, [contenteditable='true']",
      ) !== null;

    const onContextMenu = (e: MouseEvent) => {
      if (!isFormField(e.target)) {
        e.preventDefault();
      }
    };

    const onDragStart = (e: DragEvent) => {
      if (isImage(e.target)) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useImageProtection();

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalytics />
      <Outlet />
      <AnalyticsConsentBanner />
    </QueryClientProvider>
  );
}