import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = '', id = '' }: SectionWrapperProps) => {
  return (
    <section id={id} className={`w-full py-16 md:py-20 ${className}`}>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper; 