import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageIntro } from "@/components/site/PageIntro";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/projekte")({
  head: () =>
    pageHead(
      "/projekte",
      "Projekte | ArchiKa",
      "Ausgewählte Arbeiten von ArchiKa: Ausführungsplanung, Fassaden und Details, BIM-Workflows und Architekturvisualisierung.",
    ),
  component: ProjektePage,
});

function ProjektePage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Projekte"
        title="Ausgewählte Arbeiten"
        text="Ein Einblick in unsere Planungs-, BIM- und Visualisierungsarbeit – von der Ausführungsplanung bis zum fotorealistischen Rendering."
      />
      <ProjectsSection />
    </PageShell>
  );
}
