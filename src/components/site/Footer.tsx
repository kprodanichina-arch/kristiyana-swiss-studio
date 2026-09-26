import { Mail, Linkedin } from "lucide-react";
import { WhatsAppIcon, ViberIcon } from "./icons";
import { Logo } from "./Logo";
import { EMAIL, LINKEDIN, WHATSAPP_HREF, VIBER_HREF } from "./data";

export function Footer() {
  const cls =
    "rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground";

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Logo className="h-[100px] w-auto max-w-[280px] sm:h-[110px]" />

            <p className="text-xs tracking-wide text-muted-foreground">
              © Kristiyana Prodanichina. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={cls}
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className={cls}
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>

            <a
              href={VIBER_HREF}
              aria-label="Viber"
              className={cls}
            >
              <ViberIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label="E-Mail"
              className={cls}
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-border pt-6 sm:justify-start">
          <a
            href="/impressum"
            className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Impressum
          </a>

          <a
            href="/datenschutz"
            className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}