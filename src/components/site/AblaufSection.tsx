export function AblaufSection() {
  const steps = [
    {
      number: "01",
      title: "Projekt senden",
      text: "Sie senden mir die vorhandenen Pläne, Modelle oder Projektdaten und beschreiben kurz, wobei Sie Unterstützung benötigen.",
    },
    {
      number: "02",
      title: "Aufgabe abstimmen",
      text: "Wir klären Leistungsumfang, Software, vorhandene Daten, gewünschte Formate und den benötigten Zeitrahmen.",
    },
    {
      number: "03",
      title: "Bearbeitung",
      text: "Ich übernehme die vereinbarten Aufgaben remote und arbeite mich in Ihre bestehende Projektstruktur und Arbeitsweise ein.",
    },
    {
      number: "04",
      title: "Übergabe",
      text: "Die fertigen Pläne, Modelle oder Visualisierungen werden digital in den vereinbarten Formaten und der gewünschten Struktur übergeben.",
    },
  ];

  return (
    <section id="ablauf" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              05 — Ablauf
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Einfach integrierbar.
              <br />
              Klar im Ablauf.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              Ob einzelne Planungsaufgabe oder zusätzliche Kapazität in einem
              laufenden Projekt: Die Zusammenarbeit wird auf Ihren konkreten
              Bedarf abgestimmt und in Ihre bestehende Arbeitsweise integriert.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-0 border-t border-border md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {step.number}
              </p>

              <h3 className="mt-5 text-xl font-medium">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}