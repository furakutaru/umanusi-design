export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "ご相談",
    description:
      "お客様のビジョンをお聞かせください。<br />まずはご相談・ご依頼ボタンからか、XのリプライまたはDMでお気軽にご連絡ください。",
  },
  {
    number: "02",
    title: "ヒアリング（1〜2日）",
    description:
      "詳細な要望をお伺いするためのヒアリングを行います。<br />ご希望の内容や予算、納期などをお知らせください。",
  },
  {
    number: "03",
    title: "デザイン制作（3〜7日）",
    description:
      "ヒアリング内容をもとに、オリジナルデザインを制作します。<br />初回は複数案をご提案し、お好みの方向性を確認してから仕上げます。",
  },
  {
    number: "04",
    title: "確認・修正（1〜3日）",
    description:
      "制作したデザインをご確認いただき、必要に応じて修正を行います。<br />ご満足いただけるまで調整いたします。",
  },
  {
    number: "05",
    title: "印刷・製造（3日〜3週間）",
    description:
      "最終デザインが確定したら、印刷・製造に進みます。<br />商品によって期間が異なります。信頼できる業者と連携しています。",
  },
  {
    number: "06",
    title: "お届け",
    description: "完成した商品をお届けします。<br />印刷所から直接お届けする場合もございます。",
  },
];

export const PROCESS_NOTE =
  "上記の日数は目安で確約ではありません。「○月○日の記念日に使いたい」など、希望日がある場合もお気軽にご相談ください。";
