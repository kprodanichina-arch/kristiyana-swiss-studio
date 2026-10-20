const serif = "'Instrument Serif Local', Georgia, serif";
const sans = "'Barlow Local', Arial, sans-serif";
const label = "'Barlow Semi Condensed Local', Arial, sans-serif";

const points = [
  {
    title: "Nach Ihren Vorgaben",
    text: "Wir arbeiten mit Ihren Vorlagen, Detailkatalogen und den von Ihnen vorgegebenen Normen. Offene Fragen klären wir, bevor gezeichnet wird – nicht danach.",
  },
  {
    title: "Geprüft vor der Lieferung",
    text: "Jede Lieferung wird intern geprüft und geht als Entwurf zur Freigabe an Sie.",
  },
  {
    title: "EU-Unternehmen, DSGVO",
    text: "Auftragnehmer ist ein Unternehmen mit Sitz in der EU. Ihre Projektdaten werden nach DSGVO verarbeitet, die Abrechnung erfolgt als B2B-Leistung.",
  },
];

export function QualitaetSection() {
  return (
    <section id="qualitaet" className="bg-background">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 xl:px-16">
        <p
          className="text-xs uppercase tracking-[0.16em]"
          style={{
            color: "rgba(65, 65, 62, 0.56)",
            fontFamily: label,
            fontWeight: 700,
          }}
        >
          Qualität & Sicherheit
        </p>

        <h2
          className="mt-5 max-w-3xl text-balance"
          style={{
            fontFamily: serif,
            fontWeight: 400,
            fontSize: "clamp(38px, 4vw, 60px)",
            lineHeight: "0.98",
            letterSpacing: "-0.04em",
            color: "rgba(58, 58, 55, 0.9)",
          }}
        >
          Externe Unterstützung, die sich wie Ihr eigenes Team anfühlt.
        </h2>

        <div className="mt-12 grid gap-10 border-t border-[rgba(32,32,29,0.14)] pt-10 md:grid-cols-3 md:gap-12">
          {points.map((point) => (
            <div key={point.title}>
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(26px, 2.2vw, 32px)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.02em",
                  color: "rgba(58, 58, 55, 0.9)",
                }}
              >
                {point.title}
              </h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: sans,
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "rgba(65, 65, 62, 0.68)",
                }}
              >
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
