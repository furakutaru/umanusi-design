import React from "react";

interface ConsultHelperTextProps {
  className?: string;
}

// 各所の相談CTA直下で共通利用する案内文言（文言・スマホ時の改行位置を統一するため共有）
export const ConsultHelperText = ({ className = "" }: ConsultHelperTextProps) => {
  return (
    <p className={`text-center ${className}`}>
      商品・数量・デザイン未定でOK！
      <br />
      「○○号で何か作りたい」だけでも大丈夫です。
    </p>
  );
};

export default ConsultHelperText;
