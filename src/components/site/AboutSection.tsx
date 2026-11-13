import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const PROFILE_FACTS = [
  { label: "Planungserfahrung", value: "über 100.000 m²" },
  { label: "Software", value: "Archicad, BIMcloud · Revit, Rhino, Grasshopper" },
  { label: "Sprachen", value: "Deutsch B2 · Englisch B2" },
  { label: "Arbeitsweise", value: "Remote, Vor-Ort-Termine nach Absprache" },
  { label: "Ausbildung", value: "Master Architektur, UACEG Sofia" },
];

export function AboutSection() {
  return (
    <section
      id="ueber-uns"
      className="bg-background py-20 sm:py-28"
    >
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Über ArchiKa
          </p>

          <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Architektur digital gedacht.
          </h1>
        </div>

        <div className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <p>
            ArchiKa unterstützt Architektur- und Planungsbüros remote und
            projektbezogen – bei Ausführungs- und Detailplanung, BIM/IFC in
            Archicad und BIMcloud, Scan-to-BIM und Visualisierung.
          </p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-border pt-14 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div className="flex items-start justify-start">
            <img
              src="/images/kristiyana.webp"
              alt="Kristiyana Prodanichina – Architektin, Leitung ArchiKa"
              className="h-auto w-full max-w-[280px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Ihre Ansprechpartnerin
            </p>

            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
              Kristiyana Prodanichina
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Architektin und Mitglied der Kammer der Architekten in
              Bulgarien. Planung grosser Wohngebäude vom Konzept bis zur
              Ausführungs- und Detailplanung. Sie leitet ArchiKa und betreut
              jedes Projekt persönlich.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[rgba(32,32,29,0.14)] pt-8 sm:grid-cols-3">
              {PROFILE_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd
                    className={
                      fact.label === "Planungserfahrung"
                        ? "mt-1 text-2xl leading-snug text-foreground/90"
                        : "mt-2 text-base leading-snug text-foreground/80"
                    }
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(32,32,29,0.18)] px-5 py-3 text-sm font-medium text-[rgba(65,65,62,0.78)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(32,32,29,0.35)] hover:bg-black/[0.025]"
              >
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/ueber-uns"
                hash="pakete"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
              >
                Leistungspakete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
