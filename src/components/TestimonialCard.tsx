import React from "react";

interface TestimonialCardProps {
  customer: string;
  testimonial: string;
}

export function TestimonialCard({
  customer,
  testimonial
}: TestimonialCardProps) {
  return (
    <article className="w-[300px] min-w-0 max-w-full h-full flex flex-col">
      <div className="flex flex-col bg-white rounded-xl border-2 border border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] h-full flex-1 pb-6 w-full min-w-0">
        <div className="flex flex-col px-7 pt-8 pb-6 max-md:px-5 flex-1 w-full min-w-0">
          <h3 className="text-xl font-bold leading-snug text-gray-900 break-words w-full min-w-0">
            {customer}
          </h3>
          <blockquote className="mt-4 text-base leading-6 text-gray-700 break-words w-full min-w-0">
            {testimonial}
          </blockquote>
        </div>
      </div>
    </article>
  );
}
