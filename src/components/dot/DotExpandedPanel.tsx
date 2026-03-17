import type { Locale, DotRecord } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { MiniDot } from "@/components/dot/DotMiniAxis";
import DotMiniAxis from "@/components/dot/DotMiniAxis";
import CoolingPath from "@/components/dot/CoolingPath";
import "@/styles/reading.scss";

type Props = {
  dot: DotRecord;
  locale: Locale;
  dict: Dictionary;
  prevDot?: MiniDot;
  nextDot?: MiniDot;
  allDots: MiniDot[];
};

function L(
  obj: Record<string, string | undefined> | undefined,
  lang: Locale
): string {
  if (!obj) return "";
  return obj[lang] ?? obj.ro ?? obj.en ?? "";
}

const REGIME_LABELS: Record<string, { ro: string; en: string }> = {
  "pre-modern":  { ro: "Premodernitate",        en: "Pre-modern" },
  "principate":  { ro: "Principate Române",     en: "Romanian Principalities" },
  "regat":       { ro: "Regatul României",       en: "Kingdom of Romania" },
  "comunism":    { ro: "Regim Comunist",         en: "Communist Regime" },
  "tranzitie":   { ro: "Tranziție",              en: "Transition" },
  "digital":     { ro: "Era Digitală",           en: "Digital Era" },
};

export default function DotExpandedPanel({ dot, locale, dict, prevDot, nextDot, allDots }: Props) {
  const d = dict.dot;
  const regimeLabel = dot.regimeId
    ? (REGIME_LABELS[dot.regimeId]?.[locale] ?? dot.regimeId)
    : null;

  const hasAssociations =
    regimeLabel || dot.themeSlugs?.length || dot.legalRefIds?.length;

  return (
    <article className="bento-dot">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="bento-cell bento-hero">
        <span className="period-label">
          <span className="entry-mark" aria-hidden>■</span>
          {L(dot.periodLabel, locale)}
        </span>
        <h1>{L(dot.title, locale)}</h1>
        <p className="short-line">{L(dot.shortLine, locale)}</p>
      </div>

      {/* ── Summary ──────────────────────────────────────────── */}
      {dot.summary && (
        <div className="bento-summary">
          <p>{L(dot.summary, locale)}</p>
        </div>
      )}

      {/* ── Calea răcirii ────────────────────────────────────── */}
      <CoolingPath
        allDots={allDots}
        dotId={dot.id}
        locale={locale}
        label={d.coolingPath}
      />

      {/* ── Tensiune: Teză ↔ Antiteză ────────────────────────── */}
      <div className="bento-tension">
        {/* Teză — vocea rebelă */}
        <div className="bento-cell bento-thesis">
          <span className="tension-label">{d.thesis}</span>
          <p className="tension-claim">{L(dot.thesis, locale)}</p>
          {dot.rebelView?.body && (
            <p className="tension-body">{L(dot.rebelView.body, locale)}</p>
          )}
        </div>

        {/* Antiteză — vocea sistemului */}
        <div className="bento-cell bento-antithesis">
          <span className="tension-label">{d.antithesis}</span>
          <p className="tension-claim">{L(dot.antithesis, locale)}</p>
          {dot.systemView?.body && (
            <p className="tension-body">{L(dot.systemView.body, locale)}</p>
          )}
        </div>
      </div>

      {/* ── Conector vizual → Sinteză ─────────────────────────── */}
      <div className="bento-synthesis-connector" aria-hidden="true">
        <span>↓</span>
      </div>

      {/* ── Sinteză ──────────────────────────────────────────── */}
      <div className="bento-cell bento-synthesis">
        <span className="synthesis-label">{d.synthesis}</span>
        <p>{L(dot.synthesis, locale)}</p>
      </div>

      {/* ── 3 Layere ─────────────────────────────────────────── */}
      <div className="bento-layers">
        {dot.factualLayer?.length > 0 && (
          <div className="bento-cell bento-layer bento-layer-factual">
            <span className="layer-label">{d.factualLayer}</span>
            <ul>
              {dot.factualLayer.map((item, i) => (
                <li key={i}>{L(item, locale)}</li>
              ))}
            </ul>
          </div>
        )}

        {dot.legalLayer?.length > 0 && (
          <div className="bento-cell bento-layer bento-layer-legal">
            <span className="layer-label">{d.legalLayer}</span>
            <ul>
              {dot.legalLayer.map((item, i) => (
                <li key={i}>{L(item, locale)}</li>
              ))}
            </ul>
          </div>
        )}

        {dot.systemLayer?.length > 0 && (
          <div className="bento-cell bento-layer bento-layer-system">
            <span className="layer-label">{d.systemLayer}</span>
            <ul>
              {dot.systemLayer.map((item, i) => (
                <li key={i}>{L(item, locale)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ── Urma lăsată ────────────────────────────────────── */}
      {dot.consequences && dot.consequences.length > 0 && (
        <div className="bento-cell bento-trace">
          <span className="layer-label">{d.trace}</span>
          <ul>
            {dot.consequences.map((item, i) => (
              <li key={i}>{L(item, locale)}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Asocieri ─────────────────────────────────────────── */}
      {hasAssociations && (
        <div className="bento-associations">
          {regimeLabel && (
            <span className="assoc-chip assoc-regime">{regimeLabel}</span>
          )}
          {dot.themeSlugs?.map((slug) => (
            <span key={slug} className="assoc-chip assoc-theme">
              {slug}
            </span>
          ))}
          {dot.legalRefIds && dot.legalRefIds.length > 0 && (
            <span className="assoc-chip assoc-legal">
              {dot.legalRefIds.length}{" "}
              {dot.legalRefIds.length === 1 ? "lege" : "legi"}
            </span>
          )}
        </div>
      )}

      {/* ── De ce contează ────────────────────────────────────── */}
      {dot.whyItMatters && L(dot.whyItMatters, locale) && (
        <div className="bento-cell bento-why">
          <span className="layer-label">{d.whyItMatters}</span>
          <p>{L(dot.whyItMatters, locale)}</p>
        </div>
      )}

      {/* ── Surse ────────────────────────────────────────────── */}
      {dot.sources && dot.sources.length > 0 && (
        <div className="bento-sources">
          <span className="layer-label">{d.sources}</span>
          <ul>
            {dot.sources.map((src, i) => (
              <li key={i}>
                <a href={src.href} target="_blank" rel="noopener noreferrer">
                  {L(src.label, locale)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Taguri ───────────────────────────────────────────── */}
      {dot.tags?.length > 0 && (
        <footer className="bento-tags">
          {dot.tags.map((tag) => (
            <span key={tag} className="dot-tag">
              {tag}
            </span>
          ))}
        </footer>
      )}

      {/* ── Mini-axă cronologică ─────────────────────────────── */}
      <DotMiniAxis
        prev={prevDot}
        current={dot}
        next={nextDot}
        locale={locale}
        prevLabel={d.prevDot}
        nextLabel={d.nextDot}
      />
    </article>
  );
}
