'use client';
import React from 'react';
import ValueCard from './ValueCard';
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const valuesData = [
  {
    title: "アイデアの具現化と提案",
    items: [
      "『作りたいけど、何がいいか分からない』というお悩みも解決",
      "漠然としたイメージを、具体的なデザインに描き起こし",
    ],
  },
  {
    title: "デザイナー馬主の知見",
    items: [
      "勝利の物語や愛馬の個性をデザインに落とし込む",
      "血統背景など、専門知識をデザインに活用",
      "一般的なデザイナーでは伝わらないニュアンスを形に",
    ],
  },
  {
    title: "面倒なプロセスを全て代行可",
    items: [
      "デザインから印刷会社との連携、納品まで一貫サポート",
      "馬主としての視点から、想いに最適なアイテムをご提案",
    ],
  },
];

export const ValuePropositionSection = () => {
  const cardRefs = [useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll()];
  const headingFade = useFadeInOnScroll();

  return (
    <section 
      id="value"
      className="relative w-full py-12 md:py-20 bg-center bg-cover bg-fixed"
      style={{ 
        backgroundImage: `url('/value-bg.jpg')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* コンテンツ */}
      <div className="relative z-20 w-full h-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* 見出し群 */}
        <div ref={headingFade.ref} className={`fade-in${headingFade.isVisible ? ' is-visible' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
            UMANUSI Designが提供する3つの価値
          </h1>
          <p className="mt-4 mb-8 md:mb-12 text-lg md:text-xl font-semibold text-white text-center drop-shadow-md">
            馬主・厩舎・牧場の&quot;想い&quot;を、デザイン制作から納品までトータルで支援します。
          </p>
        </div>
        {/* CSS Gridを使用して高さを強制的に揃える */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl">
          {valuesData.map((value: { title: string; items: string[] }, index: number) => (
            <div
              ref={cardRefs[index].ref}
              key={index}
              style={{ transitionDelay: `${index * 0.18}s` }}
              className={`fade-in${cardRefs[index].isVisible ? ' is-visible' : ''} h-full`}
            >
              <ValueCard title={value.title} items={value.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 