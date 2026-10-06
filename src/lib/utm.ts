const STORAGE_KEY = "umanusi_utm";

export function captureUtmFromLocation(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign"] as const;
  const entries = keys
    .map((key) => [key, params.get(key)] as const)
    .filter(([, value]) => !!value);

  if (entries.length === 0) return;

  const parts = entries.map(([key, value]) => `${key}=${value}`);
  window.sessionStorage.setItem(STORAGE_KEY, parts.join(" / "));
}

export function getStoredUtm(): string {
  if (typeof window === "undefined") return "";
  return window.sessionStorage.getItem(STORAGE_KEY) || "";
}
