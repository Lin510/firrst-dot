import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { connectDB } from "@/lib/db/connect";
import { Dot } from "@/models/Dot";
import TimelineAxis from "@/components/timeline/TimelineAxis";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TimelinePage({ params }: Props) {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(lang);

  await connectDB();
  const dots = await Dot.find({ published: true })
    .sort({ sortYear: 1 })
    .lean()
    .exec();

  return (
    <div className="px-6 py-16 max-w-[var(--content-max-width)] mx-auto">
      <header className="mb-12">
        <h1 className="text-[var(--color-ink)]">{dict.timeline.title}</h1>
      </header>

      {dots.length === 0 ? (
        <p className="text-[var(--color-ink-muted)]">{dict.timeline.noResults}</p>
      ) : (
        <TimelineAxis dots={dots as never} locale={lang} dict={dict} />
      )}
    </div>
  );
}
