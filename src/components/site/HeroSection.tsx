export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-32">
        <div>
          <p className="eyebrow">ArchiK · BIM & Architektur</p>

          <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            BIM- und Architekturleistungen
            <br />
            für Architekturbüros
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Flexible externe Unterstützung für Architekturbüros in Deutschland,
            Österreich und der Schweiz – direkt, zuverlässig und remote.
          </p>

          <p className="mt-5 text-sm tracking-wide text-muted-foreground">
            BIM-Modellierung · Planungs- und Baudokumentation · Visualisierung
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Projekt anfragen
            </a>

            <a
              href="#projekte"
              className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Projekte ansehen
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Projektbezogene oder laufende Unterstützung – flexibel nach Ihrem
            Bedarf.
          </p>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-muted sm:min-h-[520px]">
          <img
            src="/images/projects/project1/1.webp"
            alt="Architekturprojekt von ArchiK"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
