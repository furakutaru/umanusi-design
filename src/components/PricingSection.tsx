import React from "react";
import { FeatureCard } from "./FeatureCard";
import {
  DESIGN_PRICE_CARDS,
  PRINT_PRICE_EXAMPLES,
  PRICING_NOTES,
  PRICING_STRUCTURE_NOTE,
} from "../data/pricing";

export const PricingSection = () => {
  return (
    <section id="price" className="w-full bg-white py-6 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black">料金</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            デザインの複雑さや数量によって価格が変動します
          </h2>
        </header>

        {/* 料金構成の図解 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-14 max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-sm font-bold text-red-600 mb-1">1. デザイン制作費</p>
            <p className="text-sm text-gray-700">下記の参考価格が目安です</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-sm font-bold text-gray-700 mb-1">2. 商品製造費・印刷費・送料</p>
            <p className="text-sm text-gray-700">実費。右下の印刷代参考料金をご確認ください</p>
          </div>
        </div>
        <p className="text-sm text-center text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          {PRICING_STRUCTURE_NOTE}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch justify-items-center price-list">
          {DESIGN_PRICE_CARDS.map((card) => (
            <div key={card.title} className="flex flex-col w-full max-w-sm">
              <FeatureCard
                title={card.title}
                items={card.items}
                renderItem={(item, index, total) => (
                  <li
                    key={index}
                    className={`flex justify-between items-center w-full py-3 ${
                      index === total - 1 ? "border-b-0" : "border-b border-solid border-gray-300"
                    }`}
                  >
                    <div className="flex-1 text-base text-gray-900">{item.serviceName}</div>
                    <div className="font-bold text-right text-red-600">
                      <span className="text-sm">¥</span>
                      <span className="text-lg">{item.price}</span>
                    </div>
                  </li>
                )}
              />
            </div>
          ))}
        </ul>

        <aside className="mt-8 md:mt-12 p-6 mx-auto bg-gray-50 rounded-lg max-w-4xl">
          <p className="text-sm text-center text-gray-700 space-y-2">
            {PRICING_NOTES.map((note) => (
              <React.Fragment key={note}>
                <span>※ {note}</span>
                <br />
              </React.Fragment>
            ))}
          </p>
        </aside>

        {/* 印刷代参考料金 */}
        <div className="mt-14 md:mt-20">
          <header className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black">印刷代参考料金</h2>
            <p className="mt-3 text-base text-gray-700">
              印刷物の種類や部数によって価格が変動します。下記は一例です
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 max-w-4xl mx-auto">
            {PRINT_PRICE_EXAMPLES.map((item) => (
              <article key={item.productName} className="flex flex-col justify-between min-w-0">
                <div className="flex flex-row gap-2 md:gap-5 items-start md:items-center py-0 px-0">
                  <h3 className="text-base font-semibold text-gray-900 flex-1 min-w-0">
                    {item.productName}
                  </h3>
                  <div className="font-bold text-xl text-red-600 text-right flex flex-row items-end gap-1 self-end">
                    <div className="flex items-end gap-1">
                      <span className="text-sm" style={{ lineHeight: "1.4rem" }}>
                        ¥
                      </span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
