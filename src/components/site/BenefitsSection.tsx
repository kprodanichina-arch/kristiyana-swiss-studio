import {
  Building2,
  Workflow,
  ScanLine,
  Layers,
} from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Zusätzliche Kapazität",
    text: "Entlastung bei hohem Projektaufkommen, engen Fristen oder fehlenden internen Kapazitäten – ohne dauerhaft zusätzliches Personal aufbauen zu müssen.",
  },
  {
    icon: Workflow,
    title: "Direkt in Ihren Workflow",
    text: "Ich arbeite projektbezogen und passe mich an Ihre bestehenden Strukturen, Vorlagen und Arbeitsweisen an. Aufgaben, Rückfragen und Korrekturen stimmen wir direkt ab.",
  },
  {
    icon: ScanLine,
    title: "Von der Punktwolke zum BIM-Modell",
    text: "Vorhandene Punktwolken können aufbereitet und für die Bestandsmodellierung in Archicad genutzt werden. Daraus entstehen strukturierte digitale Bestandsmodelle und IFC-fähige Daten.",
  },
  {
    icon: Layers,
    title: "Flexible Unterstützung",
    text: "Ob einzelne Arbeitspakete oder laufende Projektunterstützung: Umfang, Aufgaben und zeitlicher Rahmen werden individuell auf Ihr Projekt abgestimmt.",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="vorteile"
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
        07 — Ihre Vorteile
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
        Mehr Kapazität.
        <br />
        Ohne zusätzliches Team.
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
        Flexible Unterstützung für Architektur- und Planungsbüros –
        von einzelnen Arbeitspaketen bis zur laufenden Projektunterstützung.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="panel p-7 sm:p-9"
          >
            <Icon
              className="h-5 w-5"
              style={{
                color: "rgba(65, 65, 62, 0.52)",
              }}
              strokeWidth={1.4}
            />

            <h3
              className="mt-6"
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
              {title}
            </h3>

            <p
              className="mt-3"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "1.6",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}