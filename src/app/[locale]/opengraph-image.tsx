import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ locale: string }> };

export default async function OgImage({ params }: Props) {
  const { locale } = await params;
  const isRo = locale === "ro";

  const siteName = isRo ? "prrimul punct?" : "firrst-dot?";
  const question = isRo
    ? ["Când a încetat istoria", "să fie trăită și a început", "să fie administrată?"]
    : ["When did history stop", "being lived and start", "being administered?"];
  const tagline = isRo
    ? "O lectură stratificată a mutațiilor juridice, instituționale și sistemice."
    : "A layered reading of legal, institutional and systemic mutations.";

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
        {/* Site name */}
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
              fontSize: 20,
              letterSpacing: "0.15em",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
          >
            {siteName}
          </span>
        </div>

        {/* Main question */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {question.map((line, i) => (
            <div
              key={i}
              style={{
                color: "#f5f0e8",
                fontSize: 64,
                fontFamily: "serif",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ width: 56, height: 2, backgroundColor: "#8b6f47" }} />
          <span
            style={{
              color: "#6a6460",
              fontSize: 22,
              fontFamily: "sans-serif",
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {tagline}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
