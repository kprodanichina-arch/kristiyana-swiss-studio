import { Mail, Linkedin, Download, ArrowUpRight } from "lucide-react";
import {
  CV_PATH,
  EMAIL,
  LINKEDIN,
  PHONE_DISPLAY,
  WHATSAPP_HREF,
  PROJECT_TYPES,
} from "./data";

import { WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";

export function ContactSection() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const body = [
      `Name: ${data.get("name")}`,
      `Firma: ${data.get("company")}`,
      `E-Mail: ${data.get("email")}`,
      `Art der Unterstützung: ${data.get("type")}`,
      `Zeitrahmen: ${data.get("timeframe")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    const subject =
      "B2B-Anfrage – " + String(data.get("company") || "ArchiKa");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full border border-border bg-white px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  return (
    <section
      id="kontakt"
      className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24"
    >
      <p
        className="eyebrow"
        style={{
          fontFamily:
            "'Barlow Semi Condensed Local', Arial, sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(65, 65, 62, 0.55)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        07 — Kontakt
      </p>

      <h1
        className="mt-4 max-w-3xl"
        style={{
          fontFamily:
            "'Instrument Serif Local', Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(48px, 5vw, 72px)",
          lineHeight: "0.94",
          letterSpacing: "-0.035em",
          color: "rgba(58, 58, 55, 0.90)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        Projekt anfragen
      </h1>

      <p
        className="mt-6 max-w-2xl"
        style={{
          fontFamily: "'Barlow Local', Arial, sans-serif",
          fontWeight: 400,
          fontSize: "17px",
          lineHeight: "1.65",
          color: "rgba(65, 65, 62, 0.68)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        Sie suchen kurzfristig zusätzliche Unterstützung oder möchten einzelne
        Aufgaben in Ihrem Projekt bearbeiten lassen? Beschreiben Sie kurz
        Ihre Anforderungen – ich melde mich direkt bei Ihnen.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="panel p-7 sm:p-10">
          <div className="grid gap-4">
            <input
              name="name"
              required
              placeholder="Name *"
              className={field}
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                color: "rgba(65, 65, 62, 0.82)",
              }}
            />

            <input
              name="company"
              placeholder="Architekturbüro / Firma"
              className={field}
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                color: "rgba(65, 65, 62, 0.82)",
              }}
            />

            <input
              name="email"
              type="email"
              required
              placeholder="E-Mail *"
              className={field}
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                color: "rgba(65, 65, 62, 0.82)",
              }}
            />

            <select
              name="type"
              defaultValue=""
              required
              className={`${field} appearance-none`}
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                color: "rgba(65, 65, 62, 0.82)",
              }}
            >
              <option value="" disabled>
                Art der Unterstützung wählen *
              </option>

              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              name="timeframe"
              defaultValue=""
              className={`${field} appearance-none`}
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                color: "rgba(65, 65, 62, 0.82)",
              }}
            >
              <option value="" disabled>
                Gewünschter Zeitraum
              </option>

              <option value="Kurzfristig">Kurzfristig</option>

              <option value="In den nächsten Wochen">
                In den nächsten Wochen
              </option>

              <option value="Laufende Unterstützung">
                Laufende Unterstützung
              </option>

              <option value="Noch offen">Noch offen</option>
            </select>

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Kurzbeschreibung des Projekts oder der benötigten Unterstützung *"
              className={`${field} resize-none`}
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                lineHeight: "1.55",
                color: "rgba(65, 65, 62, 0.82)",
              }}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full px-6 py-4 transition-opacity hover:opacity-85"
            style={{
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              backgroundColor: "#20201d",
              color: "#eee8dc",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            E-Mail-Anfrage erstellen
          </button>

          <p
            className="mt-5"
            style={{
              fontFamily: "'Barlow Local', Arial, sans-serif",
              fontSize: "12px",
              lineHeight: "1.55",
              letterSpacing: "0.02em",
              color: "rgba(65, 65, 62, 0.55)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Beim Absenden wird eine vorbereitete E-Mail mit Ihren Angaben
            erstellt. Sie können diese anschließend über Ihr eigenes
            E-Mail-Programm prüfen und versenden.
          </p>
        </form>

        <div className="panel flex flex-col justify-between p-7 sm:p-10">
          <div>
            <Logo className="mb-8 h-24 w-auto sm:h-[150px]" />

            <p
              className="eyebrow"
              style={{
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(65, 65, 62, 0.55)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Direkter Kontakt
            </p>

            <ul className="mt-8 divide-y divide-border">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-4">
                    <Mail className="h-4 w-4 text-muted-foreground" />

                    <span
                      style={{
                        fontFamily:
                          "'Barlow Local', Arial, sans-serif",
                        fontSize: "15px",
                        color: "rgba(65, 65, 62, 0.78)",
                      }}
                    >
                      {EMAIL}
                    </span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
                </a>
              </li>

              <li className="flex items-center justify-between gap-4 py-5">
                <span className="flex items-center gap-4">
                  <WhatsAppIcon className="h-4 w-4 text-muted-foreground" />

                  <span
                    style={{
                      fontFamily:
                        "'Barlow Local', Arial, sans-serif",
                      fontSize: "15px",
                      color: "rgba(65, 65, 62, 0.78)",
                    }}
                  >
                    WhatsApp {PHONE_DISPLAY}
                  </span>
                </span>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-foreground"
                  aria-label="WhatsApp öffnen"
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "rgba(65, 65, 62, 0.58)",
                  }}
                >
                  Chat

                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                </a>
              </li>

              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-4">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />

                    <span
                      style={{
                        fontFamily:
                          "'Barlow Local', Arial, sans-serif",
                        fontSize: "15px",
                        color: "rgba(65, 65, 62, 0.78)",
                      }}
                    >
                      Kristiyana Prodanichina
                    </span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>

          <a
            href={CV_PATH}
            download
            className="mt-10 inline-flex items-center justify-center gap-3 border px-6 py-4 transition-colors hover:bg-[#20201d] hover:text-[#eee8dc]"
            style={{
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#20201d",
              borderColor: "rgba(32, 32, 29, 0.30)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <Download className="h-4 w-4" />
            Lebenslauf herunterladen (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}