export interface PriceEntry {
  serviceName: string;
  price: string;
}

export interface PriceCard {
  title: string;
  items: PriceEntry[];
}

export const DESIGN_PRICE_CARDS: PriceCard[] = [
  {
    title: "記念品・メモリアルグッズ",
    items: [
      { serviceName: "蹄鉄盾", price: "20,000〜" },
      { serviceName: "勝利写真", price: "20,000〜" },
      { serviceName: "トレーディングカード（一種）", price: "10,000〜" },
      { serviceName: "記念冊子", price: "20,000〜" },
    ],
  },
  {
    title: "応援グッズ・アパレル",
    items: [
      { serviceName: "横断幕", price: "10,000〜" },
      { serviceName: "Tシャツ／ポロシャツ", price: "10,000〜" },
      { serviceName: "応援タオル", price: "10,000〜" },
      { serviceName: "キャップ", price: "15,000〜" },
      { serviceName: "アクリルスタンド", price: "10,000〜" },
    ],
  },
  {
    title: "ロゴ・デザイン",
    items: [
      { serviceName: "馬名／厩舎／牧場ロゴ", price: "30,000〜" },
      { serviceName: "オーダーメイド名刺", price: "8,000〜" },
    ],
  },
];

export interface PrintPriceEntry {
  productName: string;
  amount: string;
  additionalText: string;
}

export const PRINT_PRICE_EXAMPLES: PrintPriceEntry[] = [
  { productName: "名刺20部両面カラー", amount: "1,050", additionalText: "（送料込み）" },
  { productName: "横断幕90×110cm", amount: "5,845", additionalText: "（送料込み）" },
  {
    productName: "キャッププリント15個",
    amount: "35,000",
    additionalText: "（送料、キャップ代込み）",
  },
  {
    productName: "トレーディングカード1種20枚",
    amount: "1,920",
    additionalText: "（送料込み）",
  },
  {
    productName: "アクリルスタンド5個75×100mm",
    amount: "7,442",
    additionalText: "（送料込み）",
  },
  { productName: "タオル5枚", amount: "7,760", additionalText: "（送料込み）" },
];

export const PRICING_NOTES = [
  "詳細な価格は、デザインの複雑さや数量によって変動する場合があります。お気軽にお問い合わせください。",
  "価格にプラスして印刷代、送料がかかります。",
  "表示価格は全て税込みです。",
  "以下以外もお気軽にご相談ください。",
];

export const PRICING_STRUCTURE_NOTE =
  "料金は「デザイン制作費」と「商品製造費・印刷費・送料」の2つで構成されます。まとめてご依頼いただくと、ロゴを他のアイテムにも転用できるなど効率的に制作でき、パッケージ割引をご提案することもあります。イラストを使用する場合はイラストレーターの選定・手配・ディレクション費用が別途発生します。また特殊な仕様で通常の入稿先が使えない場合など、印刷所の選定にかかるディレクション費をいただく場合があります。";
