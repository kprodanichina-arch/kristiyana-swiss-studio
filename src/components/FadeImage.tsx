import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
};

/**
 * Image with a pulsating light-gray skeleton that fades out smoothly on load.
 * Drag + context-menu protected.
 */
export function FadeImage({ src, alt, className = "", wrapperClassName = "" }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        onLoad={() => setLoaded(true)}
        onContextMenu={(e) => e.preventDefault()}
        className={`select-none transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
