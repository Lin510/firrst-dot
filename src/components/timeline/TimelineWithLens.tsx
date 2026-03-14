"use client";

import { useState } from "react";
import type { Locale, DotRecord } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { TimelineLens } from "@/lib/timeline/lens";
import LensSwitcher from "./LensSwitcher";
import TimelineAxis from "./TimelineAxis";

type Props = {
  dots: DotRecord[];
  locale: Locale;
  dict: Dictionary;
};

export default function TimelineWithLens({ dots, locale, dict }: Props) {
  const [lens, setLens] = useState<TimelineLens>("narrative");

  return (
    <>
      <LensSwitcher activeLens={lens} onChange={setLens} dict={dict} />
      <TimelineAxis dots={dots} locale={locale} dict={dict} lens={lens} />
    </>
  );
}
