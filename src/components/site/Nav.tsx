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
    <header className="sticky top-0 z-40 overflow-visible border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-end gap-6 px-6 sm:h-[72px] sm:px-10 lg:px-14">
        <a
          href="#kontakt"
          className="absolute left-6 top-1/2 flex -translate-y-1/2 items-center sm:left-10 lg:left-14"
          aria-label="Startseite"
        >
          <Logo className="h-16 w-auto sm:h-[120px] lg:h-[140px]" />
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
