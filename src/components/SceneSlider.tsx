'use client';
import React, { useState, useEffect, useRef } from "react";
import { SceneCard } from "./SceneCard";
import { SliderArrow } from "./SliderArrow";

interface Scene {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  imageAspectRatio?: string;
  cardPadding?: string;
}

interface SceneSliderProps {
  scenes: Scene[];
}

export function SceneSlider({ scenes }: SceneSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showAttention, setShowAttention] = useState(true);
  const sliderContentRef = useRef<HTMLDivElement>(null);

  // 画面幅から表示枚数を計算
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) setVisibleCount(4);
      else if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // currentIndexの最大値を制限
  useEffect(() => {
    const maxIndex = Math.max(0, scenes.length - visibleCount);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, scenes.length]);

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
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < Math.max(0, scenes.length - visibleCount)) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

  // --- スライド操作 ---
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAttention(false);
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, scenes.length - visibleCount);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setShowAttention(false);
    }
  };

  // --- スライド位置の計算 ---
  useEffect(() => {
    if (sliderContentRef.current && sliderContentRef.current.children[0]) {
      const cardWidth = (sliderContentRef.current.children[0] as HTMLElement).offsetWidth;
      const offset = -currentIndex * cardWidth;
      sliderContentRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, visibleCount]);

  const maxIndex = Math.max(0, scenes.length - visibleCount);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-12 md:px-16">
      <div 
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={sliderContentRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {scenes.map((scene) => (
            <div key={scene.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              <SceneCard {...scene} />
            </div>
          ))}
        </div>
        {currentIndex > 0 && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <SliderArrow direction="left" onClick={handlePrev} variant="scene" className="text-red-600" />
          </div>
        )}
        {currentIndex < maxIndex && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <SliderArrow direction="right" onClick={handleNext} variant="scene" className={`text-red-600 ${showAttention ? 'animate-attention' : ''}`} />
          </div>
        )}
      </div>
    </div>
  );
} 