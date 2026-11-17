import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { LeistungenSection } from "@/components/site/LeistungenSection";
import { PaketeSection } from "@/components/site/PaketeSection";
import { QualitaetSection } from "@/components/site/QualitaetSection";
import { AblaufSection } from "@/components/site/AblaufSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { SummaryStrip } from "@/components/site/SummaryStrip";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/about")({
  head: () =>
    pageHead(
      "/en/about",
      "About us & services | ArchiKa",
      "ArchiKa supports architecture practices with construction documentation, BIM, IFC coordination, Scan-to-BIM and visualisation – remote, to your office standards.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <SummaryStrip />
      <AboutSection />
      <PaketeSection />
      <LeistungenSection />
      <QualitaetSection />
      <AblaufSection />
      <ReviewsSection />
    </PageShell>
  );
}
