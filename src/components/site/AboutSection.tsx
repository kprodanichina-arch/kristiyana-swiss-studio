import { useEffect, useRef, useState } from "react";

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
        threshold: 0.12,
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
      className="bg-background"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">
          <div
            className={`lg:sticky lg:top-28 lg:self-start ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } transition-all duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100`}
          >
            <p
              className="text-xs uppercase tracking-[0.16em]"
              style={{
                color: "rgba(65, 65, 62, 0.56)",
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontWeight: 700,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              02 — Über mich
            </p>

            <h2
              className="mt-5 text-balance"
              style={{
                fontFamily:
                  "'Instrument Serif Local', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(46px, 5vw, 76px)",
                lineHeight: "0.94",
                letterSpacing: "-0.04em",
                color: "rgba(58, 58, 55, 0.90)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Architektur
              <br />
              digital
              <br />
              gedacht
            </h2>
          </div>

          <div
            className={`max-w-3xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-1000 delay-150 ease-out motion-reduce:transform-none motion-reduce:opacity-100`}
          >
            <p
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(19px, 2vw, 25px)",
                lineHeight: "1.55",
                color: "rgba(58, 58, 55, 0.88)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Ich bin Architektin mit Schwerpunkt auf digitaler
              Planung und der technischen Bearbeitung von
              Architekturprojekten.
            </p>

            <p
              className="mt-6"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.7",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Mein Fokus liegt auf BIM-basierten Planungsprozessen,
              Archicad, IFC, Mengenermittlung sowie der Erstellung
              und Bearbeitung von Grundrissen, Schnitten und
              Fassaden. Dabei verbinde ich architektonisches
              Verständnis mit strukturierten digitalen
              Arbeitsprozessen.
            </p>

            <p
              className="mt-6"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.7",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Einen weiteren Schwerpunkt bildet die Arbeit mit
              Punktwolken und Bestandsdaten. Vorhandene
              Punktwolken können aufbereitet und für die
              anschließende Scan-to-BIM-Modellierung in Archicad
              genutzt werden. Ziel ist ein strukturiertes
              Bestandsmodell, das für weitere Planungsschritte
              und IFC-basierte Workflows eingesetzt werden kann.
            </p>

            <p
              className="mt-6"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.7",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Zusätzlich unterstütze ich Architekturbüros bei der
              technischen Planbearbeitung und bei
              Architekturvisualisierungen. Je nach Projekt kann
              ich einzelne Aufgaben übernehmen oder als
              flexible externe Unterstützung in bestehende
              Arbeitsabläufe integriert werden.
            </p>

            <div className="mt-10 grid gap-6 border-t border-[rgba(32,32,29,0.14)] pt-8 sm:grid-cols-2">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.14em]"
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontWeight: 700,
                    color: "rgba(65, 65, 62, 0.48)",
                  }}
                >
                  Schwerpunkt
                </p>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.55",
                    color: "rgba(65, 65, 62, 0.72)",
                  }}
                >
                  BIM · Archicad · IFC · Punktwolken ·
                  Bestandsmodellierung
                </p>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-[0.14em]"
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontWeight: 700,
                    color: "rgba(65, 65, 62, 0.48)",
                  }}
                >
                  Technische Planung
                </p>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.55",
                    color: "rgba(65, 65, 62, 0.72)",
                  }}
                >
                  Grundrisse · Schnitte · Fassaden ·
                  Mengenermittlung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}