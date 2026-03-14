import Link from "next/link";
import type { Locale } from "@/lib/types";

// Fixed conceptual cooling path — where is this dot in the 200-year story
const COOLING_STAGES: Record<Locale, string[]> = {
  ro: [
    "om viu",
    "evidență",
    "registru",
    "serie",
    "trasabilitate",
    "interoperabilitate",
    "operabilitate la distanță",
  ],
  en: [
    "living person",
    "record",
    "registry",
    "series",
    "traceability",
    "interoperability",
    "remote operability",
  ],
};

// Map each stage index to dot slug per locale
const STAGE_SLUG: Record<Locale, string[]> = {
  ro: [
    "omul-invizibil",
    "recensamantul-1838",
    "evidenta-persoanelor-1949",
    "cnp-1978",
    "gramatica-juridica-1990",
    "rnep-informatizare-2005",
    "identitate-digitala-2025",
  ],
  en: [
    "the-invisible-person",
    "census-1838",
    "population-records-1949",
    "personal-id-number-1978",
    "legal-grammar-1990",
    "rnep-digitization-2005",
    "digital-identity-2025",
  ],
};

// Map each dot id to its stage index (0-based)
const DOT_STAGE: Record<string, number> = {
  "dot-pre-modern": 0,
  "dot-recensamant-1838": 1,
  "dot-evidenta-1949": 2,
  "dot-cnp-1978": 3,
  "dot-gramatica-juridica-1990": 4,
  "dot-rnep-2005": 5,
  "dot-identitate-digitala-2025": 6,
};

type Props = {
  dotId: string;
  locale: Locale;
  label: string;
};

export default function CoolingPath({ dotId, locale, label }: Props) {
  const stages = COOLING_STAGES[locale] ?? COOLING_STAGES.ro;
  const slugs = STAGE_SLUG[locale] ?? STAGE_SLUG.ro;
  const activeIndex = DOT_STAGE[dotId] ?? -1;

  return (
    <div className="cooling-path" aria-label={label}>
      <span className="cooling-label">{label}</span>
      <ol className="cooling-stages" role="list">
        {stages.map((stage, i) => {
          const href = `/${locale}/dot/${slugs[i]}`;
          const isCurrent = i === activeIndex;
          return (
            <li
              key={stage}
              className={[
                "cooling-step",
                isCurrent ? "is-current" : "",
                i < activeIndex ? "is-past" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={isCurrent ? "step" : undefined}
            >
              {isCurrent ? (
                <span className="cooling-step-text" aria-current="step">{stage}</span>
              ) : (
                <Link href={href} className="cooling-step-text">
                  {stage}
                </Link>
              )}
              {i < stages.length - 1 && (
                <span className="cooling-arrow" aria-hidden>→</span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
