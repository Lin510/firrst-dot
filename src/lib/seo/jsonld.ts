import type { Locale } from "@/lib/types";
import { absoluteUrl, dotPath, localePath } from "@/lib/i18n/paths";

// Lean MongoDB document — all fields optional after JSON.parse(JSON.stringify(lean))
export type DotDoc = {
  id?: string;
  slug?: { ro?: string; en?: string };
  title?: { ro?: string; en?: string };
  periodLabel?: { ro?: string; en?: string };
  shortLine?: { ro?: string; en?: string };
  summary?: { ro?: string; en?: string };
  thesis?: { ro?: string; en?: string };
  synthesis?: { ro?: string; en?: string };
  tags?: string[];
  legalRefIds?: string[];
  relatedIds?: string[];
  sortYear?: number;
  endYear?: number;
  published?: boolean;
};

/** Resolve a localized string field, falling back to Romanian then empty. */
export function lz(
  field: { ro?: string; en?: string } | undefined,
  locale: Locale
): string {
  return field?.[locale] ?? field?.ro ?? "";
}

function slugOf(dot: DotDoc, locale: Locale): string {
  return dot.slug?.[locale] ?? dot.slug?.ro ?? dot.id ?? "";
}

// ─── Copy ──────────────────────────────────────────────────────────────────

const COPY = {
  ro: {
    siteName: "prrimul punct?",
    siteDescription:
      "O lectură stratificată a mutațiilor juridice, instituționale și sistemice care au schimbat felul în care persoana devine vizibilă, clasificabilă și operabilă pentru stat.",
    landingDescription:
      "Proiect de cercetare despre pragurile prin care istoria din România a încetat să fie trăită și a început să fie administrată. Cronologie interactivă de mutații juridice, instituționale și sistemice — 1838 până azi.",
    timelineTitle: "Cronologie — prrimul punct?",
    timelineDescription:
      "Cronologia pragurilor prin care persoana devine lizibilă pentru sistem. Aceleași puncte pot fi citite narativ, critic și structural.",
    methodTitle: "Metodă — prrimul punct?",
    methodDescription:
      "Cum sunt selectate, ancorate și interpretate punctele: mutație, două capete ale realității și sinteză structurală.",
    aboutProject:
      "Proiect despre pragurile prin care istoria a încetat să fie doar trăită și a început să fie administrată. Fiecare punct documentează o mutație juridică, instituțională sau sistemică din România.",
    timelineName: "Cronologie",
    methodName: "Metodă",
    homeName: "Acasă",
    genre: "istoria dreptului",
    audience:
      "Istorici, juriști, cercetători, jurnaliști și cititori interesați de istoria instituțională și genealogia politică a statului modern",
    keywords: [
      "firrst-dot?",
      "prrimul punct?",
      "mutații juridice",
      "istoria dreptului român",
      "evidența persoanelor România",
      "CNP",
      "stare civilă",
      "RNEP",
      "identitate digitală",
      "cronologie juridică",
      "recensământ 1838",
      "Regulamentul Organic",
      "Cuza stare civilă 1865",
      "administrarea populației",
    ],
  },
  en: {
    siteName: "firrst-dot?",
    siteDescription:
      "A layered reading of legal, institutional and systemic mutations that changed how a person becomes visible, classifiable and operable by the state.",
    landingDescription:
      "A research project about the thresholds where history in Romania stopped being only lived and started being administered. Interactive timeline of legal, institutional and systemic mutations — 1838 to today.",
    timelineTitle: "Timeline — firrst-dot?",
    timelineDescription:
      "A timeline of thresholds through which the person becomes legible to the system. The same dots can be read narratively, critically and structurally.",
    methodTitle: "Method — firrst-dot?",
    methodDescription:
      "How the dots are selected, anchored and interpreted: mutation, two ends of reality and structural synthesis.",
    aboutProject:
      "A project about the thresholds where history stopped being only lived and started being administered. Each dot documents a legal, institutional or systemic mutation in Romania.",
    timelineName: "Timeline",
    methodName: "Method",
    homeName: "Home",
    genre: "legal history",
    audience:
      "Historians, legal scholars, researchers, journalists and readers interested in institutional history and the political genealogy of the modern state",
    keywords: [
      "firrst-dot?",
      "the first dot",
      "legal mutations",
      "Romanian legal history",
      "population records Romania",
      "personal ID number",
      "civil registry",
      "RNEP",
      "digital identity",
      "legal timeline",
      "1838 census",
      "Regulamentul Organic",
      "Cuza civil status 1865",
      "population administration",
    ],
  },
} as const;

