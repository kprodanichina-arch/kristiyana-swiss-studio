import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { ContactSection } from "@/components/site/ContactSection";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    pageHead(
      "/kontakt",
      "Kontakt | ArchiKa",
      "Projektanfrage an ArchiKa – externe Architektur-, BIM- und Visualisierungsleistungen, remote und projektbezogen.",
    ),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
