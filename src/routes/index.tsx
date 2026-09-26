import { AblaufSection } from "@/components/site/AblaufSection";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSection } from "@/components/site/HeroSection";
import { LeistungenSection } from "@/components/site/LeistungenSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { RendersSection } from "@/components/site/RendersSection";
import { BenefitsSection } from "@/components/site/BenefitsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

const title = "ArchiK | BIM- und Architekturleistungen für Architekturbüros";
const description =
  "ArchiK unterstützt Architekturbüros in Deutschland, Österreich und der Schweiz mit BIM-Modellierung, Planungsdokumentation, IFC und Architekturvisualisierung.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main>
        <HeroSection />
        <LeistungenSection />
        <ProjectsSection />
        <RendersSection />
        <AblaufSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
