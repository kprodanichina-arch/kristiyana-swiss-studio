# Kristiyana Prodanichina: Swiss Architecture

Create a premium, minimalist B2B Architectural Portfolio website for Kristiyana Prodanichina, tailored specifically for the Swiss corporate and B2B architecture market.

DESIGN, COLOR & AESTHETIC REQUIREMENTS:
- Main Background: Change the entire website background to a very soft, premium off-white/light gray tone (such as #F8F9FA or #F9F9FB) that resembles high-end drafting paper. 
- Component Styling: All text content blocks, forms, contact fields, and project cards must have a strictly solid PURE WHITE (#FFFFFF) background.
- Shadow Effects: Add very subtle, soft, and elegant drop shadows (e.g., box-shadow: 0 4px 20px rgba(0,0,0,0.03)) to these pure white containers. This will make them pop out with a beautiful, artistic, gallery-like depth from the off-white background.
- Typography & Style: Swiss minimalist, clean lines, high-end typography (Helvetica Neue or Inter), generous whitespace, dark charcoal/black for text.

PORTFOLIO & FILE-LOADING ARCHITECTURE (Credit-Saving Setup):
- Configure Section 4 (Architecture Projects) and Section 5 (Independent Renders) to dynamically load images from local 'public' folder paths. This allows me to upload my high-resolution drawings later via GitHub for free.
- Project Carousel: The full-screen Lightbox for each of the 10 projects must look for 10 sequential images located at: `/images/projects/project1/1.webp` up to `/images/projects/project1/10.webp` (and respectively for project2, project3, etc.).
- Independent Gallery: Section 5 must dynamically load images from `/images/renders/1.webp`, `/images/renders/2.webp`, etc. Provide elegant gray placeholders with the soft shadow style if files are missing, so the grid layout never breaks.
- CV PDF Download Setup: Configure all CV download buttons to look for a file named `Lebenslauf_Kristiyana_Prodanichina.pdf` placed directly inside the `/public/` folder, allowing me to upload it later via GitHub for free.

WEBSITE STRUCTURE & EXACT TEXTS (Use Swiss German with "ss" instead of "ss"):

SECTION 1: CONTACT (Kontakt) - Top Section
- Title: Kontakt & B2B-Zusammenarbeit
- Layout: 2-column clean grid.
  * Left Column: A minimal B2B contact form (Name, Company, Email, Project Type, Message). Add a small text badge: "Professionelle B2B-Abwicklung mit ordnungsgemässer Rechnungsstellung."
  * Right Column: Direct Professional Contacts block:
    - Email: k.prodanichina@gmail.com (Make it a clickable 'mailto:' link)
    - Telefon: +359 878 63 50 60 (Make it a clickable 'tel:' link)
    - LinkedIn: "Kristiyana Prodanichina" (Add a sleek button or link placeholder to my LinkedIn profile)
    - Instagram: @kristiana9999 (Add a sleek link placeholder to my Instagram)
    - CV Download Button: Add a premium minimalist button labeled "Lebenslauf herunterladen (PDF)" that links directly to the PDF file path.

SECTION 2: ABOUT ME (Über mich)
- Title: Über mich
- Text contents:
"Mein Name ist Kristiyana Prodanichina. Bei mir finden Sie keine Grossagentur mit komplizierten Hierarchien und langen Kommunikationswegen – ich bin Ihre direkte Ansprechpartnerin. Ich zeichne mich durch eine hohe Motivation und den klaren Wunsch nach kontinuierlicher Weiterentwicklung aus. Gerne präsentiere ich Ihnen in diesem Portfolio meinen beruflichen Werdegang und meine bisherigen Erfahrungen.

Mein primäres und ehrliches Ziel ist es, eine partnerschaftliche und erfolgreiche Zusammenarbeit mit meinen Kunden zu erreichen – unabhängig davon, wie viele Korrekturschleifen bis zum perfekten Ergebnis nötig sind. Gleichzeitig bin ich äusserst flexibel und offen for verschiedene Projektarten, ganz abgestimmt auf Ihre individuellen Bedürfnisse.

Aktuell fokussiere ich mich in meiner täglichen Arbeit auf ArchiCAD, Twinmotion und D5 Render. Da ich im Laufe der Jahre jedoch auch intensiv mit AutoCAD, Revit, Vectorworks und Lumion gearbeitet habe, kann ich mich schnell und flexibel an Ihre bestehenden Software-Workflows anpassen. Nachfolgend finden Sie eine Auswahl meiner aktuellen Projekte."
- CV Download Button: Below this text, add a beautiful, wide, minimal button labeled "Lebenslauf als PDF ansehen" linked to the PDF file path.

SECTION 3: PROFESSIONAL EXPERIENCE (Berufserfahrung)
- Title: Berufserfahrung
- Timeline layout (ordered from newest to oldest):
  * "Seit 10/2025: Architektin | Alvi BG
    Projektierung von grossen Wohngebäuden (über 2000 m²). Eigenverantwortliche Abwicklung des gesamten Arbeitsprozesses nach bulg. Baugesetz (ZUT): Von der Konzeptphase über die Ausführungs- und Detailplanung bis hin zu fotorealistischen Visualisierungen und der Zusammenstellung der Projektmappen."
  * "2024 – 2025: Elternzeit (Pause aufgrund von Mutterschaft)"
  * "2024: Master-Abschluss in Architektur
    Universität für Architektur, Bauingenieurwesen und Geodäsie (UACEG)"
  * "08/2022 – 12/2023: Projektleiterin Planung, Administration & Bauwesen | I and V build"
  * "07/2021 – 08/2022: Praktikantin Architektur | Berkein Architects"
  * "2015 – 2018: Servicemitarbeiterin / Gastronomie (Frühe Arbeitsmoral und starke Kundenorientierung)"

SECTION 4: PORTFOLIO PROJECTS (Architektur-Projekte)
- Create a clean minimalist grid of 10 project placeholders.
- Each project card must have:
  * A title placeholder and a description text box for project specs.
  * 1-2 featured high-end render images visible on the card.
  * A "Projekt ansehen" (View Project) button.
  * Clicking the button must open a full-screen Lightbox/Carousel slider. This slider must allow the user to click through at least 10 architectural drawings and plans per project (`1.webp` to `10.webp`), page-by-page.

SECTION 5: INDEPENDENT RENDERS GALLERY (Visualisierungen)
- Title: Visualisierungen & Renders
- Description: "Ein Einblick in meine laufenden kreativen und fotorealistischen Arbeiten."
- Create a clean dynamic grid gallery solely for high-end renderings that loads files from `/images/renders/` path.

SECTION 6: STRENGTHS & B2B STRATEGY (Warum Sie von einer Zusammenarbeit profitieren)
- Title: Warum Sie von einer Zusammenarbeit profitieren (Ihre Vorteile)
- Layout: A clean 4-column or 2x2 grid with modern icons. Text contents:
  1. "Erfahrung mit Grossprojekten
     Durch meine tägliche Arbeit an Wohngebäuden über 2000 m² bin ich bestens vertraut mit komplexen Strukturen, präziser Ausführungsplanung und der professionellen Strukturierung grosser Projektmappen."
  2. "Umfassender Workflow aus einer Hand
     Von der ersten Konzeption bis zum präzisen Detail – ich übernehme nicht nur die CAD-Konstruktion, sondern liefere dank Twinmotion und D5 Render auch High-End-Visualisierungen. Das spart Ihnen Zeit und die Koordination mit externen Rendering-Agenturen."
  3. "Nahtlose Software-Integration
     Mein aktueller Fokus liegt auf ArchiCAD, aber dank jahrelanger Erfahrung mit AutoCAD, Revit, Vectorworks und Lumion füge ich mich nahtlos und ohne Einarbeitungszeit in Ihre bestehende CAD-Infrastruktur ein."
  4. "Maximale Kosteneffizienz & B2B-Fakturierung
     Senken Sie Ihre Fixkosten strategisch. Sie zahlen ausschliesslich für effektiv geleistete Projektstunden – ohne Schweizer Lohnnebenkosten, teure zusätzliche Software-Lizenzen oder Arbeitsplatzgebühren decken zu müssen. Die Abrechnung erfolgt professionell über ordnungsgemässe B2B-Rechnungen."

FOOTER SECTION:
- Include a sleek, minimal footer.
- Add copyright text: "© Kristiyana Prodanichina. All rights reserved."
- Place professional, minimalist icon links for LinkedIn, Instagram, Email, and Phone using the same contact credentials provided above.

DEVELOPMENT INSTRUCTIONS:
- Ensure strict responsive layout. On desktop, keep images aligned cleanly side-by-side with text or in the exact grid described.
- Use a premium, sleek navigation bar that smoothly scrolls to these sections.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d6fd6b90-184e-4869-97a7-b672be9f5a96).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
