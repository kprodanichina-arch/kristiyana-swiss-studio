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
              Architektur mit technischem Anspruch.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-muted-foreground sm:text-lg">
              <p>
                Ich bin Kristiyana Prodanichina, Architektin und Gründerin von
                ArchiK. Ich unterstütze Architekturbüros als externe
                Projektpartnerin bei der digitalen Bearbeitung von
                Architekturprojekten – remote, flexibel und projektbezogen.
              </p>

              <p>
                Mein Schwerpunkt liegt auf der Ausführungs- und Detailplanung,
                der Bearbeitung von Grundrissen, Schnitten und Ansichten sowie
                der architektonischen Visualisierung. Dabei ist mir wichtig,
                dass Pläne und Modelle nicht nur vollständig, sondern auch
                nachvollziehbar und direkt in bestehende Arbeitsabläufe
                integrierbar sind.
              </p>

              <p>
                Ich arbeite aktuell vor allem mit Archicad, Twinmotion und D5
                Render. Durch meine Erfahrung mit Revit und AutoCAD kann ich
                mich auch in andere Softwareumgebungen und bestehende
                Projektstrukturen schnell einarbeiten.
              </p>

              <p>
                ArchiK richtet sich an Architekturbüros, die für einzelne
                Aufgaben zusätzliche Kapazität benötigen oder Unterstützung
                während laufender Projekte suchen – ohne dafür dauerhaft
                zusätzliche Ressourcen aufbauen zu müssen.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Lebenslauf ansehen
              </a>

              <a
                href="#kontakt"
                className="inline-flex text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}