import React from "react";
import { CONSULTATION_EXAMPLES, CONSULTATION_FOOTER_NOTE } from "../data/consultations";
import { ConsultCTA } from "./ConsultCTA";

export const ConsultExamplesSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-[900px] mx-auto px-4">
        <header className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black">こんな相談ができます</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
            仕様が決まっていなくても、こんな段階からご相談いただけます
          </h2>
        </header>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CONSULTATION_EXAMPLES.map((example) => (
            <span
              key={example}
              className="px-4 py-2.5 rounded-full bg-gray-100 text-gray-800 text-sm md:text-base"
            >
              「{example}」
            </span>
          ))}
        </div>
        <p className="text-center text-sm md:text-base text-gray-600 mb-8 max-w-xl mx-auto">
          {CONSULTATION_FOOTER_NOTE}
        </p>
        <div className="flex justify-center">
          <ConsultCTA location="consult_examples" />
        </div>
      </div>
    </section>
  );
};

export default ConsultExamplesSection;
