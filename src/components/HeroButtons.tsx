import React from "react";
import Link from "next/link";
import { CONTACT_FORM_URL } from "../data/contact";
import { sendEvent } from "../lib/analytics";

export function HeroButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-[90vw] md:w-auto items-center mx-auto">
      <a
        href={CONTACT_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendEvent("contact_form_click", { location: "hero" })}
        className="px-8 py-4 rounded-full bg-red-600 text-white text-lg font-bold shadow-md transition-all duration-200 ease-out hover:bg-white hover:text-red-600 hover:scale-105 min-w-[240px] w-[90%] md:w-auto max-w-full text-center"
      >
        馬主デザイナーに相談する
      </a>
      <Link
        href="/works"
        className="px-8 py-4 rounded-full bg-white text-red-600 text-lg font-bold shadow-md border border-red-600 border-solid transition-all duration-200 ease-out hover:bg-red-600 hover:text-white hover:scale-105 min-w-[240px] w-[90%] md:w-auto max-w-full md:ml-4 text-center"
      >
        制作事例を見る
      </Link>
    </div>
  );
}
