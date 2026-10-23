/** Desktop copy (d) with a shorter mobile variant (m). */
export type Responsive = { d: string; m: string };

export type Item = { title: string } & Responsive;

const en = {
  meta: {
    title: "Lunet — character sheet and game table for TTRPGs",
    ogTitle: "Lunet — less math, more play",
    description:
      "Lunet does the math on your character sheet and gives the GM a session console: party, maps, video, music and the table log in one tab. D&D 5e, PbtA and your own rules.",
    ogLocale: "en_US",
  },
  images: {
    sheetSession: "/images/en/sheet-session.png",
    console: "/images/en/console.png",
    phoneSheet: "/images/en/phone-sheet.png",
    phoneShow: "/images/en/phone-show.png",
  },
  nav: {
    players: "For players",
    masters: "For GMs",
    rules: "Rules",
    start: "Get started",
    login: "Log in",
    language: "Language",
  },
  telegram: "Log in with Telegram",
  hero: {
    badge: "Character sheet & game table for TTRPGs",
    title: ["Less math.", "More play."],
    lead: {
      d: "Lunet does the math on your character sheet and gives the GM a session console: party, maps, video, music and the table log, all in one tab. D&D 5e, PbtA and your own rules.",
      m: "Lunet does the math on your character sheet and gives the GM a session console: party, maps, video, music and the table log, all in one tab.",
    },
    look: "See it in action",
    note: { d: "Runs in the browser, nothing to install · phone, tablet, laptop", m: "Runs in the browser, nothing to install" },
    imageAlt: "Players at the table with Lunet character sheets",
    roll: { label: "CHECK · MEDICINE", formula: "1d20 + 2" },
    nowPlaying: { label: "NOW PLAYING", track: "Rain over Elsvir" },
  },
  preview: {
    imageAlt: "Character sheet with the session column in Lunet",
    notes: [
      { title: "Your sheet, your layout", text: "Tiles, tabs and tiles you build yourself. The same sheet at home and at the table." },
      {
        title: "The session, right alongside",
        text: "What the GM is showing, chat, the table log, the party and sound. Collapse it and the sheet goes full screen.",
      },
      {
        title: "Shown to everyone, instantly",
        text: "A map or a clip appears on every player's screen the same second. Videos play in sync.",
      },
    ],
  },
  players: {
    eyebrow: "For players",
    title: "A sheet that does the math",
    lead: {
      d: "The GM calls for a Medicine check — you tap the line and everything is already counted: proficiency, poison, an ally's Bless.",
      m: "The GM calls for a Medicine check — tap the line and everything is already counted.",
    },
    phoneSheetAlt: "Character sheet on a phone",
    phoneShowAlt: "GM handout on a phone",
    features: {
      roll: {
        title: "Tap to roll",
        d: "Checks, saves, attacks and spells roll straight from the sheet. Advantage, disadvantage and conditions are handled for you.",
        m: "Checks, attacks and spells roll from the sheet, conditions included.",
      },
      breakdown: {
        title: "Where does this number come from?",
        d: "Tap any number to see the whole chain: base, bonuses, conditions, source — and what your GM changed for this table.",
        m: "Tap any number to see every bonus, condition and table change.",
      },
      levelUp: {
        title: "Level up step by step",
        d: "Hit points, new features, subclass and ability choices, with a before → after summary. Multiclassing, milestone leveling and one tap to undo.",
        m: "Guided level-ups, multiclassing and milestones, undone in one tap.",
      },
      layout: {
        title: "A sheet that fits you",
        d: "Tiles, tabs, your own tiles and actions built from blocks. Your layout comes with you to the table.",
        m: "Tiles, tabs, your own tiles and actions — same layout at the table.",
      },
      offline: {
        title: "Works offline",
        d: "Phone, tablet, laptop. Loads fast even on mobile data, and once loaded it keeps working without a connection.",
        m: "Loads once, then keeps working without a connection.",
      },
    } satisfies Record<string, Item>,
  },
  rules: {
    eyebrow: "Rules",
    title: "Rules are data, not code",
    lead: {
      d: "Every system is a set of files. Change a rule and every sheet at the table updates — no app update needed. Your own magic, your own conditions, a whole system of your own.",
      m: "Change a rule and every sheet at the table updates. D&D 5e (the full SRD 5.1), PbtA and your own system.",
    },
    systems: [
      { name: "D&D 5e · 2014", text: "the full SRD 5.1: 12 classes, levels 1–20, multiclassing, 319 spells" },
      { name: "PbtA", text: "moves, tracks, harm and XP" },
      { name: "Your system", text: "homebrew and house rules in the same files" },
    ],
    code: { label: "Aura of Protection", comment: "# one rule for all six saving throws" },
    caption:
      "A real rule from Lunet: the paladin's Aura of Protection. Fall unconscious and the bonus to saves goes away on its own — and the sheet shows why.",
    table: [
      {
        title: "Table rulebook",
        text: "Classes, races, gear and spells by chapter. The GM switches a rule off or replaces it, and players see exactly what changed.",
      },
      {
        title: "Homebrew without code",
        text: "Add items, feats and rules right in the book, test them on a character before saving, undo from the rules log.",
      },
    ],
  },
  masters: {
    eyebrow: "For GMs",
    title: "Session console: the whole table on one screen",
    lead: {
      d: "No more five open tabs, a music player and a chat on your phone. Party, handouts, music and the log sit side by side, and every action reaches players instantly.",
      m: "Party, handouts, music and the log side by side — every action reaches players instantly.",
    },
    imageAlt: "GM console in Lunet",
    features: {
      party: {
        title: "The party, live",
        d: "Everyone's HP, AC and conditions — no more “how much do you have left?”. Damage or heal several characters at once, dice included: 2d8+3.",
        m: "Everyone's HP and conditions; damage or heal several at once, dice included.",
      },
      show: {
        title: "Show it in one tap",
        d: "A map, a portrait or a clip — for everyone or for one player. Videos play in sync: when the GM pauses, everyone pauses.",
        m: "A map or a clip for everyone at once; videos play in sync.",
      },
      sound: {
        title: "Table sound",
        d: "Music and ambience play in sync for everyone, effects fire with one button. Each player sets their own volume.",
        m: "Music and ambience in sync, effects with one button.",
      },
      log: {
        title: "Table log",
        d: "Every roll and every GM change in one feed. Made a mistake? Undo it — and redo if you change your mind.",
        m: "Every roll and every GM change. Undo, and redo if needed.",
      },
    } satisfies Record<string, Item>,
  },
  steps: {
    eyebrow: "Get started",
    title: "Three steps to your first session",
    items: {
      login: {
        title: "Log in with Telegram",
        d: "No passwords, no email: one tap in Telegram and you're in Lunet.",
        m: "No passwords, no email.",
      },
      table: {
        title: "Gather your table",
        d: "The GM creates a campaign and invites players with a link. A player opens it and is already at the table.",
        m: "The GM invites players with a link.",
      },
      character: {
        title: "Create a character",
        d: "Step by step through the system — race, class, ability scores — or bring one over from Long Story Short.",
        m: "Step by step, or import from Long Story Short.",
      },
    } satisfies Record<string, Item>,
  },
  cta: {
    title: "Get your table together this week",
    text: "Character sheets, the GM console and the whole campaign — in the browser, nothing to install.",
  },
  footer: { tagline: "Character sheet & game table for TTRPGs" },
};

export type Dictionary = typeof en;

export default en;
