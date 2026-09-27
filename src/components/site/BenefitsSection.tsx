import { Building2, Workflow, Layers, Receipt } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Zusätzliche Kapazität",
    text: "Unterstützung bei erhöhtem Projektaufkommen, zeitlichen Engpässen oder einzelnen Planungsaufgaben – ohne dass dafür dauerhaft zusätzliche Kapazitäten im eigenen Team aufgebaut werden müssen.",
  },
  {
    icon: Workflow,
    title: "Direkte Zusammenarbeit",
    text: "Sie arbeiten direkt mit einer Architektin zusammen. Aufgaben, Rückfragen und Korrekturen können ohne zusätzliche Kommunikationswege abgestimmt werden.",
  },
  {
    icon: Layers,
    title: "Anpassung an Ihren Workflow",
    text: "Ich arbeite mit Archicad und verfüge über praktische Erfahrung mit Revit, AutoCAD, Vectorworks und verschiedenen Visualisierungs-Workflows. Dadurch kann ich mich auf bestehende Projektstrukturen und Arbeitsweisen einstellen.",
  },
  {
    icon: Receipt,
    title: "Flexible Zusammenarbeit",
    text: "Je nach Projekt können einzelne Aufgaben oder auch laufende Unterstützung übernommen werden. Umfang, Aufgaben und zeitlicher Rahmen werden individuell abgestimmt.",
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
        Flexible Unterstützung für Ihr Team
      </h2>

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