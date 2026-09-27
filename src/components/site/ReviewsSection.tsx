import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Star } from "lucide-react";
import { submitReview, type Review } from "@/lib/reviews.functions";
import { EMAIL } from "./data";

const ratingLabels = {
  speed: "Geschwindigkeit der Umsetzung",
  complexity: "Projektkomplexität",
  quality: "Gesamtqualität der Dienstleistung",
} as const;

function StarRatingInput({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="space-y-2">
      <p
        style={{
          fontFamily: "'Barlow Local', Arial, sans-serif",
          fontSize: "12px",
          fontWeight: 400,
          letterSpacing: "0.02em",
          color: "rgba(65, 65, 62, 0.58)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {label}
      </p>

      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="p-0.5 transition-colors"
            aria-label={`${star} Sterne`}
          >
            <Star
              className={`h-5 w-5 ${
                star <= (hover || value)
                  ? "fill-foreground text-foreground"
                  : "fill-transparent text-muted-foreground/40"
              }`}
            />
          </button>
        ))}

        <span
          className="ml-2 tabular-nums"
          style={{
            fontFamily: "'Barlow Local', Arial, sans-serif",
            fontSize: "12px",
            color: "rgba(65, 65, 62, 0.58)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {value}/5
        </span>
      </div>
    </div>
  );
}

function StarDisplay({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= value
              ? "fill-foreground text-foreground"
              : "fill-transparent text-muted-foreground/40"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const average =
    Math.round(
      ((review.speed_rating +
        review.complexity_rating +
        review.quality_rating) /
        3) *
        10,
    ) / 10;

  return (
    <article className="panel p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3
          style={{
            fontFamily:
              "'Instrument Serif Local', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(25px, 2vw, 32px)",
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
            color: "rgba(58, 58, 55, 0.90)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {review.company_name}
        </h3>

        <div className="flex items-center gap-2">
          <StarDisplay value={Math.round(average)} />

          <span
            className="tabular-nums"
            style={{
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "rgba(65, 65, 62, 0.62)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {average.toFixed(1)}
          </span>
        </div>
      </div>

      <p
        className="mt-4"
        style={{
          fontFamily: "'Barlow Local', Arial, sans-serif",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "1.6",
          color: "rgba(65, 65, 62, 0.68)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {review.message}
      </p>

      <dl className="mt-6 space-y-3 border-t border-border pt-5">
        {[
          ["Geschwindigkeit", review.speed_rating],
          ["Projektkomplexität", review.complexity_rating],
          ["Gesamtqualität", review.quality_rating],
        ].map(([label, value]) => (
          <div
            key={label as string}
            className="flex items-center justify-between gap-4"
          >
            <dt
              style={{
                fontFamily:
                  "'Barlow Semi Condensed Local', Arial, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(65, 65, 62, 0.52)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {label}
            </dt>

            <dd className="flex items-center gap-2">
              <StarDisplay value={value as number} />

              <span
                className="tabular-nums"
                style={{
                  fontFamily:
                    "'Barlow Semi Condensed Local', Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgba(65, 65, 62, 0.62)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {value}/5
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

/**
 * Manuell gepflegte Referenzen. Hier können echte Bewertungen ergänzt werden —
 * freigegebene Bewertungen aus der Datenbank haben Vorrang.
 */
const MANUAL_REVIEWS: Review[] = [];

export function ReviewsSection({
  initialReviews,
}: {
  initialReviews: Review[];
}) {
  const [reviews] = useState<Review[]>(
    initialReviews.length > 0 ? initialReviews : MANUAL_REVIEWS,
  );

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    speedRating: 0,
    complexityRating: 0,
    qualityRating: 0,
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");

  const submit = useServerFn(submitReview);

  const field =
    "w-full border border-border bg-white px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.speedRating < 1 ||
      form.complexityRating < 1 ||
      form.qualityRating < 1 ||
      !form.companyName.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      await submit({ data: form });

      const body = [
        `Name des Unternehmens / Privatperson: ${form.companyName}`,
        "",
        "Bewertungen:",
        `- Geschwindigkeit der Umsetzung: ${form.speedRating}/5`,
        `- Projektkomplexität: ${form.complexityRating}/5`,
        `- Gesamtqualität der Dienstleistung: ${form.qualityRating}/5`,
        "",
        "Persönliche Nachricht:",
        form.message,
        "",
        "Hinweis: Diese Bewertung wurde in die Datenbank eingetragen und wartet auf Freigabe.",
      ].join("\n");

      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        "Neue Kundenbewertung – " + form.companyName,
      )}&body=${encodeURIComponent(body)}`;

      setStatus("sent");

      setForm({
        companyName: "",
        speedRating: 0,
        complexityRating: 0,
        qualityRating: 0,
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="bewertungen"
      className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24"
    >
      <p
        className="eyebrow"
        style={{
          fontFamily:
            "'Barlow Semi Condensed Local', Arial, sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: "rgba(65, 65, 62, 0.52)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        08 — Kundenmeinungen &amp; Referenzen
      </p>

      <h2
        className="mt-4 max-w-3xl"
        style={{
          fontFamily:
            "'Instrument Serif Local', Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(42px, 4.2vw, 64px)",
          lineHeight: "0.96",
          letterSpacing: "-0.035em",
          color: "rgba(58, 58, 55, 0.90)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        Kundenmeinungen &amp; Referenzen
      </h2>

      <p
        className="mt-6 max-w-2xl"
        style={{
          fontFamily: "'Barlow Local', Arial, sans-serif",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "1.6",
          color: "rgba(65, 65, 62, 0.68)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        Teilen Sie Ihre Erfahrungen mit uns. Jede Bewertung wird vor der
        Veröffentlichung von unserem Team überprüft.
      </p>

      <div className="mt-12">
        {!showForm ? (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center border border-foreground px-6 py-4 transition-colors hover:bg-primary hover:text-primary-foreground"
            style={{
              fontFamily:
                "'Barlow Semi Condensed Local', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Bewertung abgeben
          </button>
        ) : (
          <form
            onSubmit={onSubmit}
            className="panel max-w-2xl p-7 sm:p-10"
          >
            <h3
              style={{
                fontFamily:
                  "'Instrument Serif Local', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 2.4vw, 36px)",
                lineHeight: "1",
                letterSpacing: "-0.025em",
                color: "rgba(58, 58, 55, 0.90)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Bewertung abgeben
            </h3>

            <div className="mt-6 space-y-5">
              <input
                name="companyName"
                required
                maxLength={200}
                value={form.companyName}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    companyName: e.target.value,
                  }))
                }
                placeholder="Name des Unternehmens / Privatperson"
                className={field}
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontSize: "15px",
                  color: "rgba(65, 65, 62, 0.82)",
                }}
              />

              <div className="grid gap-5 sm:grid-cols-3">
                <StarRatingInput
                  label={ratingLabels.speed}
                  value={form.speedRating}
                  onChange={(v) =>
                    setForm((f) => ({
                      ...f,
                      speedRating: v,
                    }))
                  }
                />

                <StarRatingInput
                  label={ratingLabels.complexity}
                  value={form.complexityRating}
                  onChange={(v) =>
                    setForm((f) => ({
                      ...f,
                      complexityRating: v,
                    }))
                  }
                />

                <StarRatingInput
                  label={ratingLabels.quality}
                  value={form.qualityRating}
                  onChange={(v) =>
                    setForm((f) => ({
                      ...f,
                      qualityRating: v,
                    }))
                  }
                />
              </div>

              <textarea
                name="message"
                required
                maxLength={2000}
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    message: e.target.value,
                  }))
                }
                placeholder="Ihre persönliche Nachricht"
                className={`${field} resize-none`}
                style={{
                  fontFamily: "'Barlow Local', Arial, sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.55",
                  color: "rgba(65, 65, 62, 0.82)",
                }}
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center bg-primary px-6 py-4 text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-50"
                style={{
                  fontFamily:
                    "'Barlow Semi Condensed Local', Arial, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {status === "submitting"
                  ? "Wird gesendet..."
                  : "Bewertung senden"}
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  fontFamily:
                    "'Barlow Local', Arial, sans-serif",
                  fontSize: "12px",
                  color: "rgba(65, 65, 62, 0.58)",
                  WebkitFontSmoothing: "antialiased",
                }}
                className="transition-colors hover:text-foreground"
              >
                Abbrechen
              </button>
            </div>

            {status === "sent" && (
              <p
                className="mt-4"
                style={{
                  fontFamily:
                    "'Barlow Local', Arial, sans-serif",
                  fontSize: "12px",
                  lineHeight: "1.55",
                  color: "rgba(65, 65, 62, 0.58)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Vielen Dank. Ihre Bewertung wurde zur Überprüfung
                übermittelt.
              </p>
            )}

            {status === "error" && (
              <p
                className="mt-4"
                style={{
                  fontFamily:
                    "'Barlow Local', Arial, sans-serif",
                  fontSize: "12px",
                  lineHeight: "1.55",
                  color: "var(--destructive)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Bitte füllen Sie alle Pflichtfelder aus und vergeben Sie
                alle Sterne.
              </p>
            )}
          </form>
        )}
      </div>

      <div className="mt-16">
        <p
          className="eyebrow"
          style={{
            fontFamily:
              "'Barlow Semi Condensed Local', Arial, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "rgba(65, 65, 62, 0.52)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Freigegebene Bewertungen
        </p>

        {reviews.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}
          </div>
        ) : (
          <div className="panel mt-8 max-w-2xl p-8 sm:p-10">
            <p
              style={{
                fontFamily:
                  "'Barlow Local', Arial, sans-serif",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "rgba(65, 65, 62, 0.68)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Noch keine Bewertungen vorhanden.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}