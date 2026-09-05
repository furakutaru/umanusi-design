'use client';
import React from "react";
import { TestimonialSlider } from "./TestimonialSlider";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { TESTIMONIALS } from "../data/testimonials";

export default function TestimonialSection() {
  const headerRef = useFadeInOnScroll();
  const sliderRef = useFadeInOnScroll();

  return (
    <section className="relative w-full py-8 md:py-16 overflow-x-clip" id="testimonials">
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center`}>
          <h1 className="text-3xl md:text-4xl font-bold leading-none text-black">
            お客さまの声
          </h1>
          <h2 className="mt-4 mb-10 text-xl md:text-2xl font-semibold leading-none text-gray-900">
            お客様からの喜びの声
          </h2>
        </header>
        <div ref={sliderRef.ref} style={{ transitionDelay: '0.3s' }} className={`fade-in${sliderRef.isVisible ? ' is-visible' : ''}`}>
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
}
