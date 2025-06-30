'use client';
import React from "react";
import { HeroButtons } from "./HeroButtons";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export const HeroContent = () => {
  const buttonsRef = useFadeInOnScroll();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
        馬主としての視点、<br />
        デザイナーとしての技術
      </h1>
      <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md">
        競馬に強いデザイナーが、愛馬の記念を形にします
      </p>
      <div ref={buttonsRef.ref} className="flex flex-col sm:flex-row gap-4">
        <HeroButtons />
      </div>
    </div>
  );
}; 