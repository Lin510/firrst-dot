import Link from "next/link";
import type { Locale } from "@/lib/types";
import type { MiniDot } from "@/components/dot/DotMiniAxis";

type Props = {
  allDots: MiniDot[];
  dotId: string;
  locale: Locale;
  label: string;
};

export default function CoolingPath({ allDots, dotId, locale, label }: Props) {
  const activeIndex = allDots.findIndex((d) => d.id === dotId);

  return (
    <div className="cooling-path" aria-label={label}>
      <span className="cooling-label">{label}</span>
      <ol className="cooling-stages" role="list">
        {allDots.map((dot, i) => {
          const slug = dot.slug?.[locale] ?? dot.slug?.ro ?? dot.id;
          const href = `/${locale}/dot/${slug}`;
          const stageLabel =
            dot.coolingLabel?.[locale] ??
            dot.coolingLabel?.ro ??
            dot.title?.[locale] ??
            dot.title?.ro ??
            "";
          const isCurrent = i === activeIndex;

          return (
            <li
              key={dot.id}
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
                <span className="cooling-step-text" aria-current="step">
                  {stageLabel}
                </span>
              ) : (
                <Link href={href} className="cooling-step-text">
                  {stageLabel}
                </Link>
              )}
              {i < allDots.length - 1 && (
                <span className="cooling-arrow" aria-hidden>
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

