import { useEffect, useState } from "react";

/** Resolves true if the image URL loads successfully in the browser. */
export function checkImage(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    const img = new Image();
    img.onload = () => resolve(img.naturalWidth > 0);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

/**
 * Probes sequential image paths (1..max) and returns the ones that exist.
 * Stops after `tolerance` consecutive misses so new uploads are picked up
 * automatically without hardcoding counts.
 */
export function useSequentialImages(
  buildSrc: (i: number) => string,
  max = 30,
  tolerance = 2,
) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const found: string[] = [];
      let misses = 0;
      for (let i = 1; i <= max && misses <= tolerance; i++) {
        const src = buildSrc(i);
        // eslint-disable-next-line no-await-in-loop
        const ok = await checkImage(src);
        if (cancelled) return;
        if (ok) {
          found.push(src);
          misses = 0;
        } else {
          misses++;
        }
      }
      if (!cancelled) {
        setImages(found);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max, tolerance]);

  return { images, loading };
}

/** Probes project folders and returns the ids that contain at least 1.webp. */
export function useAvailableProjects(max = 30, tolerance = 2) {
  const { images, loading } = useSequentialImages(
    (i) => `/images/projects/project${i}/1.webp`,
    max,
    tolerance,
  );
  const ids = images
    .map((src) => Number(src.match(/project(\d+)\//)?.[1]))
    .filter((n) => Number.isFinite(n)) as number[];
  return { ids, loading };
}

/** Probes the images inside a single project folder. */
export function useProjectImages(id: number | null, max = 15) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (id === null) {
      setImages([]);
      return;
    }
    let cancelled = false;
    (async () => {
      const found: string[] = [];
      for (let i = 1; i <= max; i++) {
        const src = `/images/projects/project${id}/${i}.webp`;
        // eslint-disable-next-line no-await-in-loop
        const ok = await checkImage(src);
        if (cancelled) return;
        if (ok) found.push(src);
      }
      if (!cancelled) setImages(found);
    })();
    return () => {
      cancelled = true;
    };
  }, [id, max]);

  return images;
}