// ─── Shared publisher node ─────────────────────────────────────────────────

function publisherNode(locale: Locale) {
  return {
    "@type": "Organization",
    "@id": "https://firrst-dot.vercel.app/#publisher",
    name: locale === "ro" ? "prrimul punct?" : "firrst-dot?",
    alternateName: locale === "ro" ? "firrst-dot?" : "prrimul punct?",
    url: "https://firrst-dot.vercel.app",
  };
}

// ─── Builders ──────────────────────────────────────────────────────────────

export function buildWebsiteJsonLd(locale: Locale) {
  const copy = COPY[locale];
  const homeUrl = absoluteUrl(localePath(locale, "home"));
  const timelineUrl = absoluteUrl(localePath(locale, "timeline"));

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${homeUrl}#website`,
    url: homeUrl,
    name: copy.siteName,
    alternateName: locale === "ro" ? "firrst-dot?" : "prrimul punct?",
    inLanguage: locale,
    description: copy.siteDescription,
    genre: copy.genre,
    keywords: copy.keywords,
    publisher: publisherNode(locale),
    about: {
      "@type": "Thing",
      name:
        locale === "ro"
          ? "Mutații juridice și sistemice — România 1838–prezent"
          : "Legal and systemic mutations — Romania 1838–present",
      description: copy.aboutProject,
    },
    audience: {
      "@type": "Audience",
      audienceType: copy.audience,
    },
    mainEntity: {
      "@type": "CollectionPage",
      "@id": `${timelineUrl}#webpage`,
      url: timelineUrl,
      name: copy.timelineName,
      description: copy.timelineDescription,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl(localePath(locale, "timeline"))}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildLandingPageJsonLd(locale: Locale, dots: DotDoc[]) {
  const copy = COPY[locale];
  const homeUrl = absoluteUrl(localePath(locale, "home"));
  const timelineUrl = absoluteUrl(localePath(locale, "timeline"));
  const aboutUrl = absoluteUrl(localePath(locale, "about"));
  const publishedDots = dots.filter((d) => d.published !== false);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${homeUrl}#webpage`,
      url: homeUrl,
      name: copy.siteName,
      description: copy.landingDescription,
      inLanguage: locale,
      isPartOf: { "@id": `${homeUrl}#website` },
      breadcrumb: { "@id": `${homeUrl}#breadcrumbs` },
      author: publisherNode(locale),
      publisher: publisherNode(locale),
      about: copy.aboutProject,
      hasPart: [
        {
          "@type": "WebPage",
          "@id": `${timelineUrl}#webpage`,
          url: timelineUrl,
          name: copy.timelineName,
          description: copy.timelineDescription,
        },
        {
          "@type": "WebPage",
          "@id": `${aboutUrl}#webpage`,
          url: aboutUrl,
          name: copy.methodName,
          description: copy.methodDescription,
        },
        ...publishedDots.slice(0, 8).map((dot) => {
          const slug = slugOf(dot, locale);
          const url = absoluteUrl(dotPath(locale, slug));
          return {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: lz(dot.title, locale),
            description: lz(dot.shortLine, locale),
          };
        }),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${homeUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: copy.homeName, item: homeUrl },
        { "@type": "ListItem", position: 2, name: copy.timelineName, item: timelineUrl },
      ],
    },
  ];
}

