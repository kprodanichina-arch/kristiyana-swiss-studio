import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#ueber-mich", label: "Über ArchiK" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md [overflow:visible]">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 pl-8 sm:px-10 sm:pl-14 lg:px-14 lg:pl-20">
        <a
          href="/"
          aria-label="Startseite"
          onClick={closeMenu}
          className="pointer-events-auto absolute left-8 top-2 z-50 flex items-center sm:left-14 lg:left-20"
        >
          <Logo className="h-[90px] w-auto drop-shadow-sm sm:h-[130px]" />
        </a>

        {/* Desktop navigation */}
        <ul className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#kontakt"
              className="border border-foreground px-4 py-2 text-xs font-medium tracking-wide text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="ml-auto flex h-10 w-10 items-center justify-center text-foreground transition-opacity hover:opacity-60 lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-16 border-b border-border bg-background shadow-sm lg:hidden">
            <ul className="flex flex-col px-6 py-4 sm:px-10">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block border-b border-border py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#kontakt"
                  onClick={closeMenu}
                  className="mt-4 block border border-foreground px-4 py-3 text-center text-xs font-medium tracking-wide text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}