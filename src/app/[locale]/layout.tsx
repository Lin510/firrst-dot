import type { Metadata } from "next";
import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";
import SiteNav from "@/components/navigation/SiteNav";
import { JsonLd } from "@/components/JsonLd";
import { buildWebsiteJsonLd } from "@/lib/seo/jsonld";
import { localePath } from "@/lib/i18n/paths";
import { AlternateHrefProvider } from "@/lib/i18n/AlternateHrefContext";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;

  const isRo = lang === "ro";
  return {
    metadataBase: new URL("https://firrst-dot.vercel.app"),
    title: {
      default: isRo ? "prrimul punct?" : "firrst-dot?",
      template: isRo ? "%s — prrimul punct?" : "%s — firrst-dot?",
    },
    description: isRo
      ? "O lectură stratificată a mutațiilor juridice, instituționale și sistemice care au schimbat felul în care persoana devine vizibilă, clasificabilă și operabilă pentru stat."
      : "A layered reading of legal, institutional and systemic mutations that changed how a person becomes visible, classifiable and operable by the state.",
    alternates: {
      canonical: localePath(lang, "home"),
      languages: {
        ro: localePath("ro", "home"),
        en: localePath("en", "home"),
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const lang = locale as Locale;
  const dict = await getDictionary(lang);

  return (
    <html lang={locale}>
      <head>
        <JsonLd data={buildWebsiteJsonLd(lang)} />
      </head>
      <body>
        <AlternateHrefProvider>
        <div className="min-h-dvh flex flex-col" style={{ background: "var(--color-parchment)", color: "var(--color-ink)" }}>
          <header>
            <SiteNav locale={lang} dict={dict} />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="px-6 py-8 border-t border-[var(--color-border-subtle)] text-xs font-sans text-[var(--color-ink-subtle)] flex justify-between items-center">
            <span>{lang === "ro" ? "prrimul punct?" : "firrst-dot?"}</span>
          </footer>
        </div>
        </AlternateHrefProvider>
      </body>
    </html>
  );
}
