import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, dark = false, className = "" }: SectionHeadingProps) => {
  return (
    <header className={`text-center mb-8 md:mb-12 ${className}`}>
      <h1 className={`text-3xl md:text-4xl font-bold ${dark ? "text-white" : "text-black"}`}>
        {title}
      </h1>
      {subtitle && (
        <h2
          className={`mt-4 text-lg md:text-xl font-semibold ${
            dark ? "text-white" : "text-gray-800"
          }`}
        >
          {subtitle}
        </h2>
      )}
    </header>
  );
};

export default SectionHeading;
