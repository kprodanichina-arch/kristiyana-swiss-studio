import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { HeroSection } from "@/components/site/HeroSection";
import { PageTeasers } from "@/components/site/PageTeasers";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://archikprojekt.com/",
      },
    ],
    meta: [
      {
        property: "og:url",
        content: "https://archikprojekt.com/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://archikprojekt.com/#organization",
          name: "ArchiKa",
          legalName: "AY END VI BILD EOOD",
          url: "https://archikprojekt.com/",
          email: "k.prodanichina@gmail.com",
          description:
            "B2B Architektur-, BIM- und Visualisierungsleistungen für Architekturbüros in Deutschland, Österreich und der Schweiz – remote und projektbezogen.",
          areaServed: [
            { "@type": "Country", name: "Deutschland" },
            { "@type": "Country", name: "Österreich" },
            { "@type": "Country", name: "Schweiz" },
          ],
          founder: {
            "@type": "Person",
            name: "Kristiyana Prodanichina",
            jobTitle: "Architektin",
          },
          sameAs: [
            "https://www.linkedin.com/in/kristiyana-prodanichina",
          ],
          knowsAbout: [
            "Architektur",
            "Ausführungsplanung",
            "Detailplanung",
            "Fassadenplanung",
            "BIM",
            "Archicad",
            "Revit",
            "IFC",
            "Architekturvisualisierung",
          ],
        }),
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <PageShell>
      <HeroSection />
      <PageTeasers />
    </PageShell>
  );
}
