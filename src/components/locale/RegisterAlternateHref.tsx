"use client";

import { useEffect } from "react";
import { useAlternateHref } from "@/lib/i18n/AlternateHrefContext";

/**
 * Rendered inside a dot page to register its correct other-locale URL.
 * Cleans up on unmount so the switcher reverts to the default path-swap logic.
 */
export function RegisterAlternateHref({ href }: { href: string }) {
  const { setAlternateHref } = useAlternateHref();

  useEffect(() => {
    setAlternateHref(href);
    return () => {
      setAlternateHref(null);
    };
  }, [href, setAlternateHref]);

  return null;
}
