import { useLang } from "@/lib/i18n";

const serif = "'Instrument Serif Local', Georgia, serif";
const sans = "'Barlow Local', Arial, sans-serif";
const label = "'Barlow Semi Condensed Local', Arial, sans-serif";

const pointsDe = [
  {
    title: "Nach Ihren Vorgaben",
    text: "Wir arbeiten mit Ihren Vorlagen, Detailkatalogen und den von Ihnen vorgegebenen Normen. Offene Fragen klären wir, bevor gezeichnet wird – nicht danach.",
  },
  {
    title: "Geprüft vor der Lieferung",
    text: "Jede Lieferung wird intern geprüft und geht als Entwurf zur Freigabe an Sie.",
  },
  {
    title: "EU-Unternehmen, DSGVO & DSG",
    text: "Auftragnehmer ist ein Unternehmen mit Sitz in der EU. Ihre Projektdaten werden nach DSGVO und – für Auftraggeber in der Schweiz – im Einklang mit dem Schweizer DSG verarbeitet, die Abrechnung erfolgt als B2B-Leistung.",
  },
];

const pointsEn = [
  {
    title: "To your specifications",
    text: "We work with your templates, detail libraries and the standards you specify. Open questions are clarified before drawing starts – not afterwards.",
  },
  {
    title: "Checked before delivery",
    text: "Every delivery is checked internally and sent to you as a draft for approval.",
  },
  {
    title: "EU company, GDPR & FADP",
    text: "Your contractor is a company based in the EU. Your project data is processed in line with the GDPR and – for clients in Switzerland – the Swiss FADP; work is invoiced as a B2B service.",
  },
];

export function QualitaetSection() {
  const en = useLang() === "en";
  const points = en ? pointsEn : pointsDe;
  return (
    <section id="qualitaet" className="bg-background">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 xl:px-16">
        <p
          className="text-xs uppercase tracking-[0.16em]"
          style={{
            color: "rgba(65, 65, 62, 0.56)",
            fontFamily: label,
            fontWeight: 700,
          }}
        >
          {en ? "Quality & security" : "Qualität & Sicherheit"}
        </p>

        <h2
          className="mt-5 max-w-3xl text-balance"
          style={{
            fontFamily: serif,
            fontWeight: 400,
            fontSize: "clamp(38px, 4vw, 60px)",
            lineHeight: "0.98",
            letterSpacing: "-0.04em",
            color: "rgba(58, 58, 55, 0.9)",
          }}
        >
          {en
            ? "External support that feels like part of your own team."
            : "Externe Unterstützung, die sich wie Ihr eigenes Team anfühlt."}
        </h2>

        <div className="mt-12 grid gap-10 border-t border-[rgba(32,32,29,0.14)] pt-10 md:grid-cols-3 md:gap-12">
          {points.map((point) => (
            <div key={point.title}>
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(26px, 2.2vw, 32px)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.02em",
                  color: "rgba(58, 58, 55, 0.9)",
                }}
              >
                {point.title}
              </h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: sans,
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "rgba(65, 65, 62, 0.68)",
                }}
              >
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
