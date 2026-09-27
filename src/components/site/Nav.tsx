import { Logo } from "./Logo";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#ueber-mich", label: "Über ArchiK" },
];

export function Nav() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-white/45"
      style={{
        backgroundColor: "rgba(175, 177, 174, 0.62)",
        color: "rgba(58, 58, 55, 0.88)",
        fontFamily: "'Barlow', Arial, sans-serif",
        WebkitFontSmoothing: "antialiased",
        backdropFilter: "blur(18px) saturate(110%)",
        WebkitBackdropFilter: "blur(18px) saturate(110%)",
        boxShadow:
          "0 10px 24px -14px rgba(20, 20, 18, 0.22), 0 18px 38px -20px rgba(20, 20, 18, 0.14)",
      }}
    >
      <nav className="relative mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-6 px-6 pl-8 sm:px-10 sm:pl-14 lg:px-14 lg:pl-20">

        <a
          href="/"
          aria-label="Startseite"
          className="pointer-events-auto absolute left-8 top-2 z-50 flex items-center sm:left-14 lg:left-20"
        >
          <Logo className="h-[90px] w-auto drop-shadow-sm sm:h-[130px]" />
        </a>

        <ul className="ml-auto hidden items-center gap-8 lg:flex">

          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-normal leading-[22.5px] tracking-normal transition-opacity duration-200 hover:opacity-60"
                style={{
                  textShadow: "0 1px 5px rgba(0, 0, 0, 0.08)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#kontakt"
              className="border border-black/25 px-5 py-2 text-[15px] font-normal leading-[22.5px] tracking-normal transition-colors duration-200 hover:bg-black/10"
              style={{
                textShadow: "0 1px 5px rgba(0, 0, 0, 0.08)",
              }}
            >
              Kontakt
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}
