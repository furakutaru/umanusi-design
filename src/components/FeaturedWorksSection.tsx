import React from "react";
import Link from "next/link";
import { FEATURED_WORKS } from "../data/works";
import { WorkCard } from "./WorkCard";

export const FeaturedWorksSection = () => {
  return (
    <section id="portfolio" className="w-full bg-neutral-900 py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">制作実績</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-white">
            これまでのデザイン実績の一部をご紹介します
          </h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURED_WORKS.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition-colors"
          >
            <span className="underline underline-offset-4">制作事例をすべて見る</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksSection;
