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
        title: "Impressum | ArchiK",
      },
      {
        name: "description",
        content:
          "Impressum und Anbieterinformationen von ArchiK und AY END VI BILD EOOD.",
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

        <div className="mt-12 space-y-12 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="text-lg font-medium text-foreground">
              Anbieter
            </h2>

            <div className="mt-4">
              <p>
                AY END VI BILD EOOD
                <br />
                Einpersonengesellschaft mit beschränkter Haftung (EOOD)
                <br />
                EIK: 175310505
                <br />
                USt-IdNr.: BG175310505
              </p>

              <p className="mt-4">
                Frityof Nansen Str. 33
                <br />
                1000 Sofia
                <br />
                Bulgarien
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Vertretungsberechtigte Person
            </h2>

            <p className="mt-4">
              Ivan Vasilev Delchev
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Kontakt
            </h2>

            <p className="mt-4">
              E-Mail:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                {EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Berufsbezeichnung
            </h2>

            <p className="mt-4">
              Architektin
              <br />
              Berufsqualifikation erworben in Bulgarien
              <br />
              Mitglied der Kammer der Architekten in Bulgarien (KAB)
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              Verantwortlich für den Inhalt
            </h2>

            <p className="mt-4">
              AY END VI BILD EOOD
              <br />
              vertreten durch Ivan Vasilev Delchev
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <p className="text-xs leading-6 text-muted-foreground">
              ArchiK ist die geschäftliche Bezeichnung für die auf dieser
              Website dargestellten Architektur-, BIM- und
              Visualisierungsleistungen von AY END VI BILD EOOD.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <a
            href="/"
            className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            ← Zurück zu ArchiK
          </a>
        </div>
      </main>
    </div>
  );
}