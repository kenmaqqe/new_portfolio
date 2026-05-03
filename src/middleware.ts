import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uk"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_static (inside /public)
  // - all root files inside /public (e.g. /favicon.ico)
  matcher: ["/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};
