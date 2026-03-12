'use client';
import React from "react";
import { TestimonialSlider } from "./TestimonialSlider";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const testimonialData = [
  {
    id: "t-customer",
    customer: "T様",
    testimonial: "細かい修正にも迅速にご対応いただき、本当に助かりました。デザインもすごく良くて大満足です！"
  },
  {
    id: "s-customer",
    customer: "S様",
    testimonial: "スピーディーなご対応と、丁寧な修正に助けられました。デザインもすごくカッコよくて気に入っています！"
  },
  {
    id: "i-customer",
    customer: "I様",
    testimonial: "度重なる修正にも快く応じてくださり、ありがとうございました。素晴らしいデザインにとても満足しています。"
  },
  {
    id: "m-customer",
    customer: "M様",
    testimonial: "対応が早く、細かな要望にも柔軟に応じていただけて感謝しています。めちゃくちゃカッコよく、完璧な仕上がりです！"
  },
  {
    id: "ta-customer",
    customer: "T.A様",
    testimonial: "早急にご対応いただき、無事に手元へ届きました。ご提案内容も素晴らしく、大変満足しております。"
  },
  {
    id: "r-customer",
    customer: "R様",
    testimonial: "早急なご対応ありがとうございました。無事に商品が届き、仕上がりにも大変満足しています！"
  },
  {
    id: "su-customer",
    customer: "S.U様",
    testimonial: "素晴らしい仕上がりで大変満足しております。また次回もぜひよろしくお願いいたします！"
  },
  {
    id: "ae-customer",
    customer: "A.E様",
    testimonial: "すごくカッコいいデザインで感動しました！本当に素晴らしい仕上がりで嬉しいです。"
  }
];

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
          <TestimonialSlider testimonials={testimonialData} />
        </div>
      </div>
    </section>
  );
}
