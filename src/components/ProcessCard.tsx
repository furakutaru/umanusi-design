import React from "react";

interface ProcessCardProps {
  title: string;
  description: string;
}

export const ProcessCard = ({ title, description }: ProcessCardProps) => {
  return (
    <article className="flex flex-col grow shrink-0 items-center px-6 pt-6 pb-6 mt-0 text-black bg-white rounded-lg basis-0 md:min-h-[207px] shadow-[3px_3px_4px_rgba(0,0,0,0.25)] w-fit">
      <h3 className="text-2xl font-semibold leading-none">
        {title}
      </h3>
      <p
        className="mt-6 text-base leading-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </article>
  );
}; 