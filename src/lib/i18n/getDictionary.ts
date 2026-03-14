import type { Locale } from "@/lib/types";

export type Dictionary = typeof import("./dictionaries/ro.json");

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ro: () => import("./dictionaries/ro.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