export function buildTimelineJsonLd(locale: Locale, dots: DotDoc[]) {
  const copy = COPY[locale];
  const homeUrl = absoluteUrl(localePath(locale, "home"));
  const timelineUrl = absoluteUrl(localePath(locale, "timeline"));
  const publishedDots = [...dots]
    .filter((d) => d.published !== false)
    .sort((a, b) => (a.sortYear ?? 0) - (b.sortYear ?? 0));

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${timelineUrl}#webpage`,
      url: timelineUrl,
      name: copy.timelineTitle,
      description: copy.timelineDescription,
      inLanguage: locale,
      isPartOf: { "@id": `${homeUrl}#website` },
      breadcrumb: { "@id": `${timelineUrl}#breadcrumbs` },
      author: publisherNode(locale),
      publisher: publisherNode(locale),
      mainEntity: { "@id": `${timelineUrl}#itemlist` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${timelineUrl}#itemlist`,
      name: copy.timelineName,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: publishedDots.length,
      itemListElement: publishedDots.map((dot, index) => {
        const slug = slugOf(dot, locale);
        const url = absoluteUrl(dotPath(locale, slug));
        return {
          "@type": "ListItem",
          position: index + 1,
          url,
          name: lz(dot.title, locale),
          item: {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: lz(dot.title, locale),
            description: lz(dot.shortLine, locale),
          },
        };
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${timelineUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: copy.homeName, item: homeUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.timelineName,
          item: timelineUrl,
        },
      ],
    },
  ];
}

export function buildDotJsonLd(
  locale: Locale,
  dot: DotDoc,
  allDots: DotDoc[]
) {
  const copy = COPY[locale];
  const homeUrl = absoluteUrl(localePath(locale, "home"));
  const timelineUrl = absoluteUrl(localePath(locale, "timeline"));
  const slug = slugOf(dot, locale);
  const dotUrl = absoluteUrl(dotPath(locale, slug));

  const relatedUrls = (dot.relatedIds ?? [])
    .map((relId) => allDots.find((d) => d.id === relId))
    .filter((d): d is DotDoc => Boolean(d))
    .map((d) => absoluteUrl(dotPath(locale, slugOf(d, locale))));

  const keywords = Array.from(
    new Set(
      [
        ...(dot.tags ?? []),
        ...(dot.legalRefIds ?? []),
        lz(dot.periodLabel, locale),
        lz(dot.title, locale),
      ].filter(Boolean)
    )
  );

  const temporalCoverage =
    dot.endYear && dot.endYear !== dot.sortYear
      ? `${dot.sortYear}/${dot.endYear}`
      : `${dot.sortYear ?? ""}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${dotUrl}#webpage`,
      url: dotUrl,
      name: `${lz(dot.title, locale)} — ${copy.siteName}`,
      description: lz(dot.summary, locale),
      inLanguage: locale,
      isPartOf: { "@id": `${homeUrl}#website` },
      breadcrumb: { "@id": `${dotUrl}#breadcrumbs` },
      mainEntity: { "@id": `${dotUrl}#article` },
      ...(relatedUrls.length > 0 ? { relatedLink: relatedUrls } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${dotUrl}#article`,
      headline: lz(dot.title, locale),
      alternativeHeadline: lz(dot.shortLine, locale),
      description: lz(dot.summary, locale),
      articleSection: lz(dot.periodLabel, locale),
      inLanguage: locale,
      isPartOf: { "@id": `${timelineUrl}#webpage` },
      mainEntityOfPage: { "@id": `${dotUrl}#webpage` },
      author: publisherNode(locale),
      publisher: publisherNode(locale),
      temporalCoverage,
      keywords,
      about: [
        lz(dot.title, locale),
        lz(dot.periodLabel, locale),
        ...(dot.legalRefIds ?? []),
        ...(dot.tags ?? []),
      ].filter(Boolean),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${dotUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: copy.homeName, item: homeUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.timelineName,
          item: timelineUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: lz(dot.title, locale),
          item: dotUrl,
        },
      ],
    },
  ];
}

export function buildAboutPageJsonLd(locale: Locale) {
  const copy = COPY[locale];
  const homeUrl = absoluteUrl(localePath(locale, "home"));
  const aboutUrl = absoluteUrl(localePath(locale, "about"));

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${aboutUrl}#webpage`,
      url: aboutUrl,
      name: copy.methodTitle,
      description: copy.methodDescription,
      inLanguage: locale,
      isPartOf: { "@id": `${homeUrl}#website` },
      breadcrumb: { "@id": `${aboutUrl}#breadcrumbs` },
      author: publisherNode(locale),
      publisher: publisherNode(locale),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${aboutUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: copy.homeName, item: homeUrl },
        { "@type": "ListItem", position: 2, name: copy.methodName, item: aboutUrl },
      ],
    },
  ];
}
