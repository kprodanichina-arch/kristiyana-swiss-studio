import { createFileRoute } from "@tanstack/react-router";
import { EMAIL } from "@/components/site/data";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://archikprojekt.com/datenschutz",
      },
    ],
    meta: [
      {
        title: "Datenschutz | ArchiK",
      },
      {
        name: "description",
        content:
          "Datenschutzerklärung von ArchiK und AY END VI BILD EOOD.",
      },
      {
        property: "og:url",
        content: "https://archikprojekt.com/datenschutz",
      },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Rechtliche Informationen
        </p>

        <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-12 space-y-12 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="text-lg font-medium text-foreground">
              1. Verantwortlicher
            </h2>

            <p className="mt-4">
              Verantwortlicher für die Verarbeitung personenbezogener Daten
              auf dieser Website ist:
            </p>

            <p className="mt-4">
              AY END VI BILD EOOD
              <br />
              EIK: 175310505
              <br />
              USt-IdNr.: BG175310505
              <br />
              Frityof Nansen Str. 33
              <br />
              1000 Sofia
              <br />
              Bulgarien
            </p>

            <p className="mt-4">
              Vertretungsberechtigte Person:
              <br />
              Ivan Vasilev Delchev
            </p>

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
              2. Besuch der Website
            </h2>

            <p className="mt-4">
              Beim Aufrufen dieser Website können durch den technischen Betrieb
              des Webservers und des Hosting-Anbieters technische
              Verbindungsdaten verarbeitet werden. Dazu können insbesondere
              IP-Adresse, Datum und Uhrzeit des Zugriffs, angeforderte
              Ressourcen, Browsertyp und Betriebssystem gehören.
            </p>

            <p className="mt-4">
              Die Verarbeitung erfolgt zur technischen Bereitstellung,
              Sicherheit und Stabilität der Website.
            </p>

            <p className="mt-4">
              Rechtsgrundlage ist, soweit die DSGVO Anwendung findet, Art. 6
              Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren
              und funktionsfähigen Betrieb der Website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              3. Kontaktaufnahme per E-Mail
            </h2>

            <p className="mt-4">
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
              übermittelten personenbezogenen Daten, insbesondere Name,
              E-Mail-Adresse und die von Ihnen mitgeteilten Informationen,
              verarbeitet.
            </p>

            <p className="mt-4">
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur
              Kommunikation mit Ihnen.
            </p>

            <p className="mt-4">
              Rechtsgrundlage ist, soweit die DSGVO Anwendung findet, Art. 6
              Abs. 1 lit. b DSGVO, sofern die Anfrage auf den Abschluss oder
              die Durchführung eines Vertrags gerichtet ist, beziehungsweise
              Art. 6 Abs. 1 lit. f DSGVO bei sonstigen Anfragen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              4. Kontaktformular
            </h2>

            <p className="mt-4">
              Die Website enthält ein Formular, mit dem eine vorbereitete
              E-Mail erstellt werden kann. Die Eingaben werden nicht über
              einen eigenen Formularserver an uns übermittelt.
            </