export const CV_PATH = "/Lebenslauf_Kristiyana_Prodanichina.pdf";
export const EMAIL = "k.prodanichina@gmail.com";
export const PHONE_DISPLAY = "+359 878 63 50 60";
export const WHATSAPP_HREF = "https://wa.me/+359878635060";
export const VIBER_HREF = "viber://chat?number=%2B359878635060";
export const LINKEDIN = "https://www.linkedin.com/in/kristiyana-prodanichina";
export const INSTAGRAM = "https://www.instagram.com/kristiana9999";

export type Project = {
  id: number;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Wohngebäude Alpha",
    description:
      "Mehrfamilienhaus, ca. 2'400 m² BGF. Konzept, Ausführungs- und Detailplanung, Projektmappe.",
  },
  {
    id: 2,
    title: "Wohnüberbauung Beta",
    description:
      "Wohnüberbauung mit Tiefgarage. Grundrisse, Schnitte, Fassadenpläne und Visualisierung.",
  },
  {
    id: 3,
    title: "Stadtvilla Gamma",
    description:
      "Einfamilienhaus in Hanglage. Entwurf, Materialisierung und fotorealistische Renders.",
  },
  {
    id: 4,
    title: "Bürogebäude Delta",
    description:
      "Verwaltungsbau mit flexiblen Grundrissen. Ausführungsplanung und Detailschnitte.",
  },
  {
    id: 5,
    title: "Wohnhaus Epsilon",
    description:
      "Umbau und Aufstockung. Bestandsaufnahme, Planungssatz und Visualisierung.",
  },
  {
    id: 6,
    title: "Reihenhäuser Zeta",
    description:
      "Reihenhauszeile, typisierte Grundrisstypen, Fassadenstudien und Renderserie.",
  },
  {
    id: 7,
    title: "Mixed-Use Eta",
    description:
      "Gewerbe im Erdgeschoss, Wohnen darüber. Nutzungskonzept und Ausführungspläne.",
  },
  {
    id: 8,
    title: "Interior Theta",
    description:
      "Innenarchitektonisches Konzept, Möblierungspläne und High-End-Innenrenders.",
  },
  {
    id: 9,
    title: "Wohnkomplex Iota",
    description:
      "Grossprojekt über 2'000 m². Projektmappe nach ZUT, Detail- und Ausführungsplanung.",
  },
  {
    id: 10,
    title: "Studie Kappa",
    description:
      "Städtebauliche Volumenstudie mit Varianten, Diagrammen und Aussenvisualisierungen.",
  },
];

export const projectImages = (id: number) =>
  Array.from({ length: 10 }, (_, i) => `/images/projects/project${id}/${i + 1}.webp`);

export const renderImages = Array.from(
  { length: 12 },
  (_, i) => `/images/renders/${i + 1}.webp`,
);
