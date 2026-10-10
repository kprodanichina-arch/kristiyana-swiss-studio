import { Fragment, type ReactNode } from "react";

/**
 * Kleiner, sicherer Markdown-Renderer für Blog-Beiträge (kein HTML).
 * Unterstützt: ## / ### Überschriften, Absätze, - / 1. Listen, > Zitate,
 * **fett**, *kursiv*, [Link](https://…).
 */

function inline(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)\s]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyPrefix}-${i++}`;
    if (m[2]) out.push(<strong key={key} className="font-semibold text-foreground">{m[2]}</strong>);
    else if (m[3]) out.push(<em key={key}>{m[3]}</em>);
    else if (m[4]) {
      const href = m[5];
      const safe = /^(https?:|mailto:|\/)/.test(href) ? href : "#";
      const external = /^https?:/.test(safe);
      out.push(
        <a
          key={key}
          href={safe}
          className="underline underline-offset-4 transition-opacity hover:opacity-60"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {m[4]}
        </a>,
      );
    }
    last = re.lastIndex;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

const headingStyle = {
  fontFamily: "'Instrument Serif Local', Georgia, serif",
  fontWeight: 400,
  letterSpacing: "-0.025em",
  color: "rgba(58, 58, 55, 0.90)",
  WebkitFontSmoothing: "antialiased" as const,
};

export function Markdown({ source }: { source: string }) {
  const blocks = source.split(/\r?\n\s*\r?\n/);

  return (
    <div
      className="space-y-6"
      style={{
        fontFamily: "'Barlow Local', Arial, sans-serif",
        fontSize: "17px",
        lineHeight: "1.7",
        color: "rgba(65, 65, 62, 0.82)",
      }}
    >
      {blocks.map((block, bi) => {
        const b = block.trim();
        const k = `b${bi}`;
        if (!b) return null;

        if (b.startsWith("### "))
          return (
            <h3 key={k} className="pt-4" style={{ ...headingStyle, fontSize: "26px", lineHeight: "1.1" }}>
              {inline(b.slice(4), k)}
            </h3>
          );

        if (b.startsWith("## "))
          return (
            <h2 key={k} className="pt-6" style={{ ...headingStyle, fontSize: "clamp(30px, 3vw, 38px)", lineHeight: "1.05" }}>
              {inline(b.slice(3), k)}
            </h2>
          );

        const lines = b.split(/\r?\n/);

        if (lines.every((l) => /^[-*] /.test(l)))
          return (
            <ul key={k} className="list-disc space-y-2 pl-6">
              {lines.map((l, li) => (
                <li key={li}>{inline(l.slice(2), `${k}-${li}`)}</li>
              ))}
            </ul>
          );

        if (lines.every((l) => /^\d+\. /.test(l)))
          return (
            <ol key={k} className="list-decimal space-y-2 pl-6">
              {lines.map((l, li) => (
                <li key={li}>{inline(l.replace(/^\d+\. /, ""), `${k}-${li}`)}</li>
              ))}
            </ol>
          );

        if (lines.every((l) => l.startsWith(">")))
          return (
            <blockquote key={k} className="border-l-2 border-[rgba(32,32,29,0.3)] pl-6 italic">
              {inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "), k)}
            </blockquote>
          );

        return (
          <p key={k}>
            {lines.map((l, li) => (
              <Fragment key={li}>
                {li > 0 && " "}
                {inline(l, `${k}-${li}`)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
