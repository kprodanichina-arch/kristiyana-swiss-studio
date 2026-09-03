import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  initialIndex?: number;
  eyebrow?: string;
};

export function Lightbox({
  open,
  onClose,
  title,
  images,
  initialIndex = 0,
  eyebrow = "Projektmappe",
}: Props) {
  const [index, setIndex] = useState(initialIndex);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex animate-in fade-in flex-col bg-background/98 backdrop-blur-sm duration-200">
      <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-10">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h3 className="text-sm font-medium tracking-tight sm:text-base">{title}</h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Schliessen"
          className="rounded-full border border-border p-2 transition-colors hover:bg-accent"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-10"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {images.length > 1 && (
          <button
            onClick={prev}
            aria-label="Vorherige Seite"
            className="absolute left-3 z-10 rounded-full bg-card p-3 shadow-soft transition-transform hover:scale-105 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}


        <div className="flex h-full w-full max-w-5xl items-center justify-center panel overflow-hidden">
          {failed[index] ? (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="eyebrow">Zeichnung {index + 1} folgt</span>
            </div>
          ) : (
            <>
              {!loaded[index] && (
                <div className="absolute inset-0 flex animate-pulse flex-col items-center justify-center gap-4 bg-muted/60">
                  <div className="aspect-4/3 w-2/3 max-w-md rounded bg-muted" />
                  <span className="eyebrow">Plan {index + 1} wird geladen …</span>
                </div>
              )}
              <img
                src={images[index]}
                alt={`${title} – Plan ${index + 1}`}
                draggable={false}
                onLoad={() => setLoaded((l) => ({ ...l, [index]: true }))}
                onError={() => setFailed((f) => ({ ...f, [index]: true }))}
                className={`max-h-full max-w-full select-none object-contain transition-opacity duration-300 ${
                  loaded[index] ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Transparent shield: right-click / save targets this overlay instead of the image */}
              <div
                data-protect-image
                aria-hidden="true"
                className="absolute inset-0 z-10 select-none bg-transparent"
                onContextMenu={(e) => e.preventDefault()}
              />
            </>
          )}
        </div>

        <button
          onClick={next}
          aria-label="Nächste Seite"
          className="absolute right-3 z-10 rounded-full bg-card p-3 shadow-soft transition-transform hover:scale-105 sm:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-border px-5 py-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Seite ${i + 1}`}
            className={`h-1.5 w-6 rounded-full transition-colors ${
              i === index ? "bg-foreground" : "bg-border"
            }`}
          />
        ))}
        <span className="ml-4 eyebrow">
          {index + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
