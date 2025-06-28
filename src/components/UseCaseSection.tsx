'use client';
import React from "react";
import { SceneSlider } from "./SceneSlider";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const sceneData = [
  {
    id: "retirement",
    imageSrc: "/retirement-scene.webp",
    title: "引退記念",
    description: "愛馬の軌跡を形に残す記念グッズ全般",
    imageAspectRatio: "aspect-[1.18]",
    cardPadding: "pb-16"
  },
  {
    id: "victory",
    imageSrc: "/victory-scene.webp",
    title: "勝利祝い",
    description: "栄光の瞬間を記念するグッズ全般",
    imageAspectRatio: "aspect-[1.59]",
    cardPadding: "pb-24"
  },
  {
    id: "daily",
    imageSrc: "/daily-scene.webp",
    title: "日常使い",
    description: "スマホケースやモバイルバッテリーで愛馬を身近に",
    imageAspectRatio: "aspect-[1.59]",
    cardPadding: "pb-16"
  },
  {
    id: "fanservice",
    imageSrc: "/fanservice-scene.webp",
    title: "ファンサービス",
    description: "シールやバッジをファンへのプレゼントに",
    imageAspectRatio: "aspect-[1.18]",
    cardPadding: "pb-16"
  },
  {
    id: "race-scene",
    imageSrc: "/race-scene.webp",
    title: "レース観戦時",
    description: "応援タオル、うちわ、Tシャツで仲間と一体感",
    imageAspectRatio: "aspect-[1.59]",
    cardPadding: "pb-16"
  },
  {
    id: "owner-friends",
    imageSrc: "/owner-friends.webp",
    title: "馬主仲間との交流",
    description: "オリジナル名刺や記念品で話題に",
    imageAspectRatio: "aspect-[1.59]",
    cardPadding: "pb-16"
  }
];

export default function UseCaseSection() {
  const headerRef = useFadeInOnScroll();
  const sliderRef = useFadeInOnScroll();

  return (
    <section className="relative w-full py-8 md:py-16 overflow-x-clip">
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center`}>
          <h1 className="text-3xl md:text-4xl font-bold leading-none text-black">
            活用シーン例
          </h1>
          <h2 className="mt-4 mb-10 text-xl md:text-2xl font-semibold leading-none text-gray-900">
            様々なシーンでご活用いただけます
          </h2>
        </header>
        <div ref={sliderRef.ref} style={{ transitionDelay: '0.3s' }} className={`fade-in${sliderRef.isVisible ? ' is-visible' : ''}`}>
          <SceneSlider scenes={sceneData} />
        </div>
      </div>
    </section>
  );
} 