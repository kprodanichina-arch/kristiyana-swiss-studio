import { useLang, localizePath } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const itemsDe = [
  {
    title: "Ausführungs- & Detailplanung",
    text: "Grundrisse, Schnitte, Fassaden und Details bis zum Ausführungsprojekt (SIA-Phase 51/52 bzw. LPH 5) – nach Ihren Bürostandards.",
    image: "/images/leistungen/ausfuehrungsplanung-detail.webp",
    alt: "Symbolbild: Balkondetail mit Axonometrie und Schnitt",
  },
  {
    title: "BIM & IFC-Koordination",
    text: "Modelle in Archicad und BIMcloud, geprüfte IFC-Übergabe an die Fachplaner.",
    image: "/images/leistungen/bim-ifc-modell.webp",
    alt: "Symbolbild: Explosionsdarstellung eines BIM-Modells mit Bauteilen und Haustechnik",
  },
  {
    title: "Architekturvisualisierung",
    text: "Fotorealistische Renderings für Präsentation, Wettbewerb und Vermarktung.",
    image: "/images/leistungen/visualisierung.webp",
    alt: "Symbolbild: Visualisierung eines Wohngebäudes mit Balkonen",
  },
] as const;

const itemsEn = [
  {
    title: "Construction documentation & detailing",
    text: "Plans, sections, facades and details through to construction documentation – to your office standards.",
    image: "/images/leistungen/ausfuehrungsplanung-detail.webp",
    alt: "Illustration: balcony detail with axonometric view and section",
  },
  {
    title: "BIM & IFC coordination",
    text: "Models in Archicad and BIMcloud, with checked IFC handover to your consultants.",
    image: "/images/leistungen/bim-ifc-modell.webp",
    alt: "Illustration: exploded view of a BIM model with building elements and MEP services",
  },
  {
    title: "Architectural visualisation",
    text: "Photorealistic renderings for presentations, competitions and marketing.",
    image: "/images/leistungen/visualisierung.webp",
    alt: "Illustration: visualisation of a residential building with balconies",
  },
] as const;

export function LeistungenStrip() {
  const lang = useLang();
  const en = lang === "en";
  const items = en ? itemsEn : itemsDe;
  return (
    <section className="border-b border-border bg-[rgba(238,232,220,0.32)]">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24 lg:px-14 xl:px-16">
      <div className="mb-10 flex flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p
            className="text-xs uppercase tracking-[0.16em]"
            style={{
              color: "rgba(65, 65, 62, 0.56)",
              fontFamily: "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            {en ? "Services" : "Leistungen"}
          </p>
          <h2
            className="mt-4 text-balance"
            style={{
              fontFamily: "'Instrument Serif Local', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 3.6vw, 56px)",
              lineHeight: "0.98",
              letterSpacing: "-0.035em",
              color: "rgba(58, 58, 55, 0.9)",
            }}
          >
            {en ? "What we take on for your practice" : "Was wir für Ihr Büro übernehmen"}
          </h2>
        </div>
        <p
          className="max-w-md"
          style={{
            fontFamily: "'Barlow Local', Arial, sans-serif",
            fontSize: "15px",
            lineHeight: "1.6",
            color: "rgba(65, 65, 62, 0.68)",
          }}
        >
          {en
            ? "Remote and project-based – to your office standards and within your project structure."
            : "Remote und projektbezogen – in Ihrem Bürostandard und Ihrer Projektstruktur."}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            to={localizePath("/projekte", lang)}
            className="group flex flex-col border border-[rgba(32,32,29,0.14)] bg-background transition-colors hover:bg-black/[0.02]"
          >
            <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 items-end justify-between gap-6 px-6 py-7 sm:px-8 sm:py-8">
              <div>
                <h3
                  className="text-2xl leading-tight sm:text-[28px]"
                  style={{
                    fontFamily: "'Instrument Serif Local', Georgia, serif",
                    fontWeight: 400,
                    color: "rgba(58, 58, 55, 0.92)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 max-w-sm text-[15px] leading-[22px]"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    color: "rgba(65, 65, 62, 0.72)",
                  }}
                >
                  {item.text}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-[rgba(65,65,62,0.6)] transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
