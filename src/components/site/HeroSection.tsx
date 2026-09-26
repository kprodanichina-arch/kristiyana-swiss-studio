export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative min-h-[calc(100vh-4rem)]">
        {/* Architectural hero image */}
        <img
          src="/images/renders/1.webp"
          alt="Architekturvisualisierung von ArchiK"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-white/75">
              ArchiK · Architektur · BIM · Visualisierung
            </p>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
              Architektur.
              <br />
              Digital.
              <br />
              Präzise.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Externe Planungs- und BIM-Unterstützung für Architekturbüros in
              Deutschland, Österreich und der Schweiz.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
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
                Projekte ansehen
              </a>
            </div>
          </div>

          <div className="absolute right-5 top-8 hidden max-w-[220px] text-right sm:right-8 sm:top-10 lg:block lg:right-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
              Remote · DACH
            </p>

            <p className="mt-2 text-xs leading-5 text-white/70">
              Projektbezogene Unterstützung oder zusätzliche Kapazität für
              laufende Projekte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}