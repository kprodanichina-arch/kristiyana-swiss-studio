import { FileText } from "lucide-react";
import { CV_PATH } from "./data";

const paragraphs = [
  "Mein Name ist Kristiyana Prodanichina. Bei mir finden Sie keine Grossagentur mit komplizierten Hierarchien und langen Kommunikationswegen – ich bin Ihre direkte Ansprechpartnerin. Ich zeichne mich durch eine hohe Motivation und den klaren Wunsch nach kontinuierlicher Weiterentwicklung aus. Gerne präsentiere ich Ihnen in diesem Portfolio meinen beruflichen Werdegang und meine bisherigen Erfahrungen.",
  "Mein primäres Ziel ist es, eine partnerschaftliche und erfolgreiche Zusammenarbeit mit meinen Kunden zu erreichen – unabhängig davon, wie viele Korrekturschleifen bis zum perfekten Ergebnis nötig sind. Gleichzeitig bin ich äusserst flexibel und offen für verschiedene Projektarten, ganz abgestimmt auf Ihre individuellen Bedürfnisse.",
  "Aktuell fokussiere ich mich in meiner täglichen Arbeit auf ArchiCAD, Twinmotion und D5 Render. Da ich im Laufe der Jahre jedoch auch intensiv mit AutoCAD, Revit, Vectorworks und Lumion gearbeitet habe, kann ich mich schnell und flexibel an Ihre bestehenden Software-Workflows anpassen. Nachfolgend finden Sie eine Auswahl meiner aktuellen Projekte.",
];

export function AboutSection() {
  return (
    <section id="ueber-mich" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">02 — Profil</p>
      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">Über mich</h2>

      <div className="mt-10 panel p-7 sm:p-12">
        <div className="max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <a
          href={CV_PATH}
          target="_blank"
          rel="noreferrer"
          className="mt-10 flex w-full items-center justify-center gap-3 border border-foreground px-6 py-5 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <FileText className="h-4 w-4" />
          Lebenslauf als PDF ansehen
        </a>
      </div>
    </section>
  );
}
