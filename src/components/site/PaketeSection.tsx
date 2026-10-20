import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PACKAGES, HOURLY_RATE, PRIMARY_TOOL, SECONDARY_TOOLS } from "./data";

const serif = "'Instrument Serif Local', Georgia, serif";
const sans = "'Barlow Local', Arial, sans-serif";
const label = "'Barlow Semi Condensed Local', Arial, sans-serif";

export function PaketeSection() {
  return (
    <section
      id="pakete"
      className="bg-[rgba(238,232,220,0.32)]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 xl:px-16">
        <div className="max-w-3xl">
          <p
            className="text-xs uppercase tracking-[0.16em]"
            style={{
              color: "rgba(65, 65, 62, 0.56)",
              fontFamily: label,
              fontWeight: 700,
            }}
          >
            Pakete & Konditionen
          </p>

          <h2
            className="mt-5 text-balance"
            style={{
              fontFamily: serif,
              fontWeight: 400,
              fontSize: "clamp(42px, 4.6vw, 70px)",
              lineHeight: "0.96",
              letterSpacing: "-0.04em",
              color: "rgba(58, 58, 55, 0.9)",
            }}
          >
            Klarer Umfang.
            <br />
            Fester Preis.
          </h2>

          <p
            className="mt-7 max-w-xl"
            style={{
              fontFamily: sans,
              fontSize: "16px",
              lineHeight: "1.65",
              color: "rgba(65, 65, 62, 0.68)",
            }}
          >
            Starten Sie mit einem kleinen Pilotprojekt und prüfen Sie Qualität,
            Kommunikation und Bürostandard, bevor Sie größere Aufgaben vergeben.
            Alle Pakete werden nach Sichtung Ihrer Unterlagen verbindlich
            angeboten – Abrechnung als B2B-Auftrag, keine Anstellung.
          </p>

          <p
            className="mt-4 max-w-xl"
            style={{
              fontFamily: sans,
              fontSize: "16px",
              lineHeight: "1.65",
              color: "rgba(58, 58, 55, 0.86)",
            }}
          >
            Unsere Preise sind niedrig, weil unsere Fixkosten niedrig sind –
            nicht, weil wir an der Sorgfalt sparen.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col border p-7 sm:p-8 ${
                pkg.highlight
                  ? "border-[rgba(32,32,29,0.45)] bg-background"
                  : "border-[rgba(32,32,29,0.16)] bg-background/60"
              }`}
            >
              <p
                className="text-[11px] uppercase tracking-[0.16em]"
                style={{
                  fontFamily: label,
                  fontWeight: 700,
                  color: "rgba(65, 65, 62, 0.56)",
                }}
              >
                {pkg.eyebrow}
              </p>

              <h3
                className="mt-4"
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(28px, 2.4vw, 36px)",
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  color: "rgba(58, 58, 55, 0.9)",
                }}
              >
                {pkg.title}
              </h3>

              <p
                className="mt-4"
                style={{
                  fontFamily: sans,
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "rgba(65, 65, 62, 0.68)",
                }}
              >
                {pkg.description}
              </p>

              <ul className="mt-5 space-y-2">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2"
                    style={{
                      fontFamily: sans,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "rgba(65, 65, 62, 0.72)",
                    }}
                  >
                    <span aria-hidden="true">–</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <p
                  style={{
                    fontFamily: serif,
                    fontSize: "28px",
                    lineHeight: "1.1",
                    color: "rgba(58, 58, 55, 0.92)",
                  }}
                >
                  {pkg.priceEU}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: sans,
                    fontSize: "13px",
                    color: "rgba(65, 65, 62, 0.58)",
                  }}
                >
                  {pkg.priceCH}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-[rgba(32,32,29,0.14)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="max-w-2xl"
            style={{
              fontFamily: sans,
              fontSize: "14px",
              lineHeight: "1.6",
              color: "rgba(65, 65, 62, 0.62)",
            }}
          >
            Aufgaben außerhalb der Pakete: {HOURLY_RATE.eu} bzw.{" "}
            {HOURLY_RATE.ch}. Preise netto. Bearbeitung in {PRIMARY_TOOL}, auf
            Wunsch auch in {SECONDARY_TOOLS.join(", ").replace(/, ([^,]*)$/, " und $1")}.
          </p>

          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          >
            Pilotprojekt anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
