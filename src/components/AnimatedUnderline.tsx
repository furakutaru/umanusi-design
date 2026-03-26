'use client';
import React, { ReactNode } from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface AnimatedUnderlineProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * テキストが画面内に入った時に、左から右へマーカー（アンダーライン）を引くアニメーションコンポーネント。
 */
export const AnimatedUnderline = ({ children, delay = 0, className = "" }: AnimatedUnderlineProps) => {
  const { ref, isVisible } = useFadeInOnScroll(0.1);

  return (
    <span 
      ref={ref as React.RefObject<HTMLSpanElement>} 
      className={`inline transition-all duration-1000 ease-out ${className}`}
      style={{
        backgroundImage: 'linear-gradient(transparent 65%, rgba(220, 38, 38, 0.25) 65%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: isVisible ? '100% 100%' : '0% 100%',
        transitionDelay: `${delay}s`,
        // 複数行に跨ってもきれいに表示されるように
        display: 'inline',
        paddingBottom: '2px'
      }}
    >
      {children}
    </span>
  );
};

export default AnimatedUnderline;
