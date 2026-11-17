import { createFileRoute } from "@tanstack/react-router";

import { EMAIL } from "@/components/site/data";
import { LegalPageEn } from "@/components/site/LegalPageEn";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/privacy")({
  head: () =>
    pageHead(
      "/en/privacy",
      "Privacy policy | ArchiKa",
      "Privacy policy of ArchiKa and AY END VI BILD EOOD.",
    ),
  component: PrivacyPage,
});

const mail = (
  <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 transition-opacity hover:opacity-60">
    {EMAIL}
  </a>
);

function PrivacyPage() {
  return (
    <LegalPageEn
      title="Privacy policy"
      sections={[
        {
          heading: "1. Controller",
          body: [
            <p>The controller responsible for processing personal data on this website is:</p>,
            <p>
              AY END VI BILD EOOD
              <br />
              EIK (company ID): 175310505
              <br />
              VAT ID: BG175310505
              <br />
              Frityof Nansen Str. 33
              <br />
              1000 Sofia
              <br />
              Bulgaria
            </p>,
            <p>
              Authorised representative:
              <br />
              Ivan Vasilev Delchev
            </p>,
            <p>Email: {mail}</p>,
          ],
        },
        {
          heading: "2. Visiting the website",
          body: [
            <p>
              When you access this website, technical connection data may be processed as part of the
              technical operation of the web server and the hosting provider. This may include, in
              particular, IP address, date and time of access, requested resources, browser type and
              operating system.
            </p>,
            <p>This processing serves the technical provision, security and stability of the website.</p>,
            <p>
              Where the GDPR applies, the legal basis is Art. 6(1)(f) GDPR. The legitimate interest lies
              in the secure and functional operation of the website.
            </p>,
          ],
        },
        {
          heading: "3. Contact by email",
          body: [
            <p>
              If you contact us by email, the personal data you provide – in particular your name, email
              address and the information you share – will be processed.
            </p>,
            <p>This processing serves to handle your enquiry and to communicate with you.</p>,
            <p>
              Where the GDPR applies, the legal basis is Art. 6(1)(b) GDPR if the enquiry relates to the
              conclusion or performance of a contract, or Art. 6(1)(f) GDPR for other enquiries.
            </p>,
          ],
        },
        {
          heading: "4. Contact form",
          body: [
            <p>
              The website contains a form that can be used to create a prepared email. The entries are not
              transmitted to us via a form server of our own.
            </p>,
            <p>
              After submitting the form, the email program set up on your device opens and a prepared
              message is created. The message is only transmitted once you actually send it from your
              email program.
            </p>,
            <p>
              The processing of the data you enter is then governed by the sending of the email and the
              email services used for it.
            </p>,
          ],
        },
        {
          heading: "5. WhatsApp and LinkedIn",
          body: [
            <p>
              This website contains links to WhatsApp and LinkedIn. When you click these links, you leave
              this website and are taken to the respective external services.
            </p>,
            <p>
              The respective providers are responsible for the processing of personal data on these
              platforms. Their privacy policies apply.
            </p>,
          ],
        },
        {
          heading: "6. Google Analytics",
          body: [
            <p>
              This website uses Google Analytics 4, a web analytics service provided by Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Ireland.
            </p>,
            <p>
              Google Analytics is used to evaluate the use of this website statistically and to better
              understand how visitors reach the website and which content they view.
            </p>,
            <p>
              Google Analytics is only activated on this website if you have expressly consented via the
              consent banner displayed. If you decline analytics, Google Analytics is not loaded.
            </p>,
            <p>
              Your consent decision is stored on your device so that your choice can be taken into account
              on later visits.
            </p>,
            <p>
              As part of Google Analytics, Google processes in particular information about the use of the
              website, such as page views, interactions, technical information about the device and browser
              used, and information about where the visit came from.
            </p>,
            <p>
              Processing takes place solely on the basis of your consent. Where the GDPR applies, the legal
              basis is Art. 6(1)(a) GDPR.
            </p>,
            <p>
              You can withdraw your consent at any time by deleting the stored consent decision in your
              browser settings and then visiting the website again.
            </p>,
            <p>
              Further information on the processing of personal data by Google Analytics and the available
              privacy controls can be found in Google's privacy information.
            </p>,
          ],
        },
        {
          heading: "7. Cookies and consent",
          body: [
            <p>
              Google Analytics may use analytics cookies and similar technologies. On this website, these
              are only activated after express consent to analytics. Without consent, Google Analytics is
              not loaded and no analytics cookies are set by Google Analytics.
            </p>,
            <p>
              Technically necessary data required for the secure and functional operation of the website
              may remain unaffected by this.
            </p>,
          ],
        },
        {
          heading: "8. Your rights",
          body: [
            <p>Where the legal requirements are met, you have in particular the following rights:</p>,
            <ul className="list-disc space-y-2 pl-5">
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to certain processing</li>
            </ul>,
            <p>You also have the right to lodge a complaint with a competent data protection supervisory authority.</p>,
          ],
        },
        {
          heading: "9. Storage period",
          body: [
            <p>
              Personal data is only stored for as long as necessary for the respective purposes or as
              required by statutory retention obligations.
            </p>,
            <p>
              For Google Analytics, the retention period of the data processed by Google can be set in the
              settings of the respective Analytics property.
            </p>,
          ],
        },
        {
          heading: "10. Changes to this privacy policy",
          body: [
            <p>
              This privacy policy may be updated if the technical or legal situation of the website
              changes.
            </p>,
          ],
        },
      ]}
    />
  );
}
