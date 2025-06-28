'use client';
import React from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const printPriceData = [
  { productName: "名刺20部両面カラー", amount: "1,050", additionalText: "（送料込み）" },
  { productName: "横断幕90×110ｃｍ", amount: "5,845", additionalText: "（送料込み）" },
  { productName: "キャッププリント15個", amount: "35,000", additionalText: "（送料、キャップ代込み）" },
  { productName: "トレーディングカード1種20枚", amount: "1,920", additionalText: "（送料込み）" },
  { productName: "アクリルスタンド5個75×100mm", amount: "7,442", additionalText: "（送料込み）" },
  { productName: "タオル5枚", amount: "7,760", additionalText: "（送料込み）" },
];

// 2件ずつの配列に分割
type PrintPriceItem = { productName: string; amount: string; additionalText: string };
const chunkArray = (arr: PrintPriceItem[], size: number): PrintPriceItem[][] => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const PrintPrice = () => {
  const rows = chunkArray(printPriceData, 2);
  const headerRef = useFadeInOnScroll();
  const contentRef = useFadeInOnScroll();
  
  return (
    <section className="w-full bg-white py-6 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* ヘッダー：最初にフェードイン */}
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center mb-8 md:mb-12`}>
          <h1 className="text-3xl md:text-4xl font-bold text-black">印刷代参考料金</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            印刷物の種類や部数によって価格が変動します。下記は一例です
          </h2>
        </header>
        
        {/* コンテンツ：次にフェードイン */}
        <div ref={contentRef.ref} style={{ transitionDelay: '0.3s' }} className={`fade-in${contentRef.isVisible ? ' is-visible' : ''} space-y-6`}>
          {rows.map((row: PrintPriceItem[], rowIdx: number) => (
            <div key={rowIdx} className="flex flex-col md:flex-row gap-6">
              {row.map((item: PrintPriceItem, idx: number) => (
                <article key={idx} className="flex-1 bg-white p-0 flex flex-col justify-between min-w-0">
                  <div className="flex flex-row gap-2 md:gap-5 items-start md:items-center py-0 px-0">
                    <h3 className="text-base font-semibold text-gray-900 flex-1 min-w-0">{item.productName}</h3>
                    <div className="font-bold text-xl text-red-600 text-right flex flex-row items-end gap-1 self-end">
                      <div className="flex items-end gap-1">
                        <span className="text-sm" style={{ lineHeight: '1.4rem' }}>¥</span>
                        <span>{item.amount}</span>
                      </div>
                      {item.additionalText && (
                        <span className="text-xs text-gray-500 mb-1">{item.additionalText}</span>
                      )}
                    </div>
                  </div>
                  <div className="border-b border-solid border-gray-200 h-px mt-5" />
                </article>
              ))}
              {/* 1件だけの行の場合、空のdivでバランス調整 */}
              {row.length === 1 && <div className="flex-1" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintPrice; 