"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, DotRecord } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { TimelineLens } from "@/lib/timeline/lens";
import { getTimelineProjection } from "@/lib/timeline/lens";
import "@/styles/timeline.scss";

type Props = {
  dots: DotRecord[];
  locale: Locale;
  dict: Dictionary;
  lens?: TimelineLens;
};

export default function TimelineAxis({ dots, locale, dict, lens = "narrative" }: Props) {
  const pathname = usePathname();

  return (
    <ol className="timeline-axis list-none p-0 m-0" aria-label={dict.timeline.title}>
      {dots.map((dot, index) => {
        const slug = dot.slug?.[locale] ?? dot.slug?.ro ?? dot.id;
        const isActive = pathname === `/${locale}/dot/${slug}`;
        const seq = String(index + 1).padStart(2, "0");
        const projection = getTimelineProjection(dot, lens, locale);

        return (
          <li key={dot.id} className={`timeline-entry${isActive ? " is-active" : ""}`}>
            <span className={`timeline-dot-marker is-published${isActive ? " is-active" : ""}`} aria-hidden />
            <span className="timeline-entry-seq" aria-hidden>{seq}</span>

            <div className="flex flex-col gap-1.5">
              {/* Period stamp */}
              <span
                className="inline-flex items-center gap-1.5 font-sans text-[0.625rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]"
                aria-label="Perioadă"
              >
                <span className="inline-block w-2 h-px bg-[var(--color-border)]" aria-hidden />
                {dot.periodLabel?.[locale] ?? dot.periodLabel?.ro ?? String(dot.sortYear)}
              </span>

              <h2 className="text-base leading-snug text-[var(--color-ink)] m-0 font-normal">
                <Link
                  href={`/${locale}/dot/${slug}`}
                  className="no-underline hover:text-[var(--color-accent)] transition-colors"
                >
                  {projection.title}
                </Link>
              </h2>

              {projection.body && (
                <p
                  className={[
                    "m-0 leading-relaxed max-w-[56ch] transition-[font-size,color,line-height]",
                    projection.density === "light"
                      ? "text-sm text-[var(--color-ink-muted)]"
                      : projection.density === "medium"
                      ? "text-sm text-[var(--color-ink)] italic"
                      : "text-sm text-[var(--color-ink)] line-clamp-4",
                  ].join(" ")}
                >
                  {projection.body}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

