const items = [
  {
    period: "Seit 10/2025",
    title: "Architektin | Alvi BG",
    text: "Projektierung von grossen Wohngebäuden (über 2000 m²). Eigenverantwortliche Abwicklung des gesamten Arbeitsprozesses nach bulg. Baugesetz (ZUT): Von der Konzeptphase über die Ausführungs- und Detailplanung bis hin zu fotorealistischen Visualisierungen und der Zusammenstellung der Projektmappen.",
  },
  {
    period: "2024 – 2025",
    title: "Elternzeit",
    text: "Pause aufgrund von Mutterschaft.",
  },
  {
    period: "2024",
    title: "Master-Abschluss in Architektur",
    text: "Universität für Architektur, Bauingenieurwesen und Geodäsie (UACEG).",
  },
  {
    period: "08/2022 – 12/2023",
    title: "Projektleiterin Planung, Administration & Bauwesen | I and V build",
    text: "",
  },
  {
    period: "07/2021 – 08/2022",
    title: "Praktikantin Architektur | Berkein Architects",
    text: "",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="berufserfahrung"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="eyebrow">03 — Werdegang</p>
      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
        Berufserfahrung
      </h2>

      <ol className="mt-10 space-y-4">
        {items.map((item) => (
          <li key={item.period} className="panel p-7 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-10">
              <span className="eyebrow pt-1">{item.period}</span>
              <div>
                <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
                {item.text && (
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
