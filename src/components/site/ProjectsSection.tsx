import { useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GallerySection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  images: GalleryImage[];
};

const image = (project: number, number: number, alt: string): GalleryImage => ({
  src: `/images/projects/project${project}/${number}.webp`,
  alt,
});

const gallerySections: GallerySection[] = [
  {
    id: "ausfuehrungsplanung",
    eyebrow: "02 — Ausführungsplanung",
    title: "Technische Planung & Dokumentation",
    description:
      "Ausführungs- und Detailplanung für Architekturprojekte – von Grundrissen, Schnitten und Dachplänen bis zur detaillierten Planaufbereitung.",
    price: "Stundensatz ab 55 €",
    images: [
      image(1, 2, "Grundriss – Ausführungsplanung"),
      image(1, 3, "Grundriss – Ausführungsplanung"),
      image(1, 5, "Schnitt – Ausführungsplanung"),
      image(1, 6, "Fensterplanung – Ausführungsplanung"),

      image(2, 2, "Grundriss – Ausführungsplanung"),
      image(2, 3, "Grundriss – Ausführungsplanung"),
      image(2, 4, "Dachplan – Ausführungsplanung"),
      image(2, 6, "Schnitt – Ausführungsplanung"),

      image(3, 2, "Grundriss – Ausführungsplanung"),
      image(3, 3, "Dachplan – Ausführungsplanung"),
      image(3, 4, "Schnitt – Ausführungsplanung"),
      image(3, 5, "Fensterplanung – Ausführungsplanung"),

      image(4, 2, "Schnitt – Ausführungsplanung"),
      image(4, 3, "Grundriss – Ausführungsplanung"),
      image(4, 4, "Dachplan – Ausführungsplanung"),

      image(5, 3, "Grundriss – Ausführungsplanung"),
      image(5, 4, "Dachplan – Ausführungsplanung"),
      image(5, 5, "Schnitt – Ausführungsplanung"),
      image(5, 6, "Fensterplanung – Ausführungsplanung"),

      image(6, 3, "Grundriss – Ausführungsplanung"),
      image(6, 4, "Schnitt – Ausführungsplanung"),
      image(6, 5, "Dachplan – Ausführungsplanung"),
      image(6, 6, "Fensterplanung – Ausführungsplanung"),

      image(7, 2, "Grundriss – Ausführungsplanung"),
      image(7, 3, "Dachplan – Ausführungsplanung"),
      image(7, 4, "Schnitt – Ausführungsplanung"),
      image(7, 5, "Fensterplanung – Ausführungsplanung"),

      image(8, 4, "Grundriss – Ausführungsplanung"),
      image(8, 5, "Grundriss – Ausführungsplanung"),
      image(8, 6, "Schnitt – Ausführungsplanung"),

      image(9, 4, "Grundriss – Ausführungsplanung"),
      image(9, 5, "Grundriss – Ausführungsplanung"),
      image(9, 7, "Schnitt – Ausführungsplanung"),
    ],
  },

  {
    id: "fassaden",
    eyebrow: "03 — Fassaden & Details",
    title: "Fassadenplanung & architektonische Details",
    description:
      "Bearbeitung von Fassaden, Ansichten und ausgewählten architektonischen Details für eine klare und präzise Planungsdarstellung.",
    price: "Stundensatz ab 55 €",
    images: [
      image(1, 4, "Fassadenansicht – Architekturplanung"),
      image(2, 5, "Fassadenansicht – Architekturplanung"),
      image(3, 1, "Fassadenansicht – Architekturplanung"),
      image(4, 1, "Fassadenansicht – Architekturplanung"),
      image(5, 1, "Fassadenansicht – Architekturplanung"),
      image(5, 2, "Fassadenansicht – Architekturplanung"),
      image(6, 1, "Fassadenansicht – Architekturplanung"),
      image(6, 2, "Fassadenansicht – Architekturplanung"),
      image(7, 1, "Fassadenansicht – Architekturplanung"),
      image(8, 2, "Fassadenansicht – Architekturplanung"),
      image(8, 3, "Fassadenansicht – Architekturplanung"),
      image(9, 3, "Fassadenansicht – Architekturplanung"),
      image(9, 6, "Fassadenansicht – Architekturplanung"),
    ],
  },

  {
    id: "visualisierung",
    eyebrow: "04 — Architekturvisualisierung",
    title: "Fotorealistische Visualisierungen",
    description:
      "Architekturvisualisierungen für Präsentationen, Projektkommunikation und die überzeugende Darstellung von Entwurfs- und Planungsvarianten.",
    price: "Stundensatz ab 55 €",
    images: [
      image(1, 1, "Architekturvisualisierung"),
      image(2, 1, "Architekturvisualisierung"),
      image(2, 7, "Architekturvisualisierung"),
      image(8, 1, "Architekturvisualisierung"),
      image(9, 1, "Architekturvisualisierung"),
      image(9, 2, "Architekturvisualisierung"),
    ],
  },
];

