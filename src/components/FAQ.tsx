'use client';
import React from "react";
import { FAQItem } from "./FAQItem";
import { FadeIn } from "./FadeIn";
import { AnimatedUnderline } from "./AnimatedUnderline";
import { FAQ_DATA } from "../data/faq";

export const FAQ = () => {
  return (
    <section id="faq" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[800px] mx-auto px-4">
        <FadeIn as="header" className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black">よくある質問</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            安心してご依頼いただけるよう、明確なプロセスでお進めします
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-6">
          {FAQ_DATA.map((faq, index) => (
            <FadeIn key={index} delay={Math.min(index, 5) * 0.15}>
              <FAQItem
                question={faq.question}
                answer={
                  <>
                    {faq.paragraphs.map((paragraph, pIndex) => {
                      const isLast = pIndex === faq.paragraphs.length - 1;
                      return (
                        <React.Fragment key={pIndex}>
                          {isLast && faq.emphasizeLast ? (
                            <AnimatedUnderline>{paragraph}</AnimatedUnderline>
                          ) : (
                            <span>{paragraph}</span>
                          )}
                          {!isLast && <br />}
                        </React.Fragment>
                      );
                    })}
                  </>
                }
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
