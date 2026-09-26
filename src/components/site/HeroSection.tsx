export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="relative min-h-[calc(100vh-6rem)] overflow-hidden bg-muted">
          <img
            src="/images/renders/1.webp"
            alt="Architekturvisualisierung von ArchiK"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-between p-6 sm:p-10 lg:p-14">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
                  ArchiK
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/60">
                  Architektur · BIM · Visualisierung
                </p>
              </div>

              <p className="hidden max-w-[180px] text-right text-[10px] font-medium uppercase leading-5 tracking-[0.18em] text-white/60 sm:block">
                Externe Unterstützung
                <br />
                Deutschland · Österreich · Schweiz
              </p>
            </div>

            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Digitale Architekturproduktion
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                Von der Planung
                <br />
                zum fertigen Projekt.
              </h1>

              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                  Externe Architektur- und BIM-Unterstützung für
                  Architekturbüros – projektbezogen oder als zusätzliche
                  Kapazität in laufenden Projekten.
                </p>

                <div className="flex shrink-0 items-center gap-5">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
                  >
                    Projekt anfragen
                  </a>

                  <a
                    href="#projekte"
                    className="text-sm font-medium text-white underline decoration-white/50 underline-offset-8 transition-colors hover:decoration-white"
                  >
                    Projekte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}