import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "更新できる馬主名刺",
  description:
    "QRコードから愛馬情報を常に最新の状態で見せられる「更新できる馬主名刺」の申し込みフォームです。",
};

export default function McardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
