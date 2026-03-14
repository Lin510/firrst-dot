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

  return (
    <div className="px-6 py-16 max-w-[var(--content-max-width)] mx-auto">
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
