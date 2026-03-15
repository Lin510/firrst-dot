"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";
import { locales } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/paths";

type Props = {
  locale: Locale;
};

export default function LocaleSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const otherLocale = locales.find((l) => l !== locale) as Locale;
  const switchedPath = switchLocalePath(pathname, locale, otherLocale);

  return (
    <Link
      href={switchedPath || `/${otherLocale}`}
      lang={otherLocale}
      aria-label={`Switch language to ${otherLocale === "ro" ? "română" : "English"}`}
      className="text-xs font-sans tracking-widest uppercase border border-[var(--color-border-subtle)] rounded-sm px-2 py-1 text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-ink)] hover:border-[var(--color-ink-muted)] transition-colors"
    >
      {otherLocale}
    </Link>
  );
}
