import type { Theme } from "@/lib/types";

export const seedThemes: Theme[] = [
  {
    slug: "identitate",
    label: { ro: "Identitate", en: "Identity" },
    description: {
      ro: "Cum a fost redefinită persoana ca subiect identificabil, clasificabil și operabil de sistem.",
      en: "How the person was redefined as an identifiable, classifiable, and system-operable subject.",
    },
    color: "#8b6f47",
  },
  {
    slug: "proprietate",
    label: { ro: "Proprietate", en: "Property" },
    description: {
      ro: "Transformarea relației dintre om și pământ, bunuri, patrimoniu — de la posesia nescrisă la titlul documentat.",
      en: "The transformation of the relationship between people and land, assets, patrimony — from unwritten possession to documented title.",
    },
    color: "#6b7a5a",
  },
  {
    slug: "fiscal",
    label: { ro: "Fiscal", en: "Fiscal" },
    description: {
      ro: "Sistemele prin care statul a obținut capacitatea de a măsura, urmări și executa obligații financiare.",
      en: "The systems through which the state gained the capacity to measure, track and enforce financial obligations.",
    },
    color: "#7a6b5a",
  },
  {
    slug: "administratie",
    label: { ro: "Administrație", en: "Administration" },
    description: {
      ro: "Construcția aparatului birocratic și a procedurilor prin care statul a câștigat capacitate operațională.",
      en: "The construction of the bureaucratic apparatus and procedures through which the state gained operational capacity.",
    },
    color: "#5a6b7a",
  },
  {
    slug: "digital",
    label: { ro: "Digitalizare", en: "Digitization" },
    description: {
      ro: "Interoperabilitatea datelor personale și accelerarea trasabilității prin infrastructuri digitale.",
      en: "The interoperability of personal data and the acceleration of traceability through digital infrastructure.",
    },
    color: "#3d4a5c",
  },
  {
    slug: "lege",
    label: { ro: "Cadru juridic", en: "Legal framework" },
    description: {
      ro: "Actele normative, decretele și procedurile care au formalizat mutațiile sistemice.",
      en: "The normative acts, decrees and procedures that formalized systemic mutations.",
    },
    color: "#6b5a7a",
  },
  {
    slug: "vizibilitate",
    label: { ro: "Vizibilitate", en: "Visibility" },
    description: {
      ro: "Creșterea capacității sistemului de a vedea, număra, localiza și corela persoana.",
      en: "The growing capacity of the system to see, count, locate and correlate the person.",
    },
    color: "#7a5a6b",
  },
];
