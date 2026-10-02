'use client';
import React, { ReactNode } from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const FadeIn = ({ children, delay = 0, className = "", as = "div" }: FadeInProps) => {
  const { ref, isVisible } = useFadeInOnScroll();
  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`fade-in${isVisible ? " is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default FadeIn;
