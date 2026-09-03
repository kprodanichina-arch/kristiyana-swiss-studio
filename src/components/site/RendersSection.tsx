import { useState } from "react";
import { useSequentialImages } from "@/lib/useImageProbe";
import { FadeImage } from "@/components/FadeImage";
import { Lightbox } from "@/components/Lightbox";

export function RendersSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Scans up to 150 slots; newest (highest number) first.
  const { images, loading } = useSequentialImages(
    (i) => `/images/renders/${i}.webp`,
    150,
    8,
  );

  const ordered = [...images].sort((a, b) => {
    const n = (s: string) => Number(s.match(/(\d+)\.webp$/)?.[1] ?? 0);
    return n(b) - n(a);
  });

  if (!loading && ordered.length === 0) return null;

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
        {loading && ordered.length === 0
          ? [0, 1, 2, 3, 4, 5].map((i) => (
              <figure key={i} className="panel overflow-hidden p-2">
                <div className="aspect-4/3 w-full animate-pulse bg-muted" />
              </figure>
            ))
          : ordered.map((src, i) => (
              <figure key={src} className="panel overflow-hidden p-2">
                <FadeImage
                  src={src}
                  alt={`Visualisierung ${ordered.length - i}`}
                  wrapperClassName="aspect-4/3 w-full bg-muted"
                  className="h-full w-full object-cover"
                />
              </figure>
            ))}
      </div>
    </section>
  );
}
