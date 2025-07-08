'use client';
import React from "react";
import { ProcessNumberBadge } from "./ProcessNumberBadge";
import { ProcessCard } from "./ProcessCard";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const processSteps = [
  {
    number: "01",
    title: "ご相談",
    description: "お客様のビジョンを<br />お聞かせください。<br />まずはXのリプライかDMでお気軽にご連絡ください。"
  },
  {
    number: "02",
    title: "ヒアリング",
    description: "詳細な要望をお伺いするための<br />ヒアリングを行います。<br />ご希望の内容や予算、納期などをお知らせください。"
  },
  {
    number: "03",
    title: "デザイン制作",
    description: "ヒアリング内容をもとに、<br />オリジナルデザインを制作します。<br />馬の特徴や厩舎のイメージを大切にしたデザインをご提案します。"
  },
  {
    number: "04",
    title: "レビュー・修正",
    description: "制作したデザインをご確認いただき、必要に応じて修正を行います。<br />ご満足いただけるまで調整いたします。"
  },
  {
    number: "05",
    title: "印刷・制作",
    description: "最終デザインが確定したら、<br />印刷・制作に進みます。<br />高品質な仕上がりを実現するため、信頼できる業者と連携しています。"
  },
  {
    number: "06",
    title: "お届け",
    description: "完成した商品をお届けします。<br />印刷所から直接お届けする場合もございます。"
  }
];

export default function Process() {
  const headerRef = useFadeInOnScroll();
  const cardRefs = [useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll()];

  return (
    <section 
      id="process"
      className="relative w-full overflow-hidden py-12 md:py-16 bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/bcbd7e22bef8b422aebcfd3bc499b206ca37673a?placeholderIfAbsent=true')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 黒の半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* コンテンツラッパー */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-[1200px] mx-auto px-4">
        {/* ヘッダー：最初にフェードイン */}
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center mb-8 md:mb-12`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white">制作プロセス</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-white">
            安心してご依頼いただけるよう、明確なプロセスでお進めします
          </h2>
        </header>
        
        {/* カード：左から順にフェードイン */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`fade-in${cardRefs[index].isVisible ? ' is-visible' : ''} h-full relative`}
              ref={cardRefs[index].ref}
              style={{ transitionDelay: `${index < 3 ? index * 0.18 : 0.36 + (index - 3) * 0.09}s` }}
            >
              {/* ナンバーをカード左上角より上に重ねる */}
              <div className="absolute left-3 top-0 -translate-x-1/2 -translate-y-1/4 z-30 pointer-events-none">
                <ProcessNumberBadge number={step.number} />
              </div>
              <ProcessCard
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 