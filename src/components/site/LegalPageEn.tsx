import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode[];
};

/** Layout for the English legal pages (same look as the German ones). */
export function LegalPageEn({
  title,
  sections,
  note,
}: {
  title: string;
  sections: LegalSection[];
  note?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Legal information
        </p>

        <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>

        <p className="mt-6 text-xs leading-6 text-muted-foreground">
          This is an English translation for convenience. In case of any discrepancy,
          the German version is authoritative.
        </p>

        <div className="mt-12 space-y-12 text-sm leading-7 text-muted-foreground">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-medium text-foreground">{section.heading}</h2>
              {section.body.map((block, i) => (
                <div key={i} className="mt-4">
                  {block}
                </div>
              ))}
            </section>
          ))}

          {note && (
            <section className="border-t border-border pt-8">
              <p className="text-xs leading-6 text-muted-foreground">{note}</p>
            </section>
          )}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <a
            href="/en"
            className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            ← Back to ArchiKa
          </a>
        </div>
      </main>
    </div>
  );
}
