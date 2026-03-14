import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { NextProxy, ProxyConfig } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

export const proxy: NextProxy = function (request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Detect preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLocale =
    locales.find((locale) => acceptLanguage.toLowerCase().includes(locale)) ??
    defaultLocale;

  return NextResponse.redirect(
    new URL(`/${preferredLocale}${pathname}`, request.url)
  );
}

export default proxy;

export const config: ProxyConfig = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
