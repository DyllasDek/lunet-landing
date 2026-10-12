import type { Metadata } from "next";
import { Alegreya_SC, JetBrains_Mono, Onest } from "next/font/google";
import "./globals.css";

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

const description =
  "Lunet считает лист персонажа за вас, а мастеру даёт пульт сессии: группа, карты, видео, музыка и журнал стола — в одной вкладке. D&D 5e, PbtA и ваши собственные правила.";

export const metadata: Metadata = {
  title: "Lunet — лист персонажа и стол для НРИ",
  description,
  metadataBase: new URL("https://lunet.one"),
  openGraph: {
    title: "Lunet — меньше считать, больше играть",
    description,
    url: "https://lunet.one",
    siteName: "Lunet",
    locale: "ru_RU",
    type: "website",
    images: ["/images/hero-table.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${alegreya.variable} ${onest.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
