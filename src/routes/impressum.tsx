import { createFileRoute } from "@tanstack/react-router";
import { EMAIL } from "@/components/site/data";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://archikprojekt.com/impressum",
      },
    ],
    meta: [
      {
        title: "Impressum | ArchiKa",
      },
      {
        name: "description",
        content:
          "Impressum und Anbieterinformationen von ArchiKa und AY END VI BILD EOOD.",
      },
      {
        property: "og:url",
        content: "https://archikprojekt.com/impressum",
      },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Rechtliche Informationen
        </p>

        <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          Impressum
        </h1>

        <