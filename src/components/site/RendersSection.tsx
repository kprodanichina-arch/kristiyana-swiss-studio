import { useSequentialImages } from "@/lib/useImageProbe";

export function RendersSection() {
  const { images, loading } = useSequentialImages((i) => `/images/renders/${i}.webp`);

  if (!loading && images.length === 0) return null;

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

      {loading ? (
        <p className="mt-8 text-sm text-muted-foreground">Galerie wird geladen …</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <figure key={src} className="panel overflow-hidden p-2">
              <img
                src={src}
                alt={`Visualisierung ${i + 1}`}
                loading="lazy"
                draggable={false}
                className="aspect-4/3 w-full select-none bg-muted object-cover"
              />
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
