import React from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORY_COLORS: Record<string, string> = {
  memorial: "bg-red-100 text-red-700",
  wear: "bg-blue-100 text-blue-700",
  business: "bg-amber-100 text-amber-700",
  other: "bg-gray-100 text-gray-700",
};

const AREAS = [
  {
    title: "愛馬の記念グッズ",
    description: "勝利記念・引退記念・出走記念など、大切な瞬間を形に残します。",
    category: "memorial",
    image: undefined as string | undefined,
  },
  {
    title: "ウェア・応援グッズ",
    description: "Tシャツ、キャップ、応援タオルなど、応援の熱を届けるアイテムです。",
    category: "wear",
    image: undefined as string | undefined,
  },
  {
    title: "印刷物・販促物",
    description: "パンフレット、ポスター、チラシなど、目的に応じたデザインを制作します。",
    category: "business",
    image: undefined as string | undefined,
  },
  {
    title: "ロゴ・名刺",
    description: "馬主・厩舎・牧場のブランドアイデンティティを表現します。",
    category: "business",
    image: undefined as string | undefined,
  },
];

export const WhatWeCanMake = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black">できること</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            競馬に関わる様々なデザインニーズにお応えします
          </h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS.map((area) => {
            const categoryColor = CATEGORY_COLORS[area.category] ?? CATEGORY_COLORS.other;
            return (
              <div
                key={area.title}
                className="bg-gray-50 rounded-lg overflow-hidden flex flex-col border border-gray-200"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  {area.image ? (
                    <Image src={area.image} alt={area.title} fill className="object-cover" />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${categoryColor}`}>
                      <span className="text-base font-bold text-center px-4">{area.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/items"
            className="inline-block px-8 py-4 rounded-full bg-white text-red-600 text-lg font-bold shadow-md border border-red-600 border-solid transition-all duration-200 ease-out hover:bg-red-600 hover:text-white hover:scale-105 text-center"
          >
            対応アイテムをすべて見る
          </Link>
          <Link
            href="/works"
            className="inline-block px-8 py-4 rounded-full bg-white text-red-600 text-lg font-bold shadow-md border border-red-600 border-solid transition-all duration-200 ease-out hover:bg-red-600 hover:text-white hover:scale-105 text-center"
          >
            制作事例をすべて見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanMake;
