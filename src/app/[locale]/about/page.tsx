import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(lang);

  const isRo = lang === "ro";

  return (
    <div className="px-6 py-20 md:py-32 max-w-[var(--content-max-width)] mx-auto">
      <header className="mb-16 max-w-2xl">
        <p className="text-xs font-sans tracking-[0.2em] uppercase text-[var(--color-ink-subtle)] mb-4">
          {dict.about.tagline}
        </p>
        <h1>{dict.about.title}</h1>
      </header>

      <div className="flex flex-col gap-10 max-w-[var(--reading-max-width)]">
        <section>
          <h2 className="text-sm font-sans font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
            {isRo ? "Logica de bază" : "The core logic"}
          </h2>
          <p className="text-[var(--color-ink-muted)]">
            {isRo
              ? "Fiecare punct din cronologie nu este doar o dată. Este un prag documentat — o mutație juridică, instituțională sau sistemică care a schimbat ce este posibil, vizibil, clasificabil sau executabil."
              : "Each point in the timeline is not just a date. It is a documented threshold — a legal, institutional, or systemic mutation that changed what is possible, visible, classifiable, or executable."}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-sans font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
            {isRo ? "Modelul de interpretare" : "The interpretation model"}
          </h2>
          <p className="text-[var(--color-ink-muted)]">
            {isRo
              ? "Proiectul urmează o logică repetată: mutație → justificare → efect → două capete ale realității → sinteză. Fiecare punct trebuie să păstreze tensiunea dintre ordine și control, modernizare și trasabilitate, cetățean și populație administrabilă."
              : "The project follows a repeated logic: mutation → justification → effect → two ends of the reality → synthesis. Each dot must preserve the tension between order and control, modernization and traceability, citizen and administrable population."}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-sans font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
            {isRo ? "Două capete ale aceleiași realități" : "Two ends of the same reality"}
          </h2>
          <p className="text-[var(--color-ink-muted)]">
            {isRo
              ? "Aceeași mutație poate fi citită ca modernizare legitimă sau ca inventariere. Nu dorim să aplatizăm tensiunea. Ambele lecturi sunt reale. Sinteza emerge din această tensiune — nu din neutralitate falsă."
              : "The same mutation can be read as legitimate modernization or as inventory. We do not want to flatten the tension. Both readings are real. Synthesis emerges from this tension — not from false neutrality."}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-sans font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
            {isRo ? "Praguri absorbite de narațiuni mai mari" : "Thresholds absorbed by larger narratives"}
          </h2>
          <p className="text-[var(--color-ink-muted)]">
            {isRo
              ? "Unele praguri nu lipsesc pentru că ar fi minore, ci pentru că au fost absorbite de narațiuni mai mari — unire, reformă, modernizare, emancipare. Metoda proiectului încearcă să le citească din nou, ca mutații de infrastructură."
              : "Some thresholds are not missing because they are minor, but because they were absorbed by larger narratives — unification, reform, modernization, emancipation. The project's method attempts to re-read them as infrastructure mutations."}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-sans font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
            {isRo ? "Ce nu este acest proiect" : "What this project is not"}
          </h2>
          <p className="text-[var(--color-ink-muted)]">
            {isRo
              ? "Nu este o arhivă academică sterilă. Nu este o tablă de conspirație. Nu este o pagină de landing corporativă. Nu este un manifest. Este un loc pentru lectură lentă, comparație și reflecție."
              : "It is not a sterile academic archive. It is not a conspiracy board. It is not a corporate landing page. It is not a manifesto. It is a place for slow reading, comparison, and reflection."}
          </p>
        </section>
      </div>
    </div>
  );
}
