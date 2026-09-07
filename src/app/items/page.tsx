import type { Metadata } from "next";
import Link from "next/link";
import { ITEMS, ITEM_CATEGORY_LABELS, type ItemCategory } from "../../data/items";
import { ItemCard } from "../../components/ItemCard";
import { ConsultCTA } from "../../components/ConsultCTA";

export const metadata: Metadata = {
  title: "対応アイテム一覧",
  description:
    "愛馬の記念グッズから馬主活動のためのデザインまで、UMANUSI Designが対応できるアイテムをご紹介します。リストに無いものもご相談可能です。",
};

const CATEGORY_ORDER: ItemCategory[] = ["memorial", "wear", "business", "other"];

export default function ItemsPage() {
  return (
    <main className="w-full pt-20">
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <header className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-black">なにが作れる？</h1>
            <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">対応アイテム一覧</h2>
          </header>
          <p className="max-w-2xl mx-auto text-center text-sm md:text-base text-gray-600 mb-4">
            ここでは「こんなものが作れる」という可能性をご紹介しています。実際の制作事例は
            <Link href="/works" className="text-red-600 underline underline-offset-4 mx-1">
              制作事例
            </Link>
            のページでご覧いただけます。
          </p>
          <p className="max-w-2xl mx-auto text-center text-sm text-gray-500 mb-10 md:mb-14">
            リストに無いものもお気軽にご相談ください。
          </p>

          {CATEGORY_ORDER.map((category) => {
            const items = ITEMS.filter((item) => item.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category} id={category} className="mb-12 md:mb-16 scroll-mt-28">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
                  {ITEM_CATEGORY_LABELS[category]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-8 flex justify-center">
            <ConsultCTA location="items_page_bottom" />
          </div>
        </div>
      </section>
    </main>
  );
}
