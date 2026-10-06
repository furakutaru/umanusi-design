'use client';
import React from "react";
import Link from "next/link";
import { CONTACT_HUB_PATH } from "../data/contact";
import { sendEvent } from "../lib/analytics";
import { AltContactChannels } from "./AltContactChannels";
import { ConsultHelperText } from "./ConsultHelperText";

interface ConsultCTAProps {
  location: string;
  variant?: "primary" | "inline" | "footer";
  showHelperText?: boolean;
  showAltChannels?: boolean;
  dark?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<ConsultCTAProps["variant"]>, string> = {
  primary:
    "px-8 py-4 rounded-full bg-red-600 text-white text-lg md:text-xl font-bold shadow-md transition-all duration-200 ease-out hover:bg-red-700 hover:scale-105 w-full sm:w-auto min-w-[280px] text-center",
  inline:
    "px-6 py-3 rounded-full bg-red-600 text-white text-base font-bold shadow-md transition-all duration-200 ease-out hover:bg-red-700 hover:scale-105 text-center",
  footer:
    "px-8 py-4 rounded-full bg-white text-red-600 text-lg font-bold shadow-md transition-all duration-200 ease-out hover:bg-gray-100 hover:scale-105 w-full sm:w-[340px] text-center",
};

export const ConsultCTA = ({
  location,
  variant = "primary",
  showHelperText = true,
  showAltChannels = false,
  dark = false,
  className = "",
}: ConsultCTAProps) => {
  const handleClick = () => {
    sendEvent("contact_form_click", { location });
    sendEvent("cta_click", { location });
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Link href={CONTACT_HUB_PATH} onClick={handleClick} className={VARIANT_CLASSES[variant]}>
        馬主デザイナーに相談する
      </Link>
      {showHelperText && (
        <ConsultHelperText className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"}`} />
      )}
      {showAltChannels && <AltContactChannels location={location} tone={dark ? "onDark" : "muted"} />}
    </div>
  );
};

export default ConsultCTA;
