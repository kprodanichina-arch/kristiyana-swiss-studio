import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { projects } from "./data";
import { useAvailableProjects, useProjectImages } from "@/lib/useImageProbe";

interface ProjectMeta {
  id: number;
  title: string;
  description: string;
}

function ProjectCard({ id, project, onOpen }: { id: number; project: ProjectMeta; onOpen: () => void }) {
  const [currentImg, setCurrentImg] = useState(1);

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev < 50 ? prev + 1 : 1));
  };

  const handleImageError = () => setCurrentImg(1);

  return (
    <article className="panel flex flex-col overflow-hidden">
      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#f5f5f5", overflow: "hidden" }}>
        <button
          onClick={prevImg}
          type="button"
          className="carousel-btn-left"
          aria-label="Vorheriges Bild"
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid #000000",
            borderRadius: "50%",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            pointerEvents: "auto",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          &#8592;
        </button>

        <img
          src={`/images/projects/project${id}/${currentImg}.webp`}
          alt={`${project.title} – Visualisierung ${currentImg}`}
          onError={handleImageError}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <button
          onClick={nextImg}
          type="button"
          className="carousel-btn-right"
          aria-label="Nächstes Bild"
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid #000000",
            borderRadius: "50%",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            pointerEvents: "auto",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          &#8594;
        </button>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="eyebrow">Projekt {String(id).padStart(2, "0")}</span>
        <h3 className="mt-3 text-lg font-medium tracking-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <button
          onClick={onOpen}
          className="mt-6 self-start border border-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Projekt ansehen
        </button>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { ids, loading } = useAvailableProjects();
  const lightboxImages = useProjectImages(openId);

  const meta = (id: number): ProjectMeta =>
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[0, 1].map((i) => (
            <div key={i} className="panel flex animate-pulse flex-col overflow-hidden">
              <div className="aspect-4/3 w-full bg-muted" />
              <div className="flex flex-1 flex-col p-7">
                <div className="h-2.5 w-20 rounded bg-muted" />
                <div className="mt-4 h-5 w-2/3 rounded bg-muted" />
                <div className="mt-4 h-3 w-full rounded bg-muted" />
                <div className="mt-2 h-3 w-5/6 rounded bg-muted" />
                <div className="mt-6 h-11 w-40 rounded-sm bg-muted" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[...ids].sort((a, b) => b - a).map((id) => (
            <ProjectCard key={id} id={id} project={meta(id)} onOpen={() => setOpenId(id)} />
          ))}
        </div>
      )}

      {openId !== null && lightboxImages.length === 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/98 backdrop-blur-sm">
          <div className="panel flex w-full max-w-3xl animate-pulse flex-col gap-4 p-6 sm:p-10">
            <div className="h-4 w-32 rounded bg-muted" />
            <div className="aspect-4/3 w-full rounded bg-muted" />
            <div className="mx-auto h-2 w-24 rounded-full bg-muted" />
          </div>
          <span className="eyebrow mt-6">Projekt wird geladen …</span>
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
