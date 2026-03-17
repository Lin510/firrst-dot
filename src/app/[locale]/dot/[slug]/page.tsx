import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import type { MiniDot } from "@/components/dot/DotMiniAxis";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { connectDB } from "@/lib/db/connect";
import { Dot } from "@/models/Dot";
import DotExpandedPanel from "@/components/dot/DotExpandedPanel";
import { RegisterAlternateHref } from "@/components/locale/RegisterAlternateHref";
import { JsonLd } from "@/components/JsonLd";
import { buildDotJsonLd } from "@/lib/seo/jsonld";
import { dotPath, absoluteUrl } from "@/lib/i18n/paths";

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

  const otherLang: Locale = lang === "ro" ? "en" : "ro";
  const canonicalSlug = (dot.slug?.[lang] ?? dot.id) as string;
  const altSlug = (dot.slug?.[otherLang] ?? dot.slug?.ro ?? dot.id) as string;
  const siteName = lang === "ro" ? "prrimul punct?" : "firrst-dot?";
  return {
    title: { absolute: `${L(dot.title)} — ${siteName}` },
    description: L(dot.shortLine),
    alternates: {
      canonical: `/${lang}/dot/${canonicalSlug}`,
      languages: {
        ro: `/ro/dot/${lang === "ro" ? canonicalSlug : altSlug}`,
        en: `/en/dot/${lang === "en" ? canonicalSlug : altSlug}`,
      },
    },
    openGraph: {
      title: `${L(dot.title)} — ${siteName}`,
      description: L(dot.summary),
      url: absoluteUrl(dotPath(lang, canonicalSlug)),
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
    .select("id slug title periodLabel sortYear coolingLabel")
    .lean()
    .exec();
  const all: MiniDot[] = JSON.parse(JSON.stringify(allRaw));
  const currentIndex = all.findIndex((d) => d.id === dot.id);
  const prevDot: MiniDot | undefined = currentIndex > 0 ? all[currentIndex - 1] : undefined;
  const nextDot: MiniDot | undefined =
    currentIndex < all.length - 1 ? all[currentIndex + 1] : undefined;

  const otherLocale = lang === "ro" ? "en" : "ro";
  const alternateSlug = dot.slug?.[otherLocale] ?? dot.slug?.ro ?? (dot.id as string);

  return (
    <div className="px-6 py-16 max-w-[var(--content-max-width)] mx-auto">
      <RegisterAlternateHref href={`/${otherLocale}/dot/${alternateSlug}`} />
      <JsonLd data={buildDotJsonLd(lang, dot, all)} />
      <DotExpandedPanel
        dot={dot}
        locale={lang}
        dict={dict}
        prevDot={prevDot}
        nextDot={nextDot}
        allDots={all}
      />
    </div>
  );
}
