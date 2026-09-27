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
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: "rgba(238, 232, 220, 0.78)",
        color: "#20201d",
        fontFamily: "'Barlow', Arial, sans-serif",
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.5,
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
        >
          <Logo className="h-[90px] w-auto drop-shadow-sm sm:h-[130px]" />
        </a>

        <ul className="ml-auto hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-normal leading-[22.5px] tracking-normal transition-opacity duration-200 hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#kontakt"
              className="border px-5 py-2 text-[15px] font-normal leading-[22.5px] tracking-normal transition-colors duration-200 hover:bg-black/10"
              style={{
                borderColor: "rgba(32, 32, 29, 0.22)",
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
