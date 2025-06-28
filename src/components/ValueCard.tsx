import React from 'react';

interface ValueCardProps {
  title: string;
  items: string[];
  className?: string;
}

const ValueCard = ({ title, items, className = "" }: ValueCardProps) => {
  return (
    <div className={`bg-white/90 rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center w-full h-full md:min-h-[320px] ${className}`}>
      <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-gray-900">
        {title}
      </h3>
      <ul className="text-gray-800 text-base font-medium space-y-2 md:space-y-3 text-left w-full modern-indent">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 text-[2.25rem] flex-shrink-0">・</span>
            <span className="leading-6 md:leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueCard; 