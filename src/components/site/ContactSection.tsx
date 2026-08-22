import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Instagram, Download, ArrowUpRight } from "lucide-react";
import {
  CV_PATH,
  EMAIL,
  INSTAGRAM,
  LINKEDIN,
  PHONE_DISPLAY,
  WHATSAPP_HREF,
  VIBER_HREF,
} from "./data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 6.32 17.6l-1.1 4 4-1.1a7.85 7.85 0 1 0 8.38-14.18Zm-4.21 11.2a5.56 5.56 0 0 1-3.6 1.07l-.42-.03-2.5.69.67-2.44-.04-.4a5.57 5.57 0 1 1 5.9.11Z" />
      <path d="M13.24 11.8c-.07-.1-.24-.16-.5-.16-.25 0-.44.06-.5.16-.08.12-.1.28-.1.5v1.3c0 .3.1.5.3.64.2.13.45.2.75.2h.06c.32 0 .57-.07.75-.2.2-.14.3-.35.3-.65v-1.3c0-.21-.02-.37-.1-.5Zm-3.1 0c-.07-.1-.24-.16-.5-.16-.25 0-.44.06-.5.16-.08.12-.1.28-.1.5v1.3c0 .3.1.5.3.64.2.13.45.2.75.2h.06c.32 0 .57-.07.75-.2.2-.14.3-.35.3-.65v-1.3c0-.21-.02-.37-.1-.5Z" />
    </svg>
  );
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a8.76 8.76 0 0 0-8.93 8.7c0 2.8 1.45 4.9 2.9 5.9v2.5a1.17 1.17 0 0 0 2 1l2.3-2.1H12a8.76 8.76 0 0 0 8.93-8.7A8.76 8.76 0 0 0 12 2Zm3.7 6.1c.2 0 .3.1.3.3 0 .2-.1.3-.3.3-1.1 0-2 .5-2.6 1.5-.1.1-.2.2-.3.2-.2 0-.3-.1-.3-.3 0-.1 0-.2.1-.2.8-1.2 2-1.9 3.1-1.9Zm0-2c.2 0 .3.1.3.3 0 .2-.1.3-.3.3-2.3 0-4.2 1.2-5.1 3.3-.1.2-.2.2-.3.2-.2 0-.3-.1-.3-.3 0-.1 0-.1.1-.2 1-2.4 3.2-3.9 5.6-3.9Zm0-2c.2 0 .3.1.3.3 0 .2-.1.3-.3.3-3.5 0-6.3 2.2-7.3 5.6 0 .1-.1.2-.2.2-.2 0-.3-.1-.3-.3 0-.1 0-.1.1-.2 1.1-3.8 4.2-6.2 7.7-6.2Zm-5.2 7.2c.2 0 .3.1.3.3 0 .1 0 .2-.1.2-.5.6-.8 1.4-.8 2.2 0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3 0-1 .4-1.9 1-2.6.1-.1.2-.1.3-.1Z" />
    </svg>
  );
}


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
