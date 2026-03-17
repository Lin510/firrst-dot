import { ImageResponse } from "next/og";
import type { Locale } from "@/lib/types";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { connectDB } from "@/lib/db/connect";
import { Dot } from "@/models/Dot";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function DotOgImage({ params }: Props) {
  const { locale, slug } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : defaultLocale;

  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw: any = await Dot.findOne({
    $or: [{ [`slug.${lang}`]: slug }, { id: slug }],
    published: true,
  })
    .lean()
    .exec();

  const dot = raw ? JSON.parse(JSON.stringify(raw)) : null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const L = (f: any) => (f?.[lang] ?? f?.ro ?? "") as string;

  const isRo = lang === "ro";
  const title = dot ? L(dot.title) : isRo ? "Un punct" : "A dot";
  const periodLabel = dot ? L(dot.periodLabel) : "";
  const shortLine = dot ? L(dot.shortLine) : "";
  const siteName = isRo ? "prrimul punct?" : "firrst-dot?";

  const titleFontSize = title.length > 40 ? 48 : title.length > 25 ? 58 : 68;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a1714",
          padding: "72px 80px",
        }}
      >
        {/* Top bar — site name + period */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#8b6f47",
              }}
            />
            <span
              style={{
                color: "#8b6f47",
                fontSize: 18,
                letterSpacing: "0.15em",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
              }}
            >
              {siteName}
            </span>
          </div>

          {periodLabel && (
            <span
              style={{
                color: "#5a6b80",
                fontSize: 22,
                fontFamily: "sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              {periodLabel}
            </span>
          )}
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#f5f0e8",
              fontSize: titleFontSize,
              fontFamily: "serif",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              maxWidth: 920,
            }}
          >
            {title}
          </div>

          {shortLine && (
            <div
              style={{
                color: "#8a8278",
                fontSize: 26,
                fontFamily: "sans-serif",
                lineHeight: 1.5,
                maxWidth: 820,
              }}
            >
              {shortLine}
            </div>
          )}
        </div>

        {/* Bottom accent */}
        <div style={{ width: 56, height: 2, backgroundColor: "#8b6f47" }} />
      </div>
    ),
    { ...size }
  );
}
