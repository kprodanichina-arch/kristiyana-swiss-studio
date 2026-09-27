type Service = {
  title: string;
  description: string;
  background: string;
};

const services: Service[] = [
  {
    title: "Ausführungsplanung",
    description: "Grundrisse · Schnitte · Ansichten · Details",
    background: "rgba(221, 207, 183, 0.68)",
  },
  {
    title: "Fassaden & Details",
    description: "Fassaden · Ansichten · technische Planung",
    background: "rgba(246, 243, 235, 0.72)",
  },
  {
    title: "BIM & digitale Planung",
    description: "Archicad · Revit · IFC-Workflows",
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
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1800px] flex-col lg:flex-row">

        {/* LEFT — TYPOGRAPHY */}

        <div className="relative z-10 flex w-full flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:w-[36%] lg:px-12 lg:py-14 xl:px-16">

          {/* TOP LABEL */}

          <div>
            <p
              className="text-xs uppercase tracking-[0.16em]"
              style={{
                color: "rgba(32, 32, 29, 0.58)",
                fontFamily: "'Barlow Semi Condensed', Arial, sans-serif",
                fontWeight: 700,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              ArchiK
            </p>

            <p
              className="mt-3 max-w-[240px] text-[11px] uppercase leading-5 tracking-[0.12em]"
              style={{
                color: "rgba(32, 32, 29, 0.52)",
                fontFamily: "'Barlow Semi Condensed', Arial, sans-serif",
                fontWeight: 700,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Architektur · BIM · Visualisierung
            </p>
          </div>

          {/* MAIN HERO CONTENT */}

          <div className="my-16 lg:my-0">

            <p
              className="mb-6 text-[13px] uppercase tracking-[0.14em]"
              style={{
                color: "rgba(32, 32, 29, 0.58)",
                fontFamily: "'Barlow Semi Condensed', Arial, sans-serif",
                fontWeight: 700,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Externe Architekturproduktion
            </p>

            <h1
              className="text-balance"
              style={{
                color: "#20201d",
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(64px, 7vw, 110px)",
                lineHeight: "0.92",
                letterSpacing: "-0.045em",
                maxWidth: "14ch",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Externe Unterstützung
              <br />
              für Ihre Architekturprojekte.
            </h1>

            <p
              className="mt-8 max-w-md text-[15px] leading-[22.5px]"
              style={{
                color: "rgba(32, 32, 29, 0.62)",
                fontFamily: "'Barlow', Arial, sans-serif",
                fontWeight: 400,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Flexible Unterstützung für Architekturbüros in Deutschland,
              Österreich und der Schweiz – projektbezogen oder als
              zusätzliche Kapazität in laufenden Projekten.
            </p>
          </div>

          {/* HERO BOTTOM */}

          <div className="flex items-end justify-between gap-8">

            <p
              className="max-w-[330px] text-[15px] leading-[22.5px]"
              style={{
                color: "rgba(32, 32, 29, 0.62)",
                fontFamily: "'Barlow', Arial, sans-serif",
                fontWeight: 400,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Von der technischen Planung bis zur Visualisierung – flexibel
              integriert in Ihre bestehenden Projektabläufe.
            </p>

            <a
              href="#leistungen"
              aria-label="Leistungen entdecken"
              className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/25 transition-all duration-300 hover:bg-black/5"
            >
              <span
                aria-hidden="true"
                className="text-xl leading-none transition-transform duration-300 group-hover:translate-y-1"
                style={{
                  color: "rgba(32, 32, 29, 0.72)",
                  fontFamily: "'Barlow', Arial, sans-serif",
                  fontWeight: 400,
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

        {/* RIGHT — IMAGE */}

        <div className="relative min-h-[72vh] w-full overflow-hidden bg-muted lg:min-h-screen lg:w-[64%]">

          <img
            src="/images/renders/44.webp"
            alt="Architekturvisualisierung von ArchiK"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 bg-black/5" />

          {/* FLOATING SERVICE CARDS */}

          <div className="absolute inset-0">

            {services.map((service, index) => {
              const positions = [
                "left-[7%] top-[12%]",
                "right-[7%] top-[30%]",
                "left-[10%] bottom-[18%]",
                "right-[9%] bottom-[7%]",
              ];

              const sizes = [
                "w-[250px] sm:w-[300px]",
                "w-[235px] sm:w-[285px]",
                "w-[235px] sm:w-[285px]",
                "w-[255px] sm:w-[310px]",
              ];

              return (
                <div
                  key={service.title}
                  className={`absolute ${positions[index]} ${sizes[index]} rounded-2xl border border-white/60`}
                  style={{
                    backgroundColor: service.background,
                    backdropFilter: "blur(16px) saturate(115%)",
                    WebkitBackdropFilter: "blur(16px) saturate(115%)",
                    boxShadow:
                      "0 16px 24px -8px rgba(20, 25, 20, 0.38), 0 28px 50px -14px rgba(20, 25, 20, 0.30)",
                  }}
                >
                  <div className="px-5 py-4 sm:px-6 sm:py-5">

                    <p
                      className="text-[15px] leading-tight tracking-[-0.01em] sm:text-base"
                      style={{
                        color: "rgba(32, 32, 29, 0.78)",
                        fontFamily: "'Barlow', Arial, sans-serif",
                        fontWeight: 400,
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      {service.title}
                    </p>

                    <p
                      className="mt-1.5 text-[11px] leading-[1.4] sm:text-xs"
                      style={{
                        color: "rgba(32, 32, 29, 0.60)",
                        fontFamily: "'Barlow', Arial, sans-serif",
                        fontWeight: 400,
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      {service.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

          {/* IMAGE LABEL */}

          <div
            className="absolute bottom-6 left-6 hidden text-[10px] uppercase tracking-[0.16em] sm:block"
            style={{
              color: "rgba(238, 232, 220, 0.78)",
              fontFamily: "'Barlow Semi Condensed', Arial, sans-serif",
              fontWeight: 700,
              WebkitFontSmoothing: "antialiased",
            }}
          >
            ArchiK · 2026
          </div>

        </div>
      </div>
    </section>
  );
}
