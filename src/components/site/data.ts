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
    eyebrow: "03 — Fassaden & Details",
    title: "Fassadenplanung & architektonische Details",
    description:
      "Fassaden, Ansichten und ausgewählte architektonische Details aus verschiedenen Projekten.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "visualisierung",
    eyebrow: "04 — Architekturvisualisierung",
    title: "Fotorealistische Visualisierungen",
    description:
      "Architekturvisualisierungen für Präsentationen, Projektkommunikation und die Darstellung von Entwurfs- und Planungsvarianten.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "bim",
    eyebrow: "05 — BIM & digitale Planung",
    title: "Digitale Planungsleistungen",
    description:
      "Digitale Bearbeitung von Architekturprojekten mit Fokus auf strukturierte Planungsprozesse und bestehende Software-Workflows.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "projektunterstuetzung",
    eyebrow: "06 — Projektunterstützung",
    title: "Externe Unterstützung für Ihr Planungsteam",
    description:
      "Flexible Unterstützung bei einzelnen Aufgaben oder innerhalb laufender Projekte – angepasst an Ihre Arbeitsweise, Projektstruktur und Kapazitätsbedarf.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
];
export const PROJECT_TYPES = [
  "Wohngebäude (über 2.000 m²)",
  "Ausführungs- & Detailplanung",
  "High-End 3D-Visualisierung (Twinmotion / D5 Render)",
  "2D-Visualisierung & Planaufbereitung",
  "CAD-Workflows & Datenkonvertierung",
] as const;
