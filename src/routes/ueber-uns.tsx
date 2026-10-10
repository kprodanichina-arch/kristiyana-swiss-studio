import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { LeistungenSection } from "@/components/site/LeistungenSection";
import { AblaufSection } from "@/components/site/AblaufSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ueber-uns")({
  head: () =>
    pageHead(
      "/ueber-uns",
      "Über uns & Leistungen | ArchiKa",
      "ArchiKa unterstützt Architekturbüros in Deutschland, Österreich und der Schweiz mit Ausführungsplanung, BIM, IFC-Koordination, Scan-to-BIM und Visualisierung.",
    ),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return (
    <PageShell>
      <AboutSection />
      <LeistungenSection />
      <AblaufSection />
      <ReviewsSection />
    </PageShell>
  );
}
