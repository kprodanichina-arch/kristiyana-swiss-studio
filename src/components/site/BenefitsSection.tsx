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
      <p className="eyebrow">08 — Kontakt</p>

      <h2 className="mt-4 max-w-3xl text-2xl font-medium tracking-tight sm:text-4xl">
        Flexible externe Unterstützung für Ihr Team
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="panel p-7 sm:p-9">
            <Icon
              className="h-5 w-5 text-muted-foreground"
              strokeWidth={1.4}
            />

            <h3 className="mt-6 text-base font-medium tracking-tight">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
