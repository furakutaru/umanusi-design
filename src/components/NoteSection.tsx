'use client';
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { NoteSlider } from './NoteSlider';
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const NOTE_ARTICLES = [
  {
    id: 'process',
    imageSrc: 'https://assets.st-note.com/production/uploads/images/260049402/rectangle_large_type_2_4d813d4c0e3355107a554b7ebdac5334.png?width=2000&height=2000&fit=bounds&quality=85',
    title: '【実録】愛馬の勝利から納品まで。デザイナー馬主が伴走する制作プロセスのすべて',
    url: 'https://note.com/furakutaru/n/n1e08ad7d6975'
  },
  {
    id: 'ai-image',
    imageSrc: 'https://assets.st-note.com/production/uploads/images/260020420/rectangle_large_type_2_3794f2ea7224c5a0d5e17552b3b22f27.png?width=2000&height=2000&fit=bounds&quality=85',
    title: '依頼前に"イメージしてみる"。生成AIで愛馬の記念品イメージを膨らませる方法',
    url: 'https://note.com/furakutaru/n/nee84a6b527ab'
  },
  {
    id: 'selection',
    imageSrc: 'https://assets.st-note.com/production/uploads/images/259264386/rectangle_large_type_2_55b2b8ed61bcd0c22fb80a5832d03444.png?width=2000&height=2000&fit=bounds&quality=85',
    title: '愛馬の勝利記念、何を作る？デザイナー馬主が教える後悔しない記念品選びのポイント',
    url: 'https://note.com/furakutaru/n/n2fb6b3f26bb4'
  },
  {
    id: 'reason',
    imageSrc: 'https://assets.st-note.com/production/uploads/images/259545910/rectangle_large_type_2_bdc778ca79cd48f336db22004bf02ec1.png?width=2000&height=2000&fit=bounds&quality=85',
    title: '愛馬の勝利を、記憶だけで終わらせない。馬主が記念品を作る本当の理由',
    url: 'https://note.com/furakutaru/n/n928a0d21e7f9'
  }
];

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
