import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { EMAIL, INSTAGRAM, LINKEDIN, PHONE_HREF } from "./data";

export function Footer() {
  const cls =
    "rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground";

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="text-xs tracking-wide text-muted-foreground">
          © Kristiyana Prodanichina. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={cls}>
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className={cls}>
            <Instagram className="h-4 w-4" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="E-Mail" className={cls}>
            <Mail className="h-4 w-4" />
          </a>
          <a href={`tel:${PHONE_HREF}`} aria-label="Telefon" className={cls}>
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
