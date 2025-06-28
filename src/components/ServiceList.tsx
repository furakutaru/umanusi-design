'use client';
import React from "react";
import { FeatureCard } from "./FeatureCard";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const serviceCategories = [
  {
    title: "記念品・メモリアルグッズ",
    services: ["ぬいぐるみ", "デコチョコ", "マグカップ", "ボールペン", "QUOカード"],
  },
  {
    title: "応援グッズ・アパレル",
    services: ["トートバッグ", "うちわ", "バッジ", "ゴム長靴", "ネクタイ/蝶ネクタイ"],
  },
  {
    title: "ロゴ・デザイン",
    services: ["クリアファイル", "シール", "マスキングテープ", "モバイルバッテリー", "スマホケース"],
  }
];

export function ServiceList() {
  const headerRef = useFadeInOnScroll();
  const cardRefs = [useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll()];

  return (
    <section id="service-list" className="w-full bg-white pb-12 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center mb-8 md:mb-12`}>
          <h1 className="text-3xl md:text-4xl font-bold text-black">対応サービス一覧</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            リスト以外でも対応可能です。まずはお気軽にご相談ください。
          </h2>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <div
              key={category.title}
              ref={cardRefs[index].ref}
              className={`fade-in${cardRefs[index].isVisible ? ' is-visible' : ''} h-full`}
              style={{ transitionDelay: `${index * 0.18}s` }}
            >
              <FeatureCard 
                title={category.title}
                items={category.services}
                renderItem={(item: string, index: number, total: number) => (
                  <li
                    key={index}
                    className={`flex justify-start items-center w-full py-2 ${
                      index === total - 1 ? 'border-b-0' : 'border-b border-solid border-gray-300'
                    }`}
                  >
                    <span className="text-base text-gray-900">{item}</span>
                  </li>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 