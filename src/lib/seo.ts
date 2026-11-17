import { PAGE_PAIRS, langFromPath } from "./i18n";
import { hasEnglishPosts } from "./blog";

export const SITE_URL = "https://archikprojekt.com";

/** hreflang-Links für Seiten, die es in beiden Sprachen gibt. */
export function alternateLinks(path: string) {
  const pair = PAGE_PAIRS.find(([de, en]) => de === path || en === path);
  if (!pair) return [];
  if (pair[0] === "/blog" && !hasEnglishPosts) return [];
  const [de, en] = pair;
  const url = (p: string) => `${SITE_URL}${p === "/" ? "/" : p}`;
  return [
    { rel: "alternate", hrefLang: "de", href: url(de) },
    { rel: "alternate", hrefLang: "en", href: url(en) },
    { rel: "alternate", hrefLang: "x-default", href: url(de) },
  ];
}

/** Canonical + OG-Tags (+ hreflang) für eine Unterseite. */
export function pageHead(path: string, title: string, description: string) {
  const url = `${SITE_URL}${path}`;
  const lang = langFromPath(path);
  return {
    links: [{ rel: "canonical", href: url }, ...alternateLinks(path)],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:locale", content: lang === "en" ? "en_GB" : "de_CH" },
    ],
  };
}
