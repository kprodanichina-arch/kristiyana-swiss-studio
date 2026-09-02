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
      <nav className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-6 pl-10 sm:px-10 sm:pl-16 lg:px-14 lg:pl-24">
        <a
          href="#kontakt"
          aria-label="Startseite"
          className="pointer-events-auto absolute left-10 top-1 z-50 flex items-center sm:left-16 lg:left-24"
        >
          <Logo className="h-[130px] w-auto max-w-[70vw] drop-shadow-sm" />
        </a>


        <ul className="ml-auto hidden items-center gap-7 lg:flex">

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
