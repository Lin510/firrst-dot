import Link from "next/link";
import type { Locale } from "@/lib/types";

export type MiniDot = {
  id: string;
  slug: { ro?: string; en?: string };
  title: { ro?: string; en?: string };
  periodLabel: { ro?: string; en?: string };
};

type Props = {
  prev?: MiniDot;
  current: MiniDot;
  next?: MiniDot;
  locale: Locale;
  prevLabel: string;
  nextLabel: string;
};

function L(
  obj: Record<string, string | undefined> | undefined,
  lang: Locale
): string {
  if (!obj) return "";
  return obj[lang] ?? obj.ro ?? obj.en ?? "";
}

function dotHref(dot: MiniDot, locale: Locale): string {
  const slug = dot.slug?.[locale] ?? dot.slug?.ro ?? dot.id;
  return `/${locale}/dot/${slug}`;
}

export default function DotMiniAxis({
  prev,
  current,
  next,
  locale,
  prevLabel,
  nextLabel,
}: Props) {
  return (
    <nav className="dot-mini-axis" aria-label="Poziție în axă">
      {/* Prev */}
      <div className="mini-axis-slot mini-axis-prev">
        {prev ? (
          <Link href={dotHref(prev, locale)} className="mini-axis-link">
            <span className="mini-axis-dir" aria-label={prevLabel}>←</span>
            <span className="mini-axis-period">{L(prev.periodLabel, locale)}</span>
            <span className="mini-axis-title">{L(prev.title, locale)}</span>
          </Link>
        ) : (
          <span className="mini-axis-empty" aria-hidden />
        )}
      </div>

      {/* Current */}
      <div className="mini-axis-slot mini-axis-current" aria-current="page">
        <span className="mini-axis-marker" aria-hidden>■</span>
        <span className="mini-axis-period">{L(current.periodLabel, locale)}</span>
      </div>

      {/* Next */}
      <div className="mini-axis-slot mini-axis-next">
        {next ? (
          <Link href={dotHref(next, locale)} className="mini-axis-link">
            <span className="mini-axis-period">{L(next.periodLabel, locale)}</span>
            <span className="mini-axis-title">{L(next.title, locale)}</span>
            <span className="mini-axis-dir" aria-label={nextLabel}>→</span>
          </Link>
        ) : (
          <span className="mini-axis-empty" aria-hidden />
        )}
      </div>
    </nav>
  );
}
