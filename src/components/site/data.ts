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
    eyebrow: "Ausführungsplanung & Archicad Automatisierung",
    title: "Technische Planung & effiziente Archicad-Workflows",
    description:
      "Ausführungs- und Detailplanung sowie strukturierte Bearbeitung und Optimierung von Archicad-Projekten – einschließlich Modellprüfung, Auswertungen, Dokumentation und Automatisierung wiederkehrender Arbeitsschritte.",
    price: "Stundensatz ab 55 € · CH ab 70 CHF",
    images: [],
  },
  {
    id: "ifc-openbim-bimcloud",
    eyebrow: "IFC Koordination, OpenBIM & BIMcloud",
    title: "Strukturierte BIM-Koordination",
    description:
      "Koordination und Verwaltung von BIM-Modellen mit IFC, OpenBIM und BIMcloud – einschließlich Modellzusammenführung, IFC-Datenprüfung und strukturiertem Datenaustausch zwischen Planungspartnern.",
    price: "Stundensatz ab 55 € · CH ab 70 CHF",
    images: [],
  },
  {
    id: "fassaden",
    eyebrow: "Fassaden & Ansichten",
    title: "Fassadenplanung & architektonische Ansichten",
    description:
      "Bearbeitung von Fassaden, Ansichten und technischen Planunterlagen für eine klare und konsistente Projektdokumentation.",
    price: "Stundensatz ab 55 € · CH ab 70 CHF",
    images: [],
  },
  {
    id: "visualisierung",
    eyebrow: "Architekturvisualisierung",
    title: "Fotorealistische Visualisierungen",
    description:
      "Architekturvisualisierungen für Präsentationen, Projektkommunikation und die Darstellung von Entwurfs- und Planungsvarianten.",
    price: "Preis pro Visualisierung: 250–450 €",
    images: [],
  },
  {
    id: "scan-to-bim",
    eyebrow: "Scan-to-BIM",
    title: "Punktwolken & Bestandsmodellierung",
    description:
      "Aufbereitung vorhandener Punktwolken und anschließende Modellierung von Bestandsgebäuden in Archicad. Übergabe strukturierter BIM-Modelle und IFC-fähiger Projektdaten.",
    price: "Stundensatz ab 55 € · CH ab 70 CHF",
    images: [],
  },
  {
    id: "projektunterstuetzung",
    eyebrow: "Projektunterstützung",
    title: "Externe Unterstützung für Ihr Planungsteam",
    description:
      "Flexible Unterstützung bei einzelnen Aufgaben oder innerhalb laufender Projekte – angepasst an Ihre Arbeitsweise, Projektstruktur und Kapazitätsbedarf.",
    price: "Stundensatz ab 55 € · CH ab 70 CHF",
    images: [],
  },
];

/** Main tool and additional tools offered on request. */
export const PRIMARY_TOOL = "Archicad";
export const SECONDARY_TOOLS = ["Revit", "Rhino", "Grasshopper"] as const;

export const HOURLY_RATE = {
  eu: "55 €/h",
  ch: "70 CHF/h",
};

export type Package = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  includes: string[];
  priceEU: string;
  priceCH: string;
  highlight?: boolean;
};

export const PACKAGES: Package[] = [
  {
    id: "pilot",
    eyebrow: "Einstieg",
    title: "Pilotprojekt",
    description:
      "Eine klar abgegrenzte Testaufgabe aus Ihrem laufenden Projekt – zum Kennenlernen ohne Risiko.",
    includes: [
      "bis 8 Arbeitsstunden",
      "Arbeit in Ihrem Bürostandard",
      "Übergabe in 2–3 Werktagen",
      "Feedbackgespräch danach",
    ],
    priceEU: "300 € Festpreis",
    priceCH: "Schweiz: 400 CHF",
    highlight: true,
  },
  {
    id: "modellcheck",
    eyebrow: "BIM / IFC",
    title: "Modell-Check & IFC-Aufbereitung",
    description:
      "Prüfung und Bereinigung eines bestehenden Archicad-Modells, IFC-Export für Fachplaner.",
    includes: [
      "Modellprüfung & Bereinigung",
      "Klassifizierung & Attribute",
      "IFC-Export mit Prüfprotokoll",
    ],
    priceEU: "ab 450 €",
    priceCH: "Schweiz: ab 600 CHF",
  },
  {
    id: "werkplanung",
    eyebrow: "Ausführungsplanung",
    title: "Werkplanung je Geschoss",
    description:
      "Ausführungspläne für ein Geschoss oder einen Bauabschnitt – Grundriss, Schnitte, Ansichten.",
    includes: [
      "Grundriss, Schnitte, Ansichten",
      "Bemaßung & Beschriftung nach Bürostandard",
      "Planlayout & PDF/DWG-Ausgabe",
    ],
    priceEU: "ab 400 €",
    priceCH: "Schweiz: ab 550 CHF",
  },
  {
    id: "kontingent",
    eyebrow: "Laufende Unterstützung",
    title: "Stundenkontingent 40 h",
    description:
      "Flexible Kapazität für Spitzenzeiten – abrufbar über bis zu zwei Monate.",
    includes: [
      "40 Stunden zum reduzierten Satz",
      "feste Ansprechpartnerin",
      "Abrechnung nach Leistungsnachweis",
    ],
    priceEU: "ab 1.700 €",
    priceCH: "Schweiz: ab 2.300 CHF",
  },
];

export const PROJECT_TYPES = [
  "Pilotprojekt (Festpreis)",
  "Ausführungs- & Detailplanung",
  "Archicad",
  "Revit",
  "Rhino / Grasshopper",
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
