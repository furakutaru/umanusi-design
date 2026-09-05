import React from "react";
import Link from "next/link";
import { FEATURED_ITEMS } from "../data/items";
import { ItemCard } from "./ItemCard";

export const FeaturedItemsSection = () => {
  return (
    <section id="items" className="w-full bg-gray-50 py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black">代表アイテム</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            実績のある代表的なアイテムをご紹介します
          </h2>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {FEATURED_ITEMS.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/items"
            className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors"
          >
            <span className="underline underline-offset-4">対応アイテム一覧を見る</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsSection;
