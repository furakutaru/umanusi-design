import React from 'react';

interface PriceDisplayProps {
  amount: string;
  additionalText?: string;
}

export const PriceDisplay = ({ amount, additionalText }: PriceDisplayProps) => {
  return (
    <span>
      <span className="text-sm">¥</span>
      <span className="text-lg font-bold text-red-600">{amount}</span>
      {additionalText && <span className="text-xs text-gray-500">{additionalText}</span>}
    </span>
  );
}; 