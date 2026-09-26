import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSection } from "@/components/site/HeroSection";
import { LeistungenSection } from "@/components/site/LeistungenSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { AblaufSection } from "@/components/site/AblaufSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
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
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
