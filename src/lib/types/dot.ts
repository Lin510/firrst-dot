export type Locale = "ro" | "en";

export type LocalizedText = {
  ro?: string;
  en?: string;
};

export type PerspectiveBlock = {
  title: LocalizedText;
  body: LocalizedText;
};

export type SourceLink = {
  label: LocalizedText;
  href: string;
};

export type DotRecord = {
  id: string;
  slug: {
    ro?: string;
    en?: string;
  };

  title: LocalizedText;
  periodLabel: LocalizedText;
  sortYear: number;
  endYear?: number;

  shortLine: LocalizedText;
  coolingLabel?: LocalizedText;
  summary: LocalizedText;

  thesis: LocalizedText;
  antithesis: LocalizedText;
  synthesis: LocalizedText;

  factualLayer: LocalizedText[];
  legalLayer: LocalizedText[];
  systemLayer: LocalizedText[];

  systemView: PerspectiveBlock;
  rebelView: PerspectiveBlock;

  whyItMatters: LocalizedText;
  consequences: LocalizedText[];

  /** Slug-uri de teme (referințe la Theme.slug) */
  themeSlugs?: string[];

  /** ID-uri de referințe juridice (referințe la LegalReference.id) */
  legalRefIds?: string[];

  /** ID-uri de surse bibliografice (referințe la Source.id) */
  sourceIds?: string[];

  /** ID-ul épocii istorice (referință la Regime.id) */
  regimeId?: string;

  /** Taguri libere suplimentare */
  tags: string[];

  /** Referințe la alte dots înrudite */
  relatedIds?: string[];

  /** Linkuri simple inline (opțional, pentru referințe rapide) */
  sources?: SourceLink[];

  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
