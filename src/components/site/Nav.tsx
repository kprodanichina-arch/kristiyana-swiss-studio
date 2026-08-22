import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const links = [
  { href: "#kontakt", label: "Kontakt" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#berufserfahrung", label: "Berufserfahrung" },
  { href: "#projekte", label: "Projekte" },
  { href: "#visualisierungen", label: "Visualisierungen" },
  { href: "#vorteile", label: "Ihre Vorteile" },
];

const projectTypeLinks = [
  { href: "#projekte", label: "Wohngebäude (über 2000 m²)" },
  { href: "#projekte", label: "Ausführungs- & Detailplanung" },
  { href: "#visualisierungen", label: "High-End 3D-Visualisierung (Twinmotion / D5 Render)" },
  { href: "#visualisierungen", label: "2D-Visualisierung & Planaufbereitung" },
  { href: "#kontakt", label: "CAD-Workflows & Datenkonvertierung" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#kontakt" className="leading-tight">
          <span className="block text-sm font-medium tracking-tight">
            Kristiyana Prodanichina
          </span>
          <span className="eyebrow">Architektin M.Arch.</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          <li className="relative" ref={ref}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="group flex items-center gap-1 text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={open}
              aria-haspopup="true"
            >
              Projektarten
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <div className="panel absolute left-0 top-full mt-3 min-w-[18rem] origin-top-left py-2 transition-all">
                <ul className="flex flex-col">
                  {projectTypeLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 text-xs leading-relaxed tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
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
