import React from "react";

interface PrintPriceCardProps {
  productName: string;
  amount: string;
  additionalText?: string;
}

export const PrintPriceCard = ({ productName, amount, additionalText }: PrintPriceCardProps) => (
  <article className="overflow-hidden flex flex-col bg-white rounded-lg shadow-md border border-gray-200 p-6 h-full">
    <div className="flex flex-col md:flex-col gap-2 flex-1">
      <div className="flex flex-row md:flex-col items-start md:items-start justify-between md:justify-start gap-2 md:gap-0">
        <h3 className="text-base font-semibold text-gray-900 md:mb-2">{productName}</h3>
        <div className="font-bold text-xl text-red-600 md:mb-1 text-right md:text-left">
          <span className="text-sm align-top">¥</span>
          <span>{amount}</span>
          {additionalText && (
            <>
              <br />
              <span className="text-xs text-gray-500">{additionalText}</span>
            </>
          )}
        </div>
      </div>
    </div>
  </article>
); 