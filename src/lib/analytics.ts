export const ANALYTICS_ENABLED =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "1";

export const CHAT_ENABLED =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_ENABLE_CHAT === "1";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    Tawk_API?: {
      maximize?: () => void;
      onChatStarted?: () => void;
      [key: string]: unknown;
    };
  }
}

export function sendEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", name, params);
}
