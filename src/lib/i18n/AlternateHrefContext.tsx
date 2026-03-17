"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type CtxValue = {
  alternateHref: string | null;
  setAlternateHref: (href: string | null) => void;
};

const AlternateHrefContext = createContext<CtxValue>({
  alternateHref: null,
  setAlternateHref: () => {},
});

export function AlternateHrefProvider({ children }: { children: ReactNode }) {
  const [alternateHref, setAlternateHref] = useState<string | null>(null);
  return (
    <AlternateHrefContext.Provider value={{ alternateHref, setAlternateHref }}>
      {children}
    </AlternateHrefContext.Provider>
  );
}

export function useAlternateHref(): CtxValue {
  return useContext(AlternateHrefContext);
}
