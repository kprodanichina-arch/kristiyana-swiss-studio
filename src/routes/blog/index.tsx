import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PageIntro } from "@/components/site/PageIntro";
import { posts, formatDate } from "@/lib/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead(
      "/blog",
      "Blog | ArchiKa",
      "Wöchentliche Beiträge von ArchiKa zu aktuellen Themen aus Architektur, BIM, Bauen im Bestand und digitaler Planung.",
    ),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Blog"
        title="Aktuelles aus Architektur & BIM"
        text="Jede Woche ein Beitrag zu einem Thema, das die Architekturbranche gerade beschäftigt – eingeordnet aus der Sicht der Planungspraxis."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-10 sm:py-24 lg:px-14 xl:px-16">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col justify-between gap-10 bg-background p-7 transition-colors hover:bg-black/[0.02] sm:p-10"
              >
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.16em]"
                    style={{
                      color: "rgba(65, 65, 62, 0.56)",
                      fontFamily: "'Barlow Semi Condensed Local', Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {formatDate(post.date)}
                    {post.tags.length > 0 && ` · ${post.tags.slice(0, 2).join(" · ")}`}
                  </p>

                  <h2
                    className="mt-5 text-balance"
                    style={{
                      fontFamily: "'Instrument Serif Local', Georgia, serif",
                      fontWeight: 400,
                      fontSize: "clamp(28px, 2.4vw, 36px)",
                      lineHeight: "1.02",
                      letterSpacing: "-0.03em",
                      color: "rgba(58, 58, 55, 0.90)",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "'Barlow Local', Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "rgba(65, 65, 62, 0.68)",
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Weiterlesen
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
