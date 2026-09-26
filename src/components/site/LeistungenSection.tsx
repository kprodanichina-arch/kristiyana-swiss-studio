const services = [
  {
    number: "01",
    title: "BIM-Modellierung",
    text: "Erstellung und Bearbeitung digitaler Gebäudemodelle für unterschiedliche Planungsphasen und Projektanforderungen.",
    items: [
      "Archicad",
      "Revit",
      "Bestandsmodellierung",
      "Planableitung",
    ],
  },
  {
    number: "02",
    title: "Planungs- und Baudokumentation",
    text: "Unterstützung bei der Erstellung, Bearbeitung und Aufbereitung von Planungsunterlagen für Architekturprojekte.",
    items: [
      "Grundrisse",
      "Schnitte & Ansichten",
      "Werk- und Detailplanung",
      "DWG / PDF",
    ],
  },
  {
    number: "03",
    title: "IFC & BIM-Workflows",
    text: "Unterstützung bei IFC-basiertem Datenaustausch und der strukturierten Weiterverarbeitung von Gebäudemodellen.",
    items: [
      "IFC-Modelle",
      "IFC-Export",
      "Modellstruktur",
      "Offene BIM-Workflows",
    ],
  },
  {
    number: "04",
    title: "Architekturvisualisierung",
    text: "Hochwertige architektonische Visualisierungen für Präsentationen, Wettbewerbe und die Kommunikation mit Bauherren.",
    items: [
      "D5 Render",
      "Twinmotion",
      "Innen- und Außenvisualisierungen",
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
            ArchiK unterstützt Architekturbüros bei BIM-Modellierung,
            Planungsdokumentation, IFC-basierten Workflows und
            Architekturvisualisierung – projektbezogen oder als flexible
            externe Kapazität.
          </p>
        </div>

        <div className="mt-14 grid border-t border-border sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="border-b border-border py-10 sm:px-8 sm:py-12 first:sm:pl-0 even:sm:pr-0"
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
