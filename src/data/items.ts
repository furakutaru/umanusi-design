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
  // 詳細ページでギャラリー表示する複数画像。未指定の場合は image 1枚のみ表示
  images?: string[];
  description: string;
  tags: string[];
  price?: string;
  priceNote?: string;
  leadTime?: string;
  // 以下は判明次第、順次追加していく詳細情報（未設定の場合は詳細ページで非表示）
  printPriceExample?: string;
  specNote?: string;
  useCases?: string;
  featured?: boolean;
  externalUrl?: string;
  // このアイテムに対応する制作事例（src/data/works.ts の id）。詳細ページ下部に表示
  relatedWorkIds?: string[];
}

export const ITEMS: Item[] = [
  // 記念・贈答
  {
    id: "shoe-shield",
    name: "蹄鉄盾",
    category: "memorial",
    image: "/portfolio-south-express-shield.webp",
    description: "実際の蹄鉄を使った記念盾。引退記念・勝利記念にも。",
    tags: ["記念"],
    price: "20,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["sun-or-slice-shield", "south-express-shield", "pick-and-roll-shield"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "trading-card",
    name: "トレーディングカード",
    category: "memorial",
    image: "/portfolio-age-runner-card.webp",
    description:
      "ホログラム仕様・角丸加工・ポケカ風／ウエハース風など、カード仕様もお任せください。",
    tags: ["記念", "ファンサービス"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["oken-duke-card", "age-runner-card", "firmarpoint-card"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "acrylic-stand",
    name: "アクリルスタンド",
    category: "memorial",
    image: "/portfolio-firmarpoint-stand.webp",
    description:
      "サイズ自由。馬・騎手・馬主名・レース情報など、掲載要素もご相談で決められます。",
    tags: ["記念"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["luminaval-stand", "firmarpoint-stand", "sun-or-slice-stand"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "victory-photo",
    name: "勝利写真",
    category: "memorial",
    image: "/portfolio-pick-and-roll-photo.webp",
    description: "L版の勝利写真を額装やパネルなどにカスタマイズします。",
    tags: ["記念"],
    price: "20,000〜",
    relatedWorkIds: ["pick-and-roll-photo"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "memorial-booklet",
    name: "記念冊子",
    category: "memorial",
    image: "/memorial-booklet.webp",
    description: "愛馬の歩みをまとめた記念冊子を制作します。",
    tags: ["記念"],
    price: "20,000〜",
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "plush",
    name: "ぬいぐるみ",
    category: "memorial",
    image: "/plush-horse.webp",
    description:
      "愛馬のオリジナルぬいぐるみも制作可能。サンプル制作→量産の流れで対応します。",
    tags: ["記念", "交流"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
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
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["pick-and-roll-tshirt"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "cap",
    name: "キャップ",
    category: "wear",
    image: "/portfolio-sun-or-slice-cap.webp",
    description: "関係者へのプレゼントにも。帽子タイプや刺繍なども選べます。",
    tags: ["応援", "馬主活動"],
    price: "15,000〜",
    featured: true,
    relatedWorkIds: ["sun-or-slice-cap"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "towel",
    name: "応援タオル",
    category: "wear",
    image: "/portfolio-luminaval-towel.webp",
    description: "口取り式で馬名を書き込む応援タオルにも。薄手・厚手を用途で選べます。",
    tags: ["応援", "記念"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["little-lily-towel", "luminaval-towel"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "banner",
    name: "横断幕",
    category: "wear",
    image: "/banner.webp",
    description:
      "入稿から出荷まで最短2日程度。軽い生地もあり、電車での持参にも便利です。競馬場への掲示申請が必要な場合は、デザイン確定後に早めに申請を進められるよう対応します。",
    tags: ["応援", "記念"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "tote-bag",
    name: "トートバッグ",
    category: "wear",
    image: "/tote-bag.webp",
    description: "応援グッズやノベルティに。",
    tags: ["応援", "ファンサービス"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "uchiwa",
    name: "うちわ",
    category: "wear",
    image: "/uchiwa.webp",
    description: "レース観戦時の応援グッズに。",
    tags: ["応援"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },

  // 馬主活動・ビジネス
  {
    id: "namecard-custom",
    name: "オーダーメイド名刺",
    category: "business",
    image: "/item11.webp",
    description:
      "愛馬のイラストや勝負服モチーフなど、自分だけのデザインが作れます。追加印刷にも対応しており、修正なしなら印刷実費のみで再注文できます。デザイン変更がある場合は¥1,500程度＋印刷代。",
    tags: ["馬主活動"],
    price: "8,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["hasegawa-namecard"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "namecard-updatable",
    name: "更新できる馬主名刺",
    category: "business",
    image: "/namecard-updatable.webp",
    description:
      "テンプレート式の馬主名刺。QRコードから愛馬情報を常に最新の状態で見てもらえます。馬が増えても引退しても名刺を作り直す必要がありません。UmanusiRewardへの登録が必要です。",
    tags: ["馬主活動", "交流"],
    price: "100枚5,000／200枚5,500／300枚6,000",
    externalUrl: "https://note.com/furakutaru/n/n704c7f94bacc",
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "logo",
    name: "馬名／厩舎／牧場ロゴ",
    category: "business",
    image: "/portfolio-horse-logo.webp",
    description:
      "馬名の由来やキャラクター・気性からスローガンまで考案してご提案します。",
    tags: ["馬主活動"],
    price: "30,000〜",
    featured: true,
    relatedWorkIds: ["horse-logo"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "print-materials",
    name: "印刷物・販促物",
    category: "business",
    image: "/print-materials.webp",
    description: "パンフレット、ポスター、チラシ、のぼりなど、目的に応じたデザインを制作します。",
    tags: ["馬主活動"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "sns-web",
    name: "SNS用画像・WEBバナー",
    category: "business",
    image: "/sns-web.webp",
    description: "SNS投稿用画像やWEBサイトのバナーなど、オンラインでの発信を支援します。",
    tags: ["馬主活動"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },

  // その他
  {
    id: "sticker",
    name: "シール・ステッカー",
    category: "other",
    image: "/sticker-set.webp",
    description:
      "配布に最適。関係者のみならずファンにも配布出来る余裕が有ります。\n比較的低コストで記念品入門として人気が有ります。\nお好きな形に出来るダイカットステッカーや基本の丸形、ビックリマンシール風など様々なタイプに対応可能。\nデザインは写真のみならずイラストとも相性◎。イラストレーターさまの活用も選定から依頼まで対応可能です。",
    tags: ["ファンサービス", "交流"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    useCases: "関係者、ファンへの配布",
  },
  {
    id: "mug",
    name: "マグカップ",
    category: "other",
    image: "/mug.webp",
    description: "日常使いできるノベルティに。",
    tags: ["交流"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "badge",
    name: "バッジ",
    category: "other",
    image: "/badge-set.webp",
    description: "配布用ノベルティの定番です。",
    tags: ["ファンサービス"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "clear-file",
    name: "クリアファイル",
    category: "other",
    image: "/clear-file.webp",
    description: "配布・記念どちらにも使いやすいアイテムです。",
    tags: ["ファンサービス", "記念"],
    leadTime: "【ダミー】納期の目安をここに記載します。",
    specNote: "【ダミー】サイズ・素材などの仕様をここに記載します。",
    useCases: "【ダミー】具体的な活用例をここに記載します。",
  },
  {
    id: "mochi-mascot",
    name: "もちもちマスコット",
    category: "other",
    image: "/mochi-mascot.webp",
    description:
      "ぬいぐるみは大ロット・高額でもこのマスコットなら6個から印刷代1個1,605円〜。\n自分用・騎手・調教師・スタッフへの配布など、少人数への贈り物としても現実的なコストで作れます。\n愛馬の写真を頂ければデフォルメしてお作りいたします。",
    tags: ["交流"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    externalUrl: "https://note.com/furakutaru/n/n8815388819b7",
    leadTime: "約20日（受付は3ヶ月に1度）",
    printPriceExample: "6個 ¥9,630",
    specNote: "約7cm、ポリエステル生地",
    useCases: "鞄等につけていつも一緒に。贈答品にも喜ばれます。",
  },
  {
    id: "handkerchief",
    name: "ハンカチ",
    category: "other",
    image: "/handkerchief.webp",
    description:
      "紳士の嗜み、ハンカチちり紙持ちましたか？ まだ？ なればコチラいかがでしょうか？\n日常使いから競馬場へのお供。スーツによく合うアイテムです。\nデザインテイストも選びませんので色々遊べます。\nプリントのみならずワンポイント刺しゅうやタオルハンカチも可能です。",
    tags: ["交流", "記念"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    externalUrl: "https://note.com/furakutaru/n/n324bc72c4ffe",
    leadTime: "デザイン3日〜／印刷10日",
    printPriceExample: "10枚 ¥9,000",
    specNote: "35cm×35cm、綿100%。片面全面プリント（両面不可）",
    useCases: "日常使い、競馬場のお供に。胸ポケットにさしてもおしゃれ。",
  },
];

export const FEATURED_ITEMS = ITEMS.filter((item) => item.featured);
