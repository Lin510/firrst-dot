import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { connectDB } from "@/lib/db/connect";
import { Dot } from "@/models/Dot";
import DotExpandedPanel from "@/components/dot/DotExpandedPanel";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function DotPage({ params }: Props) {
  const { locale, slug } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(lang);

  await connectDB();

  // Find by slug for active locale, or fallback to id
  const dot = await Dot.findOne({
    $or: [{ [`slug.${lang}`]: slug }, { id: slug }],
    published: true,
  })
    .lean()
    .exec();

  if (!dot) notFound();

  return (
    <div className="px-6 py-16 max-w-[var(--content-max-width)] mx-auto">
      <DotExpandedPanel dot={dot as never} locale={lang} dict={dict} />
    </div>
  );
}
