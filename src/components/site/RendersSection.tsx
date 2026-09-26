import { useEffect, useRef, useState } from "react";
import { useSequentialImages } from "@/lib/useImageProbe";
import { FadeImage } from "@/components/FadeImage";

export function RendersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Scans up to 50 render images.
  const { images, loading } = useSequentialImages(
    (i) => `/images/renders/${i}.webp`,
    50,
    8,
  );

  const ordered = [...images].sort((a, b) => {
    const n = (s: string) => Number(s.match(/(\d+)\.webp$/)?.[1] ?? 0);
    return n(b) - n(a);
  });

  useEffect(() => {
    if (currentIndex >= ordered.length && ordered.length > 0) {
      setCurrentIndex(ordered.length - 1);
    }
  }, [ordered.length, currentIndex]);

  if (!loading && ordered.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((index) =>
      index === 0 ? ordered.length - 1 : index - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((index) =>
      index === ordered.length - 1 ? 0 : index + 1,
    );
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="visualisierungen"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="eyebrow">05 — Visualisierung</p>

      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
        Visualisierungen &amp; Renders
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Ein Einblick in meine laufenden kreativen und fotorealistischen Arbeiten.
      </p>

      <div
        className="relative mt-10 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y" }}
      >
        {loading && ordered.length === 0 ? (
          <div className="aspect-[16/10] w-full animate-pulse bg-muted" />
        ) : (
          <div className="relative">
            <div className="block w-full overflow-hidden">
              <FadeImage
                src={ordered[currentIndex]}
                alt={`Architekturvisualisierung ${currentIndex + 1}`}
                wrapperClassName="aspect-[16/10] w-full bg-muted"
                className="h-full w-full object-cover"
              />
            </div>

            {ordered.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Vorherige Visualisierung"
                  className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-[#e8dfd2] text-[#343434] shadow-md transition-transform duration-200 hover:scale-105 sm:left-6 sm:h-14 sm:w-14"
                >
                  <span className="text-2xl leading-none">←</span>
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Nächste Visualisierung"
                  className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-[#e8dfd2] text-[#343434] shadow-md transition-transform duration-200 hover:scale-105 sm:right-6 sm:h-14 sm:w-14"
                >
                  <span className="text-2xl leading-none">→</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {ordered.length > 0 && (
        <div className="mt-4 flex items-center justify-center">
          <span className="text-xs tracking-[0.12em] text-muted-foreground">
            {currentIndex + 1} / {ordered.length}
          </span>
        </div>
      )}
    </section>
  );
}
