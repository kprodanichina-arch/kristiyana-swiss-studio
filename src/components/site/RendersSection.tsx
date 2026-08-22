import { SmartImage } from "@/components/SmartImage";
import { renderImages } from "./data";

export function RendersSection() {
  return (
    <section
      id="visualisierungen"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="eyebrow">05 — Galerie</p>
      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
        Visualisierungen &amp; Renders
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Ein Einblick in meine laufenden kreativen und fotorealistischen Arbeiten.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {renderImages.map((src, i) => (
          <figure key={src} className="panel overflow-hidden p-2">
            <SmartImage
              src={src}
              alt={`Visualisierung ${i + 1}`}
              label={`Render ${i + 1}`}
              className="aspect-4/3 w-full bg-muted object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
