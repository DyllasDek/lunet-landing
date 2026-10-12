import Image from "next/image";
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
  UserRoundPlus,
  Users,
  WifiOff,
  X,
  type LucideIcon,
} from "lucide-react";
import Logo from "@/components/Logo";

const APP_URL = "https://play.lunet.one";

const NAV = [
  { href: "#players", label: "Игрокам" },
  { href: "#masters", label: "Мастерам" },
  { href: "#rules", label: "Правила" },
  { href: "#start", label: "Как начать" },
];

/** Desktop copy with a shorter mobile variant. */
function R({ d, m }: { d: ReactNode; m: ReactNode }) {
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

function TelegramButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_URL}
      className={`inline-flex h-[54px] items-center justify-center gap-2 rounded-lg bg-accent px-6 text-[16px] font-semibold text-accent-ink transition hover:brightness-110 ${className}`}
    >
      <Send className="size-[18px]" strokeWidth={2.25} />
      Войти через Telegram
    </a>
  );
}

function Nav() {
  return (
    <header className="flex h-16 items-center gap-9 px-page lg:h-[76px]">
      <Brand />
      <div className="flex-1" />
      <nav className="hidden items-center gap-9 lg:flex">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className="text-[15px] text-fg-2 transition hover:text-fg">
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href={APP_URL}
        className="inline-flex h-9 items-center gap-2 rounded-lg bg-raised px-3.5 text-[14px] font-semibold transition hover:bg-line-strong lg:h-10 lg:px-4"
      >
        <LogIn className="size-4" />
        Войти
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

function RollCard() {
  return (
    <div className="absolute bottom-3.5 left-3.5 z-10 flex w-[min(300px,calc(100%-28px))] flex-col gap-2.5 rounded-xl bg-surface px-3.5 pt-3 pb-3.5 shadow-[0_12px_32px_#00000066] outline outline-line-strong lg:bottom-8 lg:left-8">
      <div className="flex items-center gap-2">
        <div className="flex-1 text-[11px] font-semibold tracking-[1.2px] text-fg-2">ПРОВЕРКА · МЕДИЦИНА</div>
        <X className="size-3.5 text-fg-3" />
      </div>
      <div className="flex items-end gap-3">
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <D20 value={17} />
            <span className="font-mono text-[14px] text-fg-2">+ 2</span>
          </div>
          <div className="font-mono text-[12px] text-fg-3">1к20 + 2</div>
        </div>
        <div className="font-mono text-[40px] leading-none font-semibold">19</div>
      </div>
    </div>
  );
}

function NowPlaying() {
  return (
    <div className="absolute top-7 right-6 z-10 hidden h-[60px] w-[340px] items-center gap-3 rounded-full bg-[#0A0B0EF2] pr-[18px] pl-2.5 shadow-[0_12px_32px_#00000080] outline outline-white/8 backdrop-blur-md xl:flex">
      <div className="flex size-10 items-center justify-center rounded-full bg-linear-225 from-[#A08FFF] to-[#5A44D4]">
        <Music className="size-[18px] text-white" />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <div className="text-[10px] font-bold tracking-[1px] text-violet">СЕЙЧАС ИГРАЕТ</div>
        <div className="text-[14px] font-semibold">Дождь над Эльсвиром</div>
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

function Hero() {
  return (
    <section className="flex flex-col gap-10 px-page pt-6 pb-10 lg:h-[700px] lg:flex-row lg:items-center lg:gap-14 lg:pt-14 lg:pb-16">
      <div className="flex flex-col gap-6 lg:w-[600px] lg:shrink-0 lg:gap-7">
        <div className="inline-flex h-[30px] w-fit items-center gap-2 rounded-full bg-accent/12 px-3.5 text-[13px] font-semibold text-accent">
          <Logo className="size-4" />
          Лист персонажа и стол для НРИ
        </div>
        <h1 className="font-display text-[46px] leading-[46px] lg:text-[80px] lg:leading-[80px]">
          Меньше считать.
          <br />
          Больше играть.
        </h1>
        <p className="text-[16px] leading-6 text-fg-2 lg:w-[540px] lg:text-[19px] lg:leading-[29px]">
          <R
            d="Lunet считает лист персонажа за вас, а мастеру даёт пульт сессии: группа, карты, видео, музыка и журнал стола — в одной вкладке. D&D 5e, PbtA и ваши собственные правила."
            m="Lunet считает лист персонажа за вас, а мастеру даёт пульт сессии: группа, карты, видео, музыка и журнал стола — в одной вкладке."
          />
        </p>
        <div className="flex items-center gap-3">
          <TelegramButton className="w-full lg:w-auto" />
          <a
            href="#look"
            className="hidden h-[54px] items-center gap-2 rounded-lg px-[18px] text-[16px] font-semibold text-fg-2 outline outline-line-strong transition hover:text-fg lg:inline-flex"
          >
            <ArrowDown className="size-4" />
            Как это выглядит
          </a>
        </div>
        <div className="text-[14px] text-fg-3">
          <R d="В браузере, без установки · телефон, планшет, ноутбук" m="В браузере, без установки" />
        </div>
      </div>
      <div className="relative h-[280px] overflow-hidden rounded-[20px] bg-surface outline outline-line lg:h-full lg:flex-1 lg:rounded-3xl">
        <Image
          src="/images/hero-table.png"
          alt="Игроки за столом с листами Lunet"
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/0 from-45% to-bg/85" />
        <NowPlaying />
        <RollCard />
      </div>
    </section>
  );
}

const PREVIEW_NOTES = [
  { title: "Ваш лист — как вы его собрали", text: "Плитки, вкладки, свои плитки. Тот же лист дома и за столом." },
  { title: "Сессия — колонкой рядом", text: "Показанное мастером, чат, журнал стола, группа и звук. Свернули — лист на весь экран." },
  { title: "Показ — сразу у всех", text: "Карта или ролик появляются у игроков в ту же секунду. Видео смотрят вместе." },
];

function Screenshot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_#00000099] outline outline-line-strong lg:rounded-2xl ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1440px) 1312px, 100vw" className="object-cover" />
    </div>
  );
}

function Preview() {
  return (
    <section id="look" className="hidden flex-col gap-7 px-page pt-6 pb-24 lg:flex">
      <Screenshot src="/images/sheet-session.png" alt="Лист персонажа и колонка сессии в Lunet" />
      <div className="grid grid-cols-3 gap-6">
        {PREVIEW_NOTES.map((note, i) => (
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

type Feature = { icon: LucideIcon; title: string; d: string; m: string };

const PLAYER_FEATURES: Feature[] = [
  {
    icon: Dices,
    title: "Нажал — бросил",
    d: "Проверки, спасброски, атаки и заклинания бросаются прямо с листа. Преимущество, помеха и состояния — сами.",
    m: "Проверки, атаки и заклинания — прямо с листа, состояния учтены.",
  },
  {
    icon: Search,
    title: "Откуда это число?",
    d: "Нажмите на любое число — и увидите всю цепочку: база, бонусы, условия, источник.",
    m: "Нажмите на любое число — вся цепочка бонусов и условий.",
  },
  {
    icon: LayoutGrid,
    title: "Лист под вас",
    d: "Плитки, вкладки и свои плитки — раскладка ваша, и за столом она та же.",
    m: "Плитки, вкладки, свои плитки — за столом та же раскладка.",
  },
  {
    icon: WifiOff,
    title: "Без сети тоже",
    d: "Телефон, планшет, ноутбук. Загрузился один раз — работает и без интернета.",
    m: "Загрузился один раз — работает и без интернета.",
  },
];

const MASTER_FEATURES: Feature[] = [
  {
    icon: Users,
    title: "Группа вживую",
    d: "Хиты, КД и состояния каждого — без вопросов «сколько у тебя осталось». Урон и лечение сразу нескольким.",
    m: "Хиты и состояния каждого; урон и лечение сразу нескольким.",
  },
  {
    icon: ImageIcon,
    title: "Показ одним нажатием",
    d: "Карта, портрет или ролик — у всех или у одного игрока. Видео смотрят вместе: пауза мастера — пауза у всех.",
    m: "Карта или ролик — у всех сразу; видео смотрят вместе.",
  },
  {
    icon: AudioLines,
    title: "Звук стола",
    d: "Музыка и атмосфера играют у всех синхронно, эффекты — одной кнопкой. Громкость каждый ставит себе сам.",
    m: "Музыка и атмосфера синхронно, эффекты — одной кнопкой.",
  },
  {
    icon: ScrollText,
    title: "Журнал стола",
    d: "Кто что бросил и что поменял мастер — одной лентой. Ошиблись — отменили.",
    m: "Кто что бросил и что поменял мастер. Ошиблись — отменили.",
  },
];

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative h-[520px] w-[240px] overflow-hidden rounded-[26px] bg-surface shadow-[0_24px_60px_#00000080] outline-6 -outline-offset-3 outline-line-strong lg:h-[606px] lg:w-[280px] lg:rounded-[28px] ${className}`}>
      <Image src={src} alt={alt} fill sizes="280px" className="object-cover" />
    </div>
  );
}

function Players() {
  return (
    <section
      id="players"
      className="grid gap-x-16 gap-y-8 border-y border-line bg-bg-2 px-page py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:py-28"
    >
      <div className="flex flex-col gap-4 lg:col-start-1 lg:gap-6 lg:self-end">
        <Eyebrow>Игрокам</Eyebrow>
        <H2>Лист, который считает сам</H2>
        <p className="text-[16px] leading-6 text-fg-2 lg:max-w-[560px] lg:text-[18px] lg:leading-[27px]">
          <R
            d="Мастер просит проверку Медицины — вы нажимаете на строку, и всё уже учтено: владение, отравление, благословение союзника."
            m="Мастер просит проверку Медицины — нажимаете на строку, и всё уже учтено."
          />
        </p>
      </div>
      <div className="flex justify-center gap-6 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Phone src="/images/phone-sheet.png" alt="Лист персонажа на телефоне" />
        <Phone src="/images/phone-show.png" alt="Показ мастера на телефоне" className="mt-16 hidden lg:block" />
      </div>
      <ul className="flex flex-col gap-[22px] lg:col-start-1 lg:self-start lg:pt-3">
        {PLAYER_FEATURES.map(({ icon: Icon, title, d, m }) => (
          <li key={title} className="flex gap-4">
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

const SYSTEMS = [
  { name: "D&D 5e · 2014", text: "весь SRD 5.1: 12 классов с 1 по 20 уровень, 319 заклинаний" },
  { name: "PbtA", text: "ходы, треки, вред и опыт" },
  { name: "Ваша система", text: "хоумбрю и свои правила — теми же файлами" },
];

function Rules() {
  return (
    <section id="rules" className="flex flex-col gap-8 bg-paper px-page py-14 lg:flex-row lg:items-center lg:gap-[72px] lg:py-28">
      <div className="flex flex-col gap-4 lg:w-[560px] lg:shrink-0 lg:gap-6">
        <Eyebrow className="text-paper-accent">Правила</Eyebrow>
        <H2 className="text-paper-ink">Правила — это данные, а не код</H2>
        <p className="text-[16px] leading-6 text-paper-fg-2 lg:text-[18px] lg:leading-[27px]">
          <R
            d="Каждая система — набор файлов. Поменяли правило — лист обновился у всех за столом, без обновления программы. Своя магия, свои состояния, своя система целиком."
            m="Поменяли правило — лист обновился у всех за столом. D&D 5e (весь SRD 5.1), PbtA и ваша система."
          />
        </p>
        <ul className="hidden flex-col gap-3 pt-2 lg:flex">
          {SYSTEMS.map((s) => (
            <li key={s.name} className="flex items-center gap-3">
              <span className="inline-flex h-[30px] items-center rounded-full bg-white px-3 text-[14px] font-semibold text-paper-ink outline outline-paper-line">
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
              <span className="text-fg">умение:аура_защиты:</span>
              {"\n  label: Аура защиты\n  rules:\n"}
              <span className="hidden text-fg-3 lg:inline">{"    # одно правило на все шесть спасбросков\n"}</span>
              <span className="text-violet">
                {"    - when: "}
                <R d={'"not has(владелец.состояние:без_сознания)"'} m={'"not has(…без_сознания)"'} />
              </span>
              {"\n"}
              <span className="text-[#5AA9FF]">{'      target: "владелец.спасбросок:*"'}</span>
              {"\n      op: add\n"}
              <span className="text-[#FF8763]">
                {"      value: "}
                <R d={'"max(владелец.мод:харизма, 1)"'} m={'"max(…мод:харизма, 1)"'} />
              </span>
            </code>
          </pre>
        </div>
        <p className="hidden text-[14px] leading-[21px] text-paper-fg-2 lg:block">
          Настоящий файл из Lunet: Аура защиты паладина. Без сознания — прибавка к спасброскам пропадает сама, и лист
          покажет почему.
        </p>
      </div>
    </section>
  );
}

function Masters() {
  return (
    <section id="masters" className="flex flex-col gap-8 px-page py-14 lg:gap-12 lg:py-28">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-[640px] lg:shrink-0 lg:gap-6">
          <Eyebrow>Мастерам</Eyebrow>
          <H2>Пульт сессии: весь стол на одном экране</H2>
        </div>
        <p className="text-[16px] leading-6 text-fg-2 lg:flex-1 lg:text-[18px] lg:leading-[27px]">
          <R
            d="Не нужно держать открытыми пять вкладок, плеер и чат в телефоне. Группа, показ, музыка и журнал — рядом, и каждое действие сразу видно игрокам."
            m="Группа, показ, музыка и журнал рядом — каждое действие сразу видно игрокам."
          />
        </p>
      </div>
      <Screenshot src="/images/console.png" alt="Пульт мастера в Lunet" />
      <ul className="grid gap-[22px] lg:grid-cols-4 lg:gap-8">
        {MASTER_FEATURES.map(({ icon: Icon, title, d, m }) => (
          <li key={title} className="flex gap-4 lg:flex-col lg:gap-3">
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

const STEPS = [
  {
    icon: Send,
    title: "Войдите через Telegram",
    d: "Без паролей и почты: одно нажатие в Telegram — и вы в Lunet.",
    m: "Без паролей и почты.",
  },
  {
    icon: Users,
    title: "Соберите стол",
    d: "Мастер заводит кампанию и зовёт игроков ссылкой. Игрок открывает её — и уже за столом.",
    m: "Мастер зовёт игроков ссылкой.",
  },
  {
    icon: UserRoundPlus,
    title: "Заведите персонажа",
    d: "По шагам системы — раса, класс, характеристики — или перенесите готового из Long Story Short.",
    m: "По шагам системы или из Long Story Short.",
  },
];

function Steps() {
  return (
    <section id="start" className="flex flex-col gap-8 border-t border-line bg-bg-2 px-page py-14 lg:gap-12 lg:py-28">
      <div className="flex flex-col gap-4 lg:gap-5">
        <Eyebrow>Как начать</Eyebrow>
        <H2>Три шага до первой сессии</H2>
      </div>
      <ol className="grid gap-3 lg:grid-cols-3 lg:gap-6">
        {STEPS.map(({ icon: Icon, title, d, m }, i) => (
          <li
            key={title}
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

function FinalCta() {
  return (
    <section className="flex flex-col items-center gap-6 bg-[radial-gradient(ellipse_55%_70%_at_50%_35%,#FF6A3D29_0%,#0E101400_70%)] px-page py-[72px] text-center lg:gap-7 lg:py-32">
      <Logo className="size-14 text-accent lg:size-[72px]" />
      <h2 className="font-display text-[34px] leading-[36px] lg:text-[60px] lg:leading-[63px]">
        Соберите стол на этой неделе
      </h2>
      <p className="hidden text-[18px] text-fg-2 lg:block">
        Лист, пульт мастера и вся кампания — в браузере, без установки.
      </p>
      <TelegramButton className="w-full lg:h-[58px] lg:w-auto lg:px-7 lg:text-[17px]" />
      <a href={APP_URL} className="font-mono text-[14px] text-fg-3 transition hover:text-fg-2">
        play.lunet.one
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-3 border-t border-line px-page pt-6 pb-10 lg:h-[88px] lg:flex-row lg:items-center lg:gap-8 lg:py-0">
      <Brand />
      <div className="text-[14px] text-fg-3 lg:flex-1">
        Лист и стол для НРИ<span className="lg:hidden"> · © 2026</span>
      </div>
      <nav className="hidden items-center gap-8 text-[14px] text-fg-2 lg:flex">
        {NAV.slice(0, 3).map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-fg">
            {item.label}
          </a>
        ))}
        <a href={APP_URL} className="transition hover:text-fg">
          Войти
        </a>
      </nav>
      <div className="hidden font-mono text-[13px] text-fg-3 lg:block">© 2026</div>
    </footer>
  );
}

export default function Home() {
  return (
    <div id="top" className="overflow-hidden">
      <Nav />
      <main>
        <Hero />
        <Preview />
        <Players />
        <Rules />
        <Masters />
        <Steps />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
