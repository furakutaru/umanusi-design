'use client';
import React from "react";
import { X_URL, LINE_URL } from "../data/contact";
import { CHAT_ENABLED, sendEvent, openChatWidget } from "../lib/analytics";

interface AltContactChannelsProps {
  location: string;
  dark?: boolean;
}

export const AltContactChannels = ({ location, dark = false }: AltContactChannelsProps) => {
  const linkClass = `mx-1 underline underline-offset-2 hover:text-red-600 transition-colors ${
    dark ? "text-gray-300 hover:text-red-400" : "text-gray-500"
  }`;

  return (
    <p className={`mt-2 text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>
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
