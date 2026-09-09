import { useState } from "react";
import { projects } from "./data";
import { useAvailableProjects } from "@/lib/useImageProbe";

interface ProjectMeta {
  id: number;
  title: string;
  description: string;
}

function ProjectCard({ id, project }: { id: number; project: ProjectMeta }) {
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
        
        {/* Луксозно по-голямо сивкаво-бежово кръгче със загладена тънка стрелка Наляво */}
        <button
          onClick={prevImg}
          type="button"
          className="carousel-btn-left"
          aria-label="Vorheriges Bild"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px", /* Още по-голям и мащабен кръг */
            height: "48px",
            backgroundColor: "#f2f1ed", /* Сивкаво-бежов луксозен off-white цвят */
            color: "#222222",
            border: "none",
            borderRadius: "50%",
            fontSize: "28px", /* По-голям и нарисуван знак */
            fontWeight: "300", /* По-тънък и елегантен силует */
            lineHeight: "1",
            paddingRight: "4px", /* Перфектно оптическо центриране за лявата стрелка */
            paddingBottom: "4px",
            cursor: "pointer",
            pointerEvents: "auto",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05), 0 2px 5px rgba(0, 0, 0, 0.03)",
            transition: "all 0.2s ease",
          }}
        >
          &lsaquo;
        </button>

        <img
          src={`/images/projects/project${id}/${currentImg}.webp`}
          alt={`${project.title} – Visualisierung ${currentImg}`}
          onError={handleImageError}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            pointerEvents: "none",
            userSelect: "none",
            filter: "blur(0.3px) contrast(0.95)"
          }}
        />

        {/* Прозрачен защитен параван */}
        <div style={{ position: "absolute", inset: 0, zIndex: 10, backgroundColor: "transparent", pointerEvents: "none" }} />

        {/* Луксозно по-голямо сивкаво-бежово кръгче със загладена тънка стрелка Надясно */}
        <button
          onClick={nextImg}
          type="button"
          className="carousel-btn-right"
          aria-label="Nächstes Bild"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px", /* Още по-голям и мащабен кръг */
            height: "48px",
            backgroundColor: "#f2f1ed", /* Сивкаво-бежов луксозен off-white цвят */
            color: "#222222",
            border: "none",
            borderRadius: "50%",
            fontSize: "28px", /* По-голям и нарисуван знак */
            fontWeight: "300", /* По-тънък и елегантен силует */
            lineHeight: "1",
            paddingLeft: "4px", /* Перфектно оптическо центриране за дясната стрелка */
            paddingBottom: "4px",
            cursor: "pointer",
            pointerEvents: "auto",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05), 0 2px 5px rgba(0, 0, 0, 0.03)",
            transition: "all 0.2s ease",
          }}
        >
          &rsaquo;
        </button>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="eyebrow">Projekt {String(id).padStart(2, "0")}</span>
        <h3 className="mt-3 text-lg font-medium tracking-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {metaData.description}
        </p>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const { ids, loading } = useAvailableProjects();

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
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[...ids].sort((a, b) => b - a).map((id) => (
            <ProjectCard key={id} id={id} project={meta(id)} />
          ))}
        </div>
      )}
    </section>
  );
}
