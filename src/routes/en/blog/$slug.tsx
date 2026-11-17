import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Markdown } from "@/components/site/Markdown";
import { getPost, formatDate } from "@/lib/blog";
import { pageHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/en/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug, "en");
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const base = pageHead(`/en/blog/${post.slug}`, `${post.title} | ArchiKa Blog`, post.excerpt);
    return {
      ...base,
      meta: [...base.meta, { property: "og:type", content: "article" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            inLanguage: "en-GB",
            url: `${SITE_URL}/en/blog/${post.slug}`,
            publisher: { "@id": `${SITE_URL}/#organization` },
            author: { "@type": "Organization", name: "ArchiKa" },
          }),
        },
      ],
    };
  },
  component: BlogPostPageEn,
});

function BlogPostPageEn() {
  const { post } = Route.useLoaderData();
  const splitAt = post.body.search(/\r?\n\s*\r?\n/);
  const firstBlock = splitAt === -1 ? post.body : post.body.slice(0, splitAt);
  const rest = splitAt === -1 ? "" : post.body.slice(splitAt).trimStart();

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:px-8 sm:pt-24">
        <Link
          to="/en/blog"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        <p
          className="mt-12 text-xs uppercase tracking-[0.16em]"
          style={{
            color: "rgba(65, 65, 62, 0.56)",
            fontFamily: "'Barlow Semi Condensed Local', Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          {formatDate(post.date, "en")}
          {post.tags.length > 0 && ` · ${post.tags.join(" · ")}`}
        </p>

        <h1
          className="mt-5 text-balance"
          style={{
            fontFamily: "'Instrument Serif Local', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "0.98",
            letterSpacing: "-0.035em",
            color: "rgba(58, 58, 55, 0.90)",
          }}
        >
          {post.title}
        </h1>

        <p
          className="mt-8 border-b border-border pb-10"
          style={{
            fontFamily: "'Barlow Local', Arial, sans-serif",
            fontSize: "19px",
            lineHeight: "1.6",
            color: "rgba(65, 65, 62, 0.78)",
          }}
        >
          {post.excerpt}
        </p>

        <div className="mt-10">
          <Markdown source={firstBlock} />
          <aside
            className="my-8 border border-border bg-[rgba(238,232,220,0.4)] px-6 py-5"
            style={{
              fontFamily: "'Barlow Local', Arial, sans-serif",
              fontSize: "16px",
              lineHeight: "1.55",
              color: "rgba(58, 58, 55, 0.88)",
            }}
          >
            <p>
              <strong>Need support with this?</strong>{" "}
              <Link to="/en/contact" className="underline underline-offset-4 hover:opacity-60">
                Get in touch
              </Link>{" "}
              – we reply within 1–2 working days.
            </p>
          </aside>
          {rest && <Markdown source={rest} />}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p
            style={{
              fontFamily: "'Barlow Local', Arial, sans-serif",
              fontSize: "15px",
              lineHeight: "1.6",
              color: "rgba(65, 65, 62, 0.70)",
            }}
          >
            Planning a project and looking for support with construction documentation, BIM or visualisation?
          </p>
          <Link
            to="/en/contact"
            className="mt-5 inline-flex items-center justify-center bg-primary px-6 py-4 text-primary-foreground transition-opacity hover:opacity-85"
            style={{
              fontFamily: "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            Request a project
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
