'use client';
import React from "react";
import { ProcessNumberBadge } from "./ProcessNumberBadge";
import { ProcessCard } from "./ProcessCard";
import { FadeIn } from "./FadeIn";
import { PROCESS_STEPS, PROCESS_NOTE } from "../data/process";

export default function Process() {
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
        <FadeIn as="header" className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">制作プロセス・納期</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-white">
            安心してご依頼いただけるよう、明確なプロセスでお進めします
          </h2>
        </FadeIn>

        {/* カード：左から順にフェードイン */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {PROCESS_STEPS.map((step, index) => (
            <FadeIn
              key={index}
              delay={index < 3 ? index * 0.18 : 0.36 + (index - 3) * 0.09}
              className="h-full relative"
            >
              {/* ナンバーをカード左上角より上に重ねる */}
              <div className="absolute left-3 top-0 -translate-x-1/2 -translate-y-1/4 z-30 pointer-events-none">
                <ProcessNumberBadge number={step.number} />
              </div>
              <ProcessCard
                title={step.title}
                description={step.description}
              />
            </FadeIn>
          ))}
        </div>

        <p className="relative z-20 mt-8 md:mt-10 text-sm md:text-base text-white/90 text-center max-w-2xl">
          {PROCESS_NOTE}
        </p>
      </div>
    </section>
  );
}
