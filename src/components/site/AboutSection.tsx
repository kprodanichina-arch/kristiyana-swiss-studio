import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="ueber-mich"
      className="border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Über mich
            </p>

            <h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Architektur digital gedacht.
            </h2>
          </div>

          <div className="max-w-2xl">
            <div className="mb-10 flex justify-start">
              <img
                src="/images/kristiyana.webp"
                alt="Kristiyana Prodanichina – Architektin"
                className="h-auto w-[190px] object-cover"
                loading="lazy"
              />
            </div>

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

            <div className="mt-10">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
