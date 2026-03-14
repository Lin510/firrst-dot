import type { LocalizedText } from "./dot";

export type LegalReferenceType =
  | "lege"
  | "decret"
  | "ordonanta"
  | "regulament"
  | "tratat"
  | "registru"
  | "procedura"
  | "directiva"
  | "constitutie"
  | "alt";

export type LegalReference = {
  id: string;
  type: LegalReferenceType;

  /** e.g. "nr. 105/1996" */
  number?: string;
  year: number;

  /** Instituția emitentă */
  issuedBy: LocalizedText;

  title: LocalizedText;

  /** Fragment relevant din textul actului */
  excerpt?: LocalizedText;

  /** Link către sursa oficială (Monitorul Oficial, EUR-Lex, etc.) */
  href?: string;

  /** "RO" | "EU" | "AT" etc. */
  countryCode?: string;

  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
