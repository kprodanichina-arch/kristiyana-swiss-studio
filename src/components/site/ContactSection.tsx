import { FormEvent, useState } from "react";
import {
  EMAIL,
  PHONE_DISPLAY,
  PROJECT_TYPES,
  VIBER_HREF,
  WHATSAPP_HREF,
} from "./data";

export function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnbzqgj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="kontakt"
      className="bg-background"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 xl:gap-32">
          <div>
            <p
              className="text-xs uppercase tracking-[0.16em]"
              style={{
                color: "rgba(65, 65, 62, 0.56)",
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontWeight: 700,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              08 — Kontakt
            </p>

            <h2
              className="mt-4 max-w-3xl"
              style={{
                fontFamily: "'Instrument Serif Local', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(48px, 5vw, 72px)",
                lineHeight: "0.94",
                letterSpacing: "-0.035em",
                color: "rgba(58, 58, 55, 0.90)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Lassen Sie uns
              <br />
              Ihr Projekt
              <br />
              gemeinsam bearbeiten.
            </h2>

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
              Sie benötigen Unterstützung bei BIM, Bestandsmodellierung,
              Punktwolken, technischer Planung oder Architekturvisualisierung?
              <br />
              Beschreiben Sie kurz Ihr Projekt – ich melde mich direkt bei
              Ihnen.
            </p>

            <p
              className="mt-3"
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "rgba(65, 65, 62, 0.56)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Von der Punktwolke zum BIM-Modell. Von der Planung zur fertigen
              Dokumentation.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${EMAIL}`}
                className="block transition-opacity duration-300 hover:opacity-60"
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontSize: "16px",
                  color: "rgba(58, 58, 55, 0.82)",
                }}
              >
                {EMAIL}
              </a>

              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                className="block transition-opacity duration-300 hover:opacity-60"
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontSize: "16px",
                  color: "rgba(58, 58, 55, 0.82)",
                }}
              >
                {PHONE_DISPLAY}
              </a>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border px-4 py-2 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(32, 32, 29, 0.18)",
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "13px",
                    color: "rgba(58, 58, 55, 0.76)",
                  }}
                >
                  WhatsApp
                </a>

                <a
                  href={VIBER_HREF}
                  className="rounded-full border px-4 py-2 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(32, 32, 29, 0.18)",
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "13px",
                    color: "rgba(58, 58, 55, 0.76)",
                  }}
                >
                  Viber
                </a>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="border-t border-[rgba(32,32,29,0.18)]"
            >
              <div className="border-b border-[rgba(32,32,29,0.14)] py-7">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.14em]"
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontWeight: 700,
                    color: "rgba(65, 65, 62, 0.48)",
                  }}
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ihr Name"
                  className="mt-3 w-full border-0 bg-transparent p-0 outline-none placeholder:text-[rgba(65,65,62,0.38)]"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "17px",
                    color: "rgba(58, 58, 55, 0.82)",
                  }}
                />
              </div>

              <div className="border-b border-[rgba(32,32,29,0.14)] py-7">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.14em]"
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontWeight: 700,
                    color: "rgba(65, 65, 62, 0.48)",
                  }}
                >
                  E-Mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ihre@email.de"
                  className="mt-3 w-full border-0 bg-transparent p-0 outline-none placeholder:text-[rgba(65,65,62,0.38)]"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "17px",
                    color: "rgba(58, 58, 55, 0.82)",
                  }}
                />
              </div>

              <div className="border-b border-[rgba(32,32,29,0.14)] py-7">
                <label
                  htmlFor="projectType"
                  className="block text-xs uppercase tracking-[0.14em]"
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontWeight: 700,
                    color: "rgba(65, 65, 62, 0.48)",
                  }}
                >
                  Wobei kann ich Sie unterstützen?
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="mt-3 w-full border-0 bg-transparent p-0 outline-none"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "17px",
                    color: "rgba(58, 58, 55, 0.82)",
                  }}
                >
                  <option value="" disabled>
                    Bitte auswählen
                  </option>

                  {PROJECT_TYPES.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border-b border-[rgba(32,32,29,0.14)] py-7">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.14em]"
                  style={{
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontWeight: 700,
                    color: "rgba(65, 65, 62, 0.48)",
                  }}
                >
                  Projektbeschreibung
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Erzählen Sie mir kurz von Ihrem Projekt, den benötigten Leistungen und dem gewünschten Zeitraum."
                  className="mt-3 w-full resize-none border-0 bg-transparent p-0 outline-none placeholder:text-[rgba(65,65,62,0.38)]"
                  style={{
                    fontFamily: "'Barlow Local', Arial, sans-serif",
                    fontSize: "17px",
                    lineHeight: "1.6",
                    color: "rgba(58, 58, 55, 0.82)",
                  }}
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full border px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                  style={{
                    borderColor: "rgba(32, 32, 29, 0.22)",
                    backgroundColor: "rgba(238, 232, 220, 0.55)",
                    fontFamily:
                      "'Barlow Semi Condensed Local', Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.04em",
                    color: "rgba(58, 58, 55, 0.78)",
                  }}
                >
                  {status === "sending"
                    ? "Wird gesendet..."
                    : "Anfrage senden"}
                </button>

                {status === "success" && (
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "'Barlow Local', Arial, sans-serif",
                      fontSize: "14px",
                      color: "rgba(65, 65, 62, 0.68)",
                    }}
                  >
                    Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.
                  </p>
                )}

                {status === "error" && (
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "'Barlow Local', Arial, sans-serif",
                      fontSize: "14px",
                      color: "rgba(65, 65, 62, 0.68)",
                    }}
                  >
                    Beim Senden ist ein Fehler aufgetreten. Bitte versuchen
                    Sie es erneut oder kontaktieren Sie mich direkt per
                    E-Mail.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}