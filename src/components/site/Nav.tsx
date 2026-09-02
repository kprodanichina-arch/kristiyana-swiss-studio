import { Logo } from "./Logo";

const links = [
  { href: "#kontakt", label: "Kontakt" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#berufserfahrung", label: "Berufserfahrung" },
  { href: "#projekte", label: "Projekte" },
  { href: "#visualisierungen", label: "Visualisierungen" },
  { href: "#vorteile", label: "Ihre Vorteile" },
  { href: "#bewertungen", label: "Referenzen" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md [overflow:visible]">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 pl-8 sm:px-10 sm:pl-14 lg:px-14 lg:pl-20">
        <a
          href="#kontakt"
          aria-label="Startseite"
          className="pointer-events-auto absolute left-8 top-1/2 z-50 flex -translate-y-1/2 items-center sm:left-14 lg:left-20"
        >
          <Logo className="h-16 w-auto drop-shadow-sm sm:h-[90px] lg:h-[130px]" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
