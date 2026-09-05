import React from "react";
import Image from "next/image";
import type { Work } from "../data/works";

export const WorkCard = ({ work }: { work: Work }) => {
  return (
    <article className="flex flex-col bg-neutral-900 rounded-lg overflow-hidden shadow-sm h-full">
      <div className="relative w-full aspect-[7/4]">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-white mb-1">{work.title}</h3>
        <p className="text-sm text-gray-300">{work.description}</p>
      </div>
    </article>
  );
};

export default WorkCard;
