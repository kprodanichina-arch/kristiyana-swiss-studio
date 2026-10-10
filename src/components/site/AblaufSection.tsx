import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Aufgabe klären.",
    text: "Sie senden mir die vorhandenen Pläne, Modelle oder Projektdaten und wir klären gemeinsam, wobei Unterstützung benötigt wird.",
  },
  {
    number: "02",
    title: "Standard abstimmen.",
    text: "Wir stimmen Ihren Bürostandard, Vorlagen, Software, vorhandene Daten, gewünschte Formate und den benötigten Zeitrahmen ab.",
  },
  {
    number: "03",
    title: "Bearbeiten.",
    text: "Ich übernehme die vereinbarten Aufgaben remote und arbeite nach Ihren Standards und in Ihrer bestehenden Projektstruktur.",
  },
  {
    number: "04",
    title: "Übergeben.",
    text: "Die fertigen Pläne, Modelle oder Visualisierungen werden digital in den vereinbarten Formaten und der gewünschten Struktur übergeben.",
  },
];

export function AblaufSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ablauf"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div
          className={`grid gap-12 transition-all duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100 lg:grid-cols-[0.8fr_1.2fr] lg:items-end ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p
              style={{
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(65, 65, 62, 0.55)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Ablauf
            </p>

            <h2
              className="mt-4"
              style={{
                fontFamily:
                  "'Instrument Serif Local', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(44px, 4.8vw, 68px)",
                lineHeight: "0.94",
                letterSpacing: "-0.035em",
                color: "rgba(58, 58, 55, 0.90)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Einfach integrierbar.
              <br />
              Klar im Ablauf.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p
              style={{
                fontFamily: "'Barlow Local', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: "1.65",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Nicht neben dem Team, sondern im Workflow.
              <br />
              Die Zusammenarbeit wird auf Ihren konkreten Bedarf abgestimmt
              und in Ihre bestehende Arbeitsweise integriert.
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-0 hidden h-px bg-[rgba(32,32,29,0.12)] md:block">
            <div
              className="h-full origin-left bg-[rgba(58,58,55,0.55)] transition-transform duration-[1800ms] ease-out motion-reduce:transition-none"
              style={{
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              }}
            />
          </div>

          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-[rgba(32,32,29,0.12)] md:hidden">
            <div
              className="h-full origin-top bg-[rgba(58,58,55,0.55)] transition-transform duration-[1800ms] ease-out motion-reduce:transition-none"
              style={{
                transform: isVisible ? "scaleY(1)" : "scaleY(0)",
              }}
            />
          </div>

          <div className="grid gap-0 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative border-b border-border py-8 pl-10 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 md:border-b-0 md:border-r md:px-7 md:pl-7 md:pt-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${300 + index * 150}ms`
                    : "0ms",
                }}
              >
                <span
                  className={`absolute left-0 top-[-5px] flex h-[11px] w-[11px] rounded-full border border-[rgba(58,58,55,0.55)] bg-background transition-all duration-700 ease-out motion-reduce:transform-none md:left-[-5px] ${
                    isVisible
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${420 + index * 150}ms`
                      : "0ms",
                  }}
                />

                <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transform-none">
                  <p
                    style={{
                      fontFamily:
                        "'Barlow Semi Condensed Local', Arial, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: "rgba(65, 65, 62, 0.52)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {step.number}
                  </p>

                  <h3
                    className="mt-5"
                    style={{
                      fontFamily:
                        "'Instrument Serif Local', Georgia, serif",
                      fontWeight: 400,
                      fontSize: "clamp(27px, 2.2vw, 34px)",
                      lineHeight: "1",
                      letterSpacing: "-0.025em",
                      color: "rgba(58, 58, 55, 0.90)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "'Barlow Local', Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "rgba(65, 65, 62, 0.66)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
