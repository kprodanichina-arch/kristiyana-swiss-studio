import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { RendersSection } from "@/components/site/RendersSection";
import { BenefitsSection } from "@/components/site/BenefitsSection";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { Footer } from "@/components/site/Footer";
import { getApprovedReviews } from "@/lib/reviews.functions";

const title = "Kristiyana Prodanichina — Architektin & Visualisierung";
const description =
  "Architekturportfolio von Kristiyana Prodanichina: Ausführungsplanung, ArchiCAD-Konstruktion und High-End-Visualisierungen für Schweizer B2B-Kunden.";

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
  loader: async () => ({
    reviews: await getApprovedReviews(),
  }),
  component: Index,
});

function Index() {
  const loaderData = Route.useLoaderData();
  const reviews = loaderData?.reviews ?? [];
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <ContactSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <RendersSection />
        <BenefitsSection />
        <ReviewsSection initialReviews={reviews} />
      </main>
      <Footer />
    </div>
  );
}
