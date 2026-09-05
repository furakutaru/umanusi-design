export type ItemCategory =
  | "memorial"
  | "wear"
  | "business"
  | "other";

export const ITEM_CATEGORY_LABELS: Record<ItemCategory, string> = {
  memorial: "記念・贈答",
  wear: "ウェア・応援",
  business: "馬主活動・ビジネス",
  other: "その他",
};

export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  image?: string;
  description: string;
  tags: string[];
  price?: string;
  priceNote?: string;
  featured?: boolean;
  externalUrl?: string;
}

export const ITEMS: Item[] = [
  // 記念・贈答
  {
    id: "shoe-shield",
    name: "蹄鉄盾",
    category: "memorial",
    image: "/portfolio-south-express-shield.webp",
    description: "実際の蹄鉄を使った記念盾。引退記念・勝利記念にも。",
    tags: ["記念", "引退記念", "勝利記念"],
    price: "20,000〜",
    priceNote: "デザイン代＋製造代",
    featured: true,
  },
  {
    id: "trading-card",
    name: "トレーディングカード",
    category: "memorial",
    image: "/portfolio-age-runner-card.webp",
    description:
      "ホログラム仕様・角丸加工・ポケカ風／ウエハース風など、カード仕様もお任せください。",
    tags: ["記念", "ファンサービス", "配布"],
    price: "10,000〜",
    priceNote: "デザイン代（一種）＋印刷代",
    featured: true,
  },
  {
    id: "acrylic-stand",
    name: "アクリルスタンド",
    category: "memorial",
    image: "/portfolio-firmarpoint-stand.webp",
    description:
      "サイズ自由。馬・騎手・馬主名・レース情報など、掲載要素もご相談で決められます。",
    tags: ["記念", "勝利記念", "インテリア"],
    price: "10,000〜",
    priceNote: "デザイン代＋製造代",
    featured: true,
  },
  {
    id: "victory-photo",
    name: "勝利写真",
    category: "memorial",
    image: "/portfolio-pick-and-roll-photo.webp",
    description: "L版の勝利写真を額装やパネルなどにカスタマイズします。",
    tags: ["記念", "勝利記念"],
    price: "20,000〜",
  },
  {
    id: "memorial-booklet",
    name: "記念冊子",
    category: "memorial",
    description: "愛馬の歩みをまとめた記念冊子を制作します。",
    tags: ["記念", "引退記念"],
    price: "20,000〜",
  },
  {
    id: "plush",
    name: "ぬいぐるみ",
    category: "memorial",
    description:
      "愛馬のオリジナルぬいぐるみも制作可能。サンプル制作→量産の流れで対応します。",
    tags: ["記念", "交流"],
  },

  // ウェア・応援
  {
    id: "tshirt",
    name: "Tシャツ／ポロシャツ",
    category: "wear",
    image: "/item16.webp",
    description: "応援Tシャツ・記念Tシャツなど。デザインから対応します。",
    tags: ["応援", "記念"],
    price: "10,000〜",
    priceNote: "デザイン代＋印刷代",
    featured: true,
  },
  {
    id: "cap",
    name: "キャップ",
    category: "wear",
    image: "/portfolio-sun-or-slice-cap.webp",
    description: "関係者へのプレゼントにも。帽子タイプや刺繍なども選べます。",
    tags: ["応援", "ブランド"],
    price: "15,000〜",
    featured: true,
  },
  {
    id: "towel",
    name: "応援タオル",
    category: "wear",
    image: "/portfolio-luminaval-towel.webp",
    description: "口取り式で馬名を書き込む応援タオルにも。薄手・厚手を用途で選べます。",
    tags: ["応援", "記念"],
    price: "10,000〜",
    priceNote: "デザイン代＋製造代",
    featured: true,
  },
  {
    id: "banner",
    name: "横断幕",
    category: "wear",
    description:
      "入稿から出荷まで最短2日程度。軽い生地もあり、電車での持参にも便利です。競馬場への掲示申請が必要な場合は、デザイン確定後に早めに申請を進められるよう対応します。",
    tags: ["応援", "勝利記念"],
    price: "10,000〜",
    priceNote: "デザイン代＋印刷代",
  },
  {
    id: "tote-bag",
    name: "トートバッグ",
    category: "wear",
    description: "応援グッズやノベルティに。",
    tags: ["応援", "ファンサービス"],
  },
  {
    id: "uchiwa",
    name: "うちわ",
    category: "wear",
    description: "レース観戦時の応援グッズに。",
    tags: ["応援"],
  },

  // 馬主活動・ビジネス
  {
    id: "namecard-custom",
    name: "オーダーメイド名刺",
    category: "business",
    image: "/item11.webp",
    description:
      "愛馬のイラストや勝負服モチーフなど、自分だけのデザインが作れます。追加印刷にも対応しており、修正なしなら印刷実費のみで再注文できます。デザイン変更がある場合は¥1,500程度＋印刷代。",
    tags: ["馬主活動", "ブランド"],
    price: "8,000〜",
    priceNote: "デザイン代＋印刷代（実費）",
    featured: true,
  },
  {
    id: "namecard-updatable",
    name: "更新できる馬主名刺",
    category: "business",
    description:
      "テンプレート式の馬主名刺。QRコードから愛馬情報を常に最新の状態で見てもらえます。馬が増えても引退しても名刺を作り直す必要がありません。UmanusiRewardへの登録が必要です。",
    tags: ["馬主活動", "交流"],
    price: "100枚5,000／200枚5,500／300枚6,000",
    externalUrl: "https://note.com/furakutaru/n/n704c7f94bacc",
  },
  {
    id: "logo",
    name: "馬名／厩舎／牧場ロゴ",
    category: "business",
    image: "/portfolio-horse-logo.webp",
    description:
      "馬名の由来やキャラクター・気性からスローガンまで考案してご提案します。",
    tags: ["ブランド", "馬主活動"],
    price: "30,000〜",
    featured: true,
  },
  {
    id: "print-materials",
    name: "印刷物・販促物",
    category: "business",
    description: "パンフレット、ポスター、チラシ、のぼりなど、目的に応じたデザインを制作します。",
    tags: ["馬主活動", "販促"],
  },
  {
    id: "sns-web",
    name: "SNS用画像・WEBバナー",
    category: "business",
    description: "SNS投稿用画像やWEBサイトのバナーなど、オンラインでの発信を支援します。",
    tags: ["馬主活動", "ブランド"],
  },

  // その他
  {
    id: "sticker",
    name: "シール・ステッカー",
    category: "other",
    description: "ファンサービスやちょっとした配布用にも。",
    tags: ["ファンサービス", "交流"],
    price: "10,000〜",
    priceNote: "デザイン代＋印刷代",
  },
  {
    id: "mug",
    name: "マグカップ",
    category: "other",
    description: "日常使いできるノベルティに。",
    tags: ["日常使い", "交流"],
  },
  {
    id: "badge",
    name: "バッジ",
    category: "other",
    description: "配布用ノベルティの定番です。",
    tags: ["ファンサービス"],
  },
  {
    id: "clear-file",
    name: "クリアファイル",
    category: "other",
    description: "配布・記念どちらにも使いやすいアイテムです。",
    tags: ["ファンサービス", "記念"],
  },
  {
    id: "mochi-mascot",
    name: "もちもちマスコット",
    category: "other",
    description: "手のひらサイズの柔らかいマスコット。",
    tags: ["交流", "日常使い"],
    externalUrl: "https://note.com/furakutaru/n/n8815388819b7",
  },
  {
    id: "handkerchief",
    name: "ハンカチ",
    category: "other",
    description: "日常使いしやすい記念アイテムです。",
    tags: ["日常使い", "記念"],
    externalUrl: "https://note.com/furakutaru/n/n324bc72c4ffe",
  },
];

export const FEATURED_ITEMS = ITEMS.filter((item) => item.featured);
