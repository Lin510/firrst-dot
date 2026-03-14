import type { Metadata } from "next";
import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";
import SiteNav from "@/components/navigation/SiteNav";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;

  return {
    title: {
      default: "firrst-dot? / prrimul punct",
      template: "%s — firrst-dot?",
    },
    description:
      lang === "ro"
        ? "O lectură stratificată a mutațiilor juridice, instituționale și sistemice."
        : "A layered reading of legal, institutional, and systemic mutations.",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale}>
      <body>
        <div className="min-h-dvh flex flex-col" style={{ background: "var(--color-parchment)", color: "var(--color-ink)" }}>
          <header>
            <SiteNav locale={locale as Locale} dict={dict} />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="px-6 py-8 border-t border-[var(--color-border-subtle)] text-xs font-sans text-[var(--color-ink-subtle)] flex justify-between items-center">
            <span>firrst-dot? / prrimul punct</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
