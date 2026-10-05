import React from "react";

interface ConsultHelperTextProps {
  className?: string;
}

// 各所の相談CTA直下で共通利用する案内文言（文言・スマホ時の改行位置を統一するため共有）
export const ConsultHelperText = ({ className = "" }: ConsultHelperTextProps) => {
  return (
    <p className={`text-center ${className}`}>
      まだ仕様が決まっていなくても大丈夫です。
      <br className="sm:hidden" />
      まずはお気軽にご相談ください。
    </p>
  );
};

export default ConsultHelperText;
