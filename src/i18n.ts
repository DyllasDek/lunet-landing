import type { Dictionary } from "./dictionaries/en";

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Cookie the proxy reads to remember the last chosen language. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const SITE_URL = "https://lunet.one";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  ru: () => import("./dictionaries/ru").then((m) => m.default),
};

export const hasLocale = (locale: string): locale is Locale => (locales as readonly string[]).includes(locale);

export const getDictionary = (locale: Locale) => dictionaries[locale]();

/** hreflang map for metadata alternates and the sitemap. */
export const languageAlternates = (path = "") => ({
  ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
  "x-default": `${SITE_URL}/${defaultLocale}${path}`,
});
