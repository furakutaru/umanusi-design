import type { Metadata } from "next";
import Link from "next/link";
import { WORKS } from "../../data/works";
import { WorkCard } from "../../components/WorkCard";
import { ConsultCTA } from "../../components/ConsultCTA";

export const metadata: Metadata = {
  title: "制作事例",
  description:
    "UMANUSI Designがこれまでに制作した、馬主・厩舎・牧場向けのオリジナルグッズの実績をご紹介します。",
};

export default function WorksPage() {
  return (
    <main className="w-full pt-20 bg-neutral-900 min-h-screen">
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <header className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">なにを作った？</h1>
            <h2 className="mt-4 text-lg md:text-xl font-semibold text-white">制作事例</h2>
          </header>
          <p className="max-w-2xl mx-auto text-center text-sm md:text-base text-gray-300 mb-10 md:mb-14">
            これまでの制作実績の一部をご紹介します。「こんなものも作れる」という可能性は
            <Link href="/items" className="text-red-400 underline underline-offset-4 mx-1">
              対応アイテム一覧
            </Link>
            でご覧いただけます。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKS.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <ConsultCTA location="works_page_bottom" dark />
          </div>
        </div>
      </section>
    </main>
  );
}
