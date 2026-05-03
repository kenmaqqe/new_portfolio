import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "uk"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";

  if (!locales.includes(locale as Locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale: locale as Locale,
    messages,
  };
});
