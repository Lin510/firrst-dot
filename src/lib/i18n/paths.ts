import type { Locale } from "@/lib/types";

export const SITE_URL = "https://firrst-dot.vercel.app";

// Single source of truth for all localized URL paths.
// Rewrites in next.config.ts map these to internal route folders.
const PATHS = {
  ro: {
    home: "/ro",
    timeline: "/ro/cronologie",
    about: "/ro/metoda",
  },
  en: {
    home: "/en",
    timeline: "/en/timeline",
    about: "/en/method",
  },
} as const;

export type PathKey = keyof (typeof PATHS)["ro"];

export function localePath(locale: Locale, key: PathKey): string {
  return PATHS[locale][key];
}

export function dotPath(locale: Locale, slug: string): string {
  return `/${locale}/dot/${slug}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Used by LocaleSwitcher to find the equivalent path in another locale.
 * Maps /ro/cronologie → /en/timeline, /ro/metoda → /en/method, etc.
 * Dot pages and anything else fall back to simple locale swap.
 */
export function switchLocalePath(
  path: string,
  from: Locale,
  to: Locale
): string {
  for (const key of Object.keys(PATHS.ro) as PathKey[]) {
    if (path === PATHS[from][key]) {
      return PATHS[to][key];
    }
  }
  // Dot pages + unknown: replace locale segment
  return path.replace(`/${from}`, `/${to}`);
}
