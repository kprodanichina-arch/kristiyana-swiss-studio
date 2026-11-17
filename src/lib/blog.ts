/**
 * Blog-Beiträge liegen als Markdown-Dateien in src/content/blog/.
 * Dateiname = URL-Slug, z. B. 2026-10-14-gebaeudetyp-e.md → /blog/2026-10-14-gebaeudetyp-e
 *
 * Frontmatter (zwischen den --- Zeilen):
 *   title:   Titel des Beitrags
 *   date:    YYYY-MM-DD
 *   excerpt: Ein bis zwei Sätze für die Übersicht
 *   tags:    Komma-getrennte Schlagworte
 *   draft:   true  → wird nicht angezeigt
 *
 * Englische Beiträge (eigene Artikel für den englischsprachigen Markt,
 * keine Übersetzungen) liegen in src/content/blog-en/ → /en/blog/<slug>.
 */
import type { Lang } from "./i18n";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
};

const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const filesEn = import.meta.glob("../content/blog-en/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parse(path: string, raw: string): (BlogPost & { draft: boolean }) | null {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;

  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }

  if (!meta.title || !meta.date) return null;

  return {
    slug,
    title: meta.title,
    date: meta.date,
    excerpt: meta.excerpt ?? "",
    tags: (meta.tags ?? "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    draft: meta.draft === "true",
    body: match[2].trim(),
  };
}

function load(source: Record<string, string>): BlogPost[] {
  return Object.entries(source)
    .map(([path, raw]) => parse(path, raw))
    .filter((p): p is BlogPost & { draft: boolean } => p !== null && !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const posts: BlogPost[] = load(files);
export const postsEn: BlogPost[] = load(filesEn);

/** Englischer Blog wird erst im Menü gezeigt, wenn es mindestens einen Beitrag gibt. */
export const hasEnglishPosts = postsEn.length > 0;

export function getPosts(lang: Lang) {
  return lang === "en" ? postsEn : posts;
}

export function getPost(slug: string, lang: Lang = "de") {
  return getPosts(lang).find((p) => p.slug === slug);
}

export function formatDate(date: string, lang: Lang = "de") {
  const d = new Date(`${date}T12:00:00`);
  return d.toLocaleDateString(lang === "en" ? "en-GB" : "de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
