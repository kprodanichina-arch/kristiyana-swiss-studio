const steps = [
  {
    number: "01",
    title: "Anfrage",
    text: "Sie senden mir eine kurze Beschreibung Ihres Projekts, der benötigten Unterstützung und des gewünschten Zeitrahmens.",
  },
  {
    number: "02",
    title: "Abstimmung",
    text: "Wir klären Leistungsumfang, vorhandene Unterlagen, Software, Dateiformate, Schnittstellen und Termine.",
  },
  {
    number: "03",
    title: "Bearbeitung",
    text: "Ich bearbeite die vereinbarten Aufgaben remote und stimme mich während des Projekts direkt mit Ihrem Team ab.",
  },
  {
    number: "04",
    title: "Übergabe",
    text: "Planungsunterlagen, Modelle oder Visualisierungen werden strukturiert und in den vereinbarten Dateiformaten übergeben.",
  },
];

export function AblaufSection() {
  return (
    <section id="ablauf" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">04 — Ablauf</p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Klarer Ablauf, direkte Kommunikation
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Von der ersten Anfrage bis zur Übergabe der fertigen Unterlagen
            bleibt die Zusammenarbeit unkompliziert und transparent.
          </p>
        </div>

        <div className="mt-14 grid border-t border-border sm:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-b border-border py-10 sm:px-8 sm:py-12 first:sm:pl-0 even:sm:pr-0"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm text-muted-foreground">
                  {step.number}
                </span>

                <div className="max-w-xl">
                  <h3 className="text-xl font-medium sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
