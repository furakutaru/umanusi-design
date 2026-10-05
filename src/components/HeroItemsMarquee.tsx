'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MarqueeItem {
  id: string;
  itemId: string;
  name: string;
  image: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { id: "m1", itemId: "trading-card", name: "トレーディングカード", image: "/hero-marquee-trading-card.png" },
  { id: "m2", itemId: "shoe-shield", name: "蹄鉄飾り・蹄鉄盾", image: "/hero-marquee-shoe-shield.png" },
  { id: "m3", itemId: "acrylic-stand", name: "アクリルスタンド", image: "/hero-marquee-acrylic-stand.png" },
  { id: "m4", itemId: "tshirt", name: "Tシャツ／ポロシャツ", image: "/hero-marquee-tshirt.png" },
  { id: "m5", itemId: "cap", name: "キャップ", image: "/hero-marquee-cap.png" },
  { id: "m6", itemId: "banner", name: "横断幕", image: "/hero-marquee-banner1.png" },
  { id: "m7", itemId: "logo", name: "馬名／厩舎／牧場ロゴ", image: "/hero-marquee-logo.png" },
  { id: "m8", itemId: "namecard-custom", name: "オーダーメイド馬主名刺", image: "/hero-marquee-namecard.png" },
  { id: "m9", itemId: "banner", name: "横断幕", image: "/hero-marquee-banner2.png" },
  { id: "m10", itemId: "handkerchief", name: "ハンカチ", image: "/hero-marquee-handkerchief.png" },
  { id: "m11", itemId: "mochi-mascot", name: "もちもちマスコット", image: "/hero-marquee-mochi-mascot.png" },
];

// シームレスループのため列を複製
const LOOPED_ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export const HeroItemsMarquee = () => {
  return (
    <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden py-3 md:py-4">
      <div className="flex w-max animate-hero-marquee">
        {LOOPED_ITEMS.map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={`/items/${item.itemId}`}
            aria-label={item.name}
            className="relative mx-2 md:mx-3 w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden shadow-lg opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 animate-hero-bob"
            style={{ animationDelay: `${(index % MARQUEE_ITEMS.length) * 0.15}s` }}
          >
            <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroItemsMarquee;
