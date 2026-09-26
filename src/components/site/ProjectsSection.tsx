import { useEffect, useMemo, useRef, useState } from "react";

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

const gallerySections: GallerySection[] = [
  {
    id: "ausfuehrungsplanung",
    eyebrow: "02 — Ausführungsplanung",
    title: "Technische Planung & Dokumentation",
    description:
      "Ausführungs- und Detailplanung für Architekturprojekte – von Grundrissen und Schnitten bis zu Dachplänen und Fensterdetails.",
    price: "Stundensatz ab 55 €",
    images: [
      {
        src: "/images/projects/project01/2.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project01/3.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project01/5.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project01/6.webp",
        alt: "Ausführungsplanung – Fensterspezifikation",
      },
      {
        src: "/images/projects/project02/2.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project02/3.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project02/4.webp",
        alt: "Ausführungsplanung – Dachplan",
      },
      {
        src: "/images/projects/project02/6.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project03/2.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project03/3.webp",
        alt: "Ausführungsplanung – Dachplan",
      },
      {
        src: "/images/projects/project03/4.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project03/5.webp",
        alt: "Ausführungsplanung – Fensterdetails",
      },
      {
        src: "/images/projects/project04/2.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project04/3.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project04/4.webp",
        alt: "Ausführungsplanung – Dachplan",
      },
      {
        src: "/images/projects/project05/3.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project05/4.webp",
        alt: "Ausführungsplanung – Dachplan",
      },
      {
        src: "/images/projects/project05/5.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project05/6.webp",
        alt: "Ausführungsplanung – Fensterdetails",
      },
      {
        src: "/images/projects/project06/3.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project06/4.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project06/5.webp",
        alt: "Ausführungsplanung – Dachplan",
      },
      {
        src: "/images/projects/project06/6.webp",
        alt: "Ausführungsplanung – Fensterdetails",
      },
      {
        src: "/images/projects/project07/2.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project07/3.webp",
        alt: "Ausführungsplanung – Dachplan",
      },
      {
        src: "/images/projects/project07/4.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project07/5.webp",
        alt: "Ausführungsplanung – Fensterdetails",
      },
      {
        src: "/images/projects/project08/4.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project08/5.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project08/6.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
      {
        src: "/images/projects/project09/4.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project09/5.webp",
        alt: "Ausführungsplanung – Grundriss",
      },
      {
        src: "/images/projects/project09/7.webp",
        alt: "Ausführungsplanung – Schnitt",
      },
    ],
  },
  {
    id: "fassaden",
    eyebrow: "03 — Fassaden & Details",
    title: "Fassadenplanung & architektonische Details",
    description:
      "Fassaden und Ansichten aus verschiedenen Architekturprojekten – als Einblick in meine technische und gestalterische Arbeit.",
    price: "Stundensatz ab 55 €",
    images: [
      {
        src: "/images/projects/project01/4.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project02/5.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project03/1.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project04/1.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project05/1.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project05/2.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project06/1.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project06/2.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project07/1.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project08/2.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project08/3.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project09/3.webp",
        alt: "Architektur – Fassadenplanung",
      },
      {
        src: "/images/projects/project09/6.webp",
        alt: "Architektur – Fassadenplanung",
      },
    ],
  },
  {
    id: "visualisierung",
    eyebrow: "04 — Architekturvisualisierung",
    title: "Fotorealistische Visualisierungen",
    description:
      "Architekturvisualisierungen für Präsentationen, Projektkommunikation und die Darstellung von Entwurfs- und Planungsvarianten.",
    price: "Stundensatz ab 55 €",
    images: [
      {
        src: "/images/projects/project01/1.webp",
        alt: "Architekturvisualisierung",
      },
      {
        src: "/images/projects/project02/1.webp",
        alt: "Architekturvisualisierung",
      },
      {
        src: "/images/projects/project02/7.webp",
        alt: "Architekturvisualisierung",
      },
      {
        src: "/images/projects/project08/1.webp",
        alt: "Architekturvisualisierung",
      },
      {
        src: "/images/projects/project09/1.webp",
        alt: "Architekturvisualisierung",
      },
      {
        src: "/images/projects/project09/2.webp",
        alt: "Architekturvisualisierung",
      },
    ],
  },
];

function ServiceGallery({ section }: { section: GallerySection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = section.images.length;

  const previousIndex = useMemo(
    () => (currentIndex - 1 + total) % total,
    [currentIndex, total],
  );

  const nextIndex = useMemo(
    () => (currentIndex + 1) % total,
    [currentIndex, total],
  );

  const goPrevious = () => {
    setCurrentIndex((index) => (index - 1 + total) % total);
  };

  const goNext = () => {
    setCurrentIndex((index) => (index + 1) % total);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 45) {
      if (distance > 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [section.id]);

  if (total === 0) return null;

  const sideButtonClass =
    "absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-2xl font-light text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/70 sm:h-11 sm:w-11";

  return (
    <div className="mt-10">
      <div
        className="relative mx-auto w-full max-w-6xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y" }}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <div className="relative flex w-[18%] max-w-[190px] shrink-0 items-center justify-center overflow-hidden opacity-65 transition-all duration-500 sm:w-[22%]">
            <img
              src={section.images[previousIndex].src}
              alt={section.images[previousIndex].alt}
              draggable={false}
              className="block h-auto max-h-[150px] w-full object-contain select-none sm:max-h-[190px]"
            />

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Vorherige Darstellung"
              className={`${sideButtonClass} left-1/2 -translate-x-1/2`}
            >
              ‹
            </button>
          </div>

          <div className="relative flex w-[56%] max-w-[650px] shrink-0 items-center justify-center overflow-hidden">
            <img
              src={section.images[currentIndex].src}
              alt={section.images[currentIndex].alt}
              draggable={false}
              className="block h-auto max-h-[430px] w-full object-contain select-none sm:max-h-[500px]"
            />
          </div>

          <div className="relative flex w-[18%] max-w-[190px] shrink-0 items-center justify-center overflow-hidden opacity-65 transition-all duration-500 sm:w-[22%]">
            <img
              src={section.images[nextIndex].src}
              alt={section.images[nextIndex].alt}
              draggable={false}
              className="block h-auto max-h-[150px] w-full object-contain select-none sm:max-h-[190px]"
            />

            <button
              type="button"
              onClick={goNext}
              aria-label="Nächste Darstellung"
              className={`${sideButtonClass} left-1/2 -translate-x-1/2`}
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <span className="text-xs tracking-[0.14em] text-muted-foreground">
            {currentIndex + 1} / {total}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projekte"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24"
    >
      {gallerySections.map((section) => (
        <article
          key={section.id}
          className="border-b border-border py-16 first:pt-0 last:border-b-0 sm:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{section.eyebrow}</p>

            <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
              {section.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {section.description}
            </p>

            <p className="mt-5 text-sm font-medium tracking-wide">
              {section.price}
            </p>
          </div>

          <ServiceGallery section={section} />
        </article>
      ))}
    </section>
  );
}
