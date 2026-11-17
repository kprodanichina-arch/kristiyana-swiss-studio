import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { ContactSection } from "@/components/site/ContactSection";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/contact")({
  head: () =>
    pageHead(
      "/en/contact",
      "Contact | ArchiKa",
      "Send a project enquiry to ArchiKa – outsourced architecture, BIM and visualisation services, remote and project-based.",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
