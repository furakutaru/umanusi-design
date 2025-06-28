import React from "react";
import { PriceDisplay } from "./PriceDisplay";

interface PriceItemProps {
  productName: string;
  amount: string;
  additionalText?: string;
  className?: string;
}

export const PriceItem = ({
  productName,
  amount,
  additionalText,
  className = ""
}: PriceItemProps) => {
  return (
    <article className={`overflow-hidden flex-1 grow shrink-0 pt-6 bg-white basis-0 w-fit max-md:max-w-full ${className}`}>
      <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
        <h3 className="grow shrink w-[146px]">{productName}</h3>
        <PriceDisplay amount={amount} additionalText={additionalText} />
      </div>
      <div className="border-b border-solid border-gray-200 h-px shrink-0 mt-5 max-md:max-w-full" />
    </article>
  );
}; 