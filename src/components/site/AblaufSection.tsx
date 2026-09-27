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
              05 — Ablauf
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
              Einfach integrierbar.
              <br />
              Klar im Ablauf.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: "1.65",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Ob einzelne Planungsaufgabe oder zusätzliche Kapazität in einem
              laufenden Projekt: Die Zusammenarbeit wird auf Ihren konkreten
              Bedarf abgestimmt und in Ihre bestehende Arbeitsweise
              integriert.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-0 border-t border-border md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p
                style={{
                  fontFamily:
                    "'Barlow Semi Condensed Local', Arial, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "rgba(65, 65, 62, 0.52)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {step.number}
              </p>

              <h3
                className="mt-5"
                style={{
                  fontFamily:
                    "'Instrument Serif Local', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(27px, 2.2vw, 34px)",
                  lineHeight: "1",
                  letterSpacing: "-0.025em",
                  color: "rgba(58, 58, 55, 0.90)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {step.title}
              </h3>

              <p
                className="mt-3"
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "rgba(65, 65, 62, 0.66)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}