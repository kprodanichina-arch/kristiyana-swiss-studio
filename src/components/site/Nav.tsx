import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#ueber-mich", label: "Über ArchiKa" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: "rgba(238, 232, 220, 0.78)",
        color: "#20201d",
        fontFamily: "'Barlow Local', Arial, sans-serif",
        fontSize: "15px",
        lineHeight: "1.5",
        fontWeight: 400,
        WebkitFontSmoothing: "antialiased",
        backdropFilter: "blur(18px) saturate(110%)",
        WebkitBackdropFilter: "blur(18px) saturate(110%)",
        borderColor: "rgba(32, 32, 29, 0.22)",
        boxShadow:
          "0 6px 16px -14px rgba(32, 32, 29, 0.12), 0 12px 24px -20px rgba(32, 32, 29, 0.07)",
      }}
    >
      <nav className="relative mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-6 px-6 pl-8 sm:px-10 sm:pl-14 lg:px-14 lg:pl-20">
        <a
          href="/"
          aria-label="Startseite"
          className="pointer-events-auto absolute left-8 top-2 z-50 flex items-center sm:left-14 lg:left-20"
          onClick={closeMenu}
        >
          <Logo className="h-[90px] w-auto drop-shadow-sm sm:h-[130px]" />
        </a>

        {/* Desktop navigation */}
        <ul className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.5",
                  fontWeight: 400,
                  color: "inherit",
                  textDecoration: "none",
                  WebkitTapHighlightColor: "transparent",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.opacity = "0.6";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.opacity = "1";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#kontakt"
              style={{
                display: "inline-block",
                border: "1px solid rgba(32, 32, 29, 0.22)",
                padding: "8px 20px",
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                lineHeight: "1.5",
                fontWeight: 400,
                color: "inherit",
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent",
                transition: "background-color 0.2s",
              }}
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto flex items-center border border-[rgba(32,32,29,0.22)] px-4 py-2 md:hidden"
          style={{
            fontFamily:
              "'Barlow Semi Condensed Local', Arial, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#20201d",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {menuOpen ? "Schließen" : "Menü"}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 pb-6 pt-3 sm:px-10">
          <div className="border-t border-[rgba(32,32,29,0.14)]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block border-b border-[rgba(32,32,29,0.12)] py-4"
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#20201d",
                  textDecoration: "none",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#kontakt"
              onClick={closeMenu}
              className="mt-4 block border border-[rgba(32,32,29,0.24)] px-5 py-3 text-center"
              style={{
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#20201d",
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}