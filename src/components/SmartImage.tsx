import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
};

/**
 * Renders an image from /public. If the file has not been uploaded yet,
 * an elegant gray placeholder keeps the layout intact.
 */
export function SmartImage({ src, alt, className = "", label }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className}`}
        aria-label={alt}
        role="img"
      >
        <span className="eyebrow px-4 text-center">{label ?? "Bild folgt"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
