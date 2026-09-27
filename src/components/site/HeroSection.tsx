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

          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
              style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
            >
              ArchiK
            </p>

            <p
              className="mt-3 max-w-[240px] text-[10px] uppercase leading-5 tracking-[0.16em] text-muted-foreground"
              style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
            >
              Architektur · BIM · Visualisierung
            </p>
          </div>

          <div className="my-16 lg:my-0">

            <p
              className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
              style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
            >
              Externe Architekturproduktion
            </p>

            <h1
              className="max-w-[620px] text-[3.1rem] font-medium leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[4rem] xl:text-[4.6rem]"
              style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
            >
              Externe Unterstützung
              <br />
              für Architektur-
              <br />
              und BIM-Projekte
            </h1>

            <p
              className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg"
              style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
            >
              Flexible Unterstützung für Architekturbüros in Deutschland,
              Österreich und der Schweiz – projektbezogen oder als
              zusätzliche Kapazität in laufenden Projekten.
            </p>

            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-75"
              style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
            >
              Projekt anfragen
            </a>
          </div>

          <div className="hidden lg:block">
            <p
              className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
              style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
            >
              Deutschland · Österreich · Schweiz
            </p>
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
                      className="text-[15px] font-medium leading-tight tracking-[-0.01em] text-black sm:text-base"
                      style={{
                        fontFamily: "'Barlow', Arial, sans-serif",
                      }}
                    >
                      {service.title}
                    </p>

                    <p
                      className="mt-1.5 text-[11px] leading-[1.4] text-black/65 sm:text-xs"
                      style={{
                        fontFamily: "'Barlow', Arial, sans-serif",
                      }}
                    >
                      {service.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

          <div className="absolute bottom-6 left-6 hidden text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:block">
            ArchiK · 2026
          </div>

        </div>
      </div>
    </section>
  );
}
