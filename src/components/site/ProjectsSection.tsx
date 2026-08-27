import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { projects } from "./data";
import { useAvailableProjects, useProjectImages } from "@/lib/useImageProbe";

export function ProjectsSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { ids, loading } = useAvailableProjects();
  const lightboxImages = useProjectImages(openId);

  const meta = (id: number) =>
    projects.find((p) => p.id === id) ?? {
      id,
      title: `Projekt ${String(id).padStart(2, "0")}`,
      description: "Architekturprojekt – Planung und Visualisierung.",
    };

  if (!loading && ids.length === 0) return null;

  return (
    <section id="projekte" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">04 — Portfolio</p>
      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
        Architektur-Projekte
      </h2>

      {loading ? (
        <p className="mt-8 text-sm text-muted-foreground">Projekte werden geladen …</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {ids.map((id) => {
            const project = meta(id);
            return (
              <article key={id} className="panel flex flex-col overflow-hidden">
                <img
                  src={`/images/projects/project${id}/1.webp`}
                  alt={`${project.title} – Visualisierung`}
                  loading="lazy"
                  className="aspect-4/3 w-full bg-muted object-cover"
                />
                <div className="flex flex-1 flex-col p-7">
                  <span className="eyebrow">Projekt {String(id).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setOpenId(id)}
                    className="mt-6 self-start border border-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Projekt ansehen
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <Lightbox
        open={openId !== null && lightboxImages.length > 0}
        onClose={() => setOpenId(null)}
        title={openId !== null ? meta(openId).title : ""}
        images={lightboxImages}
      />
    </section>
  );
}
