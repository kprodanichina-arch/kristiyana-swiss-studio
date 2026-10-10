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
 */

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

export const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .filter((p): p is BlogPost & { draft: boolean } => p !== null && !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  const d = new Date(`${date}T12:00:00`);
  return d.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
