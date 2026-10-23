import type { MetadataRoute } from "next";
import { languageAlternates, locales, SITE_URL } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = languageAlternates();
  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages },
  }));
}
