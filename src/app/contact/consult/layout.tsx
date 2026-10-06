import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "まずは相談してみる",
  description: "UMANUSI Designへの軽い相談フォームです。お名前は任意、1分程度で送信できます。",
};

export default function ConsultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
