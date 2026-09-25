'use client';
import React, { useState } from "react";
import Image from "next/image";

interface ItemImageGalleryProps {
  images: string[];
  alt: string;
  placeholderText?: string;
  placeholderColorClass?: string;
}

export const ItemImageGallery = ({
  images,
  alt,
  placeholderText,
  placeholderColorClass = "bg-gray-100 text-gray-700",
}: ItemImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-8">
        <div className={`w-full h-full flex items-center justify-center ${placeholderColorClass}`}>
          <span className="text-2xl font-bold text-center px-4">{placeholderText}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-colors ${
                index === activeIndex
                  ? "border-red-600"
                  : "border-transparent hover:border-gray-300"
              }`}
              aria-label={`${alt}の画像${index + 1}を表示`}
              aria-current={index === activeIndex}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemImageGallery;
