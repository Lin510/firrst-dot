import type { Regime } from "@/lib/types";

export const seedRegimes: Regime[] = [
  {
    id: "pre-modern",
    label: { ro: "Înainte de modernitate", en: "Pre-modern era" },
    description: {
      ro: "Epoca în care omul era vizibil doar local — gospodărie, brațe, contribuabili. Niciun sistem central nu voia o imagine completă a persoanei.",
      en: "The era when a person was visible only locally — household, labor, taxpayers. No central system sought a complete image of the person.",
    },
    startYear: 1000,
    endYear: 1837,
    color: "#a89070",
  },
  {
    id: "principate",
    label: { ro: "Principatele Române", en: "Romanian Principalities" },
    description: {
      ro: "Primele tentative sistematice de a număra și clasifica populația în scopuri fiscale și militare.",
      en: "The first systematic attempts to count and classify the population for fiscal and military purposes.",
    },
    startYear: 1838,
    endYear: 1918,
    color: "#8b7355",
  },
  {
    id: "regat",
    label: { ro: "Regatul României", en: "Kingdom of Romania" },
    description: {
      ro: "Modernizarea administrativă accelerată: registre, stare civilă, sisteme de evidență.",
      en: "Accelerated administrative modernization: registries, civil status, record-keeping systems.",
    },
    startYear: 1918,
    endYear: 1947,
    color: "#7a6b5a",
  },
  {
    id: "comunism",
    label: { ro: "Republica Populară / Socialistă", en: "People's / Socialist Republic" },
    description: {
      ro: "Evidența centralizată a persoanei devine instrument de stat. CNP-ul transformă persoana într-o serie univocă.",
      en: "Centralized personal records become a state instrument. The personal ID number transforms a person into a unique series.",
    },
    startYear: 1948,
    endYear: 1989,
    color: "#5a6b7a",
  },
  {
    id: "tranzitie",
    label: { ro: "Tranziție", en: "Transition" },
    description: {
      ro: "Schimbarea gramaticii juridice: proprietate privată, contracte, titluri. Persoana intră în noi registre — patrimoniu, societăți, titluri.",
      en: "Change of legal grammar: private property, contracts, titles. The person enters new registries — patrimony, companies, titles.",
    },
    startYear: 1990,
    endYear: 2004,
    color: "#6b7a5a",
  },
  {
    id: "digital",
    label: { ro: "Era digitală", en: "Digital era" },
    description: {
      ro: "Datele personale devin interoperabile între sisteme. RNEP, informatizarea administrației, identitatea digitală.",
      en: "Personal data becomes interoperable between systems. RNEP, administrative digitization, digital identity.",
    },
    startYear: 2005,
    color: "#3d4a5c",
  },
];
