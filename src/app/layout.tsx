import type { Metadata } from "next";
import "@/styles/globals.scss";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "prrimul punct?",
  description:
    "A multilingual research project documenting the legal, institutional and systemic mutations through which persons in Romania became visible, classifiable and administrable by the state — from the 1838 census to digital identity today.",
};

// Root-level WebSite schema: language-neutral, links to both locale versions.
// Each locale layout adds its own localized WebSite schema with @id scoped to its URL.
const ROOT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://firrst-dot.vercel.app/#website",
  url: "https://firrst-dot.vercel.app",
  name: "prrimul punct?",
  alternateName: "firrst-dot?",
  description:
    "A multilingual research project documenting the legal, institutional and systemic mutations through which persons in Romania became visible, classifiable and administrable by the state — from the 1838 census to digital identity today. An interactive timeline of documented historical thresholds spanning 180+ years.",
  inLanguage: ["ro", "en"],
  genre: "legal history",
  about: {
    "@type": "Thing",
    name: "Legal and systemic mutations — Romania 1838–present",
    description:
      "Each timeline node is a documented threshold: a law, decree or institutional reform that changed what is possible, visible or executable by the state in relation to its population. Topics: civil registry, census, CNP (personal ID number), RNEP, biometric data, digital identity.",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Historians, legal scholars, civil rights researchers, journalists and readers interested in institutional history and the political genealogy of the modern state",
  },
  keywords: [
    "Romanian legal history",
    "legal mutations Romania",
    "history of population administration",
    "civil registry Romania",
    "1838 census Regulamentul Organic",
    "Cuza civil status law 1865",
    "CNP personal identification number Romania",
    "RNEP national persons registry Romania",
    "eIDAS digital identity Romania",
    "documented historical thresholds",
    "interactive legal timeline",
  ],
  hasPart: [
    {
      "@type": "WebSite",
      "@id": "https://firrst-dot.vercel.app/ro#website",
      url: "https://firrst-dot.vercel.app/ro",
      inLanguage: "ro",
      name: "prrimul punct?",
    },
    {
      "@type": "WebSite",
      "@id": "https://firrst-dot.vercel.app/en#website",
      url: "https://firrst-dot.vercel.app/en",
      inLanguage: "en",
      name: "firrst-dot?",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <JsonLd data={ROOT_JSON_LD} />
      </head>
      <body>{children}</body>
    </html>
  );
}
