import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const PROFILE_FACTS = [
  { label: "Projekte", value: "8 Projekte, gross und klein" },
  { label: "Planungsvolumen", value: "ca. 70.000 m² gesamt, grösstes 16.000 m²" },
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

        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            ArchiKa ist ein Planungsstudio für Architektur, BIM und
            Visualisierung. Wir unterstützen Architektur- und Planungsbüros in
            Deutschland, Österreich und der Schweiz – remote, projektbezogen
            und mit kurzen, direkten Kommunikationswegen.
          </p>

          <p>
            Unser Schwerpunkt liegt auf Ausführungs- und Detailplanung, BIM-
            und IFC-Koordination in Archicad und BIMcloud, Scan-to-BIM sowie
            hochwertigen Architekturvisualisierungen.
          </p>

          <p>
            Unser Anspruch ist es, technische Präzision mit einem klaren
            Verständnis für Architektur zu verbinden – zuverlässig,
            strukturiert und termingerecht.
          </p>
        </div>

        <div className="mt-20 grid gap-12 border-t border-border pt-16 lg:grid-cols-[280px_1fr] lg:gap-20">
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

            <div className="mt-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Architektin (Master, UACEG Sofia) und Mitglied der Kammer der
                Architekten in Bulgarien. Sie leitet ArchiKa und betreut jedes
                Projekt persönlich – vom ersten Gespräch bis zur Übergabe.
              </p>

              <p>
                Ihre Praxis umfasst die Planung grosser Wohngebäude von der
                Konzeptphase über die Ausführungs- und Detailplanung bis zur
                Visualisierung – mit Fokus auf Archicad, BIMcloud und
                IFC-basierte Zusammenarbeit.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[rgba(32,32,29,0.14)] pt-8 sm:grid-cols-3">
              {PROFILE_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-base leading-snug text-foreground/80">
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
                Pilotprojekt anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/ueber-uns"
                hash="pakete"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
              >
                Pakete & Preise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
