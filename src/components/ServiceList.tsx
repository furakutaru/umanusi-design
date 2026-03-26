'use client';
import React from "react";
import { FeatureCard } from "./FeatureCard";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

interface ServiceItem {
  name: string;
  url?: string;
}

const serviceCategories = [
  {
    title: "記念品・メモリアルグッズ",
    services: [
      { name: "ぬいぐるみ" },
      { name: "もちもちマスコット", url: "https://note.com/furakutaru/n/n8815388819b7" },
      { name: "デコチョコ" },
      { name: "マグカップ" },
      { name: "ボールペン" },
      { name: "QUOカード" }
    ],
  },
  {
    title: "応援グッズ・アパレル",
    services: [
      { name: "トートバッグ" },
      { name: "うちわ" },
      { name: "バッジ" },
      { name: "ハンカチ", url: "https://note.com/furakutaru/n/n324bc72c4ffe" },
      { name: "ゴム長靴" },
      { name: "ネクタイ/蝶ネクタイ" }
    ],
  },
  {
    title: "ロゴ・デザイン",
    services: [
      { name: "クリアファイル" },
      { name: "シール" },
      { name: "マスキングテープ" },
      { name: "モバイルバッテリー" },
      { name: "スマホケース" }
    ],
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
                renderItem={(item: ServiceItem, idx: number, total: number) => (
                  <li
                    key={idx}
                    className={`flex justify-start items-center w-full py-2 ${
                      idx === total - 1 ? 'border-b-0' : 'border-b border-solid border-gray-300'
                    }`}
                  >
                    {item.url ? (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-base text-gray-900 hover:text-red-600 transition-all flex items-center gap-1 group"
                      >
                        <span className="underline underline-offset-4 decoration-1 decoration-gray-900 group-hover:decoration-red-600">
                          {item.name}
                        </span>
                        <ExternalLinkIcon className="w-3.5 h-3.5 stroke-current opacity-70 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span className="text-base text-gray-900">{item.name}</span>
                    )}
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
 