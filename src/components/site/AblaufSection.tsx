export function AblaufSection() {
  const steps = [
    {
      number: "01",
      title: "Anfrage",
      text: "Sie senden mir eine kurze Beschreibung Ihres Projekts und des gewünschten Unterstützungsbedarfs.",
    },
    {
      number: "02",
      title: "Abstimmung",
      text: "Wir klären Aufgaben, Umfang, Software, vorhandene Daten und den gewünschten Zeitrahmen.",
    },
    {
      number: "03",
      title: "Bearbeitung",
      text: "Ich übernehme die vereinbarten Aufgaben strukturiert und remote – passend zu Ihrem bestehenden Workflow.",
    },
    {
      number: "04",
      title: "Übergabe",
      text: "Die bearbeiteten Pläne, Modelle oder Visualisierungen werden digital und projektbezogen übergeben.",
    },
  ];

  return (
    <section id="ablauf" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            05 — Ablauf
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Klarer Ablauf, direkte Kommunikation
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Von der ersten Anfrage bis zur Übergabe bleiben Aufgaben,
            Kommunikation und Zuständigkeiten klar definiert.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-border pt-5">
              <p className="text-sm font-medium text-muted-foreground">
                {step.number}
              </p>

              <h3 className="mt-4 text-xl font-medium">{step.title}</h3>

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
