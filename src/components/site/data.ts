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
    eyebrow: "02 — Ausführungsplanung & Archicad Automatisierung",
    title: "Technische Planung & effiziente Archicad-Workflows",
    description:
      "Ausführungs- und Detailplanung sowie strukturierte Bearbeitung und Optimierung von Archicad-Projekten – einschließlich Modellprüfung, Auswertungen, Dokumentation und Automatisierung wiederkehrender Arbeitsschritte.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "ifc-openbim-bimcloud",
    eyebrow: "03 — IFC Koordination, OpenBIM & BIMcloud",
    title: "Strukturierte BIM-Koordination",
    description:
      "Koordination und Verwaltung von BIM-Modellen mit IFC, OpenBIM und BIMcloud – einschließlich Modellzusammenführung, IFC-Datenprüfung und strukturiertem Datenaustausch zwischen Planungspartnern.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "fassaden",
    eyebrow: "04 — Fassaden & Ansichten",
    title: "Fassadenplanung & architektonische Ansichten",
    description:
      "Bearbeitung von Fassaden, Ansichten und technischen Planunterlagen für eine klare und konsistente Projektdokumentation.",
    price: "Stundensatz ab 55 €",
    images: [],
  },
  {
    id: "visualisierung",
    eyebrow: "05 — Architekturvisualisierung",
    title: "Fotorealistische Visualisierungen",
    description:
      "Architekturvisualisierungen für Präsentationen, Projektkommunikation und die Darstellung von Entwurfs- und Planungsvarianten.",
    price: "Preis pro Visualisierung: 250–450 €",
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
  "Archicad",
  "Archicad Automatisierung",
  "Modellprüfung & Qualitätskontrolle",
  "BIM-Modellbereinigung",
  "IFC Koordination",
  "OpenBIM",
  "BIMcloud",
  "IFC-Export & BIM-Daten",
  "Scan-to-BIM / Punktwolken",
  "Bestandsmodellierung in Archicad",
  "Fassadenplanung",
  "Mengenermittlung",
  "Schnitte & Ansichten",
  "Architekturvisualisierung",
  "Laufende Projektunterstützung",
] as const;
