import { useState } from "react";
import { projects } from "./data";

// Използваме директно твърд списък от 1 до 10, за да не чакаме софтуерни проверки
const projectIds =;

function ProjectCard({ id, metaData }: { id: number; metaData: any }) {
  const [currentImg, setCurrentImg] = useState(1);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev < 10 ? prev + 1 : 1));
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev > 1 ? prev - 1 : 10));
  };

  return (
    <article className="panel flex flex-col overflow-hidden relative" style={{ position: "relative", display: "flex", flexDirection: "column" }}>
      
      {/* Малка защитена мини-галерия */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#f5f5f5", overflow: "hidden" }}>
        
        {/* Физическа Стрелка Наляво (←) */}
        <button
          onClick={prevImg}
          type="button"
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 9999,
            display: "block",
            width: "36px",
            height: "36px",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid #000000",
            borderRadius: "50%",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          &#8592;
        </button>

        {/* Чист стандартен архитектурен чертеж */}
        <img
          src={`/images/projects/project${id}/${currentImg}.webp`}
          alt={`${metaData.title} – Visualisierung ${currentImg}`}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            pointerEvents: "none",
            filter: "blur(0.3px) contrast(0.95)" // Защитно омекотяване
          }}
        />

        {/* Физическа Стрелка Надясно (→) */}
        <button
          onClick={nextImg}
          type="button"
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 9999,
            display: "block",
            width: "36px",
            height: "36px",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid #000000",
            borderRadius: "50%",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Описание на проекта */}
      <div className="flex flex-1 flex-col p-7">
        <span className="eyebrow">Projekt {String(id).padStart(2, "0")}</span>
        <h3 className="mt-3 text-lg font-medium tracking-tight">
          {metaData.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {metaData.description}
        </p>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const meta = (id: number) =>
    projects.find((p) => p.id === id) ?? {
      id,
      title: `Projekt ${String(id).padStart(2, "0")}`,
      description: "Architekturprojekt – Planung und Visualisierung.",
    };

  return (
    <section id="projekte" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">04 — Portfolio</p>
      <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-4xl">
        Architektur-Projekte
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projectIds.map((id) => (
          <ProjectCard key={id} id={id} metaData={meta(id)} />
        ))}
      </div>
    </section>
  );
}
