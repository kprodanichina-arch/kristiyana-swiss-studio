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
            </p>

            <p className="mt-4">
              Nach dem Absenden des Formulars wird das auf Ihrem Gerät
              eingerichtete E-Mail-Programm geöffnet und eine vorbereitete
              Nachricht erstellt. Die Übermittlung der Nachricht erfolgt erst,
              wenn Sie diese über Ihr E-Mail-Programm tatsächlich versenden.
            </p>

            <p className="mt-4">
              Die Verarbeitung der von Ihnen eingegebenen Daten richtet sich
              anschließend nach dem Versand der E-Mail und den dabei
              verwendeten E-Mail-Diensten.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              5. WhatsApp und LinkedIn
            </h2>

            <p className="mt-4">
              Auf dieser Website befinden sich Links zu WhatsApp und LinkedIn.
              Beim Anklicken dieser Links verlassen Sie diese Website und
              gelangen zu den jeweiligen externen Diensten.
            </p>

            <p className="mt-4">
              Für die Verarbeitung personenbezogener Daten auf diesen
              Plattformen sind die jeweiligen Anbieter verantwortlich. Es
              gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              6. Google Analytics
            </h2>

            <p className="mt-4">
              Diese Website verwendet Google Analytics 4, einen
              Webanalysedienst der Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>

            <p className="mt-4">
              Google Analytics wird verwendet, um die Nutzung dieser Website
              statistisch auszuwerten und besser zu verstehen, wie Besucher
              auf die Website gelangen und welche Inhalte aufgerufen werden.
            </p>

            <p className="mt-4">
              Google Analytics wird auf dieser Website nur aktiviert, wenn Sie
              über das angezeigte Einwilligungsbanner ausdrücklich zugestimmt
              haben. Wenn Sie die Analyse ablehnen, wird Google Analytics nicht
              geladen.
            </p>

            <p className="mt-4">
              Die Einwilligungsentscheidung wird auf Ihrem Gerät gespeichert,
              damit Ihre Auswahl bei späteren Besuchen berücksichtigt werden
              kann.
            </p>

            <p className="mt-4">
              Google verarbeitet im Rahmen von Google Analytics insbesondere
              Informationen über die Nutzung der Website, beispielsweise
              Seitenaufrufe, Interaktionen, technische Informationen zum
              verwendeten Gerät und Browser sowie Informationen über die
              Herkunft des Besuchs.
            </p>

            <p className="mt-4">
              Die Verarbeitung erfolgt nur auf Grundlage Ihrer Einwilligung.
              Rechtsgrundlage ist, soweit die DSGVO Anwendung findet, Art. 6
              Abs. 1 lit. a DSGVO.
            </p>

            <p className="mt-4">
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die
              gespeicherte Einwilligungsentscheidung in den Einstellungen Ihres
              Browsers löschen und die Website anschließend erneut aufrufen.
            </p>

            <p className="mt-4">
              Weitere Informationen zur Verarbeitung personenbezogener Daten
              durch Google Analytics und zu den verfügbaren
              Datenschutzkontrollen finden Sie in den Datenschutzinformationen
              von Google.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              7. Cookies und Einwilligung
            </h2>

            <p className="mt-4">
              Google Analytics kann Analyse-Cookies und vergleichbare
              Technologien verwenden. Diese werden auf dieser Website erst
              nach einer ausdrücklichen Einwilligung für die Analyse aktiviert.
            </p>

            <p className="mt-4">
              Ohne Einwilligung wird Google Analytics nicht geladen und es
              werden keine Analyse-Cookies durch Google Analytics gesetzt.
            </p>

            <p className="mt-4">
              Technisch erforderliche Daten, die für den sicheren und
              funktionsfähigen Betrieb der Website notwendig sind, können
              hiervon unberührt bleiben.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              8. Ihre Rechte
            </h2>

            <p className="mt-4">
              Soweit die gesetzlichen Voraussetzungen erfüllt sind, haben Sie
              insbesondere folgende Rechte:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Recht auf Auskunft über Ihre personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen</li>
            </ul>

            <p className="mt-4">
              Sie haben außerdem das Recht, sich bei einer zuständigen
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              9. Speicherdauer
            </h2>

            <p className="mt-4">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies
              für die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>

            <p className="mt-4">
              Für Google Analytics kann die Speicherdauer der von Google
              verarbeiteten Daten über die Einstellungen der jeweiligen
              Analytics-Property festgelegt werden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground">
              10. Änderungen dieser Datenschutzerklärung
            </h2>

            <p className="mt-4">
              Diese Datenschutzerklärung kann angepasst werden, wenn sich die
              technische oder rechtliche Situation der Website ändert.
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