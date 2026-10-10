import { Mail, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon, ViberIcon } from "./icons";
import { Logo } from "./Logo";
import {
  EMAIL,
  LINKEDIN,
  WHATSAPP_HREF,
  VIBER_HREF,
} from "./data";

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const iconClass =
    "rounded-full border border-[rgba(32,32,29,0.18)] p-3 text-[rgba(65,65,62,0.58)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(32,32,29,0.38)] hover:text-[rgba(65,65,62,0.88)] focus:outline-none focus:ring-2 focus:ring-[rgba(32,32,29,0.18)] focus:ring-offset-2 motion-reduce:transform-none";

  return (
    <footer
      ref={footerRef}
      className="border-t border-[rgba(32,32,29,0.14)]"
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 transition-all duration-900 ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:px-8 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
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
              © ArchiKa. Alle Rechte vorbehalten.
            </p>
          </div>

          <div
            className={`flex items-center gap-3 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "220ms" : "0ms",
            }}
          >
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

        <div
          className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[rgba(32,32,29,0.14)] pt-6 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:justify-start ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? "360ms" : "0ms",
          }}
        >
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
            className="transition-colors hover:text-[rgba(65,65,62,0.9)] hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[rgba(32,32,29,0.18)] focus:ring-offset-2"
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
            className="transition-colors hover:text-[rgba(65,65,62,0.9)] hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[rgba(32,32,29,0.18)] focus:ring-offset-2"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}