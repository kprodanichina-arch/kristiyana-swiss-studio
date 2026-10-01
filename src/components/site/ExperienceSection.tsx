const items = [
  {
    period: "Seit 10/2025",
    title: "Architektin | Alvi BG",
    text: "Projektierung grosser Wohngebäude mit über 2000 m². Eigenverantwortliche Bearbeitung verschiedener Projektphasen – von der Konzeptphase über die Ausführungs- und Detailplanung bis zur Erstellung von Projektunterlagen und fotorealistischen Visualisierungen.",
  },
  {
    period: "Seit 02/2026",
    title: "Sekretärin der Architektenkammer in Bulgarien",
    text: "Koordination und organisatorische Unterstützung von Aktivitäten der nationalen Architektenkammer (KAB).",
  },
  {
    period: "08/2022 – 12/2023",
    title: "Projektleiterin Planung, Administration & Bauwesen | I and V build",
    text: "Planungs- und Koordinationsaufgaben sowie organisatorische Begleitung von Bauprojekten und Abstimmung verschiedener Projektanforderungen.",
  },
  {
    period: "06/2024",
    title: "Master-Abschluss in Architektur",
    text: "Universität für Architektur, Bauingenieurwesen und Geodäsie (UACEG), Sofia.",
  },
  {
    period: "07/2021 – 08/2022",
    title: "Praktikantin Architektur | Berkein Architects",
    text: "Mitarbeit an architektonischen Planungsaufgaben und Unterstützung bei der Bearbeitung von Projekten.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="berufserfahrung"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p
        className="eyebrow"
        style={{
          fontFamily:
            "'Barlow Semi Condensed Local', Arial, sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: "rgba(65, 65, 62, 0.52)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        06 — Werdegang
      </p>

      <h2
        className="mt-4 max-w-3xl"
        style={{
          fontFamily:
            "'Instrument Serif Local', Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(42px, 4.2vw, 64px)",
          lineHeight: "0.96",
          letterSpacing: "-0.035em",
          color: "rgba(58, 58, 55, 0.90)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        Berufserfahrung
      </h2>

      <p
        className="mt-6 max-w-2xl"
        style={{
          fontFamily: "'Barlow Local', Arial, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "1.65",
          color: "rgba(65, 65, 62, 0.68)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        Mehrjährige Erfahrung in Architekturplanung, technischer
        Projektbearbeitung und der Entwicklung von
        Planungsunterlagen für unterschiedliche Projektphasen.
      </p>

      <ol className="mt-10 space-y-4">
        {items.map((item) => (
          <li
            key={`${item.period}-${item.title}`}
            className="panel p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:gap-10">
              <span
                className="pt-1"
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
                {item.period}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily:
                      "'Instrument Serif Local', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(25px, 2vw, 32px)",
                    lineHeight: "1.05",
                    letterSpacing: "-0.02em",
                    color: "rgba(58, 58, 55, 0.90)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 max-w-3xl"
                  style={{
                    fontFamily:
                      "'Barlow Local', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "rgba(65, 65, 62, 0.68)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 border-t border-black/10 pt-6">
        <p
          style={{
            fontFamily:
              "'Barlow Semi Condensed Local', Arial, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(65, 65, 62, 0.48)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Schwerpunkt
        </p>

        <p
          className="mt-3 max-w-3xl"
          style={{
            fontFamily: "'Barlow Local', Arial, sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "1.6",
            color: "rgba(65, 65, 62, 0.68)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          BIM · Archicad · IFC · technische Planung ·
          Bestandsmodellierung · Punktwolken ·
          Architekturvisualisierung
        </p>
      </div>
    </section>
  );
}