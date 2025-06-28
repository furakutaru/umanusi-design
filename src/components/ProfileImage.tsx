import React from "react";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt?: string;
}

export const ProfileImage = ({ src, alt = "Profile image" }: ProfileImageProps) => {
  const webpSrc = src.replace(/\.(png|jpg)$/, '.webp');
  return (
    <div className="w-full h-[250px] md:h-auto overflow-hidden md:overflow-visible border-b-8 md:border-b-0 border-black">
      <Image
        loading="lazy"
        src={webpSrc}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-full md:h-auto object-cover object-top"
      />
    </div>
  );
}; 