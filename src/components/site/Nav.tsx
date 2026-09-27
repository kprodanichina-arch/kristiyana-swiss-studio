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
      className="sticky top-0 z-40 border-b border-black/10"
      style={{
        backgroundColor: "rgb(238, 232, 220)",
        color: "rgb(32, 32, 29)",
        fontFamily: "'Barlow', Arial, sans-serif",
        WebkitFontSmoothing: "antialiased",
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
                className="text-[18px] font-normal leading-[27px] tracking-[-0.01em] transition-opacity duration-200 hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#kontakt"
              className="border border-[rgb(32,32,29)] px-5 py-2.5 text-[18px] font-normal leading-[27px] tracking-[-0.01em] transition-colors duration-200 hover:bg-[rgb(32,32,29)] hover:text-[rgb(238,232,220)]"
            >
              Kontakt
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}
