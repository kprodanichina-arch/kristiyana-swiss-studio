import { createFileRoute } from "@tanstack/react-router";

import { EMAIL } from "@/components/site/data";
import { LegalPageEn } from "@/components/site/LegalPageEn";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/imprint")({
  head: () =>
    pageHead(
      "/en/imprint",
      "Imprint | ArchiKa",
      "Imprint and provider information for ArchiKa and AY END VI BILD EOOD.",
    ),
  component: ImprintPage,
});

const mail = (
  <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 transition-opacity hover:opacity-60">
    {EMAIL}
  </a>
);

function ImprintPage() {
  return (
    <LegalPageEn
      title="Imprint"
      sections={[
        {
          heading: "Provider",
          body: [
            <p>
              AY END VI BILD EOOD
              <br />
              Single-member limited liability company (EOOD)
              <br />
              EIK (company ID): 175310505
              <br />
              VAT ID: BG175310505
            </p>,
            <p>
              Frityof Nansen Str. 33
              <br />
              1000 Sofia
              <br />
              Bulgaria
            </p>,
          ],
        },
        { heading: "Authorised representative", body: [<p>Ivan Vasilev Delchev</p>] },
        { heading: "Contact", body: [<p>Email: {mail}</p>] },
        {
          heading: "Professional title",
          body: [
            <p>
              Architect
              <br />
              Professional qualification obtained in Bulgaria
              <br />
              Member of the Chamber of Architects in Bulgaria (KAB)
            </p>,
          ],
        },
        {
          heading: "Responsible for content",
          body: [
            <p>
              AY END VI BILD EOOD
              <br />
              represented by Ivan Vasilev Delchev
            </p>,
          ],
        },
      ]}
      note="ArchiKa is the trading name for the architecture, BIM and visualisation services of AY END VI BILD EOOD presented on this website."
    />
  );
}
