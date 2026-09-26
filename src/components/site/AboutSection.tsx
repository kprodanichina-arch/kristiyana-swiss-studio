import { useState } from "react";
import { FileText } from "lucide-react";
import { CV_PATH } from "./data";

function Portrait() {
  const [state, setState] = useState<"loading" | "ok" | "missing">("loading");

  return (
    <div className="relative aspect-3/4 w-full overflow-hidden bg-muted shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      {state !== "ok" && (
        <div className="absolute inset-0 animate-pulse bg-muted" />
      )}

      {state !== "missing" && (
        <img
          src="/images/kristiyana.webp"
          alt="Porträt von Kristiyana Prodanichina"
          loading="lazy"
          draggable={false}
          onLoad={() => setState("ok")}
          onError={() => setState("missing")}
          onContextMenu={(e) => e.preventDefault()}
          className={`h-full w-full select-none object-cover transition-opacity duration-500 ${
            state === "ok" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

const paragraphs = [
  "Ich bin Kristiyana Prodanichina, Architektin und Gründerin von ArchiK. Ich unterstütze Architekturbüros als externe Ansprechpartnerin bei der Bearbeitung von Planungs-, BIM- und Visualisierungsaufgaben – direkt, flexibel und remote.",

  "Mein Schwerpunkt liegt auf der digitalen Planung und Bearbeitung von Architekturprojekten. Dabei arbeite ich strukturiert, projektbezogen und mit einem klaren Fokus auf die Anforderungen und bestehenden Arbeitsabläufe des jeweiligen Büros.",

  "Aktuell arbeite ich vor allem mit Archicad, Twinmotion und D5 Render. Durch meine bisherige Erfahrung mit Revit, AutoCAD und weiteren Planungs- und Visualisierungsprogrammen kann ich mich zudem schnell in bestehende Software-Workflows und Projektstrukturen einarbeiten.",
];

export function AboutSection() {
  return (
    <section
      id="ueber-mich"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="eyebrow">02 — Profil</p>

      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
        Über mich
      </h2>

      <div className="mt-10 panel p-7 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14">
          <Portrait />

          <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
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
