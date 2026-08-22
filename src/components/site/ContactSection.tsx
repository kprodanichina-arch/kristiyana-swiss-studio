import { useState, type FormEvent } from "react";
import { Mail, Phone, Linkedin, Instagram, Download, ArrowUpRight } from "lucide-react";
import {
  CV_PATH,
  EMAIL,
  INSTAGRAM,
  LINKEDIN,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./data";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Firma: ${data.get("company")}`,
      `E-Mail: ${data.get("email")}`,
      `Projektart: ${data.get("type")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "B2B-Anfrage – " + String(data.get("company") ?? ""),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full border border-border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <p className="eyebrow">01 — Kontakt</p>
      <h1 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight sm:text-5xl">
        Kontakt &amp; B2B-Zusammenarbeit
      </h1>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="panel p-7 sm:p-10">
          <div className="grid gap-4">
            <input name="name" required placeholder="Name" className={field} />
            <input name="company" placeholder="Firma" className={field} />
            <input
              name="email"
              type="email"
              required
              placeholder="E-Mail"
              className={field}
            />
            <input name="type" placeholder="Projektart" className={field} />
            <textarea
              name="message"
              rows={5}
              placeholder="Nachricht"
              className={`${field} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-primary px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Anfrage senden
          </button>
          <p className="mt-5 inline-block border border-border px-3 py-2 text-[11px] tracking-wide text-muted-foreground">
            Professionelle B2B-Abwicklung mit ordnungsgemässer Rechnungsstellung.
          </p>
          {sent && (
            <p className="mt-4 text-xs text-muted-foreground">
              Ihr E-Mail-Programm wurde geöffnet. Vielen Dank für Ihre Anfrage.
            </p>
          )}
        </form>

        <div className="panel flex flex-col justify-between p-7 sm:p-10">
          <div>
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
              <li>
                <a
                  href={`tel:${PHONE_HREF}`}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-4">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{PHONE_DISPLAY}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
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
                    <span className="text-sm">Kristiyana Prodanichina</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-4">
                    <Instagram className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">@kristiana9999</span>
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
