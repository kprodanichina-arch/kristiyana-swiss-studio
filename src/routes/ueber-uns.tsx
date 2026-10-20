import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { LeistungenSection } from "@/components/site/LeistungenSection";
import { PaketeSection } from "@/components/site/PaketeSection";
import { QualitaetSection } from "@/components/site/QualitaetSection";
import { AblaufSection } from "@/components/site/AblaufSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ueber-uns")({
  head: () =>
    pageHead(
      "/ueber-uns",
      "Über uns & Leistungen | ArchiKa",
      "ArchiKa unterstützt Architekturbüros mit Ausführungsplanung, BIM, IFC-Koordination, Scan-to-BIM und Visualisierung – Pilotprojekt zum Festpreis.",
    ),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return (
    <PageShell>
      <AboutSection />
      <LeistungenSection />
      <PaketeSection />
      <QualitaetSection />
      <AblaufSection />
      <ReviewsSection />
    </PageShell>
  );
}
