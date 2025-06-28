import React from "react";
import Image from "next/image";

interface FeatureItemProps {
  iconSrc: string;
  text: string;
}

export const FeatureItem = ({ iconSrc, text }: FeatureItemProps) => (
  <div className="flex items-center gap-2">
    <Image src="/CheckIcon.svg" width={24} height={24} alt="チェック" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
    <span className="text-sm md:text-base text-gray-900">{text}</span>
  </div>
); 