import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  altText: string;
}

export const PortfolioCard = ({ image, title, description, altText }: PortfolioCardProps) => {
  return (
    <div className="relative shrink-0 mx-auto flex flex-col justify-end items-center rounded-lg w-full aspect-[7/4] md:max-w-[700px] md:aspect-[7/4]">
      <Image
        src={image.replace(/\.(png|jpg)$/, '.webp')}
        alt={altText}
        fill
        className="object-cover absolute top-0 left-0 rounded-lg w-full h-full"
        sizes="(max-width: 700px) 100vw, 700px"
        loading="lazy"
      />
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none md:block hidden"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 40%)'
        }}
      />
      <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:z-10 md:w-full md:px-6 md:pb-6 text-left">
        <h3 className="text-2xl font-bold leading-9 text-white mb-1">
          {title}
        </h3>
        <p className="text-base leading-7 text-white">
          {description}
        </p>
      </div>
      <div className="block md:hidden w-full px-4 pt-3 pb-2 bg-neutral-900 rounded-b-lg text-left">
        <h3 className="text-lg font-bold leading-7 text-white mb-1">
          {title}
        </h3>
        <p className="text-sm leading-6 text-white">
          {description}
        </p>
      </div>
    </div>
  );
}; 