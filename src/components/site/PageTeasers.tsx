import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const teasers = [
  {
    to: "/ueber-uns",
    title: "Über uns",
    text: "Leistungen, Arbeitsweise und das Team hinter ArchiKa.",
  },
  {
    to: "/projekte",
    title: "Projekte",
    text: "Ausführungsplanung, BIM-Workflows und Visualisierungen aus unserer Praxis.",
  },
  {
    to: "/blog",
    title: "Blog",
    text: "Wöchentliche Beiträge zu aktuellen Themen aus Architektur und BIM.",
  },
  {
    to: "/kontakt",
    title: "Kontakt",
    text: "Erzählen Sie uns von Ihrem Projekt – wir melden uns zeitnah.",
  },
] as const;

export function PageTeasers() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1800px] gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {teasers.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="group flex flex-col justify-between gap-10 bg-background px-6 py-10 transition-colors hover:bg-black/[0.02] sm:px-10 sm:py-14"
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Instrument Serif Local', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 2.6vw, 42px)",
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  color: "rgba(58, 58, 55, 0.90)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {t.title}
              </h2>
              <p
                className="mt-4"
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.55",
                  color: "rgba(65, 65, 62, 0.68)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {t.text}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-[rgba(65,65,62,0.6)] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
