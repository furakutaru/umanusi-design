import React from "react";
import Image from "next/image";

interface SceneCardProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
}

export function SceneCard({
  id,
  imageSrc,
  title,
  description
}: SceneCardProps) {
  return (
    <article className="w-[300px] min-w-0 max-w-full h-full flex flex-col">
      <div className="flex flex-col bg-white rounded-xl border-2 border border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] h-full flex-1 pb-6 w-full min-w-0">
        <div className="w-full h-48 relative">
          <Image
            src={imageSrc.replace(/\.(png|jpg)$/, '.webp')}
            alt={title}
            fill
            className={`object-cover rounded-t-[0.6rem] min-w-0 ${id === 'retirement' ? 'object-top' : ''}`}
            sizes="(max-width: 700px) 100vw, 700px"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col px-7 mt-6 max-md:px-5 flex-1 w-full min-w-0">
          <h3 className="text-xl font-bold leading-snug text-gray-900 break-words w-full min-w-0">
            {title}
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-700 break-words w-full min-w-0">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
} 