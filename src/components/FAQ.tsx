'use client';
import React from "react";
import { FAQItem } from "./FAQItem";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const faqData = [
  {
    question: "依頼をするにはどうしたらいいですか？",
    answer: (
      <>
        <span>
          まずはご相談・ご依頼ボタンから。
          <br />
          もしくは、XでリプライまたはDMでお願いいたします。
        </span>
        <br />
        <span>漠然としたイメージでもOKですお気軽にご連絡下さい。</span>
      </>
    ),
  },
  {
    question: "料金はどのように決まりますか？",
    answer: (
      <>
        <span>
          料金は、デザインの複雑さ、数量、使用する素材などにより異なります。
        </span>
        <br />
        <span>
          基本的な料金表はございますが、詳細はご相談の上で決定させていただきます。
        </span>
        <br />
        <span>
          また印刷代+送料が含まれます。
        </span>
        <br />
        <span>
          印刷代の目安は印刷代参考料金をご確認ください。
        </span>
      </>
    ),
  },
  {
    question: "デザインの修正は可能ですか？",
    answer:
      "はい、お客様のご要望に沿ってデザインの修正を行います。最終的にご満足いただけるまで調整いたします。",
  },
  {
    question: "納品までの期間はどのくらいですか？",
    answer: (
      <>
        <span>
          一般的に、お打ち合わせからデザイン完了まで最短3日通常1週間程度かかります。
        </span>
        <br />
        <span>
          ただし、案件の複雑さや現在の混雑状況により変動する場合があります。
        </span>
        <br />
        <span>
          またそこから印刷に回す場合は1日〜1ヶ月ほどかかる場合がございます。
        </span>
      </>
    ),
  },
  {
    question: "支払い方法は何がありますか？",
    answer:
      "銀行振込とPayPay、PayPal（クレジットカード）に対応しております。商品受け取り後1週間以内にお支払いお願いします。",
  },
  {
    question: "リストに無いものでも制作可能ですか？",
    answer:
      "リストに無いもので製作可能です。世にある大抵のものは製作可能ですが、ロット数や印刷代の問題がありますの100％ご希望にそえられない場合もございます。",
  },
  {
    question: "依頼時に用意しておくものはありますか？",
    answer: (
      <>
        <span>
          漠然としたアイデアから共に詰めていく事も可能ですが以下が有るとお話がスムーズになるかと思います。
        </span>
        <br />
        <span>
          もちろんどれも無くても問題有りません。
        </span>
        <br />
        <span>
          ・対象のお写真（ご利用になる場合）
        </span>
        <br />
        <span>
          ・対象のお名前等掲載希望事項
        </span>
        <br />
        <span>
          ・ご希望納期
        </span>
        <br />
        <span>
          ・デザイン、形状、色等の参考画像
        </span>
      </>
    ),
  },
];

export const FAQ = () => {
  const headerRef = useFadeInOnScroll();
  const itemRefs = [useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll(), useFadeInOnScroll()];

  return (
    <section id="faq" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[800px] mx-auto px-4">
        <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center mb-8 md:mb-12`}>
          <h1 className="text-3xl md:text-4xl font-bold text-black">よくある質問</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            安心してご依頼いただけるよう、明確なプロセスでお進めします
          </h2>
        </header>
        <div className="flex flex-col gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              ref={itemRefs[index].ref}
              style={{ transitionDelay: `${index * 0.2}s` }}
              className={`fade-in${itemRefs[index].isVisible ? ' is-visible' : ''}`}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 