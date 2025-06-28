import React from "react";

interface CheckIconProps {
  className?: string;
}

export const CheckIcon = ({ className = "" }: CheckIconProps) => {
  return (
    <svg 
      className={`w-5 h-5 text-red-500 flex-shrink-0 ${className}`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
    </svg>
  );
}; 