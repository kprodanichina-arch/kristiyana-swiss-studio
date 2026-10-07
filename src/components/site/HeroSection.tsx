type Service = {
  title: string;
  description: string;
  background: string;
};

const services: Service[] = [
  {
    title: "BIM & digitale Planung",
    description: "Archicad · IFC · Mengenermittlung",
    background: "rgba(221, 207, 183, 0.68)",
  },
  {
    title: "Scan-to-BIM",
    description: "Punktwolken · Bestandsmodellierung · IFC",
    background: "rgba(246, 243, 235, 0.72)",
  },
  {
    title: "Technische Planung",
    description: "Grundrisse · Schnitte · Fassaden · Details",
    background: "rgba(201, 214, 195, 0.70)",
  },
  {
    title: "Architekturvisualisierung",
    description: "Fotorealistische Außenvisualisierungen",
    background: "rgba(215, 220, 193, 0.72)",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1800px] flex-col lg:min-h-[calc(100vh-4rem)] lg:flex-row">
        <div className="relative z-10 flex w-full flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:w-[36%] lg:px-12 lg:py-14 xl:px-16">
          <div>
            <p
              className="text-xs uppercase tracking-[0.16em]"
              style={{
                color: "rgba(65, 65, 62, 0.70)",
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontWeight: 700,
                WebkitFontSmoothing: "antialiased",
                textShadow: "0 1px 5px rgba(0, 0, 0, 0.08)",
              }}
            >
              ArchiKa
            </p>

            <p
              className="mt-3 max-w-[280px] text-[11px] uppercase leading-5 tracking-[0.12em]"
              style={{
                color: "rgba(65, 65, 62, 0.62)",
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontWeight: 700,
                WebkitFontSmoothing: "antialiased",
                textShadow: "0 1px 5px rgba(0, 0, 0, 0.07)",
              }}
            >
              Architektur · BIM · Scan-to-BIM
            </p>
          </div>

          <div className="my-12 lg:my-0">
            <div
              className="relative inline-block"
              style={{
                isolation: "isolate",
              }}
            >
              <div
                className="absolute -inset-x-5 -inset-y-4 -z-10 rounded-[40%]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.42) 45%, rgba(255,255,255,0) 78%)",
                  filter: "blur(12px)",
                }}
                aria-hidden="true"
              />

              <h1
                className="text-balance text-[52px] leading-[0.92] tracking-[-0.045em] sm:text-[58px] lg:text-[clamp(64px,7vw,110px)]"
                style={{
                  color: "rgba(58, 58, 55, 0.90)",
                  fontFamily:
                    "'Instrument Serif Local', Georgia, serif",
                  fontWeight: 400,
                  maxWidth: "14ch",
                  WebkitFontSmoothing: "antialiased",
                  textShadow:
                    "0 1px 3px rgba(255, 255, 255, 0.85)",
                }}
              >
                BIM, Planung und
                <br />
                Bestandsmodelle
                <br />
                für Architekturbüros
              </h1>
            </div>

            <p
              className="mt-7 max-w-md text-[15px] leading-[22.5px] sm:mt-8"
              style={{
                color: "rgba(65, 65, 62, 0.70)",
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                WebkitFontSmoothing: "antialiased",
                textShadow: "0 1px 6px rgba(0, 0, 0, 0.07)",
              }}
            >
              Flexible Unterstützung für Architektur- und
              Planungsbüros – von technischer Planung und BIM bis
              zur Bestandsmodellierung aus Punktwolken.
              <br />
              <span
                className="mt-2 inline-block"
                style={{
                  color: "rgba(58, 58, 55, 0.82)",
                  fontWeight: 500,
                }}
              >
                Schnell, unkompliziert und direkt einsatzbereit.
              </span>
              <br />
              Remote und projektbezogen.
            </p>
          </div>

          <div className="flex items-end justify-between gap-6">
            <p
              className="max-w-[330px] text-[15px] leading-[22.5px]"
              style={{
                color: "rgba(65, 65, 62, 0.68)",
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                WebkitFontSmoothing: "antialiased",
                textShadow: "0 1px 6px rgba(0, 0, 0, 0.07)",
              }}
            >
              Archicad · IFC · Punktwolken · Scan-to-BIM
            </p>

            <a
              href="#leistungen"
              aria-label="Leistungen entdecken"
              className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/25 transition-all duration-300 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2"
              style={{
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              <span
                aria-hidden="true"
                className="text-xl leading-none transition-transform duration-300 group-hover:translate-y-1"
                style={{
                  color: "rgba(65, 65, 62, 0.78)",
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontWeight: 400,
                  textShadow: "0 1px 6px rgba(0, 0, 0, 0.08)",
                }}
              >
                ↓
              </span>

              <span className="sr-only">
                Leistungen entdecken
              </span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[60vh] w-full overflow-hidden bg-muted lg:min-h-screen lg:w-[64%]">
          <img
            src="/images/renders/44.webp"
            alt="Architekturvisualisierung von ArchiKa"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute inset-0">
            {services.map((service, index) => {
              const positions = [
                "left-[5%] top-[8%] sm:left-[7%] sm:top-[12%]",
                "right-[5%] top-[29%] sm:right-[7%] sm:top-[30%]",
                "left-[5%] bottom-[29%] sm:left-[10%] sm:bottom-[18%]",
                "right-[5%] bottom-[8%] sm:right-[9%] sm:bottom-[7%]",
              ];

              const sizes = [
                "w-[43%] max-w-[190px] sm:w-[300px]",
                "w-[43%] max-w-[180px] sm:w-[285px]",
                "w-[43%] max-w-[180px] sm:w-[285px]",
                "w-[43%] max-w-[195px] sm:w-[310px]",
              ];

              return (
                <div
                  key={service.title}
                  className={`absolute ${positions[index]} ${sizes[index]} rounded-xl sm:rounded-2xl`}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.60)",
                    backgroundColor: service.background,
                    backdropFilter: "blur(16px) saturate(115%)",
                    WebkitBackdropFilter:
                      "blur(16px) saturate(115%)",
                    boxShadow:
                      "0 12px 20px -8px rgba(20, 25, 20, 0.34), 0 22px 40px -14px rgba(20, 25, 20, 0.26)",
                  }}
                >
                  <div className="px-3.5 py-3 sm:px-6 sm:py-5">
                    <p
                      className="text-[12px] leading-tight tracking-[-0.01em] sm:text-base"
                      style={{
                        color: "rgba(58, 58, 55, 0.88)",
                        fontFamily:
                          "'Barlow Local', Arial, sans-serif",
                        fontWeight: 400,
                        WebkitFontSmoothing: "antialiased",
                        textShadow:
                          "0 1px 5px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      {service.title}
                    </p>

                    <p
                      className="mt-1 text-[10px] leading-[1.35] sm:mt-1.5 sm:text-xs sm:leading-[1.4]"
                      style={{
                        color: "rgba(65, 65, 62, 0.68)",
                        fontFamily:
                          "'Barlow Local', Arial, sans-serif",
                        fontWeight: 400,
                        WebkitFontSmoothing: "antialiased",
                        textShadow:
                          "0 1px 5px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="absolute bottom-6 left-6 hidden text-[10px] uppercase tracking-[0.16em] sm:block"
            style={{
              color: "rgba(248, 246, 240, 0.92)",
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontWeight: 700,
              WebkitFontSmoothing: "antialiased",
              textShadow:
                "0 0 3px rgba(255, 255, 255, 0.45), 0 2px 10px rgba(255, 255, 255, 0.28)",
            }}
          >
            ArchiKa · 2026
          </div>
        </div>
      </div>
    </section>
  );
}
