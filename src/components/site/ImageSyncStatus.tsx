import { useEffect, useState } from "react";
import { RefreshCw, FolderOpen, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { checkImage } from "@/lib/useImageProbe";

type ProjectFolder = { id: number; count: number };

type SyncState = {
  loading: boolean;
  projects: ProjectFolder[];
  rendersCount: number;
  checkedAt: Date | null;
};

const MAX_PROJECTS = 30;
const MAX_PER_PROJECT = 15;
const MAX_RENDERS = 30;
const TOLERANCE = 2;

async function countImages(buildSrc: (i: number) => string, max: number) {
  const found: string[] = [];
  let misses = 0;
  for (let i = 1; i <= max && misses <= TOLERANCE; i++) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await checkImage(buildSrc(i));
    if (ok) {
      found.push(buildSrc(i));
      misses = 0;
    } else {
      misses++;
    }
  }
  return found;
}

async function scan(): Promise<Omit<SyncState, "loading">> {
  const projects: ProjectFolder[] = [];
  let misses = 0;
  for (let id = 1; id <= MAX_PROJECTS && misses <= TOLERANCE; id++) {
    // eslint-disable-next-line no-await-in-loop
    const hasCover = await checkImage(`/images/projects/project${id}/1.webp`);
    if (hasCover) {
      // eslint-disable-next-line no-await-in-loop
      const imgs = await countImages((i) => `/images/projects/project${id}/${i}.webp`, MAX_PER_PROJECT);
      projects.push({ id, count: imgs.length });
      misses = 0;
    } else {
      misses++;
    }
  }
  const renders = await countImages((i) => `/images/renders/${i}.webp`, MAX_RENDERS);
  return { projects, rendersCount: renders.length, checkedAt: new Date() };
}

export function ImageSyncStatus() {
  const [state, setState] = useState<SyncState>({
    loading: true,
    projects: [],
    rendersCount: 0,
    checkedAt: null,
  });

  const runScan = async () => {
    setState((s) => ({ ...s, loading: true }));
    const result = await scan();
    setState({ ...result, loading: false });
  };

  useEffect(() => {
    void runScan();
  }, []);

  return (
    <section id="sync-status" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="panel p-7 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Intern — GitHub Sync</p>
            <h2 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">
              Bilder-Synchronisationsstatus
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Zeigt, welche Projektordner und Render-Bilder aktuell auf der Website
              erkannt wurden. So prüfen Sie, ob neue Uploads übernommen wurden.
            </p>
          </div>
          <button
            onClick={() => void runScan()}
            disabled={state.loading}
            className="flex items-center gap-2 border border-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${state.loading ? "animate-spin" : ""}`} />
            Erneut prüfen
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {state.loading && state.projects.length === 0 ? (
            <p className="text-sm text-muted-foreground">Ordner werden geprüft …</p>
          ) : (
            <>
              {state.projects.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-4 border border-border bg-background px-5 py-4"
                >
                  <FolderOpen className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      Projekt {String(p.id).padStart(2, "0")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      /images/projects/project{p.id}/
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    {p.count}
                  </span>
                </div>
              ))}

              <div className="flex items-center gap-4 border border-border bg-background px-5 py-4">
                <ImageIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">Visualisierungen</p>
                  <p className="text-xs text-muted-foreground">/images/renders/</p>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium">
                  {state.rendersCount > 0 && <CheckCircle2 className="h-4 w-4" />}
                  {state.rendersCount}
                </span>
              </div>

              {!state.loading && state.projects.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Keine Projektordner gefunden.
                </p>
              )}
            </>
          )}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          {state.checkedAt
            ? `Zuletzt geprüft: ${state.checkedAt.toLocaleString("de-CH")} — Erkannte Projektordner: ${state.projects.length}, Render-Bilder: ${state.rendersCount}`
            : "Prüfung läuft …"}
        </p>
      </div>
    </section>
  );
}
