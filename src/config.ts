/**
 * config.ts
 * ─────────────────────────────────────────────────────────────
 * All personalisation lives here. Edit this file to customise
 * the site without touching any component code.
 * ─────────────────────────────────────────────────────────────
 */

export const config = {
  /** Set to false to disable background music on the site */
  backgroundMusicEnabled: false,

  // ── Identity ─────────────────────────────────────────────
  /** Your name — shown on the site */
  ownerName: 'Sameer',

  /**
   * Hero image: a URL or path (e.g. '/photo.jpg').
   * If null, a cute animated emoji is used instead.
   */
  heroImage: null as string | null,

  /** Fallback emoji when heroImage is null */
  heroEmoji: '🐻',

  // ── Page 1 copy ──────────────────────────────────────────
  headline: 'Will you go on a date with me? 💕',
  subtext: "Think carefully. Choose wisely. (There's only one right answer.)",
  yesLabel: 'Yes! 💖',
  noLabel: 'No',

  /** Messages the "No" button cycles through */
  noButtonMessages: [
    'No',
    'Are you sure? 🥺',
    'Really sure??',
    'Think about it again...',
    'Pretty please? 🥹',
    "I'll bring snacks 🍫",
    "I'll pay for everything!",
    "You're breaking my heart 💔",
    'Okay last chance...',
    'Just click Yes 😭',
  ],

  /** Headline changes after N "No" attempts */
  noAttemptHeadlines: [
    { after: 3, text: "Hmm, the button seems to be broken 🤔" },
    
    { after: 9, text: "Resistance is futile 😌" },
  ],

  /** Emoji reaction changes with no attempts (0-indexed stages) */
  reactionEmojis: ['😊', '🥺', '😢', '😭', '🙏'],

  // ── Page 2 (Celebration) copy ────────────────────────────
  celebrationHeadline: 'YAYYY! 🎉💖',
  celebrationSubtext: "I knew you'd say yes! You just made my whole day.",
  planButtonLabel: "Let's plan our date 💌",

  // ── Page 3 (Date Planner) copy ───────────────────────────
  plannerHeading: "Let's make it perfect ✨",
  plannerSubheading: "Tell me what you like and I'll take care of the rest.",

  /** Date type options shown as tappable cards */
  dateTypes: [
    { emoji: '🍝', label: 'Dinner' },
    { emoji: '☕', label: 'Coffee' },
    { emoji: '🎬', label: 'Movie' },
    { emoji: '🧺', label: 'Picnic' },
    { emoji: '🎡', label: 'Adventure' },
    { emoji: '🎁', label: 'Surprise me' },
  ],

  // ── Page 4 (Confirmation) copy ───────────────────────────
  confirmationHeadline: "It's a date! 🥰",
  confirmationMessage:
    "I'll message you soon to confirm the details. Get ready for a great time!",
  confirmationFooter: "Can't wait to see you 💗",

  // ── Notification (backend) ───────────────────────────────
  /** Email address to receive notifications (used server-side, via env var) */
  notificationEmail: 'your@email.com',

  // ── Palette ──────────────────────────────────────────────
  colors: {
    background: '#FFE4EC',
    primary: '#FF4D8D',
    primaryLight: '#FFB3CC',
    text: '#4A1D3F',
    cream: '#FFF8F0',
    cardBg: '#FFFFFF',
  },
} as const;

export type DateType = (typeof config.dateTypes)[number];
