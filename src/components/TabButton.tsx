import React, { ReactNode, MouseEventHandler } from 'react';

interface TabButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const TabButton = ({ children, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-base sm:text-base md:text-lg text-xs focus:outline-none transition-all duration-200 ease-out hover:scale-105 w-full md:w-auto
        ${isActive ? 'bg-red-600 text-white' : 'bg-gray-100 text-red-600 hover:bg-red-50'}
      `}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}; 