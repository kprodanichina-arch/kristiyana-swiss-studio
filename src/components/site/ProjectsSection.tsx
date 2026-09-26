import { useEffect, useState, type TouchEvent } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GallerySection = {
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  images: GalleryImage[];
};

const image = (
  project: number,
  number: number,
  alt: string,
): GalleryImage => ({
  src: `/images/projects/project${project}/${number}.webp`,
  alt,
});

const renderImage = (number: number): GalleryImage => ({
  src: `/images/renders/${number}.webp`,
  alt: `Architekturvisualisierung ${number}`,
});

const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const gallerySections: GallerySection[] = [
  {
    eyebrow: "02 — Ausführungsplanung",
    title: "Technische Planung & Dokumentation",
    description:
      "Ausführungs- und Detailplanung für Architekturprojekte – von der Bearbeitung von Grundrissen, Schnitten und Ansichten bis zur detaillierten Planaufbereitung.",
    price: "Stundensatz ab 55 €",
    images: [
      image(1, 2, "Grundriss – Ausführungsplanung"),
      image(1, 3, "Grundriss – Ausführungsplanung"),
      image(1, 5, "Schnitt – Ausführungsplanung"),
      image(1, 6, "Fensterdetail – Ausführungsplanung"),

      image(2, 2, "Grundriss – Ausführungsplanung"),
      image(2, 3, "Grundriss – Ausführungsplanung"),
      image(2, 4, "Dachaufsicht – Ausführungsplanung"),
      image(2, 6, "Schnitt – Ausführungsplanung"),

      image(3, 2, "Grundriss – Ausführungsplanung"),
      image(3, 3, "Dachaufsicht – Ausführungsplanung"),
      image(3, 4, "Schnitt – Ausführungsplanung"),
      image(3, 5, "Fensterdetail – Ausführungsplanung"),

      image(4, 2, "Schnitt – Ausführungsplanung"),
      image(4, 3, "Grundriss – Ausführungsplanung"),
      image(4, 4, "Dachaufsicht – Ausführungsplanung"),

      image(5, 3, "Grundriss – Ausführungsplanung"),
      image(5, 4, "Dachaufsicht – Ausführungsplanung"),
      image(5, 5, "Schnitt – Ausführungsplanung"),
      image(5, 6, "Fensterdetail – Ausführungsplanung"),

      image(6, 3, "Grundriss – Ausführungsplanung"),
      image(6, 4, "Schnitt – Ausführungsplanung"),
      image(6, 5, "Dachaufsicht – Ausführungsplanung"),
      image(6, 6, "Fensterdetail – Ausführungsplanung"),

      image(7, 2, "Grundriss – Ausführungsplanung"),
      image(7, 3, "Dachaufsicht – Ausführungsplanung"),
      image(7, 4, "Schnitt – Ausführungsplanung"),
      image(7, 5, "Fensterdetail – Ausführungsplanung"),

      image(8, 4, "Grundriss – Ausführungsplanung"),
      image(8, 5, "Grundriss – Ausführungsplanung"),
      image(8, 6, "Schnitt – Ausführungsplanung"),

      image(9, 4, "Grundriss – Ausführungsplanung"),
      image(9, 5, "Grundriss – Ausführungsplanung"),
      image(9, 7, "Schnitt – Ausführungsplanung"),
    ],
  },

  {
    eyebrow: "03 — Fassaden & Details",
    title: "Fassadenplanung & architektonische Details",
    description:
      "Fassaden, Ansichten und ausgewählte architektonische Details aus verschiedenen Projekten.",
    price: "Stundensatz ab 55 €",
    images: [
      image(1, 4, "Fassadenansicht"),
      image(2, 5, "Fassadenansicht"),

      image(3, 1, "Fassadenansicht"),
      image(4, 1, "Fassadenansicht"),

      image(5, 1, "Fassadenansicht"),
      image(5, 2, "Fassadenansicht"),

      image(6, 1, "Fassadenansicht"),
      image(6, 2, "Fassadenansicht"),

      image(7, 1, "Fassadenansicht"),

      image(8, 2, "Fassadenansicht"),
      image(8, 3, "Fassadenansicht"),

      image(9, 3, "Fassadenansicht"),
      image(9, 6, "Fassadenansicht"),
    ],
  },

  {
    eyebrow: "04 — Architekturvisualisierung",
    title: "Fotorealistische Renderings",
    description:
      "Fotorealistische Architekturvisualisierungen für Präsentationen, Projektkommunikation und die überzeugende Darstellung von Architektur.",
    price: "Preis pro Visualisierung: 250–450 €",
    images: Array.from({ length: 47 }, (_, index) =>
      renderImage(index + 1),
    ),
  },
];

function Gallery({
  section,
  images,
}: {
  section: GallerySection;
  images: GalleryImage[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = images.length;

  const goTo = (index: number) => {
    if (total === 0) return;

    if (index < 0) {
      setCurrentIndex(total - 1);
    } else if (index >= total) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const previous = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0]?.clientX ?? touchStart;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        next();
      } else {
        previous();
      }
    }

    setTouchStart(null);
  };

  if (total === 0) {
    return null;
  }

  const getImage = (offset: number) =>
    images[(currentIndex + offset + total) % total];

  const previousImage = getImage(-1);
  const currentImage = getImage(0);
  const nextImage = getImage(1);

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {section.eyebrow}
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            {section.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {section.description}
          </p>

          <p className="mt-5 text-sm font-medium">{section.price}</p>
        </div>

        <div
          className="relative touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_2.2fr_1fr] md:gap-6">
            <button
              type="button"
              onClick={previous}
              aria-label="Vorheriges Bild"
              className="group relative hidden aspect-[4/3] overflow-hidden bg-muted md:block"
            >
              <img
                src={previousImage.src}
                alt={previousImage.alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <span className="absolute inset-y-0 left-0 flex w-16 items-center justify-center bg-black/0 text-white opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                <span className="text-3xl">‹</span>
              </span>
            </button>

            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                loading="eager"
                draggable={false}
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={previous}
                aria-label="Vorheriges Bild"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/35 text-2xl text-white backdrop-blur-sm transition hover:bg-black/55 md:hidden"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Nächstes Bild"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/35 text-2xl text-white backdrop-blur-sm transition hover:bg-black/55 md:hidden"
              >
                ›
              </button>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Nächstes Bild"
              className="group relative hidden aspect-[4/3] overflow-hidden bg-muted md:block"
            >
              <img
                src={nextImage.src}
                alt={nextImage.alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <span className="absolute inset-y-0 right-0 flex w-16 items-center justify-center bg-black/0 text-white opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                <span className="text-3xl">›</span>
              </span>
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={previous}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden"
              aria-label="Vorheriges Bild"
            >
              ← Zurück
            </button>

            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {total}
            </span>

            <button
              type="button"
              onClick={next}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden"
              aria-label="Nächstes Bild"
            >
              Weiter →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [shuffledSections, setShuffledSections] =
    useState<GallerySection[]>(gallerySections);

  useEffect(() => {
    setShuffledSections(
      gallerySections.map((section) => ({
        ...section,
        images: shuffle(section.images),
      })),
    );
  }, []);

  return (
    <section id="projekte">
      {shuffledSections.map((section) => (
        <Gallery
          key={section.eyebrow}
          section={section}
          images={section.images}
        />
      ))}
    </section>
  );
}