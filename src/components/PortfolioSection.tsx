'use client';
import React, { useState, useRef } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { SliderArrow } from "./SliderArrow";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
// import { SectionWrapper } from './SectionWrapper'; // 必要なら有効化

const portfolioItems = [
  {
    image: "/portfolio-horse-logo.webp",
    title: "馬名ロゴ",
    description: "オリジナルグッズや出馬予告画像、メンコなどに利用"
  },
  {
    image: "/portfolio-luminaval-towel.webp",
    title: "ルミナヴァル号フェイスタオル",
    description: "口取り式で掲げたり応援にも使えます"
  },
  {
    image: "/portfolio-age-runner-card.webp",
    title: "エイジランナー号トレーディングカード",
    description: "サインを貰うのにも最適"
  },
  {
    image: "/portfolio-firmarpoint-card.webp",
    title: "フェルマーポイント号優勝記念トレーディングカード",
    description: "話題になったゴリアット号のトレーディングカードと同じフォーマットで"
  },
  {
    image: "/portfolio-firmarpoint-stand.webp",
    title: "フェルマーポイント号優勝記念アクリルスタンド",
    description: "口取り写真をアクリルスタンドに加工することで立体感のある特別な仕上がりに"
  },
  {
    image: "/portfolio-sun-or-slice-cap.webp",
    title: "サンオルソーライス号キャップ",
    description: "関係者へのプレゼントにも、帽子タイプや刺繍なども選べます"
  },
  {
    image: "/portfolio-sun-or-slice-stand.webp",
    title: "サンオルソーライス号重賞出走記念アクリルスタンド",
    description: "台座をゼッケンに、疾走中の写真を使うことで躍動感が有る仕上がりに"
  },
  {
    image: "/portfolio-south-express-shield.webp",
    title: "サウスエクスプレス号蹄鉄盾",
    description: "蹄鉄は幸運のお守りともしられインテリアにも最適です"
  },
  {
    image: "/portfolio-pick-and-roll-shield.webp",
    title: "ピックアンドロール号蹄鉄盾",
    description: "デザイン自由度の高い蹄鉄盾"
  },
  {
    image: "/portfolio-pick-and-roll-photo.webp",
    title: "ピックアンドロール号勝利写真",
    description: "L版の勝利写真をカスタマイズ"
  }
];

export const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showAttention, setShowAttention] = useState(true);
  const sliderRef = useRef(null);
  const headerRef = useFadeInOnScroll();
  const sliderContentRef = useFadeInOnScroll();
  const total = portfolioItems.length;

  // スワイプ機能
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < total - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrevious();
    }
  };

  const handleChange = (nextIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsFading(false);
      setShowAttention(false);
    }, 250);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      handleChange(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      handleChange(currentIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="w-full bg-neutral-900 pt-8 pb-12">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center px-4">
        {/* ヘッダー：最初にフェードイン */}
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center`}>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-0">制作実績</h1>
          <h2 className="text-lg md:text-xl font-semibold leading-snug text-white mt-4 mb-6">これまでのデザイン実績の一部をご紹介します</h2>
        </header>
        
        {/* スライダー：次にフェードイン */}
        <div ref={sliderContentRef.ref} style={{ transitionDelay: '0.3s' }} className={`fade-in${sliderContentRef.isVisible ? ' is-visible' : ''} flex flex-col items-center justify-center w-full relative`}>
          <div 
            ref={sliderRef}
            className="mx-auto w-full max-w-[340px] aspect-[7/4] md:max-w-[700px] relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* 左右ボタン */}
            {currentIndex > 0 && (
              <div className="hidden md:block absolute left-[-56px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="left" onClick={handlePrevious} variant={undefined} className={!showAttention ? 'bg-[rgba(220,38,38,0.3)]' : ''} />
              </div>
            )}
            {currentIndex < total - 1 && (
              <div className="hidden md:block absolute right-[-56px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="right" onClick={handleNext} className={`${showAttention ? 'animate-attention' : 'bg-[rgba(220,38,38,0.3)]'}`} variant={undefined} />
              </div>
            )}
            <div
              className={`transition-opacity duration-300 w-full h-full ${isFading ? 'opacity-0' : 'opacity-100'}`}
              style={{ willChange: 'opacity' }}
            >
              <PortfolioCard
                image={portfolioItems[currentIndex].image}
                title={portfolioItems[currentIndex].title}
                description={portfolioItems[currentIndex].description}
                altText={`Portfolio item: ${portfolioItems[currentIndex].title}`}
              />
            </div>
            {/* モバイル用左右ボタン */}
            {currentIndex > 0 && (
              <div className="md:hidden absolute left-[-12px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="left" onClick={handlePrevious} variant="scene" />
              </div>
            )}
            {currentIndex < total - 1 && (
              <div className="md:hidden absolute right-[-12px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="right" onClick={handleNext} variant="scene" className={showAttention ? 'animate-attention' : ''} />
              </div>
            )}
          </div>
          {/* インジケータードット */}
          <div className="flex gap-2 mt-6">
            {portfolioItems.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 md:w-3 md:h-3 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-gray-500/50'} transition-colors`}
              />
            ))}
          </div>
          {/* SP時のみ画像の外にテキストを表示 */}
          <div className="block md:hidden w-full max-w-[340px] mx-auto mt-2 px-2">
            <h3 className="text-lg font-bold leading-7 text-white mb-1">
              {portfolioItems[currentIndex].title}
            </h3>
            <p className="text-sm leading-6 text-white">
              {portfolioItems[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 