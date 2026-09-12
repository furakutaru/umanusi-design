import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORKS, type Work } from "../../../data/works";
import { WorkCard } from "../../../components/WorkCard";
import { ConsultCTA } from "../../../components/ConsultCTA";

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

const DETAIL_FIELDS: { key: keyof Work; label: string }[] = [
  { key: "background", label: "制作背景" },
  { key: "requestDetail", label: "依頼内容・課題" },
  { key: "deliverables", label: "制作物" },
  { key: "duration", label: "制作期間" },
  { key: "quantity", label: "数量" },
  { key: "useScene", label: "利用場面" },
];

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const work = WORKS.find((w) => w.id === id);
  if (!work) notFound();

  const otherWorks = WORKS.filter((w) => w.id !== work.id).slice(0, 3);

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

          {DETAIL_FIELDS.some((field) => work[field.key]) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {DETAIL_FIELDS.filter((field) => work[field.key]).map((field) => (
                <div key={field.key} className="bg-neutral-800 rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-1">{field.label}</p>
                  <p className="text-sm text-white">{work[field.key]}</p>
                </div>
              ))}
            </div>
          )}

          {work.customerComment && (
            <blockquote className="border-l-4 border-red-600 pl-4 mb-10 text-gray-300 italic">
              {work.customerComment}
            </blockquote>
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
