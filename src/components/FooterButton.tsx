import React, { ReactNode, MouseEventHandler } from 'react';
import { ExternalLinkIcon } from './ExternalLinkIcon';

interface FooterButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const FooterButton = ({
  children,
  onClick,
  className = ""
}: FooterButtonProps) => {
  return (
    <a
      href="https://x.com/furakutaru"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <button
        className={`relative shrink-0 h-[64px] w-[340px] max-sm:w-full max-sm:max-w-[340px] transition-all duration-200 ease-out hover:scale-105 group ${className}`}
        type="button"
        onClick={onClick}
      >
        <div className="absolute top-0 left-0 shrink-0 bg-white rounded-full border border-white border-solid h-[64px] w-[340px] max-sm:w-full transition-all duration-200 ease-out" />
        <span className="absolute left-16 h-8 text-base font-semibold leading-8 text-center text-red-600 top-[18px] w-[220px] max-sm:left-2/4 max-sm:w-auto max-sm:-translate-x-2/4 transition-all duration-200 ease-out">
          {children}
        </span>
        <div className="absolute left-[30px] top-[19px] w-7 h-7 flex-shrink-0">
          <ExternalLinkIcon />
        </div>
      </button>
    </a>
  );
};

export default FooterButton; 