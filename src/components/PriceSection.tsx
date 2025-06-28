'use client';
import React from "react";
import { FeatureCard } from "./FeatureCard";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const memorialItems = [
  {
    serviceName: "蹄鉄盾",
    price: "20,000～"
  },
  {
    serviceName: "勝利写真",
    price: "20,000～"
  },
  {
    serviceName: (
      <>
        <span>トレーディングカード</span>
        <br />
        <span className="text-sm">(一種)</span>
      </>
    ),
    price: "10,000～"
  },
  {
    serviceName: "記念冊子",
    price: "20,000～"
  }
];

const apparelItems = [
  {
    serviceName: "横断幕",
    price: "10,000～"
  },
  {
    serviceName: "Tシャツ/ポロシャツ",
    price: "10,000～"
  },
  {
    serviceName: "応援タオル",
    price: "10,000～"
  },
  {
    serviceName: "キャップ",
    price: "15,000～"
  }
];

const designItems = [
  {
    serviceName: "馬名/厩舎/牧場ロゴ",
    price: "30,000～"
  },
  {
    serviceName: "名刺",
    price: "8,000～"
  }
];

const priceCards = [
  { title: "記念品・メモリアルグッズ", items: memorialItems },
  { title: "応援グッズ・アパレル", items: apparelItems },
  { title: "ロゴ・デザイン", items: designItems }
];

export function PriceSection() {
  const headerRef = useFadeInOnScroll();
  const cardRefs = [useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll()];

  return (
    <section id="price" className="w-full bg-white py-6 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center mb-8 md:mb-12`}>
          <h1 className="text-3xl md:text-4xl font-bold text-black">料金</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            デザインの複雑さや数量によって価格が変動します
          </h2>
        </header>
        
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch justify-items-center price-list">
          {priceCards.map((card: { title: string; items: { serviceName: React.ReactNode; price: string }[] }, index: number) => (
            <div
              key={card.title}
              className={`fade-in${cardRefs[index].isVisible ? ' is-visible' : ''} flex flex-col w-full max-w-sm`}
              ref={cardRefs[index].ref}
              style={{ transitionDelay: `${index * 0.18}s` }}
            >
              <FeatureCard 
                title={card.title}
                items={card.items}
                renderItem={(item: { serviceName: React.ReactNode; price: string }, index: number, total: number) => (
                  <li
                    key={index}
                    className={`flex justify-between items-center w-full py-3 ${
                      index === total - 1 ? 'border-b-0' : 'border-b border-solid border-gray-300'
                    }`}
                  >
                    <div className="flex-1 text-base text-gray-900">{item.serviceName}</div>
                    <div className="font-bold text-right text-red-600">
                      <span className="text-sm">¥</span>
                      <span className="text-lg">{item.price}</span>
                    </div>
                  </li>
                )}
              />
            </div>
          ))}
        </ul>

        <aside className="mt-8 md:mt-12 p-6 mx-auto bg-gray-50 rounded-lg max-w-4xl">
          <p className="text-sm text-center text-gray-700 space-y-2">
            <span>※ 詳細な価格は、デザインの複雑さや数量によって変動する場合があります。お気軽にお問い合わせください。</span>
            <br />
            <span>※ 価格にプラスして印刷代、送料がかかります。以下以外もお気軽にご相談ください。</span>
          </p>
        </aside>
      </div>
    </section>
  );
} 