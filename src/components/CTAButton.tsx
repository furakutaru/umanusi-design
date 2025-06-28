import React, { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const CTAButton = ({ children, onClick, className = "" }: CTAButtonProps) => {
  return (
    <button
      className={`relative shrink-0 h-[64px] w-[340px] max-sm:w-full max-sm:max-w-[340px] text-xl font-bold rounded-full bg-white text-red-600 transition-all duration-200 ease-out hover:scale-105 shadow-md border border-red-600 border-solid ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}; 