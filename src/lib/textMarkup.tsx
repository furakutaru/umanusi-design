import React from "react";

// "**強調**" をstrongタグに変換する簡易マークアップ（アイテム説明文などプレーンテキスト向け）
export function renderInlineMarkup(text: string) {
  return text.split(/(\*\*.+?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-bold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}
