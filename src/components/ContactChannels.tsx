'use client';
import React from "react";
import { CONTACT_FORM_URL, X_URL, X_HANDLE, LINE_URL } from "../data/contact";
import { sendEvent } from "../lib/analytics";

interface ContactChannelsProps {
  variant?: "light" | "dark";
  showFormButton?: boolean;
  className?: string;
}

export const ContactChannels = ({
  variant = "dark",
  showFormButton = true,
  className = "",
}: ContactChannelsProps) => {
  const isLight = variant === "light";
  const textClass = isLight ? "text-white" : "text-gray-800";
  const linkClass = isLight
    ? "underline hover:text-gray-200 transition-colors"
    : "underline hover:text-red-600 transition-colors";

  const handleChatClick = () => {
    sendEvent("chat_open_click", { location: "contact_channels" });
    if (typeof window !== "undefined" && window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <p className={`text-sm ${textClass}`}>
        正式なご相談・制作依頼は問い合わせフォームから。ちょっとした質問はチャットでもお気軽にどうぞ。
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {showFormButton && (
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendEvent("contact_form_click", { location: "contact_channels" })}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 ${
              isLight ? "bg-white text-red-600 hover:bg-gray-100" : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            問い合わせフォーム
          </a>
        )}
        <button
          type="button"
          onClick={handleChatClick}
          className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all hover:scale-105 ${
            isLight
              ? "border-white text-white hover:bg-white/10"
              : "border-red-600 text-red-600 hover:bg-red-50"
          }`}
        >
          チャットで質問する
        </button>
      </div>
      <p className={`text-sm ${textClass}`}>
        または{" "}
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("x_click", { location: "contact_channels" })}
          className={linkClass}
        >
          X（{X_HANDLE}）
        </a>{" "}
        や{" "}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("line_click", { location: "contact_channels" })}
          className={linkClass}
        >
          公式LINE
        </a>{" "}
        でも受け付けております。
      </p>
    </div>
  );
};

export default ContactChannels;
