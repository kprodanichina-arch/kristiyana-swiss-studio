const services = [
  {
    number: "01",
    title: "Ausführungs- & Detailplanung",
    text: "Unterstützung bei der technischen Bearbeitung von Architekturprojekten – von Grundrissen, Schnitten und Ansichten bis zur detaillierten Ausführungsplanung.",
    items: [
      "Grundrisse",
      "Schnitte & Ansichten",
      "Ausführungs- und Detailplanung",
      "DWG / PDF",
    ],
  },
  {
    number: "02",
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
    number: "03",
    title: "BIM & digitale Planung",
    text: "Digitale Bearbeitung von Architekturprojekten mit Archicad und praktischer Erfahrung mit Revit. Unterstützung bei strukturierten BIM- und IFC-basierten Workflows.",
    items: [
      "Archicad",
      "Revit",
      "IFC",
      "Digitale Planungsprozesse",
    ],
  },
  {
    number: "04",
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
  return (
    <section id="leistungen" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">01 — Leistungen</p>

          <h2
            className="mt-4 text-balance sm:text-4xl"
            style={{
              fontFamily: "'Instrument Serif Local', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(42px, 4.2vw, 64px)",
              lineHeight: "0.96",
              letterSpacing: "-0.035em",
              color: "rgba(58, 58, 55, 0.90)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Flexible Unterstützung für Ihre Projekte
          </h2>

          <p
            className="mt-6 sm:text-lg"
            style={{
              fontFamily: "'Barlow Local', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "1.65",
              color: "rgba(65, 65, 62, 0.68)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            ArchiK unterstützt Architekturbüros bei Ausführungs- und
            Detailplanung, Fassaden- und Planaufbereitung, digitaler Planung
            sowie Architekturvisualisierung – projektbezogen oder als
            flexible zusätzliche Kapazität.
          </p>
        </div>

        <div className="mt-14 grid border-t border-border sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="relative border-b border-border px-0 py-10 sm:px-8 sm:py-12"
            >
              <div className="grid grid-cols-[40px_1fr] gap-6">
                <span
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "rgba(65, 65, 62, 0.52)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {service.number}
                </span>

                <div className="max-w-xl">
                  <h3
                    style={{
                      fontFamily:
                        "'Instrument Serif Local', Georgia, serif",
                      fontWeight: 400,
                      fontSize: "clamp(28px, 2.4vw, 36px)",
                      lineHeight: "1",
                      letterSpacing: "-0.025em",
                      color: "rgba(58, 58, 55, 0.90)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "'Barlow Local', Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "rgba(65, 65, 62, 0.68)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {service.text}
                  </p>

                  <ul
                    className="mt-6 space-y-2"
                    style={{
                      fontFamily: "'Barlow Local', Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "rgba(65, 65, 62, 0.62)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}