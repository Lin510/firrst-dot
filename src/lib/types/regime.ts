import type { LocalizedText } from "./dot";

export type Regime = {
  /** e.g. "pre-modern", "principate", "regat", "comunism", "tranzitie", "digital" */
  id: string;

  label: LocalizedText;
  description?: LocalizedText;

  startYear: number;
  endYear?: number;

  /** Culoare UI opțională pentru filtrare vizuală */
  color?: string;
};
