import { CV_PATH } from "./data";

export function AboutSection() {
  return (
    <section id="ueber-mich" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <div className="overflow-hidden">
              <img
                src="/images/kristiyana.webp"
                alt="Kristiyana Prodanichina – Architektin und Gründerin von ArchiK"
                className="h-auto w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              06 — Profil
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Über ArchiK
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-muted-foreground sm:text-lg">
              <p>
                Ich bin Kristiyana Prodanichina, Architektin und Gründerin von
                ArchiK. Ich unterstütze Architekturbüros als externe
                Ansprechpartnerin bei Planungs-, BIM- und
                Visualisierungsaufgaben – direkt, flexibel und remote.
              </p>

              <p>
                Mein Schwerpunkt liegt auf der digitalen Bearbeitung von
                Architekturprojekten – von der Ausführungs- und Detailplanung
                bis zur Visualisierung. Dabei arbeite ich strukturiert,
                projektbezogen und orientiere mich an den bestehenden
                Standards und Arbeitsabläufen Ihres Büros.
              </p>

              <p>
                Aktuell arbeite ich vor allem mit Archicad, Twinmotion und D5
                Render. Durch meine Erfahrung mit Revit, AutoCAD und weiteren
                Planungs- und Visualisierungsprogrammen kann ich mich zudem
                schnell in bestehende Software-Workflows und Projektstrukturen
                einarbeiten.
              </p>

              <p>
                ArchiK ist auf die flexible externe Unterstützung von
                Architekturbüros ausgerichtet – für einzelne Aufgaben,
                projektbezogene Unterstützung oder zusätzliche Kapazität in
                laufenden Projekten.
              </p>
            </div>

            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Lebenslauf ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
