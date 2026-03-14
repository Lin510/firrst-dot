import type { LocalizedText } from "./dot";

export type Theme = {
  /** URL-safe slug, e.g. "identitate", "proprietate", "fiscal" */
  slug: string;

  label: LocalizedText;
  description?: LocalizedText;

  /** Culoare UI opțională, hex sau css var */
  color?: string;
};
