import React from "react";
import Link from "next/link";

const AREAS = [
  {
    title: "愛馬の記念グッズ",
    description: "勝利記念・引退記念・出走記念など、大切な瞬間を形に残します。",
  },
  {
    title: "ウェア・応援グッズ",
    description: "Tシャツ、キャップ、応援タオルなど、応援の熱を届けるアイテムです。",
  },
  {
    title: "印刷物・販促物",
    description: "パンフレット、ポスター、チラシなど、目的に応じたデザインを制作します。",
  },
  {
    title: "ロゴ・名刺",
    description: "馬主・厩舎・牧場のブランドアイデンティティを表現します。",
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
          {AREAS.map((area) => (
            <div
              key={area.title}
              className="bg-gray-50 rounded-lg p-6 flex flex-col gap-2 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
              <p className="text-sm text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/items"
            className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors"
          >
            <span className="underline underline-offset-4">対応アイテムをすべて見る</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanMake;
