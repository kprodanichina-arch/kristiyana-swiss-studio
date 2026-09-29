import { useEffect, useRef, useState } from "react";
import { CV_PATH } from "./data";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ueber-mich"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <div
              className={`overflow-hidden transition-all duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <img
                src="/images/kristiyana.webp"
                alt="Kristiyana Prodanichina – Architektin und Gründerin von ArchiKa"
                className={`h-auto w-full object-cover transition-transform duration-[1400ms] ease-out motion-reduce:transform-none ${
                  isVisible ? "scale-100" : "scale-[1.045]"
                }`}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "180ms" : "0ms",
            }}
          >
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
              {[
                <>
                  Ich bin Kristiyana Prodanichina, Architektin und Gründerin
                  von ArchiKa. Ich unterstütze Architekturbüros als flexible
                  externe Projektpartnerin bei der digitalen Bearbeitung von
                  Architekturprojekten – remote, strukturiert und
                  projektbezogen.
                </>,
                <>
                  <span className="text-foreground">
                    Von der Idee ins Detail:
                  </span>{" "}
                  Mein Schwerpunkt liegt auf der Ausführungs- und
                  Detailplanung, der Bearbeitung von Grundrissen, Schnitten
                  und Ansichten sowie der architektonischen Visualisierung.
                  Dabei lege ich besonderen Wert auf klare Planstrukturen,
                  nachvollziehbare Bearbeitung und Ergebnisse, die sich direkt
                  in bestehende Projektabläufe integrieren lassen.
                </>,
                <>
                  Ich arbeite aktuell vor allem mit Archicad, Twinmotion und
                  D5 Render. Durch meine Erfahrung mit Revit und AutoCAD kann
                  ich mich auch in andere Softwareumgebungen und bestehende
                  Projektstrukturen schnell und zuverlässig einarbeiten.
                </>,
                <>
                  <span className="text-foreground">
                    Sie behalten den Überblick. Ich halte Ihnen den Rücken
                    frei.
                  </span>
                  <br />
                  Für einzelne Arbeitspakete. Für ganze Projektphasen.
                  <br />
                  ArchiKa unterstützt Architekturbüros insbesondere dann, wenn
                  kurzfristig zusätzliche Kapazität benötigt wird – ohne
                  dauerhaft zusätzliche Ressourcen aufbauen zu müssen.
                </>,
              ].map((paragraph, index) => (
                <p
                  key={index}
                  className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${420 + index * 110}ms`
                      : "0ms",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "900ms" : "0ms",
              }}
            >
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
