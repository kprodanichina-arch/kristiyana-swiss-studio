import { useEffect, useState } from "react";

type RenderImage = {
  src: string;
  alt: string;
};

const renderImages: RenderImage[] = Array.from(
  { length: 47 },
  (_, index) => ({
    src: `/images/renders/${index + 1}.webp`,
    alt: `Architekturvisualisierung ${index + 1}`,
  }),
);

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function RendersSection() {
  const [images, setImages] = useState<RenderImage[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages(shuffle(renderImages));
  }, []);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const previousIndex =
    (currentIndex - 1 + images.length) % images.length;

  const nextIndex = (currentIndex + 1) % images.length;

  const goPrevious = () => {
    setCurrentIndex(previousIndex);
  };

  const goNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <section
      id="visualisierungen"
      className="scroll-mt-24 border-t border-border py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            04 — Architekturvisualisierung
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Fotorealistische Renderings
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
            Fotorealistische Architekturvisualisierungen für Präsentationen,
            Projektkommunikation und die überzeugende Darstellung von
            Architektur.
          </p>

          <p className="mt-4 text-sm font-medium">
            Preis pro Visualisierung: 250–450 €
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-[0.7fr_1.6fr_0.7fr] items-center gap-4 md:gap-8">
            <button
              type="button"
              onClick={goPrevious}
              className="group relative flex h-full min-h-[180px] items-center justify-center overflow-hidden bg-muted/30"
              aria-label="Vorheriges Rendering"
            >
              <img
                src={images[previousIndex].src}
                alt={images[previousIndex].alt}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <span className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-xl shadow-sm backdrop-blur-sm">
                ←
              </span>
            </button>

            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-muted/20 md:min-h-[560px]">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="h-full w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={goNext}
              className="group relative flex h-full min-h-[180px] items-center justify-center overflow-hidden bg-muted/30"
              aria-label="Nächstes Rendering"
            >
              <img
                src={images[nextIndex].src}
                alt={images[nextIndex].alt}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <span className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-xl shadow-sm backdrop-blur-sm">
                →
              </span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrevious}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden"
            >
              ← Zurück
            </button>

            <span className="mx-auto text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </span>

            <button
              type="button"
              onClick={goNext}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden"
            >
              Weiter →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
