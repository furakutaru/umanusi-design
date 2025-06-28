import React from "react";

type Props = { number: string };
export const ProcessNumberBadge = ({ number }: Props) => {
  return (
    <div className="z-10 mr-0 text-xl font-bold leading-snug text-white ml-4 md:ml-0">
      <div className="px-5 w-16 h-16 bg-red-600 rounded-full border-2 border-black border-solid flex items-center justify-center">
        {number}
      </div>
    </div>
  );
}; 