'use client';
import React, { useEffect, useRef } from "react";
import { HeroContent } from "./HeroContent";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function HeroHeader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeRef = useFadeInOnScroll();

  useEffect(() => {
    console.log('useEffect実行');
    const video = videoRef.current;
    console.log('videoRef.current:', video);
    if (video) {
      video.playbackRate = 0.5; // スローモーション
      video.loop = true; // ループ再生を明示
    }
    // Parallax効果
    const handleScroll = () => {
      if (video) {
        const scrollY = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
        const translateY = Math.min(scrollY * 0.4, 200);
        const scale = 1.08 + Math.min(scrollY, 400) * 0.0007;
        const transformValue = `translateY(${translateY}px) scale(${scale})`;
        video.style.transform = transformValue;
        console.log('scrollY:', scrollY, 'transform:', transformValue);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.body.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={fadeRef.ref} className={`fade-in${fadeRef.isVisible ? ' is-visible' : ''} relative w-full h-[700px] md:h-screen max-h-[800px] overflow-hidden text-center`}>
      {/* 背景動画 */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* 黒半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* コンテンツ */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <HeroContent />
      </div>
    </header>
  );
} 