import { useState } from "react";
import { projects } from "./data";
import { useAvailableProjects } from "@/lib/useImageProbe";

// Самостоятелен компонент за всяка картичка с вграден суров стил за стрелките
function ProjectCard({ id, metaData }: { id: number; metaData: any }) {
  const [currentImg, setCurrentImg] = useState(1);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev < 10 ? prev + 1 : 1)); // Върти от 1 до 10 чертежа
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev > 1 ? prev - 1 : 10));
  };

  return (
    <article className="panel flex flex-col overflow-hidden relative group" style={{ pointerEvents: 'auto', position: 'relative' }}>
      
      {/* Контейнер за мини-галерията */}
      <div className="relative aspect-4/3 w-full bg-muted overflow-hidden select-none" style={{ pointerEvents: 'auto', position: 'relative' }}>
        
        {/* Физическа Стрелка Наляво (←) - Инжектиран суров CSS */}
        <button
          onClick={prevImg}
          type="button"
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justify-content: center,
            width: '42px',
            height: '42px',
            backgroundColor: '#ffffff',
            color: '#000000',
            border: '2px solid #000000',
            borderRadius: '50%',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            pointerEvents: 'auto'
          }}
        >
          &#8592;
        </button>

        {/* Защитен архитектурен чертеж */}
        <img
          src={`/images/projects/project${id}/${currentImg}.webp`}
          alt={`${metaData.title} – Visualisierung ${currentImg}`}
          className="w-full h-full object-cover"
          style={{ 
            pointerEvents: 'none', 
            userSelect: 'none',
            filter: "blur(0.3px) contrast(0.95)" // Защитно омекотяване против четене на коти
          }}
        />
        
        {/* Прозрачен блиндиран параван отгоре срещу десен бутон */}
        <div 
          className="absolute inset-0 bg-transparent" 
          style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }} 
        />

        {/* Физическа Стрелка Надясно (→) - Инжектиран суров CSS */}
        <button
          onClick={nextImg}
          type="button"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justify-content: center,
            width: '42px',
            height: '42px',
            backgroundColor: '#ffffff',
            color: '#000000',
            border: '2px solid #000000',
            borderRadius: '50%',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            pointerEvents: 'auto'
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Описание на проекта под чертежа */}
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

