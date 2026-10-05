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
            className="inline-block px-8 py-4 rounded-full bg-white text-red-600 text-lg font-bold shadow-md border border-red-600 border-solid transition-all duration-200 ease-out hover:bg-red-600 hover:text-white hover:scale-105"
          >
            制作事例をすべて見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksSection;
