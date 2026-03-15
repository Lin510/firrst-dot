import type { Metadata } from "next";
import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { connectDB } from "@/lib/db/connect";
import { Dot } from "@/models/Dot";
import TimelineWithLens from "@/components/timeline/TimelineWithLens";
import { JsonLd } from "@/components/JsonLd";
import { buildTimelineJsonLd } from "@/lib/seo/jsonld";
import { localePath } from "@/lib/i18n/paths";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const isRo = lang === "ro";
  return {
    title: { absolute: isRo ? "Cronologie — prrimul punct?" : "Timeline — firrst-dot?" },
    description: isRo
      ? "Cronologia pragurilor prin care persoana devine lizibilă pentru sistem. Aceleași puncte pot fi citite narativ, critic și structural."
      : "A timeline of thresholds through which the person becomes legible to the system. The same dots can be read narratively, critically and structurally.",
    alternates: {
      canonical: localePath(lang, "timeline"),
      languages: {
        ro: localePath("ro", "timeline"),
        en: localePath("en", "timeline"),
      },
    },
  };
}

export default async function TimelinePage({ params }: Props) {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(lang);

  await connectDB();
  const raw = await Dot.find({ published: true })
    .sort({ sortYear: 1 })
    .lean()
    .exec();
  const dots = JSON.parse(JSON.stringify(raw));

  return (
    <div className="px-6 py-16 max-w-[var(--content-max-width)] mx-auto">
      <JsonLd data={buildTimelineJsonLd(lang, dots)} />
      <header className="mb-10">
        <h1 className="text-[var(--color-ink)] mb-2">{dict.timeline.title}</h1>
        <p className="text-sm text-[var(--color-ink-subtle)] italic m-0 leading-relaxed">
          {dict.timeline.subtitle}
        </p>
      </header>

      {dots.length === 0 ? (
        <p className="text-[var(--color-ink-muted)]">{dict.timeline.noResults}</p>
      ) : (
        <div className="flex flex-col gap-10">
          <TimelineWithLens dots={dots} locale={lang} dict={dict} />
        </div>
      )}
    </div>
  );
}
