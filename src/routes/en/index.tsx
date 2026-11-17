import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { HeroSection } from "@/components/site/HeroSection";
import { PageTeasers } from "@/components/site/PageTeasers";
import { LeistungenStrip } from "@/components/site/LeistungenStrip";
import { pageHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  head: () => ({
    ...pageHead(
      "/en",
      "ArchiKa | Outsourced construction documentation & BIM for architects",
      "ArchiKa supports architecture practices with construction documentation, BIM, IFC coordination and architectural visualisation – remote and project-based.",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "ArchiKa",
          legalName: "AY END VI BILD EOOD",
          url: `${SITE_URL}/en`,
          email: "k.prodanichina@gmail.com",
          description:
            "B2B architecture, BIM and visualisation services for architecture practices – remote and project-based.",
          founder: {
            "@type": "Person",
            name: "Kristiyana Prodanichina",
            jobTitle: "Architect",
          },
          sameAs: ["https://www.linkedin.com/in/kristiyana-prodanichina"],
          knowsAbout: [
            "Architecture",
            "Construction documentation",
            "Detailing",
            "Facade design",
            "BIM",
            "Archicad",
            "Revit",
            "Rhino",
            "Grasshopper",
            "IFC",
            "Architectural visualisation",
          ],
        }),
      },
    ],
  }),
  component: IndexEn,
});

function IndexEn() {
  return (
    <PageShell>
      <HeroSection />
      <LeistungenStrip />
      <PageTeasers />
    </PageShell>
  );
}