function ServiceGallery({ section }: { section: GallerySection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const imageCount = section.images.length;

  const previousIndex = (currentIndex - 1 + imageCount) % imageCount;
  const nextIndex = (currentIndex + 1) % imageCount;

  const currentImage = section.images[currentIndex];
  const previousImage = section.images[previousIndex];
  const nextImage = section.images[nextIndex];

  const goPrevious = () => {
    setCurrentIndex(previousIndex);
  };

  const goNext = () => {
    setCurrentIndex(nextIndex);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX =
      event.changedTouches[0]?.clientX ?? touchStartX.current;

    const distance = touchEndX - touchStartX.current;

    if (Math.abs(distance) > 50) {
      if (distance < 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div className="mt-12">
      <div
        className="flex items-center justify-center gap-3 overflow-hidden lg:gap-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Vorheriges Bild"
          className="group relative hidden w-[18%] max-w-[190px] shrink-0 overflow-hidden lg:block"
        >
          <div className="flex h-[150px] items-center justify-center lg:h-[190px]">
            <img
              src={previousImage.src}
              alt={previousImage.alt}
              className="max-h-full max-w-full object-contain opacity-55 transition-opacity group-hover:opacity-90"
              draggable={false}
              loading="lazy"
            />
          </div>

          <span className="absolute inset-y-0 right-2 flex items-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-lg shadow-sm">
              ‹
            </span>
          </span>
        </button>

        <div className="flex w-full max-w-[720px] flex-1 items-center justify-center">
          <div className="flex min-h-[280px] w-full items-center justify-center sm:min-h-[360px] lg:min-h-[500px]">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[280px] max-w-full select-none object-contain sm:max-h-[360px] lg:max-h-[500px]"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Nächstes Bild"
          className="group relative hidden w-[18%] max-w-[190px] shrink-0 overflow-hidden lg:block"
        >
          <div className="flex h-[150px] items-center justify-center lg:h-[190px]">
            <img
              src={nextImage.src}
              alt={nextImage.alt}
              className="max-h-full max-w-full object-contain opacity-55 transition-opacity group-hover:opacity-90"
              draggable={false}
              loading="lazy"
            />
          </div>

          <span className="absolute inset-y-0 left-2 flex items-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-lg shadow-sm">
              ›
            </span>
          </span>
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Vorheriges Bild"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg transition-colors hover:bg-muted"
        >
          ‹
        </button>

        <span className="min-w-[70px] text-center text-sm text-muted-foreground">
          {currentIndex + 1} / {imageCount}
        </span>

        <button
          type="button"
          onClick={goNext}
          aria-label="Nächstes Bild"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg transition-colors hover:bg-muted"
        >
          ›
        </button>
      </div>

      <div className="mt-5 hidden text-center text-sm text-muted-foreground lg:block">
        {currentIndex + 1} / {imageCount}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projekte" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Leistungen anhand ausgewählter Arbeiten
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Was ich für Ihr Büro übernehmen kann
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Die folgenden Arbeiten zeigen ausgewählte Beispiele meiner
            technischen Planungs-, Fassaden- und Visualisierungsleistungen.
          </p>
        </div>

        <div className="mt-24 space-y-28">
          {gallerySections.map((section) => (
            <article key={section.id}>
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {section.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                  {section.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                  {section.description}
                </p>

                <p className="mt-5 text-sm font-medium">{section.price}</p>
              </div>

              <ServiceGallery section={section} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
