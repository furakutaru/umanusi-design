'use client';
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { NoteSlider } from './NoteSlider';
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { NOTE_ARTICLES } from "../data/notes";

export function NoteSection() {
  const scrollRef = useFadeInOnScroll();

  return (
    <SectionWrapper id="note" className="bg-gray-50/50 border-t border-gray-100">
      <div 
        ref={scrollRef.ref as React.RefObject<HTMLDivElement>} 
        className={`fade-in${scrollRef.isVisible ? ' is-visible' : ''}`}
      >
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories on note
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            馬主デザイナーとしての想いや、制作の裏側、
            記念品選びのヒントなどをnoteで発信しています。
          </p>
        </div>
        
        <NoteSlider notes={NOTE_ARTICLES} />
        
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://note.com/furakutaru/m/m57888eba2c94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-md active:scale-95"
          >
            <span>note (BLOG) をすべて見る</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default NoteSection;
