import type { LocalizedText } from "./dot";

export type SourceType =
  | "carte"
  | "articol"
  | "arhiva"
  | "statistica"
  | "raport"
  | "jurnal"
  | "document"
  | "alt";

export type Source = {
  id: string;
  type: SourceType;

  title: LocalizedText;
  author?: string;
  year?: number;
  publisher?: LocalizedText;

  /** Fragment citat */
  excerpt?: LocalizedText;

  href?: string;

  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
