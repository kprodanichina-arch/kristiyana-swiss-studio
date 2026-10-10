type Props = {
  eyebrow: string;
  title: string;
  text?: string;
};

/** Einheitlicher Seitenkopf für die Unterseiten. */
export function PageIntro({ eyebrow, title, text }: Props) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1800px] px-6 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24 lg:px-14 xl:px-16">
        <p
          className="text-xs uppercase tracking-[0.16em]"
          style={{
            color: "rgba(65, 65, 62, 0.56)",
            fontFamily: "'Barlow Semi Condensed Local', Arial, sans-serif",
            fontWeight: 700,
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {eyebrow}
        </p>

        <h1
          className="mt-5 max-w-4xl text-balance"
          style={{
            fontFamily: "'Instrument Serif Local', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(46px, 5.4vw, 84px)",
            lineHeight: "0.94",
            letterSpacing: "-0.04em",
            color: "rgba(58, 58, 55, 0.90)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {title}
        </h1>

        {text && (
          <p
            className="mt-7 max-w-2xl"
            style={{
              fontFamily: "'Barlow Local', Arial, sans-serif",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "rgba(65, 65, 62, 0.70)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
