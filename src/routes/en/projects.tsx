import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageIntro } from "@/components/site/PageIntro";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/projects")({
  head: () =>
    pageHead(
      "/en/projects",
      "Projects | ArchiKa",
      "Selected work by ArchiKa: construction documentation, facades and details, BIM workflows and architectural visualisation.",
    ),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Projects"
        title="Selected work"
        text="An insight into our design, BIM and visualisation work – from construction documentation to photorealistic rendering."
      />
      <ProjectsSection />
    </PageShell>
  );
}
