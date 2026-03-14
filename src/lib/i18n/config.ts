import { type Locale } from "@/lib/types";

export const locales: Locale[] = ["ro", "en"];
export const defaultLocale: Locale = "ro";

export function isValidLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}
