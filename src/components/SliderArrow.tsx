import React, { MouseEventHandler } from 'react';
import Image from "next/image";

interface SliderArrowProps {
  direction: 'left' | 'right';
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: string;
  className?: string;
}

export const SliderArrow = ({ direction, onClick, variant, className = '' }: SliderArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`slider-arrow ${variant ? `slider-arrow-${variant}` : ''} ${className} bg-red-600/60 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-100 shadow-lg`}
      aria-label={direction === 'left' ? '前へ' : '次へ'}
      style={{ width: 48, height: 48 }}
    >
      <Image
        src="/SliderArrow.svg"
        width={48}
        height={48}
        className={direction === 'right' ? 'transform -scale-x-100' : ''}
        alt={direction === 'left' ? '前へ' : '次へ'}
      />
    </button>
  );
};