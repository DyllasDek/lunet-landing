import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  ArrowDown,
  AudioLines,
  Dices,
  Image as ImageIcon,
  LayoutGrid,
  LogIn,
  Music,
  ScrollText,
  Search,
  Send,
  TrendingUp,
  UserRoundPlus,
  Users,
  WifiOff,
  X,
  type LucideIcon,
} from "lucide-react";
import Logo from "@/components/Logo";
import type { Dictionary, Item, Responsive } from "@/dictionaries/en";
import { getDictionary, hasLocale, locales, type Locale } from "@/i18n";

const APP_URL = "https://play.lunet.one";

type T = { t: Dictionary };

function nav(t: Dictionary) {
  return [
    { href: "#players", label: t.nav.players },
    { href: "#masters", label: t.nav.masters },
    { href: "#rules", label: t.nav.rules },
    { href: "#start", label: t.nav.start },
  ];
}

/** Desktop copy with a shorter mobile variant. */
function R({ d, m }: Responsive) {
  return (
    <>
      <span className="hidden lg:inline">{d}</span>
      <span className="lg:hidden">{m}</span>
    </>
  );
}

function Eyebrow({ children, className = "text-accent" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[12px] font-bold tracking-[2px] uppercase lg:text-[13px] ${className}`}>
      {children}
    </div>
  );
}

function H2({ children, className = "text-fg" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[34px] leading-[36px] lg:text-[52px] lg:leading-[55px] ${className}`}>
      {children}
    </h2>
  );
}

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <Logo className="size-7 text-accent" />
      <span className="font-display text-[22px] leading-[22px]">Lunet</span>
    </a>
  );
}

function LocaleSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center gap-1 font-mono text-[13px]">
      {locales.map((l) =>
        l === lang ? (
          <span key={l} aria-current="true" className="px-1.5 py-1 text-fg uppercase">
            {l}
          </span>
        ) : (
          <a key={l} href={`/${l}`} hrefLang={l} lang={l} className="px-1.5 py-1 text-fg-3 uppercase transition hover:text-fg">
            {l}
          </a>
        ),
      )}
    </nav>
  );
}

function TelegramButton({ t, className = "" }: T & { className?: string }) {
  return (
    <a
      href={APP_URL}
      className={`inline-flex h-[54px] items-center justify-center gap-2 rounded-lg bg-accent px-6 text-[16px] font-semibold text-accent-ink transition hover:brightness-110 ${className}`}
    >
      <Send className="size-[18px]" strokeWidth={2.25} />
      {t.telegram}
    </a>
  );
}

function Nav({ t, lang }: T & { lang: Locale }) {
  return (
    <header className="flex h-16 items-center gap-4 px-page lg:h-[76px] lg:gap-9">
      <Brand />
      <div className="flex-1" />
      <nav className="hidden items-center gap-9 lg:flex">
        {nav(t).map((item) => (
          <a key={item.href} href={item.href} className="text-[15px] text-fg-2 transition hover:text-fg">
            {item.label}
          </a>
        ))}
      </nav>
      <LocaleSwitch lang={lang} label={t.nav.language} />
      <a
        href={APP_URL}
        className="inline-flex h-9 items-center gap-2 rounded-lg bg-raised px-3.5 text-[14px] font-semibold transition hover:bg-line-strong lg:h-10 lg:px-4"
      >
        <LogIn className="size-4" />
        {t.nav.login}
      </a>
    </header>
  );
}

function D20({ value }: { value: number }) {
  return (
    <div className="relative flex size-[30px] items-center justify-center">
      <svg viewBox="0 0 30 30" className="absolute inset-0" aria-hidden="true">
        <path d="M15 0 L27.99 7.5 L27.99 22.5 L15 30 L2.01 22.5 L2.01 7.5 Z" fill="#242932" stroke="#A1A8B4" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span className="relative font-mono text-[11px] font-bold">{value}</span>
    </div>
  );
}

function RollCard({ t }: T) {
  return (
    <div className="absolute bottom-3.5 left-3.5 z-10 flex w-[min(300px,calc(100%-28px))] flex-col gap-2.5 rounded-xl bg-surface px-3.5 pt-3 pb-3.5 shadow-[0_12px_32px_#00000066] outline outline-line-strong lg:bottom-8 lg:left-8">
      <div className="flex items-center gap-2">
        <div className="flex-1 text-[11px] font-semibold tracking-[1.2px] text-fg-2">{t.hero.roll.label}</div>
        <X className="size-3.5 text-fg-3" />
      </div>
      <div className="flex items-end gap-3">
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <D20 value={17} />
            <span className="font-mono text-[14px] text-fg-2">+ 2</span>
          </div>
          <div className="font-mono text-[12px] text-fg-3">{t.hero.roll.formula}</div>
        </div>
        <div className="font-mono text-[40px] leading-none font-semibold">19</div>
      </div>
    </div>
  );
}

