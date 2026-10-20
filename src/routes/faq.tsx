import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PageIntro } from "@/components/site/PageIntro";
import { FAQ_ITEMS } from "@/components/site/faqData";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => {
    const base = pageHead(
      "/faq",
      "Häufige Fragen | ArchiKa",
      "Antworten zu Kosten, Pilotprojekt, Software, Bürostandard und Zusammenarbeit mit ArchiKa – externe Planungsunterstützung für Architekturbüros in DACH.",
    );
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        },
      ],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="FAQ"
        title="Häufige Fragen"
        text="Was Architekturbüros vor der ersten Zusammenarbeit wissen möchten – kurz beantwortet."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-16">
          <div className="max-w-3xl border-t border-[rgba(32,32,29,0.16)]">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[rgba(32,32,29,0.14)] py-6"
              >
                <summary
                  className="flex cursor-pointer list-none items-start justify-between gap-6"
                  style={{
                    fontFamily: "'Instrument Serif Local', Georgia, serif",
                    fontSize: "clamp(24px, 2.2vw, 30px)",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    color: "rgba(58, 58, 55, 0.9)",
                  }}
                >
                  <h2 className="font-normal">{item.question}</h2>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-xl transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-2xl"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.65",
                    color: "rgba(65, 65, 62, 0.72)",
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <Link
            to="/kontakt"
            className="mt-12 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          >
            Ihre Frage ist nicht dabei? Schreiben Sie uns
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
