'use client';
import React from "react";
import { CONTACT_FORM_URL } from "../data/contact";
import { sendEvent } from "../lib/analytics";

interface ConsultCTAProps {
  location: string;
  variant?: "primary" | "inline" | "footer";
  showHelperText?: boolean;
  dark?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<ConsultCTAProps["variant"]>, string> = {
  primary:
    "px-8 py-4 rounded-full bg-red-600 text-white text-lg md:text-xl font-bold shadow-md transition-all duration-200 ease-out hover:bg-red-700 hover:scale-105 w-full sm:w-auto min-w-[280px]",
  inline:
    "px-6 py-3 rounded-full bg-red-600 text-white text-base font-bold shadow-md transition-all duration-200 ease-out hover:bg-red-700 hover:scale-105",
  footer:
    "px-8 py-4 rounded-full bg-white text-red-600 text-lg font-bold shadow-md transition-all duration-200 ease-out hover:bg-gray-100 hover:scale-105 w-full sm:w-[340px]",
};

export const ConsultCTA = ({
  location,
  variant = "primary",
  showHelperText = true,
  dark = false,
  className = "",
}: ConsultCTAProps) => {
  const handleClick = () => {
    sendEvent("contact_form_click", { location });
    sendEvent("cta_click", { location });
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a
        href={CONTACT_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={VARIANT_CLASSES[variant]}
      >
        馬主デザイナーに相談する
      </a>
      {showHelperText && (
        <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>
          相談だけでもOK。まだ仕様が決まっていなくても大丈夫です。
        </p>
      )}
    </div>
  );
};

export default ConsultCTA;
