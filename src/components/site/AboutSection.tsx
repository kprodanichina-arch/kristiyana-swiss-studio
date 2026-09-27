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
                alt="Kristiyana Prodanichina – Architektin und Gründerin von ArchiKa"
                className="h-auto w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(65, 65, 62, 0.55)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              06 — Profil
            </p>

            <h2
              className="mt-4"
              style={{
                fontFamily:
                  "'Instrument Serif Local', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 4.8vw, 68px)",
                lineHeight: "0.94",
                letterSpacing: "-0.035em",
                color: "rgba(58, 58, 55, 0.90)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Architektur mit technischem Anspruch.
            </h2>

            <div
              className="mt-8 space-y-5"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: "1.65",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <p>
                Ich bin Kristiyana Prodanichina, Architektin und Gründerin von
                ArchiKa. Ich unterstütze Architekturbüros als Projektpartnerin
                bei der digitalen Bearbeitung von Architekturprojekten –
                remote, flexibel und projektbezogen.
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
                ArchiKa richtet sich an Architekturbüros, die für einzelne
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
                style={{
                  fontFamily:
                    "'Barlow Semi Condensed Local', Arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: "rgba(58, 58, 55, 0.78)",
                  WebkitFontSmoothing: "antialiased",
                }}
                className="inline-flex underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Lebenslauf ansehen
              </a>

              <a
                href="#kontakt"
                style={{
                  fontFamily:
                    "'Barlow Semi Condensed Local', Arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: "rgba(80, 80, 76, 0.62)",
                  WebkitFontSmoothing: "antialiased",
                }}
                className="inline-flex underline underline-offset-4 transition-opacity hover:opacity-60"
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