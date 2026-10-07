import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { HeroSection } from "@/components/site/HeroSection";
import { LeistungenSection } from "@/components/site/LeistungenSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { AblaufSection } from "@/components/site/AblaufSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        <HeroSection />

        <LeistungenSection />

        <ProjectsSection />

        <AblaufSection />

        <AboutSection />

        <ReviewsSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}