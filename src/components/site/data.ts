export const CV_PATH = "/Lebenslauf_Kristiyana_Prodanichina.pdf";

export const EMAIL = "k.prodanichina@gmail.com";

export const PHONE_DISPLAY = "+359 878 63 50 60";

export const WHATSAPP_HREF = "https://wa.me/+359878635060";

export const VIBER_HREF = "viber://chat?number=%2B359878635060";

export const LINKEDIN =
  "https://www.linkedin.com/in/kristiyana-prodanichina";

export type PortfolioImage = {
  src: string;
  alt: string;
};

export type PortfolioSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  price?: string;
  images: PortfolioImage[];
};

export const portfolioSections: PortfolioSection[] = [
  {
    id: "ausfuehrungsplanung",
    eyebrow: "02 — Ausführungsplanung",
    title: "Technische Planung & Dokumentation",
    description:
      "Ausführungs- und Detailplanung für Architekturprojekte – von der Bearbeitung von Grundrissen, Schnitten und Ansichten bis zur detaillierten Planaufbereitung.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "fassaden",
    eyebrow: "03 — Fassaden & Ansichten",
    title: "Fassadenplanung & architektonische Ansichten",
    description:
      "Bearbeitung von Fassaden, Ansichten und technischen Planunterlagen für eine klare und konsistente Projektdokumentation.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "visualisierung",
    eyebrow: "04 — Architekturvisualisierung",
    title: "Fotorealistische Visualisierungen",
    description:
      "Architekturvisualisierungen für Präsentationen, Projektkommunikation und die Darstellung von Entwurfs- und Planungsvarianten.",
    price: "Preis pro Visualisierung: 250–450 €",
    images: [],
  },
  {
    id: "bim",
    eyebrow: "05 — BIM & digitale Planung",
    title: "BIM-basierte Planungsleistungen",
    description:
      "Digitale Bearbeitung von Architekturprojekten mit Archicad und IFC-basierten Workflows – einschließlich strukturierter Modellierung, Mengenermittlung und digitaler Planungsprozesse.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "scan-to-bim",
    eyebrow: "06 — Scan-to-BIM",
    title: "Punktwolken & Bestandsmodellierung",
    description:
      "Aufbereitung vorhandener Punktwolken und anschließende Modellierung von Bestandsgebäuden in Archicad. Übergabe strukturierter BIM-Modelle und IFC-fähiger Projektdaten.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "projektunterstuetzung",
    eyebrow: "07 — Projektunterstützung",
    title: "Externe Unterstützung für Ihr Planungsteam",
    description:
      "Flexible Unterstützung bei einzelnen Aufgaben oder innerhalb laufender Projekte – angepasst an Ihre Arbeitsweise, Projektstruktur und Kapazitätsbedarf.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
];

export const PROJECT_TYPES = [
  "Ausführungs- & Detailplanung",
  "BIM & IFC",
  "Mengenermittlung",
  "Schnitte & Ansichten",
  "Fassadenplanung",
  "Scan-to-BIM / Punktwolken",
  "Bestandsmodellierung in Archicad",
  "IFC-Export & BIM-Daten",
  "Architekturvisualisierung",
  "Laufende Projektunterstützung",
] as const;