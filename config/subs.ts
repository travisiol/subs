// Central place for values that are not finalized yet.
// Change a number here and it updates everywhere on the site.

export const TOKEN_SYMBOL = "$SUBS";

export const BASE_REWARD_PERCENT = 8;
export const HOLDER_REWARD_PERCENT = 20;

export const CONTRACT_ADDRESS: string | null = null; // null → renders "COMING SOON"

export const TWITTER_URL = "https://x.com/getsubs";
export const APP_URL = "#upload";

export type SubscriptionCategory = {
  key: string;
  label: string;
  verb: string;
  // Real, well-known services shown as plain-text examples only — never a
  // logo or brand color — so visitors instantly recognize the category.
  examples: string;
};

export const SUPPORTED_CATEGORIES: SubscriptionCategory[] = [
  { key: "streaming", label: "STREAMING", verb: "PLAY", examples: "Netflix, Disney+" },
  { key: "music", label: "MUSIC", verb: "LISTEN", examples: "Spotify, Apple Music" },
  { key: "gaming", label: "GAMING", verb: "PLAY", examples: "Xbox, PlayStation Plus" },
  { key: "cloud", label: "CLOUD", verb: "STORE", examples: "iCloud, Google One" },
  { key: "software", label: "SOFTWARE", verb: "BUILD", examples: "Adobe, Notion" },
  { key: "fitness", label: "FITNESS", verb: "TRAIN", examples: "Peloton, Strava" },
];

export type DemoSubscription = {
  category: string;
  example: string;
  price: number;
};

export const DEMO_SUBSCRIPTIONS: DemoSubscription[] = [
  { category: "STREAMING", example: "Netflix", price: 17.99 },
  { category: "MUSIC", example: "Spotify", price: 10.99 },
  { category: "CLOUD", example: "iCloud", price: 9.99 },
  { category: "SOFTWARE", example: "Adobe CC", price: 24.99 },
];

// Real, well-known services used only as plain-text examples throughout the
// site (never a logo, never a brand color) so the concept reads instantly.
export const TRADEMARK_NOTE =
  "Netflix, Spotify and other names are trademarks of their respective owners. SUBS is not affiliated with them.";

// Shown in the ECONOMY section. Kept as plain text because final
// tokenomics are not settled — edit freely without touching layout.
export const ECONOMY_NOTE =
  "A portion of $SUBS ecosystem activity can fund the rewards pool.";

export function standardReward(monthlySpend: number): number {
  return monthlySpend * (BASE_REWARD_PERCENT / 100);
}

export function holderReward(monthlySpend: number): number {
  return monthlySpend * (HOLDER_REWARD_PERCENT / 100);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
