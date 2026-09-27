import {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GallerySection = {
  eyebrow: string;
  title: string;
  description: string;
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
      "Ausführungs- und Detailplanung für Architekturbüros – von Grundrissen, Schnitten und Ansichten bis zur detaillierten Planaufbereitung und technischen Dokumentation.",
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
      "Bearbeitung von Fassaden, Ansichten und architektonischen Details für eine klare und konsistente Projektdokumentation.",
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedImage, setDisplayedImage] = useState(images[0]);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = images.length;

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const goTo = (index: number) => {
    if (total === 0) return;

    let nextIndex = index;

    if (index < 0) {
      nextIndex = total - 1;
    } else if (index >= total) {
      nextIndex = 0;
    }

    if (nextIndex === currentIndex) return;

    const nextImage = images[nextIndex];

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    setIsImageVisible(false);

    transitionTimeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(nextIndex);
      setDisplayedImage(nextImage);

      requestAnimationFrame(() => {
        setIsImageVisible(true);
      });
    }, 160);
  };

  const previous = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;

    const touchEnd =
      event.changedTouches[0]?.clientX ?? touchStart;

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
    <section
      ref={sectionRef}
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className={`mb-10 max-w-3xl transition-all duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
            isSectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p
            className="mb-3"
            style={{
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(65, 65, 62, 0.55)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {section.eyebrow}
          </p>

          <h2
            className="text-balance"
            style={{
              fontFamily:
                "'Instrument Serif Local', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(44px, 5vw, 72px)",
              lineHeight: "0.94",
              letterSpacing: "-0.035em",
              color: "rgba(58, 58, 55, 0.90)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {section.title}
          </h2>

          <p
            className="mt-5 max-w-2xl"
            style={{
              fontFamily: "'Barlow Local', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "1.6",
              color: "rgba(65, 65, 62, 0.68)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {section.description}
          </p>
        </div>

        <div
          className={`relative touch-pan-y transition-all duration-1000 delay-150 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
            isSectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
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
                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
              />

              <span className="absolute inset-y-0 left-0 flex w-16 items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                <span className="text-3xl transition-transform duration-300 group-hover:-translate-x-1">
                  ‹
                </span>
              </span>
            </button>

            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                key={displayedImage.src}
                src={displayedImage.src}
                alt={displayedImage.alt}
                loading="eager"
                draggable={false}
                className={`h-full w-full object-contain transition-all duration-500 ease-out motion-reduce:transform-none ${
                  isImageVisible
                    ? "scale-100 opacity-100"
                    : "scale-[1.015] opacity-0"
                }`}
              />

              <button
                type="button"
                onClick={previous}
                aria-label="Vorheriges Bild"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/35 text-2xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/55 hover:-translate-x-0.5 md:hidden"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Nächstes Bild"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/35 text-2xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/55 hover:translate-x-0.5 md:hidden"
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
                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
              />

              <span className="absolute inset-y-0 right-0 flex w-16 items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-1">
                  ›
                </span>
              </span>
            </button>
          </div>

          <div className="mt-5 flex justify-center">
            <span
              className="text-sm text-muted-foreground"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
              }}
            >
              {currentIndex + 1} / {total}
            </span>
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

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
            <p
              className="mb-3"
              style={{
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(65, 65, 62, 0.55)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Konditionen
            </p>

            <h2
              className="text-balance"
              style={{
                fontFamily:
                  "'Instrument Serif Local', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(38px, 4vw, 58px)",
                lineHeight: "0.96",
                letterSpacing: "-0.035em",
                color: "rgba(58, 58, 55, 0.90)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Transparente Konditionen.
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <p
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(65, 65, 62, 0.55)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Planungs- & BIM-Leistungen
                </p>

                <p
                  className="mt-2"
                  style={{
                    fontFamily:
                      "'Instrument Serif Local', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(30px, 3vw, 42px)",
                    lineHeight: "1",
                    letterSpacing: "-0.025em",
                    color: "rgba(58, 58, 55, 0.90)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  ab 55 €/Std.
                </p>

                <p
                  className="mt-4 max-w-xl"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "rgba(65, 65, 62, 0.68)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Ausführungsplanung, Detailplanung, Fassadenplanung,
                  Archicad sowie BIM- und digitale Planungsleistungen
                  werden je nach Projektumfang nach Aufwand oder als
                  Pauschale angeboten.
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(65, 65, 62, 0.55)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Architekturvisualisierung
                </p>

                <p
                  className="mt-2"
                  style={{
                    fontFamily:
                      "'Instrument Serif Local', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(30px, 3vw, 42px)",
                    lineHeight: "1",
                    letterSpacing: "-0.025em",
                    color: "rgba(58, 58, 55, 0.90)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  ab 250 € pro Visualisierung
                </p>

                <p
                  className="mt-4 max-w-xl"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "rgba(65, 65, 62, 0.68)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Der konkrete Preis richtet sich nach Projektumfang,
                  vorhandenen 3D-Daten, gewünschter Perspektive,
                  Detailgrad und Korrekturschleifen.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p
                className="max-w-3xl"
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "rgba(65, 65, 62, 0.68)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Für klar definierte Leistungen erstelle ich gerne ein
                transparentes Angebot auf Basis Ihrer
                Projektunterlagen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}