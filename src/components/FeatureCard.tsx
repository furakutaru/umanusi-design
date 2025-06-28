import React, { ReactNode } from 'react';

interface FeatureCardProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T, index: number, total: number) => ReactNode;
}

export const FeatureCard = <T,>({ title, items, renderItem }: FeatureCardProps<T>) => {
  return (
    <div className="flex flex-col bg-white border border-gray-300 shadow-md flex-1 h-full rounded-lg overflow-hidden">
      <header className="flex items-center justify-center h-14 px-4 py-2 w-full text-xl md:text-2xl font-bold leading-none text-center text-white bg-red-600">
        {title}
      </header>
      <ul className="flex flex-col flex-1 px-4 py-2 md:py-4 modern-indent feature-list">
        {items.map((item, index) => renderItem(item, index, items.length))}
      </ul>
    </div>
  );
}; 