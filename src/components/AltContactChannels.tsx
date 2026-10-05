'use client';
import React from "react";
import { X_URL, LINE_URL } from "../data/contact";
import { CHAT_ENABLED, sendEvent, openChatWidget } from "../lib/analytics";

interface AltContactChannelsProps {
  location: string;
  // muted: 白背景向け（グレー） / onDark: 動画・暗背景向け / onLight: 赤背景など濃色背景向け（白文字）
  tone?: "muted" | "onDark" | "onLight";
}

const TONE_TEXT_CLASS: Record<NonNullable<AltContactChannelsProps["tone"]>, string> = {
  muted: "text-gray-500",
  onDark: "text-gray-400",
  onLight: "text-white/90",
};

const TONE_LINK_CLASS: Record<NonNullable<AltContactChannelsProps["tone"]>, string> = {
  muted: "text-gray-500 hover:text-red-600",
  onDark: "text-gray-300 hover:text-red-400",
  onLight: "text-white hover:text-gray-200",
};

export const AltContactChannels = ({ location, tone = "muted" }: AltContactChannelsProps) => {
  const linkClass = `mx-1 underline underline-offset-2 transition-colors ${TONE_LINK_CLASS[tone]}`;

  return (
    <p className={`mt-2 text-xs text-center ${TONE_TEXT_CLASS[tone]}`}>
      お急ぎの方は
      {CHAT_ENABLED && (
        <>
          <button
            type="button"
            onClick={() => {
              sendEvent("chat_open_click", { location });
              openChatWidget();
            }}
            className={linkClass}
          >
            チャット
          </button>
          ・
        </>
      )}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendEvent("line_click", { location })}
        className={linkClass}
      >
        LINE
      </a>
      ・
      <a
        href={X_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendEvent("x_click", { location })}
        className={linkClass}
      >
        X
      </a>
      でもOK
    </p>
  );
};

export default AltContactChannels;
