import Link from "next/link";
import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(lang);

  return (
    <div className="px-6 py-20 md:py-32 flex flex-col gap-16 max-w-[var(--content-max-width)] mx-auto">
      {/* Entry question */}
      <section className="flex flex-col gap-6 max-w-2xl">
        <p
          className="text-xs font-sans tracking-[0.2em] uppercase text-[var(--color-ink-subtle)]"
          aria-hidden
        >
          firrst-dot? · prrimul punct
        </p>

        <h1 className="text-balance leading-snug text-[var(--color-ink)]">
          {dict.home.question}
        </h1>

        <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-[60ch]">
          {dict.home.subline}
        </p>

        <Link
          href={`/${lang}/timeline`}
          className="self-start mt-4 inline-block px-6 py-3 text-sm font-sans tracking-wider border border-[var(--color-border)] text-[var(--color-ink-muted)] no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
        >
          {dict.home.cta}
        </Link>
      </section>

      {/* Concept strip */}
      <section
        aria-label={lang === "ro" ? "Ce este acest proiect" : "What this project is"}
        className="border-t border-[var(--color-border-subtle)] pt-12 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {[
          {
            label: lang === "ro" ? "Mutație" : "Mutation",
            body:
              lang === "ro"
                ? "Fiecare punct nu este doar o dată. Este un prag documentat. O mutație juridică, instituțională sau sistemică."
                : "Each dot is not just a date. It is a documented threshold. A legal, institutional, or systemic mutation.",
          },
          {
            label: lang === "ro" ? "Două capete ale aceleiași realități" : "Two ends of the same reality",
            body:
              lang === "ro"
                ? "Aceeași mutație poate fi citită ca modernizare sau ca inventariere. Ambele lecturi sunt reale."
                : "The same mutation can be read as modernization or as inventory. Both readings are real.",
          },
          {
            label: lang === "ro" ? "Sinteză" : "Synthesis",
            body:
              lang === "ro"
                ? "Nu propagandă. Nu neutralitate falsă. O sinteză ascuțită care emerge din tensiunea dintre teză și antetiză."
                : "Not propaganda. Not false neutrality. A sharp synthesis emerging from the tension between thesis and antithesis.",
          },
        ].map(({ label, body }) => (
          <div key={label} className="flex flex-col gap-3">
            <h2 className="text-sm font-sans font-semibold tracking-widest uppercase text-[var(--color-accent)]">
              {label}
            </h2>
            <p className="text-base text-[var(--color-ink-muted)] leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
