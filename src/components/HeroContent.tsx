'use client';
import React from "react";
import { HeroButtons } from "./HeroButtons";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export const HeroContent = () => {
  const buttonsRef = useFadeInOnScroll();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
        馬主だから、わかる。<br />
        デザイナーだから、つくれる。
      </h1>
      <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md">
        愛馬の記念品や競馬関連グッズを、馬主デザイナーに相談してつくる。
      </p>
      <div ref={buttonsRef.ref} className="flex flex-col sm:flex-row gap-4">
        <HeroButtons />
      </div>
      <p className="mt-6 text-sm md:text-base text-white/80 drop-shadow-md">
        まだ仕様が決まっていなくてもOK。まずはお気軽にご相談ください。
      </p>
    </div>
  );
}; 