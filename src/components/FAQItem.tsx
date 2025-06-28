import React, { ReactNode } from "react";
import Image from "next/image";
// import { CheckIcon } from "./CheckIcon";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <article className="flex flex-col gap-1.5 items-start self-stretch px-11 py-6 bg-white rounded-lg border-2 border border-solid shadow-sm max-md:px-8 max-md:py-5 max-sm:gap-2 max-sm:px-5 max-sm:py-4">
      <header className="flex gap-2 items-center max-sm:gap-1.5">
        <Image src="/CheckIcon.svg" width={28} height={28} className="h-7 w-7 self-center object-contain" alt="アイコン" />
        <h3 className="text-2xl font-semibold leading-8 text-gray-900 max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-7">
          {question}
        </h3>
      </header>
      <div className="text-base leading-7 text-gray-700 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-6">
        {answer}
      </div>
    </article>
  );
}; 