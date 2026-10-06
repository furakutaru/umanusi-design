import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "制作を依頼する",
  description: "UMANUSI Designへの制作依頼フォームです。ご希望のアイテムや納期などをお伺いします。",
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
