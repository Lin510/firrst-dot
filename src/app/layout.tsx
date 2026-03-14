import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "firrst-dot? / prrimul punct",
  description:
    "O lectură stratificată a mutațiilor juridice, instituționale și sistemice. / A layered reading of legal, institutional, and systemic mutations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
