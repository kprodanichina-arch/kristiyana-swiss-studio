import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { counterpartPath, langFromPath } from "@/lib/i18n";
import { hasEnglishPosts } from "@/lib/blog";

const linksDe = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/projekte", label: "Projekte" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

const linksEn = [
  { href: "/en/about", label: "About us" },
  { href: "/en/projects", label: "Projects" },
  ...(hasEnglishPosts ? [{ href: "/en/blog", label: "Blog" }] : []),
  { href: "/en/faq", label: "FAQ" },
];

function LangSwitch({ pathname, onClick }: { pathname: string; onClick?: () => void }) {
  const current = langFromPath(pathname);
  const raw = counterpartPath(pathname);
  const target = raw.startsWith("/en/blog") && !hasEnglishPosts ? "/en" : raw;
  const item = (code: "de" | "en") =>
    code === current ? (
      <span aria-current="true" style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}>
        {code.toUpperCase()}
      </span>
    ) : (
      <a
        href={target}
        hrefLang={code}
        lang={code}
        onClick={onClick}
        aria-label={code === "en" ? "English version" : "Deutsche Version"}
        style={{ color: "inherit", textDecoration: "none", opacity: 0.6 }}
      >
        {code.toUpperCase()}
      </a>
    );
  return (
    <span
      className="inline-flex items-center gap-2"
      style={{
        fontFamily: "'Barlow Semi Condensed Local', Arial, sans-serif",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "0.1em",
      }}
    >
      {item("de")}
      <span aria-hidden="true" style={{ opacity: 0.35 }}>/</span>
      {item("en")}
    </span>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const en = langFromPath(pathname) === "en";
  const links = en ? linksEn : linksDe;
  const home = en ? "/en" : "/";
  const contact = en ? "/en/contact" : "/kontakt";
  const contactLabel = en ? "Contact" : "Kontakt";

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
        <Link
          to={home}
          aria-label={en ? "Home" : "Startseite"}
          className="pointer-events-auto absolute left-8 top-2 z-50 flex items-center sm:left-14 lg:left-20"
          onClick={closeMenu}
        >
          <Logo className="h-[90px] w-auto drop-shadow-sm sm:h-[130px]" />
        </Link>

        {/* Desktop navigation */}
        <ul className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                activeProps={{ style: { textDecoration: "underline", textUnderlineOffset: "6px" } }}
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
              </Link>
            </li>
          ))}

          <li>
            <Link
              to={contact}
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
              {contactLabel}
            </Link>
          </li>

          <li>
            <LangSwitch pathname={pathname} />
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            en
              ? menuOpen
                ? "Close menu"
                : "Open menu"
              : menuOpen
                ? "Menü schliessen"
                : "Menü öffnen"
          }
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
          {en ? (menuOpen ? "Close" : "Menu") : menuOpen ? "Schliessen" : "Menü"}
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
              <Link
                key={link.href}
                to={link.href}
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
              </Link>
            ))}

            <Link
              to={contact}
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
              {contactLabel}
            </Link>

            <div className="mt-5 flex justify-center" style={{ color: "#20201d" }}>
              <LangSwitch pathname={pathname} onClick={closeMenu} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}