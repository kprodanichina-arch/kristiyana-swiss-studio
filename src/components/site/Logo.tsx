import { useState } from "react";

type Props = { className?: string; alt?: string };

/**
 * Brand logo from /images/logo.png.
 * Renders nothing if the file is not present yet (graceful GitHub sync).
 */
export function Logo({ className = "h-9 w-auto", alt = "Kristiyana Prodanichina" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <img
      src="/images/logo.png"
      alt={alt}
      draggable={false}
      onError={() => setFailed(true)}
      onContextMenu={(e) => e.preventDefault()}
      className={`select-none object-contain ${className}`}
    />
  );
}