function NowPlaying({ t }: T) {
  return (
    <div className="absolute top-7 right-6 z-10 hidden h-[60px] w-[340px] items-center gap-3 rounded-full bg-[#0A0B0EF2] pr-[18px] pl-2.5 shadow-[0_12px_32px_#00000080] outline outline-white/8 backdrop-blur-md xl:flex">
      <div className="flex size-10 items-center justify-center rounded-full bg-linear-225 from-[#A08FFF] to-[#5A44D4]">
        <Music className="size-[18px] text-white" />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <div className="text-[10px] font-bold tracking-[1px] text-violet">{t.hero.nowPlaying.label}</div>
        <div className="text-[14px] font-semibold">{t.hero.nowPlaying.track}</div>
      </div>
      <div className="flex h-[18px] items-end gap-[3px]" aria-hidden="true">
        {[10, 18, 7, 14].map((h, i) => (
          <div
            key={i}
            className="eq-bar w-[3px] rounded-[1.5px] bg-violet"
            style={{ height: h, animationDelay: `${i * -0.27}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function Hero({ t }: T) {
  return (
    <section className="flex flex-col gap-10 px-page pt-6 pb-10 lg:h-[700px] lg:flex-row lg:items-center lg:gap-14 lg:pt-14 lg:pb-16">
      <div className="flex flex-col gap-6 lg:w-[600px] lg:shrink-0 lg:gap-7">
        <div className="inline-flex h-[30px] w-fit items-center gap-2 rounded-full bg-accent/12 px-3.5 text-[13px] font-semibold text-accent">
          <Logo className="size-4" />
          {t.hero.badge}
        </div>
        <h1 className="font-display text-[46px] leading-[46px] lg:text-[80px] lg:leading-[80px]">
          {t.hero.title[0]}
          <br />
          {t.hero.title[1]}
        </h1>
        <p className="text-[16px] leading-6 text-fg-2 lg:w-[540px] lg:text-[19px] lg:leading-[29px]">
          <R {...t.hero.lead} />
        </p>
        <div className="flex items-center gap-3">
          <TelegramButton t={t} className="w-full lg:w-auto" />
          <a
            href="#look"
            className="hidden h-[54px] items-center gap-2 rounded-lg px-[18px] text-[16px] font-semibold text-fg-2 outline outline-line-strong transition hover:text-fg lg:inline-flex"
          >
            <ArrowDown className="size-4" />
            {t.hero.look}
          </a>
        </div>
        <div className="text-[14px] text-fg-3">
          <R {...t.hero.note} />
        </div>
      </div>
      <div className="relative h-[280px] overflow-hidden rounded-[20px] bg-surface outline outline-line lg:h-full lg:flex-1 lg:rounded-3xl">
        <Image
          src="/images/hero-table.png"
          alt={t.hero.imageAlt}
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/0 from-45% to-bg/85" />
        <NowPlaying t={t} />
        <RollCard t={t} />
      </div>
    </section>
  );
}

function Screenshot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_#00000099] outline outline-line-strong lg:rounded-2xl ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1440px) 1312px, 100vw" className="object-cover" />
    </div>
  );
}

function Preview({ t }: T) {
  return (
    <section id="look" className="hidden flex-col gap-7 px-page pt-6 pb-24 lg:flex">
      <Screenshot src="/images/sheet-session.png" alt={t.preview.imageAlt} />
      <div className="grid grid-cols-3 gap-6">
        {t.preview.notes.map((note, i) => (
          <div key={note.title} className="flex flex-col gap-1.5 border-t border-line pt-4">
            <div className="font-mono text-[13px] text-accent">0{i + 1}</div>
            <div className="text-[17px] font-semibold">{note.title}</div>
            <div className="text-[15px] leading-[23px] text-fg-2">{note.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PLAYER_ICONS: Record<keyof Dictionary["players"]["features"], LucideIcon> = {
  roll: Dices,
  breakdown: Search,
  levelUp: TrendingUp,
  layout: LayoutGrid,
  offline: WifiOff,
};

const MASTER_ICONS: Record<keyof Dictionary["masters"]["features"], LucideIcon> = {
  party: Users,
  show: ImageIcon,
  sound: AudioLines,
  log: ScrollText,
};

const STEP_ICONS: Record<keyof Dictionary["steps"]["items"], LucideIcon> = {
  login: Send,
  table: Users,
  character: UserRoundPlus,
};

/** Pairs each icon with its copy, in the icon map's order. */
function withIcons<K extends string>(icons: Record<K, LucideIcon>, items: Record<K, Item>) {
  return (Object.keys(icons) as K[]).map((key) => ({ key, icon: icons[key], ...items[key] }));
}

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative h-[520px] w-[240px] overflow-hidden rounded-[26px] bg-surface shadow-[0_24px_60px_#00000080] outline-6 -outline-offset-3 outline-line-strong lg:h-[606px] lg:w-[280px] lg:rounded-[28px] ${className}`}>
      <Image src={src} alt={alt} fill sizes="280px" className="object-cover" />
    </div>
  );
}

function Players({ t }: T) {
  return (
    <section
      id="players"
      className="grid gap-x-16 gap-y-8 border-y border-line bg-bg-2 px-page py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:py-28"
    >
      <div className="flex flex-col gap-4 lg:col-start-1 lg:gap-6 lg:self-end">
        <Eyebrow>{t.players.eyebrow}</Eyebrow>
        <H2>{t.players.title}</H2>
        <p className="text-[16px] leading-6 text-fg-2 lg:max-w-[560px] lg:text-[18px] lg:leading-[27px]">
          <R {...t.players.lead} />
        </p>
      </div>
      <div className="flex justify-center gap-6 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Phone src="/images/phone-sheet.png" alt={t.players.phoneSheetAlt} />
        <Phone src="/images/phone-show.png" alt={t.players.phoneShowAlt} className="mt-16 hidden lg:block" />
      </div>
      <ul className="flex flex-col gap-[22px] lg:col-start-1 lg:self-start lg:pt-3">
        {withIcons(PLAYER_ICONS, t.players.features).map(({ key, icon: Icon, title, d, m }) => (
          <li key={key} className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-raised">
              <Icon className="size-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[16px] font-semibold lg:text-[17px]">{title}</div>
              <div className="text-[14px] leading-[21px] text-fg-2 lg:text-[15px] lg:leading-[23px]">
                <R d={d} m={m} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Rules({ t }: T) {
  return (
    <section id="rules" className="flex flex-col gap-8 bg-paper px-page py-14 lg:flex-row lg:items-center lg:gap-[72px] lg:py-28">
      <div className="flex flex-col gap-4 lg:w-[560px] lg:shrink-0 lg:gap-6">
        <Eyebrow className="text-paper-accent">{t.rules.eyebrow}</Eyebrow>
        <H2 className="text-paper-ink">{t.rules.title}</H2>
        <p className="text-[16px] leading-6 text-paper-fg-2 lg:text-[18px] lg:leading-[27px]">
          <R {...t.rules.lead} />
        </p>
        <ul className="hidden flex-col gap-3 pt-2 lg:flex">
          {t.rules.systems.map((s) => (
            <li key={s.name} className="flex items-center gap-3">
              <span className="inline-flex h-[30px] shrink-0 items-center rounded-full bg-white px-3 text-[14px] font-semibold text-paper-ink outline outline-paper-line">
                {s.name}
              </span>
              <span className="text-[15px] text-paper-fg-2">{s.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3.5">
        <div className="overflow-hidden rounded-2xl bg-bg-2 shadow-[0_24px_60px_#1A161040] outline outline-line">
          <div className="flex h-11 items-center gap-2 border-b border-line px-[18px]">
            <span className="size-2.5 rounded-full bg-[#EE4B7299]" />
            <span className="size-2.5 rounded-full bg-[#F2B54499]" />
            <span className="size-2.5 rounded-full bg-[#4CC98A99]" />
            <span className="ml-1 font-mono text-[13px] text-fg-2">
              <R d="dnd5e-2014 / paladin.yaml" m="paladin.yaml" />
            </span>
          </div>
          <pre className="overflow-x-auto px-5 pt-5 pb-6 font-mono text-[13px] leading-[21px] text-fg-2 lg:px-6 lg:text-[15px] lg:leading-[27px]">
            <code>
              <span className="text-fg">feature:aura_of_protection:</span>
              {`\n  label: ${t.rules.code.label}\n  rules:\n`}
              <span className="hidden text-fg-3 lg:inline">{`    ${t.rules.code.comment}\n`}</span>
              <span className="text-violet">{'    - when: "not has(owner.condition:unconscious)"'}</span>
              {"\n"}
              <span className="text-[#5AA9FF]">{'      target: "owner.save:*"'}</span>
              {"\n      op: add\n"}
              <span className="text-[#FF8763]">{'      value: "max(owner.mod:cha, 1)"'}</span>
            </code>
          </pre>
        </div>
        <p className="hidden text-[14px] leading-[21px] text-paper-fg-2 lg:block">{t.rules.caption}</p>
        <ul className="grid gap-4 pt-2 sm:grid-cols-2 lg:gap-6">
          {t.rules.table.map((item) => (
            <li key={item.title} className="flex flex-col gap-1 border-t border-paper-line pt-3">
              <div className="text-[16px] font-semibold text-paper-ink">{item.title}</div>
              <div className="text-[14px] leading-[21px] text-paper-fg-2 lg:text-[15px] lg:leading-[23px]">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Masters({ t }: T) {
  return (
    <section id="masters" className="flex flex-col gap-8 px-page py-14 lg:gap-12 lg:py-28">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-[640px] lg:shrink-0 lg:gap-6">
          <Eyebrow>{t.masters.eyebrow}</Eyebrow>
          <H2>{t.masters.title}</H2>
        </div>
        <p className="text-[16px] leading-6 text-fg-2 lg:flex-1 lg:text-[18px] lg:leading-[27px]">
          <R {...t.masters.lead} />
        </p>
      </div>
      <Screenshot src="/images/console.png" alt={t.masters.imageAlt} />
      <ul className="grid gap-[22px] lg:grid-cols-4 lg:gap-8">
        {withIcons(MASTER_ICONS, t.masters.features).map(({ key, icon: Icon, title, d, m }) => (
          <li key={key} className="flex gap-4 lg:flex-col lg:gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface outline outline-line lg:size-11">
              <Icon className="size-5" />
            </div>
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="text-[16px] font-semibold lg:text-[17px]">{title}</div>
              <div className="text-[14px] leading-[21px] text-fg-2 lg:text-[15px] lg:leading-[23px]">
                <R d={d} m={m} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Steps({ t }: T) {
  return (
    <section id="start" className="flex flex-col gap-8 border-t border-line bg-bg-2 px-page py-14 lg:gap-12 lg:py-28">
      <div className="flex flex-col gap-4 lg:gap-5">
        <Eyebrow>{t.steps.eyebrow}</Eyebrow>
        <H2>{t.steps.title}</H2>
      </div>
      <ol className="grid gap-3 lg:grid-cols-3 lg:gap-6">
        {withIcons(STEP_ICONS, t.steps.items).map(({ key, icon: Icon, title, d, m }, i) => (
          <li
            key={key}
            className="flex items-center gap-4 rounded-2xl bg-bg p-[18px] outline outline-line lg:flex-col lg:items-stretch lg:p-7"
          >
            <div className="flex items-center lg:w-full">
              <span className="font-display text-[34px] leading-[34px] text-accent lg:flex-1 lg:text-[44px] lg:leading-[44px]">
                {i + 1}
              </span>
              <Icon className="hidden size-[22px] text-fg-3 lg:block" />
            </div>
            <div className="flex flex-col gap-1 lg:gap-4">
              <div className="text-[16px] font-semibold lg:text-[19px]">{title}</div>
              <div className="text-[14px] leading-[21px] text-fg-2 lg:text-[15px] lg:leading-[23px]">
                <R d={d} m={m} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FinalCta({ t }: T) {
  return (
    <section className="flex flex-col items-center gap-6 bg-[radial-gradient(ellipse_55%_70%_at_50%_35%,#FF6A3D29_0%,#0E101400_70%)] px-page py-[72px] text-center lg:gap-7 lg:py-32">
      <Logo className="size-14 text-accent lg:size-[72px]" />
      <h2 className="font-display text-[34px] leading-[36px] lg:text-[60px] lg:leading-[63px]">{t.cta.title}</h2>
      <p className="hidden text-[18px] text-fg-2 lg:block">{t.cta.text}</p>
      <TelegramButton t={t} className="w-full lg:h-[58px] lg:w-auto lg:px-7 lg:text-[17px]" />
      <a href={APP_URL} className="font-mono text-[14px] text-fg-3 transition hover:text-fg-2">
        play.lunet.one
      </a>
    </section>
  );
}

function Footer({ t, lang }: T & { lang: Locale }) {
  return (
    <footer className="flex flex-col gap-3 border-t border-line px-page pt-6 pb-10 lg:h-[88px] lg:flex-row lg:items-center lg:gap-8 lg:py-0">
      <Brand />
      <div className="text-[14px] text-fg-3 lg:flex-1">
        {t.footer.tagline}
        <span className="lg:hidden"> · © 2026</span>
      </div>
      <nav className="hidden items-center gap-8 text-[14px] text-fg-2 lg:flex">
        {nav(t)
          .slice(0, 3)
          .map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-fg">
              {item.label}
            </a>
          ))}
        <a href={APP_URL} className="transition hover:text-fg">
          {t.nav.login}
        </a>
      </nav>
      <LocaleSwitch lang={lang} label={t.nav.language} />
      <div className="hidden font-mono text-[13px] text-fg-3 lg:block">© 2026</div>
    </footer>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);

  return (
    <div id="top" className="overflow-hidden">
      <Nav t={t} lang={lang} />
      <main>
        <Hero t={t} />
        <Preview t={t} />
        <Players t={t} />
        <Rules t={t} />
        <Masters t={t} />
        <Steps t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}
