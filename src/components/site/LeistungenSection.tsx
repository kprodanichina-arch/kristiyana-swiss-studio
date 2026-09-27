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

          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Flexible Unterstützung für Ihre Projekte
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            ArchiK unterstützt Architekturbüros bei Ausführungs- und
            Detailplanung, Fassaden- und Planaufbereitung, digitaler
            Planung sowie Architekturvisualisierung – projektbezogen oder
            als flexible externe Kapazität.
          </p>
        </div>

        <div className="mt-14 grid border-t border-border sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="relative border-b border-border px-0 py-10 sm:px-8 sm:py-12"
            >
              <div className="grid grid-cols-[40px_1fr] gap-6">
                <span className="text-sm text-muted-foreground">
                  {service.number}
                </span>

                <div className="max-w-xl">
                  <h3 className="text-xl font-medium sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm">
                    {service.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
                        {item}
                      </li>
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
