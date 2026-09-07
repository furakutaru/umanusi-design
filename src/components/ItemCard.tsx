import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Item } from "../data/items";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

const CATEGORY_COLORS: Record<string, string> = {
  memorial: "bg-red-100 text-red-700",
  wear: "bg-blue-100 text-blue-700",
  business: "bg-amber-100 text-amber-700",
  other: "bg-gray-100 text-gray-700",
};

export const ItemCard = ({ item }: { item: Item }) => {
  const categoryColor = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.other;

  return (
    <article className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${categoryColor}`}>
            <span className="text-lg font-bold text-center px-4">{item.name}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-base font-bold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600 flex-1">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Link
              key={tag}
              href={`/items#${item.category}`}
              className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
        {item.price && (
          <div className="mt-1 flex items-baseline justify-between">
            <span className="font-bold text-red-600">
              <span className="text-sm">¥</span>
              <span className="text-lg">{item.price}</span>
            </span>
            {item.priceNote && <span className="text-xs text-gray-500">{item.priceNote}</span>}
          </div>
        )}
        {item.externalUrl && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
          >
            <span className="underline underline-offset-4">詳しく見る</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ItemCard;
