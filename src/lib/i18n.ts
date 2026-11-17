import { useRouterState } from "@tanstack/react-router";

/**
 * Zweisprachigkeit: Deutsch unter /, Englisch (britisch) unter /en.
 * Jede deutsche Seite hat eine englische Entsprechung mit eigenem Slug.
 * Blogbeiträge sind getrennt: deutsche unter /blog, englische unter /en/blog.
 */
export type Lang = "de" | "en";

export const PAGE_PAIRS: ReadonlyArray<readonly [de: string, en: string]> = [
  ["/", "/en"],
  ["/ueber-uns", "/en/about"],
  ["/projekte", "/en/projects"],
  ["/blog", "/en/blog"],
  ["/faq", "/en/faq"],
  ["/kontakt", "/en/contact"],
  ["/impressum", "/en/imprint"],
  ["/datenschutz", "/en/privacy"],
];

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function useLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return langFromPath(pathname);
}

/** Deutschen Pfad (optional mit #anker) in die aktuelle Sprache übersetzen. */
export function localizePath(dePath: string, lang: Lang): string {
  if (lang === "de") return dePath;
  const [path, hash] = dePath.split("#");
  const pair = PAGE_PAIRS.find(([de]) => de === path);
  const en = pair ? pair[1] : `/en${path === "/" ? "" : path}`;
  return hash ? `${en}#${hash}` : en;
}

export function useLocalize() {
  const lang = useLang();
  return (dePath: string) => localizePath(dePath, lang);
}

/** Entsprechende Seite in der anderen Sprache (für den Sprachumschalter). */
export function counterpartPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  for (const [de, en] of PAGE_PAIRS) {
    if (clean === de) return en;
    if (clean === en) return de;
  }
  // Blogbeiträge haben keine Übersetzung → zur Blogübersicht der anderen Sprache.
  if (clean.startsWith("/en/blog/")) return "/blog";
  if (clean.startsWith("/blog/")) return "/en/blog";
  return langFromPath(clean) === "en" ? "/" : "/en";
}

/** Kleiner Helfer: wählt den Text der aktuellen Sprache. */
export function pick<T>(lang: Lang, copy: { de: T; en: T }): T {
  return copy[lang];
}
