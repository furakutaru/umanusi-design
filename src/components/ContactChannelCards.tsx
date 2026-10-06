'use client';
import React from "react";
import { X_URL, X_HANDLE, LINE_URL } from "../data/contact";
import { CHAT_ENABLED, sendEvent, openChatWidget } from "../lib/analytics";

const LOCATION = "contact_hub";

export const ContactChannelCards = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row">
      <a
        href={X_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendEvent("x_click", { location: LOCATION })}
        className="flex-1 rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-red-600"
      >
        <p className="font-semibold text-gray-900">X DM</p>
        <p className="mt-1 text-xs text-gray-500">普段Xを使っている方に</p>
        <p className="mt-2 text-sm text-red-600 underline">{X_HANDLE}</p>
      </a>

      {CHAT_ENABLED && (
        <button
          type="button"
          onClick={() => {
            sendEvent("chat_open_click", { location: LOCATION });
            openChatWidget();
          }}
          className="flex-1 rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-red-600"
        >
          <p className="font-semibold text-gray-900">サイト内チャット</p>
          <p className="mt-1 text-xs text-gray-500">すぐに聞きたい方に</p>
          <p className="mt-2 text-sm text-red-600 underline">チャットを開く</p>
        </button>
      )}

      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendEvent("line_click", { location: LOCATION })}
        className="flex-1 rounded-xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-red-600"
      >
        <p className="font-semibold text-gray-900">公式LINE</p>
        <p className="mt-1 text-xs text-gray-500">じっくり相談したい方に</p>
        <p className="mt-2 text-sm text-red-600 underline">友だち追加</p>
      </a>
    </div>
  );
};

export default ContactChannelCards;
