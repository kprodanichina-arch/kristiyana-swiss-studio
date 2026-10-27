const label = "'Barlow Semi Condensed Local', Arial, sans-serif";
const sans = "'Barlow Local', Arial, sans-serif";

const items = [
  { k: "Was", v: "Ausführungsplanung, BIM/IFC, Scan-to-BIM, Visualisierung" },
  { k: "Für wen", v: "Architektur- und Planungsbüros (DACH), remote" },
  { k: "Pilotprojekt", v: "4 Stunden, 126 € / 168 CHF Festpreis" },
  { k: "Start", v: "Kurze Anfrage – Antwort in 1–2 Werktagen" },
];

export function SummaryStrip() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1800px] px-6 py-8 sm:px-10 lg:px-14 xl:px-16">
        <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.k}>
              <dt
                className="text-xs uppercase tracking-[0.16em]"
                style={{ color: "rgba(65, 65, 62, 0.56)", fontFamily: label, fontWeight: 700 }}
              >
                {item.k}
              </dt>
              <dd
                className="mt-1.5"
                style={{
                  color: "rgba(58, 58, 55, 0.88)",
                  fontFamily: sans,
                  fontSize: "16px",
                  lineHeight: "1.45",
                }}
              >
                {item.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
