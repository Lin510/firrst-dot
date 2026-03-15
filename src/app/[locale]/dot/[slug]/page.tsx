import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import type { MiniDot } from "@/components/dot/DotMiniAxis";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { connectDB } from "@/lib/db/connect";
import { Dot } from "@/models/Dot";
import DotExpandedPanel from "@/components/dot/DotExpandedPanel";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;

  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw: any = await Dot.findOne({
    $or: [{ [`slug.${lang}`]: slug }, { id: slug }],
    published: true,
  }).lean().exec();

  if (!raw) return {};
  const dot = JSON.parse(JSON.stringify(raw));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const L = (f: any) => (f?.[lang] ?? f?.ro ?? "") as string;

  const siteName = lang === "ro" ? "prrimul punct?" : "firrst-dot?";
  return {
    title: { absolute: `${L(dot.title)} — ${siteName}` },
    description: L(dot.shortLine),
    openGraph: {
      title: `${L(dot.title)} — ${siteName}`,
      description: L(dot.summary),
      url: `https://firrst-dot.vercel.app/${lang}/dot/${L(dot.slug) || (dot.id as string)}`,
    },
  };
}

export default async function DotPage({ params }: Props) {
  const { locale, slug } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(lang);

  await connectDB();

  // Find by slug for active locale, or fallback to id
  const raw = await Dot.findOne({
    $or: [{ [`slug.${lang}`]: slug }, { id: slug }],
    published: true,
  })
    .lean()
    .exec();

  if (!raw) notFound();
  const dot = JSON.parse(JSON.stringify(raw));

  // Fetch all published dots sorted by sortYear to find prev/next
  const allRaw = await Dot.find({ published: true })
    .sort({ sortYear: 1 })
    .select("id slug title periodLabel sortYear")
    .lean()
    .exec();
  const all: MiniDot[] = JSON.parse(JSON.stringify(allRaw));
  const currentIndex = all.findIndex((d) => d.id === dot.id);
  const prevDot: MiniDot | undefined = currentIndex > 0 ? all[currentIndex - 1] : undefined;
  const nextDot: MiniDot | undefined =
    currentIndex < all.length - 1 ? all[currentIndex + 1] : undefined;

  const BASE = "https://firrst-dot.vercel.app";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LD = (f: any) => (f?.[lang] ?? f?.ro ?? "") as string;
  const dotJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": LD(dot.title),
    "description": LD(dot.shortLine),
    "abstract": LD(dot.synthesis),
    "datePublished": String(dot.sortYear as number),
    "url": `${BASE}/${lang}/dot/${LD(dot.slug) || (dot.id as string)}`,
    "isPartOf": {
      "@type": "CollectionPage",
      "name": lang === "ro" ? "Cronologie — firrst-dot?" : "Timeline — firrst-dot?",
      "url": `${BASE}/${lang}/timeline`,
    },
    "about": {
      "@type": "Thing",
      "name": LD(dot.title),
      "description": LD(dot.summary),
    },
    "text": `${LD(dot.thesis)} ${LD(dot.synthesis)}`,
    "keywords": (Array.isArray(dot.tags) ? dot.tags as string[] : []).join(", "),
    "citation": (Array.isArray(dot.legalLayer) ? dot.legalLayer : [])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((l: any) => LD(l))
      .filter(Boolean)
      .join("; "),
  };

  return (
    <div className="px-6 py-16 max-w-[var(--content-max-width)] mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dotJsonLd) }} />
      <DotExpandedPanel
        dot={dot}
        locale={lang}
        dict={dict}
        prevDot={prevDot}
        nextDot={nextDot}
      />
    </div>
  );
}
