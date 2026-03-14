import type { DotRecord, Locale } from "@/lib/types";

export type TimelineLens = "narrative" | "thesis" | "synthesis";

export type LensProjection = {
  title: string;
  body: string;
  /** How densely the body text should render on the axis */
  density: "light" | "medium" | "heavy";
};

export function getTimelineProjection(
  dot: DotRecord,
  lens: TimelineLens,
  lang: Locale
): LensProjection {
  const title = dot.title?.[lang] ?? dot.title?.ro ?? "";

  switch (lens) {
    case "narrative":
      return {
        title,
        body: dot.shortLine?.[lang] ?? dot.shortLine?.ro ?? "",
        density: "light",
      };

    case "thesis":
      return {
        title,
        body: dot.thesis?.[lang] ?? dot.thesis?.ro ?? "",
        density: "heavy",
      };

    case "synthesis":
      return {
        title,
        body: dot.synthesis?.[lang] ?? dot.synthesis?.ro ?? "",
        density: "medium",
      };
  }
}
