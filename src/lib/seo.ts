export const SITE_URL = "https://archikprojekt.com";

/** Canonical + OG-Tags für eine Unterseite. */
export function pageHead(path: string, title: string, description: string) {
  const url = `${SITE_URL}${path}`;
  return {
    links: [{ rel: "canonical", href: url }],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
  };
}
