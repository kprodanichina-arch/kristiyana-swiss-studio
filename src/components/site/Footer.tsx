import { Mail, Linkedin } from "lucide-react";
import { WhatsAppIcon, ViberIcon } from "./icons";
import { Logo } from "./Logo";
import {
  EMAIL,
  LINKEDIN,
  WHATSAPP_HREF,
  VIBER_HREF,
} from "./data";

export function Footer() {
  const iconClass =
    "rounded-full border border-[rgba(32,32,29,0.18)] p-3 text-[rgba(65,65,62,0.58)] transition-all duration-200 hover:border-[rgba(32,32,29,0.38)] hover:text-[rgba(65,65,62,0.88)]";

  return (
    <footer className="border-t border-[rgba(32,32,29,0.14)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Logo className="h-[100px] w-auto max-w-[280px] sm:h-[110px]" />

            <p
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "1.5",
                letterSpacing: "0.025em",
                color: "rgba(65,65,62,0.52)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              © Kristiyana Prodanichina. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={iconClass}
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className={iconClass}
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>

            <a
              href={VIBER_HREF}
              aria-label="Viber"
              className={iconClass}
            >
              <ViberIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label="E-Mail"
              className={iconClass}
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[rgba(32,32,29,0.14)] pt-6 sm:justify-start">
          <a
            href="/impressum"
            style={{
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "rgba(65,65,62,0.58)",
              WebkitFontSmoothing: "antialiased",
            }}
            className="transition-colors hover:text-[rgba(65,65,62,0.9)] hover:underline hover:underline-offset-4"
          >
            Impressum
          </a>

          <a
            href="/datenschutz"
            style={{
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "rgba(65,65,62,0.58)",
              WebkitFontSmoothing: "antialiased",
            }}
            className="transition-colors hover:text-[rgba(65,65,62,0.9)] hover:underline hover:underline-offset-4"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}