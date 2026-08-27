import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#kontakt", label: "Kontakt" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#berufserfahrung", label: "Berufserfahrung" },
  { href: "#projekte", label: "Projekte" },
  { href: "#visualisierungen", label: "Visualisierungen" },
  { href: "#vorteile", label: "Ihre Vorteile" },
  { href: "#bewertungen", label: "Referenzen" },
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
  const containerRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleClose = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
          <li
            ref={containerRef}
            className="relative"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={open}
              aria-haspopup="true"
              className="flex items-center gap-1 text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground focus:text-foreground"
            >
              Projektarten
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`panel absolute left-0 top-full mt-3 min-w-[20rem] origin-top-left overflow-hidden py-2 transition-all duration-200 ${
                open
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col">
                {projectTypeLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 text-xs leading-relaxed tracking-wide text-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
