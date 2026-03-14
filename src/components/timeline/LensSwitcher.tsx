"use client";

import type { TimelineLens } from "@/lib/timeline/lens";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type Props = {
  activeLens: TimelineLens;
  onChange: (lens: TimelineLens) => void;
  dict: Dictionary;
};

const LENSES: TimelineLens[] = ["narrative", "thesis", "synthesis"];

export default function LensSwitcher({ activeLens, onChange, dict }: Props) {
  return (
    <div
      className="flex items-center gap-4"
      role="group"
      aria-label={dict.timeline.lens.label}
    >
      <span className="font-sans text-[0.5625rem] tracking-[0.2em] uppercase text-[var(--color-ink-subtle)] select-none">
        {dict.timeline.lens.label}
      </span>

      <div className="flex items-center gap-1">
        {LENSES.map((lens) => {
          const label = dict.timeline.lens[lens];
          const isActive = lens === activeLens;

          return (
            <button
              key={lens}
              onClick={() => onChange(lens)}
              aria-pressed={isActive}
              className={[
                "px-2.5 py-1 font-sans text-[0.5625rem] tracking-[0.15em] uppercase transition-all duration-150 cursor-pointer",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
                isActive
                  ? "bg-[var(--color-ink)] text-[#f5f0eb] shadow-none"
                  : "bg-transparent text-[var(--color-ink-subtle)] border border-[var(--color-border)] hover:border-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
