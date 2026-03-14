"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, DotRecord } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import "@/styles/timeline.scss";

type Props = {
  dots: DotRecord[];
  locale: Locale;
  dict: Dictionary;
};

export default function TimelineAxis({ dots, locale, dict }: Props) {
  const pathname = usePathname();

  return (
    <ol className="timeline-axis list-none p-0 m-0" aria-label={dict.timeline.title}>
      {dots.map((dot, index) => {
        const slug = dot.slug?.[locale] ?? dot.slug?.ro ?? dot.id;
        const title = dot.title?.[locale] ?? dot.title?.ro ?? "";
        const shortLine = dot.shortLine?.[locale] ?? dot.shortLine?.ro ?? "";
        const isActive = pathname === `/${locale}/dot/${slug}`;
        const seq = String(index + 1).padStart(2, "0");

        return (
          <li key={dot.id} className={`timeline-entry${isActive ? " is-active" : ""}`}>
            <span className={`timeline-dot-marker is-published${isActive ? " is-active" : ""}`} aria-hidden />
            <span className="timeline-entry-seq" aria-hidden>{seq}</span>

            <div className="flex flex-col gap-1.5">
              {/* Period stamp — date of registration */}
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
                  {title}
                </Link>
              </h2>

              {shortLine && (
                <p className="text-sm text-[var(--color-ink-muted)] m-0 leading-relaxed max-w-[56ch]">
                  {shortLine}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
