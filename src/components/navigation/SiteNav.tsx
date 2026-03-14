import Link from "next/link";
import type { Locale } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import LocaleSwitcher from "@/components/locale/LocaleSwitcher";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function SiteNav({ locale, dict }: Props) {
  return (
    <nav
      aria-label="Navigare principală"
      className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border-subtle)]"
    >
      <Link
        href={`/${locale}`}
        className="font-serif text-sm tracking-widest text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-ink)] transition-colors"
        aria-label="Acasă — firrst-dot?"
      >
        firrst<span className="text-[var(--color-accent)]">·</span>dot<span className="text-[var(--color-accent-light)]">?</span>
      </Link>

      <div className="flex items-center gap-6 text-sm">
        <Link
          href={`/${locale}/timeline`}
          className="text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-ink)] transition-colors"
        >
          {dict.nav.timeline}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-ink)] transition-colors"
        >
          {dict.nav.about}
        </Link>
        <LocaleSwitcher locale={locale} />
      </div>
    </nav>
  );
}
