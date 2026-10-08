import { ArrowRight, Download } from "lucide-react";
import { CV_PATH } from "./data";

export function AboutSection() {
  return (
    <section
      id="ueber-mich"
      className="border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Über mich
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Architektur digital gedacht.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div className="flex items-start justify-start">
            <img
              src="/images/kristiyana.webp"
              alt="Kristiyana Prodanichina – Architektin"
              className="h-auto w-full max-w-[280px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="max-w-2xl">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ich bin Kristiyana Prodanichina, Architektin mit Erfahrung in
                der Planung und digitalen Umsetzung von Bauprojekten.
              </p>

              <p>
                Ich unterstütze Architekturbüros bei der
                Ausführungsplanung, BIM- und IFC-Koordination sowie bei
                hochwertigen 3D-Visualisierungen.
              </p>

              <p>
                Mein Anspruch ist es, technische Präzision mit einem klaren
                Verständnis für Architektur zu verbinden – zuverlässig,
                strukturiert und projektbezogen.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={CV_PATH}
                download="Lebenslauf_Kristiyana_Prodanichina.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(32,32,29,0.18)] px-5 py-3 text-sm font-medium text-[rgba(65,65,62,0.78)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(32,32,29,0.35)] hover:bg-black/[0.025]"
              >
                <Download className="h-4 w-4" />
                Lebenslauf herunterladen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}