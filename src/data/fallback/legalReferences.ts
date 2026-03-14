import type { LegalReference } from "@/lib/types";

export const seedLegalReferences: LegalReference[] = [
  {
    id: "legea-cnp-1978",
    type: "decret",
    number: "nr. 97/1978",
    year: 1978,
    issuedBy: { ro: "Consiliul de Stat al RSR", en: "State Council of the Socialist Republic of Romania" },
    title: {
      ro: "Decretul nr. 97/1978 privind Codul Numeric Personal",
      en: "Decree no. 97/1978 on the Personal Numeric Code",
    },
    excerpt: {
      ro: "Fiecărei persoane fizice cu domiciliul în Republica Socialistă România i se atribuie un cod numeric personal, unic și imuabil pe durata vieții.",
      en: "Each natural person domiciled in the Socialist Republic of Romania shall be assigned a personal numeric code, unique and immutable for life.",
    },
    href: "https://legislatie.just.ro",
    countryCode: "RO",
    published: true,
  },
  {
    id: "legea-evidentei-1996",
    type: "lege",
    number: "nr. 105/1996",
    year: 1996,
    issuedBy: { ro: "Parlamentul României", en: "Romanian Parliament" },
    title: {
      ro: "Legea nr. 105/1996 privind evidența populației",
      en: "Law no. 105/1996 on population records",
    },
    excerpt: {
      ro: "Evidența populației se organizează și se ține de Ministerul de Interne prin Direcția Generală de Evidență a Populației.",
      en: "Population records shall be organized and maintained by the Ministry of Internal Affairs through the General Directorate for Population Records.",
    },
    href: "https://legislatie.just.ro",
    countryCode: "RO",
    published: true,
  },
  {
    id: "constitutia-1866",
    type: "constitutie",
    year: 1866,
    issuedBy: { ro: "Adunarea Constituantă a Principatelor Unite", en: "Constituent Assembly of the United Principalities" },
    title: {
      ro: "Constituția României din 1866",
      en: "Romanian Constitution of 1866",
    },
    excerpt: {
      ro: "Proprietatea de orice natură, precum și toate creanțele asupra statului sunt garantate.",
      en: "Property of any nature, as well as all claims against the state, are guaranteed.",
    },
    countryCode: "RO",
    published: true,
  },
  {
    id: "decretul-censura-1838",
    type: "decret",
    year: 1838,
    issuedBy: { ro: "Regulamentul Organic / Administrația fanariotă-rusă", en: "Organic Regulation / Phanariot-Russian administration" },
    title: {
      ro: "Recensământul din 1838 — Principatul Valahiei",
      en: "Census of 1838 — Principality of Wallachia",
    },
    excerpt: {
      ro: "Prima operațiune sistematică de numărare și clasificare a populației din Principatele Române în scopuri fiscale și militare.",
      en: "The first systematic operation to count and classify the population of the Romanian Principalities for fiscal and military purposes.",
    },
    countryCode: "RO",
    published: true,
  },
  {
    id: "legea-rnep-2004",
    type: "lege",
    number: "nr. 290/2004",
    year: 2004,
    issuedBy: { ro: "Parlamentul României", en: "Romanian Parliament" },
    title: {
      ro: "Legea nr. 290/2004 privind Registrul Național de Evidență a Persoanelor",
      en: "Law no. 290/2004 on the National Register of Population Records",
    },
    excerpt: {
      ro: "Registrul Național de Evidență a Persoanelor constituie principala sursă de date de identitate pentru persoanele fizice și pentru instituțiile publice.",
      en: "The National Register of Population Records constitutes the primary source of identity data for natural persons and public institutions.",
    },
    href: "https://legislatie.just.ro",
    countryCode: "RO",
    published: true,
  },
  {
    id: "regulamentul-organic-1831",
    type: "regulament",
    year: 1831,
    issuedBy: { ro: "Imperiul Rus — administrație provizorie", en: "Russian Empire — provisional administration" },
    title: {
      ro: "Regulamentele Organice (1831–1832)",
      en: "Organic Regulations (1831–1832)",
    },
    excerpt: {
      ro: "Prima constituție modernă a Principatelor Române. Introduce administrația centralizată, registrele fiscale și separarea puterilor.",
      en: "The first modern constitution of the Romanian Principalities. Introduces centralized administration, fiscal registers and separation of powers.",
    },
    countryCode: "RO",
    published: true,
  },
];
