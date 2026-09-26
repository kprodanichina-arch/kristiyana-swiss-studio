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
      "B2B-Anfrage – " + String(data.get("company") || "ArchiK");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full border border-border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  return (
    <section
      id="kontakt"
      className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24"
    >
      <p className="eyebrow">07 — Kontakt</p>

      <h1 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight sm:text-5xl">
        Projekt anfragen
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Sie suchen kurzfristig zusätzliche Unterstützung oder möchten einzelne
        Aufgaben in Ihrem Projekt extern bearbeiten lassen? Beschreiben Sie
        kurz Ihre Anforderungen – ich melde mich direkt bei Ihnen.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="panel p-7 sm:p-10">
          <div className="grid gap-4">
            <input
              name="name"
              required
              placeholder="Name *"
              className={field}
            />

            <input
              name="company"
              placeholder="Architekturbüro / Firma"
              className={field}
            />

            <input
              name="email"
              type="email"
              required
              placeholder="E-Mail *"
              className={field}
            />

            <select
              name="type"
              defaultValue=""
              required
              className={`${field} appearance-none`}
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
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-primary px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            E-Mail-Anfrage erstellen
          </button>

          <p className="mt-5 text-[11px] leading-relaxed tracking-wide text-muted-foreground">
            Beim Absenden wird eine vorbereitete E-Mail mit Ihren Angaben
            erstellt. Sie können diese anschließend über Ihr eigenes
            E-Mail-Programm prüfen und versenden.
          </p>
        </form>

        <div className="panel flex flex-col justify-between p-7 sm:p-10">
          <div>
            <Logo className="mb-8 h-24 w-auto sm:h-[150px]" />

            <p className="eyebrow">Direkter Kontakt</p>

            <ul className="mt-8 divide-y divide-border">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-4">
                    <Mail className="h-4 w-4 text-muted-foreground" />

                    <span className="text-sm">{EMAIL}</span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
                </a>
              </li>

              <li className="flex items-center justify-between gap-4 py-5">
                <span className="flex items-center gap-4">
                  <WhatsAppIcon className="h-4 w-4 text-muted-foreground" />

                  <span className="text-sm">
                    WhatsApp {PHONE_DISPLAY}
                  </span>
                </span>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="WhatsApp öffnen"
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

                    <span className="text-sm">
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
            className="mt-10 inline-flex items-center justify-center gap-3 border border-foreground px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-4 w-4" />
            Lebenslauf herunterladen (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}