import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

interface NoteCardProps {
  imageSrc: string;
  title: string;
  url: string;
}

export function NoteCard({
  imageSrc,
  title,
  url
}: NoteCardProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-full"
    >
      <article className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full overflow-hidden">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-900 flex items-center gap-1 shadow-sm">
            <span className="w-2 h-2 bg-[#2cb696] rounded-full"></span>
            note
          </div>
        </div>
        <div className="flex flex-col p-5 flex-1 justify-between">
          <h3 className="text-base font-bold leading-snug text-gray-900 line-clamp-3 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          <div className="mt-4 flex items-center justify-end text-xs font-medium text-gray-400 group-hover:text-red-500 transition-colors">
            <span>記事を読む</span>
            <ExternalLinkIcon className="w-4 h-4 ml-1 stroke-current" />
          </div>
        </div>
      </article>
    </a>
  );
}
