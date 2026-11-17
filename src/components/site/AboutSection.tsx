import { useLang, localizePath } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const PROFILE_FACTS_DE = [
  { label: "Planungserfahrung", value: "über 100.000 m²" },
  { label: "Software", value: "Archicad, BIMcloud · Revit, Rhino, Grasshopper" },
  { label: "Kommunikation", value: "auf Deutsch und Englisch" },
  { label: "Arbeitsweise", value: "Remote, Vor-Ort-Termine nach Absprache" },
  { label: "Ausbildung", value: "Master Architektur, UACEG Sofia" },
];

const PROFILE_FACTS_EN = [
  { label: "Design experience", value: "over 100,000 m²" },
  { label: "Software", value: "Archicad, BIMcloud · Revit, Rhino, Grasshopper" },
  { label: "Communication", value: "in English and German" },
  { label: "Way of working", value: "Remote, on-site meetings by arrangement" },
  { label: "Education", value: "Master of Architecture, UACEG Sofia" },
];

const COPY = {
  de: {
    eyebrow: "Über ArchiKa",
    h1: "Architektur digital gedacht.",
    intro:
      "ArchiKa unterstützt Architektur- und Planungsbüros remote und projektbezogen – bei Ausführungs- und Detailplanung, BIM/IFC in Archicad und BIMcloud, Scan-to-BIM und Visualisierung.",
    alt: "Kristiyana Prodanichina – Architektin, Leitung ArchiKa",
    contact: "Ihre Ansprechpartnerin",
    bio: "Architektin und Mitglied der Kammer der Architekten in Bulgarien. Planung grosser Wohngebäude vom Konzept bis zur Ausführungs- und Detailplanung. Sie leitet ArchiKa und betreut jedes Projekt persönlich.",
    cta: "Projekt anfragen",
    packages: "Leistungspakete",
  },
  en: {
    eyebrow: "About ArchiKa",
    h1: "Architecture, thought through digitally.",
    intro:
      "ArchiKa supports architecture and design practices remotely and on a project basis – with construction documentation and detailing, BIM/IFC in Archicad and BIMcloud, Scan-to-BIM and visualisation.",
    alt: "Kristiyana Prodanichina – architect, head of ArchiKa",
    contact: "Your contact person",
    bio: "Architect and member of the Chamber of Architects in Bulgaria. Design of large residential buildings from concept through to construction documentation and detailing. She leads ArchiKa and looks after every project personally.",
    cta: "Request a project",
    packages: "Service packages",
  },
} as const;

export function AboutSection() {
  const lang = useLang();
  const t = COPY[lang];
  const PROFILE_FACTS = lang === "en" ? PROFILE_FACTS_EN : PROFILE_FACTS_DE;
  return (
    <section
      id="ueber-uns"
      className="bg-background py-20 sm:py-28"
    >
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t.eyebrow}
          </p>

          <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            {t.h1}
          </h1>
        </div>

        <div className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <p>
            {t.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-border pt-14 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div className="flex items-start justify-start">
            <img
              src="/images/kristiyana.webp"
              alt={t.alt}
              className="h-auto w-full max-w-[280px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t.contact}
            </p>

            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
              Kristiyana Prodanichina
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.bio}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[rgba(32,32,29,0.14)] pt-8 sm:grid-cols-3">
              {PROFILE_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd
                    className={
                      fact.label === PROFILE_FACTS[0]?.label
                        ? "mt-1 text-2xl leading-snug text-foreground/90"
                        : "mt-2 text-base leading-snug text-foreground/80"
                    }
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to={localizePath("/kontakt", lang)}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(32,32,29,0.18)] px-5 py-3 text-sm font-medium text-[rgba(65,65,62,0.78)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(32,32,29,0.35)] hover:bg-black/[0.025]"
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to={localizePath("/ueber-uns", lang)}
                hash="pakete"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
              >
                {t.packages}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
