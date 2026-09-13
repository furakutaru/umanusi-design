import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ITEMS, ITEM_CATEGORY_LABELS } from "../../../data/items";
import { ItemCard } from "../../../components/ItemCard";
import { ExternalLinkIcon } from "../../../components/ExternalLinkIcon";
import { ConsultCTA } from "../../../components/ConsultCTA";

interface ItemDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return ITEMS.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: ItemDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = ITEMS.find((i) => i.id === id);
  if (!item) return {};
  return {
    title: item.name,
    description: item.description,
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  memorial: "bg-red-100 text-red-700",
  wear: "bg-blue-100 text-blue-700",
  business: "bg-amber-100 text-amber-700",
  other: "bg-gray-100 text-gray-700",
};

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = await params;
  const item = ITEMS.find((i) => i.id === id);
  if (!item) notFound();

  const categoryColor = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.other;
  const relatedItems = ITEMS.filter((i) => i.category === item.category && i.id !== item.id).slice(0, 3);

  return (
    <main className="w-full pt-20 bg-white">
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <Link href="/items" className="inline-block text-sm text-gray-500 hover:text-red-600 mb-6">
            ← 対応アイテム一覧に戻る
          </Link>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-8">
            {item.image ? (
              <Image src={item.image} alt={item.name} fill className="object-cover" priority />
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${categoryColor}`}>
                <span className="text-2xl font-bold text-center px-4">{item.name}</span>
              </div>
            )}
          </div>

          <p className="text-xs text-gray-500 mb-2">{ITEM_CATEGORY_LABELS[item.category]}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.name}</h1>
          <p className="text-base text-gray-700 leading-7 mb-6">{item.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.tags.map((tag) => (
              <Link
                key={tag}
                href={`/items#${item.category}`}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {(item.price || item.leadTime) && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              {item.price && (
                <div>
                  <p className="text-xs text-gray-500 mb-1">参考価格</p>
                  <p className="font-bold text-red-600">
                    <span className="text-sm">¥</span>
                    <span className="text-xl">{item.price}</span>
                    {item.priceNote && (
                      <span className="ml-2 text-xs text-gray-500 font-normal">{item.priceNote}</span>
                    )}
                  </p>
                </div>
              )}
              {item.leadTime && (
                <div>
                  <p className="text-xs text-gray-500 mb-1">納期目安</p>
                  <p className="text-sm text-gray-800">{item.leadTime}</p>
                </div>
              )}
            </div>
          )}

          {item.externalUrl && (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 mb-10"
            >
              <span className="underline underline-offset-4">関連記事を読む</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          )}

          <div className="flex justify-center mb-14">
            <ConsultCTA location="item_detail" />
          </div>

          {relatedItems.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                同じカテゴリのアイテム
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedItems.map((related) => (
                  <ItemCard key={related.id} item={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
