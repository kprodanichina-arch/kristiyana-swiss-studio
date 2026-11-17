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
  images: PortfolioImage[];
};

export const portfolioSections: PortfolioSection[] = [
  {
    id: "ausfuehrungsplanung",
    eyebrow: "Ausführungsplanung & Archicad Automatisierung",
    title: "Technische Planung & effiziente Archicad-Workflows",
    description:
      "Ausführungs- und Detailplanung sowie strukturierte Bearbeitung und Optimierung von Archicad-Projekten – einschliesslich Modellprüfung, Auswertungen, Dokumentation und Automatisierung wiederkehrender Arbeitsschritte.",
    images: [],
  },
  {
    id: "ifc-openbim-bimcloud",
    eyebrow: "IFC Koordination, OpenBIM & BIMcloud",
    title: "Strukturierte BIM-Koordination",
    description:
      "Koordination und Verwaltung von BIM-Modellen mit IFC, OpenBIM und BIMcloud – einschliesslich Modellzusammenführung, IFC-Datenprüfung und strukturiertem Datenaustausch zwischen Planungspartnern.",
    images: [],
  },
  {
    id: "fassaden",
    eyebrow: "Fassaden & Ansichten",
    title: "Fassadenplanung & architektonische Ansichten",
    description:
      "Bearbeitung von Fassaden, Ansichten und technischen Planunterlagen für eine klare und konsistente Projektdokumentation.",
    images: [],
  },
  {
    id: "visualisierung",
    eyebrow: "Architekturvisualisierung",
    title: "Fotorealistische Visualisierungen",
    description:
      "Architekturvisualisierungen für Präsentationen, Projektkommunikation und die Darstellung von Entwurfs- und Planungsvarianten.",
    images: [],
  },
  {
    id: "scan-to-bim",
    eyebrow: "Scan-to-BIM",
    title: "Punktwolken & Bestandsmodellierung",
    description:
      "Aufbereitung vorhandener Punktwolken und anschliessende Modellierung von Bestandsgebäuden in Archicad. Übergabe strukturierter BIM-Modelle und IFC-fähiger Projektdaten.",
    images: [],
  },
  {
    id: "projektunterstuetzung",
    eyebrow: "Projektunterstützung",
    title: "Externe Unterstützung für Ihr Planungsteam",
    description:
      "Flexible Unterstützung bei einzelnen Aufgaben oder innerhalb laufender Projekte – angepasst an Ihre Arbeitsweise, Projektstruktur und Kapazitätsbedarf.",
    images: [],
  },
];

/** Main tool and additional tools offered on request. */
export const PRIMARY_TOOL = "Archicad";
export const SECONDARY_TOOLS = ["Revit", "Rhino", "Grasshopper"] as const;

export type Package = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  includes: string[];
  highlight?: boolean;
};

export const PACKAGES: Package[] = [
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
  },
  {
    id: "scan-to-bim",
    eyebrow: "Scan-to-BIM",
    title: "Punktwolke zum Bestandsmodell",
    description:
      "Aufbereitung vorhandener Punktwolken und Modellierung des Bestandsgebäudes in Archicad – als Grundlage für Umbau, Sanierung oder Aufstockung.",
    includes: [
      "Import & Bereinigung der Punktwolke (z. B. E57)",
      "Bestandsmodell in Archicad, LOD nach Absprache",
      "Bestandspläne & IFC-Übergabe",
    ],
  },
  {
    id: "werkplanung",
    eyebrow: "Ausführungsplanung",
    title: "Werkplanung je Geschoss",
    description:
      "Ausführungspläne für ein Geschoss oder einen Bauabschnitt – Grundriss, Schnitte, Ansichten.",
    includes: [
      "Grundriss, Schnitte, Ansichten",
      "Bemassung & Beschriftung nach Bürostandard",
      "Planlayout & PDF/DWG-Ausgabe",
    ],
  },
  {
    id: "kontingent",
    eyebrow: "Laufende Unterstützung",
    title: "Stundenkontingent 40 h",
    description:
      "Flexible Kapazität für Spitzenzeiten – abrufbar über bis zu zwei Monate.",
    includes: [
      "40 Stunden, flexibel abrufbar",
      "feste Ansprechpartnerin",
      "Abrechnung nach Leistungsnachweis",
    ],
  },
];

export const PROJECT_TYPES = [
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

export const PACKAGES_EN: Package[] = [
  {
    id: "modellcheck",
    eyebrow: "BIM / IFC",
    title: "Model check & IFC preparation",
    description:
      "Review and clean-up of an existing Archicad model, with IFC export for consultants.",
    includes: [
      "Model review & clean-up",
      "Classification & properties",
      "IFC export with checking report",
    ],
  },
  {
    id: "scan-to-bim",
    eyebrow: "Scan-to-BIM",
    title: "Point cloud to as-built model",
    description:
      "Preparation of existing point clouds and modelling of the existing building in Archicad – as a basis for refurbishment, conversion or extension.",
    includes: [
      "Point cloud import & clean-up (e.g. E57)",
      "As-built model in Archicad, LOD as agreed",
      "Existing-condition drawings & IFC handover",
    ],
  },
  {
    id: "werkplanung",
    eyebrow: "Construction documentation",
    title: "Construction drawings per floor",
    description:
      "Construction drawings for one floor or building phase – plan, sections, elevations.",
    includes: [
      "Plan, sections, elevations",
      "Dimensioning & annotation to your office standard",
      "Sheet layout & PDF/DWG output",
    ],
  },
  {
    id: "kontingent",
    eyebrow: "Ongoing support",
    title: "40-hour block",
    description:
      "Flexible capacity for peak periods – available to call on over up to two months.",
    includes: [
      "40 hours, used flexibly",
      "one dedicated contact person",
      "invoiced against timesheets",
    ],
  },
];

export const PROJECT_TYPES_EN = [
  "Construction documentation & detailing",
  "Archicad",
  "Revit",
  "Rhino / Grasshopper",
  "Archicad automation",
  "Model checking & quality control",
  "BIM model clean-up",
  "IFC coordination",
  "OpenBIM",
  "BIMcloud",
  "IFC export & BIM data",
  "Scan-to-BIM / point clouds",
  "As-built modelling in Archicad",
  "Facade design",
  "Quantity take-off",
  "Sections & elevations",
  "Architectural visualisation",
  "Ongoing project support",
] as const;
