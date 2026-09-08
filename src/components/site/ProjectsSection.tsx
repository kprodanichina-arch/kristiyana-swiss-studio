import { useState } from "react";
import { projects } from "./data";
import { useAvailableProjects } from "@/lib/useImageProbe";

// Локален компонент за всяка отделна проектна карта със свои работещи стрелки
function ProjectCard({ id, metaData }: { id: number; metaData: any }) {
  const [currentImg, setCurrentImg] = useState(1);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev < 10 ? prev + 1 : 1)); // Прелиства от 1 до 10 чертежа
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev > 1 ? prev - 1 : 10));
  };

  return (
    <article className="panel flex flex-col overflow-hidden relative group" style={{ pointerEvents: 'auto' }}>
      {/* Малка мини-галерия с вградени физически стрелки */}
      <div className="relative aspect-4/3 w-full bg-muted overflow-hidden select-none" style={{ pointerEvents: 'auto' }}>
        
        {/* Стрелка Наляво (←) */}
        <button
          onClick={prevImg}
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-400 bg-white text-base font-bold text-black shadow-md cursor-pointer transition-all hover:bg-black hover:text-white"
          style={{ pointerEvents: 'auto', display: 'flex' }}
        >
          &#8592;
        </button>

        {/* Чист стандартен СУРОВ IMG таг, който се подчинява на React променливата */}
        <img
          src={`/images/projects/project${id}/${currentImg}.webp`}
          alt={`${metaData.title} – Visualisierung ${currentImg}`}
          className="w-full h-full object-cover pointer-events-none"
          style={{ filter: "blur(0.3px) contrast(0.95)" }} // Защитен филтър против четене на котировки
          id={`project-img-${id}`}
        />
        
        {/* Прозрачен защитен параван отгоре срещу влачене и десен бутон */}
        <div className="absolute inset-0 z-10 bg-transparent pointer-events-none" />

        {/* Стрелка Надясно (→) */}
        <button
          onClick={nextImg}
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-400 bg-white text-base font-bold text-black shadow-md cursor-pointer transition-all hover:bg-black hover:text-white"
          style={{ pointerEvents: "auto", display: 'flex' }}
        >
          &#8594;
        </button>
      </div>

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
  const { ids, loading } = useAvailableProjects();

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
          {[...ids]
            .sort((a, b) => b - a)
            .map((id) => (
              <ProjectCard key={id} id={id} metaData={meta(id)} />
            ))}
        </div>
      )}
    </section>
  );
}
