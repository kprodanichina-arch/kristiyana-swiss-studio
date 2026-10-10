import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Ausführungsplanung & Archicad Automatisierung",
    text: "Technische Ausführungs- und Detailplanung sowie effiziente Bearbeitung und Optimierung von Archicad-Projekten – von der Planaufbereitung bis zur strukturierten Modellprüfung und Automatisierung wiederkehrender Arbeitsschritte.",
    items: [
      "Ausführungs- und Detailplanung",
      "Archicad",
      "Modellprüfung",
      "BIM-Modellbereinigung",
      "Bauteil- und Elementnummerierung",
      "Auswertungen & Listen",
      "Automatisierte Dokumentation",
      "Büro- und Projektstandards",
      "Individuelle Archicad-Workflows",
      "Datenexport",
    ],
  },
  {
    number: "02",
    title: "IFC Koordination, OpenBIM & BIMcloud",
    text: "Strukturierte Koordination und Verwaltung von BIM-Modellen mit IFC, OpenBIM und BIMcloud – für einen zuverlässigen Datenaustausch und eine effiziente Zusammenarbeit zwischen Planungspartnern.",
    items: [
      "IFC Koordination",
      "OpenBIM",
      "BIMcloud",
      "IFC Import & Export",
      "Fachmodellkoordination",
      "Modellzusammenführung",
      "IFC-Datenprüfung",
      "BIM-Datenmanagement",
    ],
  },
  {
    number: "03",
    title: "Fassaden & Planaufbereitung",
    text: "Bearbeitung und Aufbereitung von Fassaden, Ansichten und technischen Planunterlagen für eine klare und konsistente Projektdokumentation.",
    items: [
      "Fassadenplanung",
      "Ansichten",
      "Planaufbereitung",
      "Technische Dokumentation",
    ],
  },
  {
    number: "04",
    title: "Scan-to-BIM & Bestandsmodellierung",
    text: "Aus vorhandenen Punktwolken entstehen strukturierte digitale Bestandsmodelle. Aufbereitung der Punktwolke, Modellierung in Archicad und Übergabe als IFC-fähiges BIM-Modell.",
    items: [
      "Punktwolken",
      "Punktwolkenaufbereitung",
      "Archicad-Bestandsmodelle",
      "IFC-Export",
    ],
  },
  {
    number: "05",
    title: "Architekturvisualisierung",
    text: "Fotorealistische Architekturvisualisierungen für Präsentationen, Projektkommunikation und die überzeugende Darstellung von Architektur.",
    items: [
      "D5 Render",
      "Twinmotion",
      "Außenvisualisierungen",
      "Präsentationsbilder",
    ],
  },
];

export function LeistungenSection() {
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
      id="leistungen"
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
              Leistungen
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
              Flexible
              <br />
              Unterstützung
              <br />
              für Ihre Projekte
            </h2>

            <p
              className="mt-7 max-w-lg"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.65",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Gute Planung braucht Zeit. Projekte oft mehr, als vorhanden
              ist.
              <br />
              ArchiKa unterstützt Architekturbüros bei Ausführungs- und
              Detailplanung, Archicad-Optimierung, IFC-Koordination,
              OpenBIM, BIMcloud, Scan-to-BIM sowie Architekturvisualisierung.
            </p>
          </div>

          <div className="border-t border-[rgba(32,32,29,0.18)]">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group border-b border-[rgba(32,32,29,0.14)] py-9 sm:py-11 lg:py-12 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } transition-all duration-900 ease-out motion-reduce:transform-none motion-reduce:opacity-100`}
                style={{
                  transitionDelay: isVisible
                    ? `${180 + index * 120}ms`
                    : "0ms",
                }}
              >
                <div>
                  

                  <div>
                    <h3
                      className="transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                      style={{
                        fontFamily:
                          "'Instrument Serif Local', Georgia, serif",
                        fontWeight: 400,
                        fontSize: "clamp(30px, 3vw, 44px)",
                        lineHeight: "0.98",
                        letterSpacing: "-0.03em",
                        color: "rgba(58, 58, 55, 0.90)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-4 max-w-2xl"
                      style={{
                        fontFamily: "'Barlow Local', Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "1.65",
                        color: "rgba(65, 65, 62, 0.66)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      {service.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.items.map((item, itemIndex) => (
                        <span
                          key={item}
                          className={`rounded-full border px-3 py-1.5 transition-all duration-500 ease-out motion-reduce:transform-none ${
                            isVisible
                              ? "translate-y-0 opacity-100"
                              : "translate-y-2 opacity-0"
                          }`}
                          style={{
                            transitionDelay: isVisible
                              ? `${420 + index * 120 + itemIndex * 45}ms`
                              : "0ms",
                            borderColor: "rgba(32, 32, 29, 0.16)",
                            backgroundColor:
                              "rgba(238, 232, 220, 0.42)",
                            fontFamily:
                              "'Barlow Local', Arial, sans-serif",
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "1.2",
                            color: "rgba(65, 65, 62, 0.66)",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
