import { useEffect, useState } from "react";

type Color = {
  r: number;
  g: number;
  b: number;
};

const fallbackColors: Color[] = [
  { r: 58, g: 72, b: 76 },
  { r: 92, g: 67, b: 58 },
  { r: 67, g: 82, b: 64 },
  { r: 82, g: 69, b: 82 },
];

const services = [
  "AUSFÜHRUNGS- & DETAILPLANUNG",
  "FASSADEN & DETAILS",
  "BIM & DIGITALE PLANUNG",
  "ARCHITEKTURVISUALISIERUNG",
];

function colorDistance(a: Color, b: Color) {
  return Math.sqrt(
    Math.pow(a.r - b.r, 2) +
      Math.pow(a.g - b.g, 2) +
      Math.pow(a.b - b.b, 2),
  );
}

function rgbToCss(color: Color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function darken(color: Color, amount = 0.55): Color {
  return {
    r: Math.round(color.r * amount),
    g: Math.round(color.g * amount),
    b: Math.round(color.b * amount),
  };
}

function extractColors(image: HTMLImageElement): Color[] {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    return fallbackColors;
  }

  const size = 40;

  canvas.width = size;
  canvas.height = size;

  try {
    context.drawImage(image, 0, 0, size, size);
  } catch {
    return fallbackColors;
  }

  const pixels = context.getImageData(0, 0, size, size).data;
  const candidates: Color[] = [];

  for (let i = 0; i < pixels.length; i += 16) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const brightness = (r + g + b) / 3;

    if (brightness < 55 || brightness > 225) {
      continue;
    }

    if (saturation < 0.12) {
      continue;
    }

    candidates.push({ r, g, b });
  }

  if (candidates.length === 0) {
    return fallbackColors;
  }

  const selected: Color[] = [];

  const first = [...candidates].sort((a, b) => {
    const saturationA =
      (Math.max(a.r, a.g, a.b) - Math.min(a.r, a.g, a.b)) /
      Math.max(a.r, a.g, a.b);

    const saturationB =
      (Math.max(b.r, b.g, b.b) - Math.min(b.r, b.g, b.b)) /
      Math.max(b.r, b.g, b.b);

    return saturationB - saturationA;
  })[0];

  selected.push(darken(first));

  while (selected.length < 4) {
    let bestCandidate = candidates[0];
    let bestScore = -Infinity;

    for (const candidate of candidates) {
      const distance = Math.min(
        ...selected.map((color) => colorDistance(candidate, color)),
      );

      const brightness =
        (candidate.r + candidate.g + candidate.b) / 3;

      const saturation =
        (Math.max(candidate.r, candidate.g, candidate.b) -
          Math.min(candidate.r, candidate.g, candidate.b)) /
        Math.max(candidate.r, candidate.g, candidate.b);

      const score =
        distance * 0.75 +
        saturation * 90 -
        Math.abs(brightness - 120) * 0.15;

      if (score > bestScore) {
        bestScore = score;
        bestCandidate = candidate;
      }
    }

    selected.push(darken(bestCandidate));
  }

  return selected;
}

export function HeroSection() {
  const [colors, setColors] = useState<Color[]>(fallbackColors);

  useEffect(() => {
    const image = new Image();

    image.src = "/images/renders/44.webp";

    image.onload = () => {
      const extracted = extractColors(image);
      setColors(extracted);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1800px] flex-col lg:flex-row">
        {/* LEFT — TYPOGRAPHY */}

        <div className="relative z-10 flex w-full flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:w-[36%] lg:px-12 lg:py-14 xl:px-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              ArchiK
            </p>

            <p className="mt-3 max-w-[220px] text-[10px] uppercase leading-5 tracking-[0.18em] text-muted-foreground">
              Architektur · BIM · Visualisierung
            </p>
          </div>

          <div className="my-16 lg:my-0">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Externe Architekturproduktion
            </p>

            <h1
              className="max-w-[680px] text-[3.5rem] font-medium leading-[0.88] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[4.8rem] xl:text-[5.8rem]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Externe
              <br />
              Architektur-
              <br />
              und BIM-
              <br />
              Unterstützung
            </h1>

            <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              Für Architekturbüros in Deutschland, Österreich und der
              Schweiz – projektbezogen oder als zusätzliche Kapazität in
              laufenden Projekten.
            </p>

            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-75"
            >
              Projekt anfragen
            </a>
          </div>

          <div className="hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Deutschland · Österreich · Schweiz
            </p>
          </div>
        </div>

        {/* RIGHT — IMAGE + FLOATING SERVICE CARDS */}

        <div className="relative min-h-[72vh] w-full overflow-hidden bg-muted lg:min-h-screen lg:w-[64%]">
          <img
            src="/images/renders/44.webp"
            alt="Architekturvisualisierung von ArchiK"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 bg-black/5" />

          {/* Floating service cards */}

          <div className="absolute inset-0">
            {services.map((service, index) => {
              const color = colors[index % colors.length];

              const positions = [
                "left-[7%] top-[13%]",
                "right-[7%] top-[31%]",
                "left-[10%] bottom-[19%]",
                "right-[9%] bottom-[8%]",
              ];

              const sizes = [
                "w-[230px] sm:w-[270px]",
                "w-[210px] sm:w-[250px]",
                "w-[205px] sm:w-[245px]",
                "w-[245px] sm:w-[290px]",
              ];

              return (
                <div
                  key={service}
                  className={`absolute ${positions[index]} ${sizes[index]}`}
                  style={{
                    backgroundColor: rgbToCss(color),
                    boxShadow:
                      "0 10px 28px rgba(255,255,255,0.20), 0 18px 40px rgba(0,0,0,0.18)",
                  }}
                >
                  <div className="px-5 py-4 sm:px-6 sm:py-5">
                    <p
                      className="text-[11px] font-medium leading-[1.35] tracking-[0.13em] text-white sm:text-xs"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {service}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Small visual marker */}

          <div className="absolute bottom-6 left-6 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 sm:block">
            ArchiK · 2026
          </div>
        </div>
      </div>
    </section>
  );
}
