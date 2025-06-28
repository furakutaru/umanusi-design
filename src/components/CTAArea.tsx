'use client';
import React from "react";
import { CTAButton } from "./CTAButton";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export function CTAArea() {
  const buttonRef = useFadeInOnScroll();
  
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-10 bg-red-600">
      <div className="flex flex-col items-center justify-center">
        <div ref={buttonRef.ref} className={`fade-in${buttonRef.isVisible ? ' is-visible' : ''} w-[90vw] md:w-[340px] py-4`}>
          <CTAButton onClick={handleCTAClick} className="h-[64px] w-full text-xl">
            制作を相談・依頼する
          </CTAButton>
        </div>
      </div>
    </section>
  );
} 