import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { SmartImage } from "@/components/SmartImage";
import { projects, projectImages } from "./data";

export function ProjectsSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const active = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="projekte" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">04 — Portfolio</p>
      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
        Architektur-Projekte
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="panel flex flex-col overflow-hidden">
            <div className="grid grid-cols-2 gap-px bg-border">
              <SmartImage
                src={`/images/projects/project${project.id}/1.webp`}
                alt={`${project.title} – Render 1`}
                label={`Projekt ${project.id} · Render 1`}
                className="aspect-4/3 w-full bg-muted object-cover"
              />
              <SmartImage
                src={`/images/projects/project${project.id}/2.webp`}
                alt={`${project.title} – Render 2`}
                label={`Projekt ${project.id} · Render 2`}
                className="aspect-4/3 w-full bg-muted object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-7">
              <span className="eyebrow">Projekt {String(project.id).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <button
                onClick={() => setOpenId(project.id)}
                className="mt-6 self-start border border-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Projekt ansehen
              </button>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        open={active !== null}
        onClose={() => setOpenId(null)}
        title={active?.title ?? ""}
        images={active ? projectImages(active.id) : []}
      />
    </section>
  );
}
