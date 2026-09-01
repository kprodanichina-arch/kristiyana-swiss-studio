import { Building2, Workflow, Layers, Receipt } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Erfahrung mit Grossprojekten",
    text: "Durch meine tägliche Arbeit an Wohngebäuden über 2000 m² bin ich bestens vertraut mit komplexen Strukturen, präziser Ausführungsplanung und der professionellen Strukturierung grosser Projektmappen.",
  },
  {
    icon: Workflow,
    title: "Umfassender Workflow aus einer Hand",
    text: "Von der ersten Konzeption bis zum präzisen Detail – ich übernehme nicht nur die CAD-Konstruktion, sondern liefere dank Twinmotion und D5 Render auch High-End-Visualisierungen. Das spart Ihnen Zeit und die Koordination mit externen Rendering-Agenturen.",
  },
  {
    icon: Layers,
    title: "Nahtlose Software-Integration",
    text: "Mein aktueller Fokus liegt auf ArchiCAD, aber dank jahrelanger Erfahrung mit AutoCAD, Revit, Vectorworks und Lumion füge ich mich nahtlos und ohne Einarbeitungszeit in Ihre bestehende CAD-Infrastruktur ein.",
  },
  {
    icon: Receipt,
    title: "Maximale Kosteneffizienz & B2B-Fakturierung",
    text: "Senken Sie Ihre Fixkosten strategisch. Sie zahlen ausschliesslich für effektiv geleistete Projektstunden – ohne Lohnnebenkosten, teure zusätzliche Software-Lizenzen oder Arbeitsplatzgebühren decken zu müssen. Die Abrechnung erfolgt professionell über ordnungsgemässe B2B-Rechnungen.",
  },
];

export function BenefitsSection() {
  return (
    <section id="vorteile" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">06 — Ihre Vorteile</p>
      <h2 className="mt-4 max-w-3xl text-2xl font-medium tracking-tight sm:text-4xl">
        Warum Sie von einer Zusammenarbeit profitieren
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="panel p-7 sm:p-9">
            <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.4} />
            <h3 className="mt-6 text-base font-medium tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
