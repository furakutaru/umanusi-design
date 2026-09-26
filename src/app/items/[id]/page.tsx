import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ITEMS, ITEM_CATEGORY_LABELS } from "../../../data/items";
import { WORKS } from "../../../data/works";
import { WorkCard } from "../../../components/WorkCard";
import { ItemImageGallery } from "../../../components/ItemImageGallery";
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
  const galleryImages = item.images ?? (item.image ? [item.image] : []);
  const relatedWorks = (item.relatedWorkIds ?? [])
    .map((workId) => WORKS.find((w) => w.id === workId))
    .filter((w): w is (typeof WORKS)[number] => Boolean(w));
  const crossSellItem = item.crossSellItemId
    ? ITEMS.find((i) => i.id === item.crossSellItemId)
    : undefined;

  return (
    <main className="w-full pt-20 bg-white">
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <Link href="/items" className="inline-block text-sm text-gray-500 hover:text-red-600 mb-6">
            ← 対応アイテム一覧に戻る
          </Link>

          <ItemImageGallery
            images={galleryImages}
            alt={item.name}
            placeholderText={item.name}
            placeholderColorClass={categoryColor}
          />

          <p className="text-xs text-gray-500 mb-2">{ITEM_CATEGORY_LABELS[item.category]}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.name}</h1>
          <p className="text-base text-gray-700 leading-7 mb-6 whitespace-pre-line">{item.description}</p>

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

          {item.price && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-xs text-gray-500 mb-1">参考価格</p>
              <p className="font-bold text-red-600">
                <span className="text-sm">¥</span>
                <span className="text-xl">{item.price}</span>
              </p>
              {item.priceNote && (
                <p className="mt-1 text-xs text-gray-500">{item.priceNote}</p>
              )}
            </div>
          )}

          {(item.leadTime || item.printPriceExample || item.specNote || item.useCases) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {item.leadTime && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">納期目安</p>
                  <p className="text-sm text-gray-800 whitespace-pre-line">{item.leadTime}</p>
                </div>
              )}
              {item.printPriceExample && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">参考印刷代</p>
                  <p className="text-sm text-gray-800 whitespace-pre-line">{item.printPriceExample}</p>
                </div>
              )}
              {item.specNote && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">仕様</p>
                  <p className="text-sm text-gray-800 whitespace-pre-line">{item.specNote}</p>
                </div>
              )}
              {item.useCases && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:col-span-2">
                  <p className="text-xs text-gray-500 mb-1">活用例</p>
                  <p className="text-sm text-gray-800 whitespace-pre-line">{item.useCases}</p>
                </div>
              )}
            </div>
          )}

          {crossSellItem && (
            <Link
              href={`/items/${crossSellItem.id}`}
              className="block bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 hover:bg-amber-100 transition-colors"
            >
              <p className="text-sm text-gray-700">
                こちらもご検討ください：
                <span className="ml-1 font-bold text-red-600 underline underline-offset-4">
                  {item.crossSellLabel ?? crossSellItem.name}
                </span>
              </p>
            </Link>
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

          {relatedWorks.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {item.name}の制作事例
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedWorks.map((work) => (
                  <WorkCard key={work.id} work={work} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
