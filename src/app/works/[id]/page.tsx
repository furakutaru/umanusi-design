import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORKS, getRelatedWorks } from "../../../data/works";
import { ITEMS } from "../../../data/items";
import { WorkCard } from "../../../components/WorkCard";
import { ExternalLinkIcon } from "../../../components/ExternalLinkIcon";
import { ConsultCTA } from "../../../components/ConsultCTA";
import { AnimatedUnderline } from "../../../components/AnimatedUnderline";
import { StoryGallery } from "../../../components/StoryGallery";

// ストーリー本文の簡易マークアップ:
// **強調** / __アンダーライン強調__（Q&Aと同じ演出） / [[表示テキスト|workのid]] で別事例へリンク
function renderInlineMarkup(text: string) {
  return text
    .split(/(\*\*.+?\*\*|__.+?__|\[\[[^|\]]+\|[a-z0-9-]+\]\])/g)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("__") && part.endsWith("__")) {
        return <AnimatedUnderline key={index}>{part.slice(2, -2)}</AnimatedUnderline>;
      }
      const linkMatch = part.match(/^\[\[([^|\]]+)\|([a-z0-9-]+)\]\]$/);
      if (linkMatch) {
        const [, label, workId] = linkMatch;
        return (
          <Link
            key={index}
            href={`/works/${workId}`}
            className="font-bold text-red-400 underline underline-offset-4 hover:text-red-300"
          >
            {label}
          </Link>
        );
      }
      return part;
    });
}

interface WorkDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return WORKS.map((work) => ({ id: work.id }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const work = WORKS.find((w) => w.id === id);
  if (!work) return {};
  return {
    title: work.title,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const work = WORKS.find((w) => w.id === id);
  if (!work) notFound();

  const relatedItems = ITEMS.filter((item) => item.relatedWorkIds?.includes(work.id));
  const otherWorks = getRelatedWorks(work);

  return (
    <main className="w-full pt-20 bg-neutral-900 min-h-screen">
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <Link href="/works" className="inline-block text-sm text-gray-400 hover:text-white mb-6">
            ← 制作事例一覧に戻る
          </Link>

          <div className="relative w-full aspect-[7/4] rounded-lg overflow-hidden mb-8">
            <Image src={work.image} alt={work.title} fill className="object-cover" priority />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{work.title}</h1>
          <p className="text-base text-gray-300 leading-7 mb-8">{work.description}</p>

          {work.story && (
            <div className="text-base text-gray-200 leading-8 mb-8 space-y-4">
              {work.story
                .split("\n")
                .filter((paragraph) => paragraph.trim() !== "")
                .map((paragraph, index) => {
                  if (paragraph === "[[GALLERY]]") {
                    if (!work.storyImages || work.storyImages.length === 0) return null;
                    return (
                      <StoryGallery
                        key={index}
                        images={work.storyImages}
                        alt={work.title}
                        caption={work.storyImagesCaption}
                      />
                    );
                  }
                  const galleryMatch = paragraph.match(/^\[\[GALLERY:(.+)\]\]$/);
                  if (galleryMatch) {
                    const gallery = work.storyGalleries?.[galleryMatch[1]];
                    if (!gallery) return null;
                    return (
                      <StoryGallery
                        key={index}
                        images={gallery.images}
                        alt={work.title}
                        caption={gallery.caption}
                      />
                    );
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h3
                        key={index}
                        className="text-lg md:text-xl font-bold text-white border-l-4 border-red-600 pl-3 pt-2"
                      >
                        {paragraph.slice(3)}
                      </h3>
                    );
                  }
                  return <p key={index}>{renderInlineMarkup(paragraph)}</p>;
                })}
            </div>
          )}

          {relatedItems.length > 0 && (
            <div className="flex flex-col gap-2 mb-6">
              {relatedItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/items/${item.id}`}
                  className="block bg-neutral-800 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-700 transition-colors"
                >
                  <p className="text-sm text-gray-300">
                    このデザインは
                    <span className="mx-1 font-bold text-red-400 underline underline-offset-4">
                      {item.name}
                    </span>
                    {work.selfInitiated
                      ? work.selfInitiatedLabel ?? "の応用制作です"
                      : "のご依頼です"}
                    （料金・納期の目安はこちら）
                  </p>
                </Link>
              ))}
            </div>
          )}

          {work.noteUrl && (
            <a
              href={work.noteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-red-400 hover:text-red-300 mb-10"
            >
              <span className="underline underline-offset-4">noteで制作の背景を読む</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          )}

          <div className="flex justify-center mb-14">
            <ConsultCTA location="work_detail" dark />
          </div>

          {otherWorks.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 text-center">その他の制作事例</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherWorks.map((w) => (
                  <WorkCard key={w.id} work={w} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
