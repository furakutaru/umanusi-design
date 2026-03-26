'use client';
import React, { useState, useRef } from 'react';
import { MessageHeading } from './MessageHeading';
import { MessageSubtitle } from './MessageSubtitle';
import { MessageBody } from './MessageBody';
import { AccordionHeader } from './AccordionHeader';
import { AnimatedUnderline } from './AnimatedUnderline';

interface ProfileContentProps {
  headingRef: React.RefObject<HTMLDivElement>;
  headingClassName: string;
  contentRef: React.RefObject<HTMLDivElement>;
  contentClassName: string;
}

export const ProfileContent = ({ headingRef, headingClassName, contentRef, contentClassName }: ProfileContentProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full">
      <div ref={headingRef} className={headingClassName}>
        <MessageHeading>
          私も、あなたと同じ<AnimatedUnderline delay={0.3}>一人の馬主</AnimatedUnderline>です。
        </MessageHeading>

        <MessageSubtitle>
          勝った馬も、勝てなかった馬も、<AnimatedUnderline delay={0.6}>みんな宝物。</AnimatedUnderline>
        </MessageSubtitle>
      </div>

      <div ref={contentRef} className={contentClassName} style={{ transitionDelay: '0.3s' }}>
        <MessageBody>
          はじめまして馬主デザイナーのUMAです。
          <br />
          このサービスを始めたのは、一般的なデザインでは表現しきれない、競馬の世界特有の
          「熱量」や「物語」を形にしたかったから。
          <br />
          勝負服の色に込められた想いや、一戦一戦のドラマ。
          <br />
          その価値を、私は<AnimatedUnderline delay={0.4}>あなたの次くらい理解しています。</AnimatedUnderline>
          <br />
          <br />
          あなたの愛馬との絆、厩舎の誇りを、唯一無二のデザインへ。
          <br />
          一つひとつの想いを丁寧に翻訳し、記憶に残る宝物をお届けすることをお約束します。
        </MessageBody>

        <div className="mt-8 md:mt-12 w-full md:max-w-[700px] mx-auto md:mx-0">
          <AccordionHeader 
            title="プロフィール" 
            isOpen={isAccordionOpen} 
            setIsOpen={setIsAccordionOpen} 
          />
          <div
            ref={accordionContentRef}
            className="transition-all duration-500 ease-in-out overflow-hidden bg-black rounded-b-xl"
            style={{ 
              maxHeight: isAccordionOpen ? `${accordionContentRef.current ? accordionContentRef.current.scrollHeight : 0}px` : '0px',
              opacity: isAccordionOpen ? 1 : 0,
            }}
          >
            <div className="p-6 text-base text-white whitespace-pre-line break-words">
              2023年地方馬主資格取得、デザイナー。
              <br />
              ダビスタで競馬に触れナリタブライアンや黄金世代に青春を費やしブランクがあったのちウマ娘で復帰。
              <br />
              馬券はからっきしなので応援馬券くらい。現在は共有馬のみ。
              <br />
              夢は一頭持ち、重賞出走、ドバイワールドカップ。
            </div>
          </div>
        </div>

        {/* noteセクションへの誘導 */}
        <div className="mt-8 flex justify-start">
          <a
            href="#note"
            className="flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors group"
          >
            <span>noteでより詳しいストーリーを読む</span>
            <svg 
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};