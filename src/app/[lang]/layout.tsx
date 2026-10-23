import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Alegreya_SC, JetBrains_Mono, Onest } from "next/font/google";
import { getDictionary, hasLocale, languageAlternates, locales, SITE_URL } from "@/i18n";
import "../globals.css";

const alegreya = Alegreya_SC({
  subsets: ["latin", "cyrillic"],
  variable: "--font-alegreya",
  weight: "400",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const others = await Promise.all(locales.filter((l) => l !== lang).map(getDictionary));

  return {
    title: t.meta.title,
    description: t.meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates(),
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.description,
      url: `/${lang}`,
      siteName: "Lunet",
      locale: t.meta.ogLocale,
      alternateLocale: others.map((o) => o.meta.ogLocale),
      type: "website",
      images: ["/images/hero-table.png"],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${alegreya.variable} ${onest.variable} ${mono.variable} scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
