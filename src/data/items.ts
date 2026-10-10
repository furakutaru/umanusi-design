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
  // printPriceExampleの見出しラベル。未指定時は「参考印刷代」（「参考金額」「参考相場」等に変更可）
  printPriceLabel?: string;
  specNote?: string;
  useCases?: string;
  featured?: boolean;
  externalUrl?: string;
  // このアイテムに対応する制作事例（src/data/works.ts の id）。詳細ページ下部に表示
  relatedWorkIds?: string[];
  // 関連する別アイテムへの案内リンク（例：オーダーメイド名刺⇄更新できる馬主名刺）
  crossSellItemId?: string;
  crossSellLabel?: string;
  // 下部CTAのリンク先・ラベルを上書きしたい場合に指定（未指定時は通常の相談フォームへの汎用CTA）
  ctaHref?: string;
  ctaLabel?: string;
  // ご利用の流れ（申し込み前に流れを理解してもらいたい商品向け）
  flowSteps?: { title: string; description: string }[];
  // この商品特有のよくある質問（詳細ページ下部に表示）
  itemFaq?: { question: string; answer: string }[];
}

export const ITEMS: Item[] = [
  // 記念・贈答
  {
    id: "shoe-shield",
    name: "蹄鉄飾り・蹄鉄盾",
    category: "memorial",
    image: "/portfolio-south-express-shield.webp",
    description:
      "頂いた愛馬の蹄鉄、「どう飾ろう」と悩んでいませんか。\n愛馬の写真や血統、レースデータなどを添えた自由度の高いデザインで、大切な思い出を形にします。\n蹄鉄の固定方法は複数ご用意（見た目・耐久性のバランスが良いテグスがおすすめ、ほか針金・虫ピンも対応可）。\n血統情報・父母馬の情報・主な勝ち鞍・生産牧場・生産日・所属厩舎など、載せたい情報を自由に組み合わせてデザインできます。\n愛馬の写真素材をご提供いただき、それを元にデザインします（解像度の高い写真ほど美しい仕上がりになります）。",
    tags: ["記念"],
    price: "20,000〜",
    priceNote: "＋加工賃5,000円〜＋額代2,000円〜＋送料1,000円〜（合計目安 28,000円〜）",
    featured: true,
    relatedWorkIds: ["sun-or-slice-shield", "south-express-shield", "pick-and-roll-shield", "namura-lilac"],
    leadTime: "デザイン3日〜＋作業3日〜",
    specNote:
      "1脚仕様 縦25cm×横27cmの額が基本。2脚以上や他のデザインもご相談可能ですが、2脚以上の横長タイプは対応できる額の種類が限られます",
    useCases: "お部屋や書斎、オフィスのインテリアとして。引退記念・勝利記念のメモリアルに。ギフトとしても。",
  },
  {
    id: "trading-card",
    name: "トレーディングカード",
    category: "memorial",
    image: "/portfolio-age-runner-card.webp",
    description:
      "重賞勝利時にQUOカードを配るのは一口馬主などでも行われ憧れた方も多いのでは？ 当然ながら金券のためコストが高くホログラム不可などデザイン面での制約もありました。\nトレーディングカードなら20枚1,920円〜とぐっと身近なコストで、ホログラム加工の高級感ある一枚に仕上がります。騎手にサインをもらえば、まさにSSR級の一枚に。\nサラブレッドウエハース風、遊☆戯☆王風、ポケカ風など、お好みのテイストに寄せたデザインにも対応します（お任せもOK）。\n愛馬の勝利シーン写真、馬名等プロフィール、主な戦績、調教師・騎手情報、馬主情報やロゴ、レアリティを示すマークなど、載せたい要素を自由に組み合わせられます。（QUOカードも対応可能です）",
    tags: ["記念", "ファンサービス"],
    price: "10,000〜",
    priceNote: "（1種）＋印刷代",
    featured: true,
    relatedWorkIds: ["oken-duke-card", "age-runner-card", "firmarpoint-card", "suivre-card"],
    leadTime: "デザイン3日〜＋印刷5日〜",
    printPriceExample: "1種20枚 ホログラム角丸 ¥1,920（送料込み）※枚数が増えるほど1枚あたりの単価は下がります",
    specNote: "ホログラム加工／角丸仕上げ。上記以外の枚数・仕様もご相談可能",
    useCases:
      "重賞勝利など特別な記念品に、競走馬引退時の関係者への贈り物に、馬主会やオーナーズイベントでのファン交流・会話のきっかけに、調教師・騎手への感謝の贈り物に。",
  },
  {
    id: "acrylic-stand",
    name: "アクリルスタンド",
    category: "memorial",
    image: "/portfolio-firmarpoint-stand.webp",
    description:
      "口取り写真をそのままスタンドにすれば、写真とはひと味違う立体感のある記念品になります。\nゴールシーンの疾走感をそのまま形にするもよし、台座をゼッケンにしたり電光掲示板などを追加しアクリルジオラマとするとその日の記録も同時に残せます。\nゴール前・口取り写真の全体再現など、ご要望に応じて表現方法をご提案します。\nサイズも小さいものからコストはかかりますが30cm以上のものも表現可能です。",
    tags: ["記念"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["luminaval-stand", "firmarpoint-stand", "sun-or-slice-stand"],
    leadTime: "デザイン3日〜＋印刷12日〜",
    printPriceExample: "片面印刷 7.5cm×10cm 5個 ¥3,165（送料込み）",
    specNote: "5cm×5cm〜（サイズが大きくなるほどコストは上がりますが、まとめて作るほど1個あたりの単価は下がります）",
    useCases: "デスクに飾って仕事の合間の癒やしに、厩務員さんへの感謝の贈り物に、勝利や引退記念のメモリアルに。",
  },
  {
    id: "victory-photo",
    name: "記念写真デザイン（勝利写真・口取り写真カスタマイズ）",
    category: "memorial",
    image: "/portfolio-pick-and-roll-photo.webp",
    description:
      "やっと掴んだ一勝を、テプラでの手書き装飾ではなく、きちんとした記念品として残しませんか。初勝利の記念に、重賞の瞬間を際立たせたい時に。\nレース名・日付・馬名・タイム・血統情報などの文字情報の挿入や、勝負服カラーに合わせたデザインコーディネートなど、ご要望に応じて自由度高く仕上げます。\n写真データをお預かりできる場合はより自由度の高いデザインが可能です。\nすでに複数カットが1枚に収まっている現像写真の場合は、レイアウト変更が難しいため、デザインを作成して写真の上に配置する形になります。\n額装なども対応可能です（別途料金）。",
    tags: ["記念"],
    price: "20,000〜",
    relatedWorkIds: ["pick-and-roll-photo"],
    leadTime: "ものによりますがデザイン3日＋現像写真の場合は切り貼りするのに5日程度",
    specNote: "2L判サイズ〜対応",
    useCases:
      "馬生初勝利の記念に、重賞制覇の特別な瞬間を飾る一枚に、厩舎関係者への感謝の贈り物に、引退記念のメモリアルとして。",
  },
  {
    id: "memorial-booklet",
    name: "記念冊子",
    category: "memorial",
    image: "/memorial-booklet.webp",
    description:
      "誕生から引退までの軌跡を、勝利写真・戦績・血統・思い出のエピソードとともに1冊にまとめる記念品です。\n判型・ページ数・表紙加工（ハードカバー／ソフトカバー）など、内容とボリュームに合わせて自由に設計します。",
    tags: ["記念"],
    leadTime: "ご相談時にご案内します（ページ数により変動が大きいため）",
    printPriceLabel: "参考金額",
    printPriceExample: "ご相談時にご案内します（ページ数・部数により大きく変動するため）",
    specNote: "判型・ページ数・部数は自由設計（例：A5判・20ページ〜）",
    useCases: "引退記念・功労馬の記念誌に、生産牧場や厩舎への贈呈品に、馬主仲間へのメモリアルギフトに。",
  },
  {
    id: "plush",
    name: "ぬいぐるみ",
    category: "memorial",
    image: "/plush-horse.webp",
    description:
      "もちもちマスコットよりもサイズ・クオリティにこだわった、本格仕様のオリジナルぬいぐるみです。\nサイズ・素材・毛並みの質感、タグの追加まで細部までこだわれます。",
    tags: ["記念", "交流"],
    leadTime: "一ヶ月〜",
    printPriceLabel: "参考金額",
    printPriceExample: "ご相談時にご案内します（サイズ・ロット数により金額差が大きいため）",
    specNote: "サイズ・素材は自由設計（もちもちマスコットより大きいサイズ帯を想定）",
    useCases: "重賞勝利など記念グッズとして、ファンクラブ・後援会向けグッズに、周年記念など特別な節目に。",
  },

  // ウェア・応援
  {
    id: "tshirt",
    name: "Tシャツ／ポロシャツ",
    category: "wear",
    image: "/item16.webp",
    description:
      "応援グッズの定番。スタンドで揃えて着用すれば一体感が生まれ、遠目からも目立ちます。\n地方競馬の一般戦ならそのまま着て口取りも（ドレスコードの有る所は除く）\nプリント・刺繍どちらも対応。ワンポイント刺繍からフルカラープリントまで幅広く対応可能です。\nSサイズ何枚、Mサイズ何枚といったようなサイズ混じりもOK。",
    tags: ["応援", "記念"],
    featured: true,
    relatedWorkIds: ["pick-and-roll-tshirt"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考相場",
    printPriceExample: "小ロット（10枚前後・1色プリント）で1枚2,000〜3,000円程度が一般的な相場です",
    specNote: "Tシャツ／ポロシャツ、カラー・サイズ展開は選択可能",
    useCases: "厩舎スタッフのユニフォームに、ファンクラブグッズに。",
  },
  {
    id: "cap",
    name: "キャップ",
    category: "wear",
    image: "/portfolio-sun-or-slice-cap.webp",
    description:
      "プリントと刺繍、2つの表現方法からお選びいただけます。\n写真やカラフルなデザインを活かしたい場合はプリント、馬名などシンプルなデザインなら刺繍がおすすめです（刺繍は1色ごとに料金が加算されるため、複雑な写真表現には不向き）。\nニューエラキャップ・メッシュキャップ・ニットキャップなど、多彩な帽子タイプからお選びいただけます。\nカスタマイズ可能箇所は前立部分・両サイド・後頭部（帽子の種類によって対応箇所は異なります）。愛馬のお写真やロゴ、馬名を元にデザインします。",
    tags: ["応援", "馬主活動"],
    price: "15,000〜",
    priceNote: "＋プリント/刺繍代",
    featured: true,
    relatedWorkIds: ["sun-or-slice-cap"],
    leadTime: "デザイン3日＋印刷3日",
    printPriceExample:
      "15個・プリント2箇所の場合 ¥35,145（帽子代・送料込み）※数量が増えるほどお得、プリント箇所が増えるほど費用は上がります",
    specNote: "ニューエラキャップ／メッシュキャップ／ニットキャップ ほか",
    useCases:
      "厩務員さん・スタッフへの感謝の贈り物に、馬主仲間との記念品に、ファン向けグッズに、レース当日のチーム統一アイテムに、勝利記念品として。",
  },
  {
    id: "towel",
    name: "応援タオル",
    category: "wear",
    image: "/portfolio-luminaval-towel.webp",
    description:
      "夏場は応援のみならず実用的なアイテムです。口取り時に掲げると口取り写真がより記念の一枚に。\n昇華転写プリントなら1枚から製作可能。化繊タオルとの相性が良く洗濯耐性も高いため、記念品として長くお使いいただけます。\n昇華転写を中心にご提案していますが、刺繍やジャガード織りなど、ご要望に応じて他の加工方法もご相談いただけます。\n写真や細かいイラストの表現にも対応。愛馬のカラーやお名前を元にオリジナルデザインをお作りいたします。",
    tags: ["応援", "記念"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["luminaval-towel", "namura-lilac"],
    leadTime: "デザイン制作3日＋印刷約15日（計18日程度）",
    printPriceExample: "昇華転写5枚 ¥7,760（タオル代・送料込み）※枚数が増えるほど1枚あたりの単価はお安くなります",
    specNote:
      "フェイスタオル 約34cm×80cm（おすすめ／競馬場での携帯性・実用性◎）\nタオルマフラー 約20cm×110cm（首に巻いて応援、勝利時に掲げるのにも）",
    useCases: "スタンドからの応援に、口取り写真の記念アイテムに、馬主仲間や厩務員さんへの贈り物にも喜ばれます。",
  },
  {
    id: "lei-towel",
    name: "レイ風マフラータオル",
    category: "wear",
    image: "/item12.webp",
    description:
      "ウマ娘のグッズやプライズなどで見たことがあるかもしれない、優勝馬の首にかけるレイを模したマフラータオルです。市場を調べてみましたが対応している印刷所が見当たらず、フリンジ（房）を別途調達して手作業で縫い付けるという手法でオリジナルに開発しました。\n通常、レイは優勝馬にのみ着用が許されるものですが、こちらは**「出走記念」としても作成可能**なのが特徴です。もちろん優勝記念としても、レイの無いシンプルな一般戦仕様のタオルとしても作れるので、汎用性の高いアイテムです。\nタオルとしての実用性はそのままに、応援グッズとしても活躍します。レース名をあえて入れず「優勝」とだけ入れておけば、口取りの際に実際にレイとして愛馬へかけるという使い方もできます。",
    tags: ["記念", "応援"],
    price: "10,000",
    priceNote: "＋加工賃3,000円＋印刷代",
    relatedWorkIds: ["little-lily-towel"],
    leadTime: "約15日（お急ぎの場合はご相談ください、納期により料金変動あり）",
    printPriceExample: "片面カラー2枚 ¥3,470（フリンジ代・加工賃込みで合計目安16,470円程度）",
    specNote: "レイ風にフリンジを縫い付けたオリジナルマフラータオル。出走記念・優勝記念・一般戦、いずれの用途にも対応",
    useCases:
      "重賞・一般戦問わず出走記念に、優勝記念に、共有オーナー間の記念配布に、口取り時にレイとして使用するのもおすすめです。",
  },
  {
    id: "banner",
    name: "横断幕",
    category: "wear",
    image: "/banner.webp",
    description:
      "中央競馬では横断幕の掲示が休止されていますが、地方競馬では今も掲示が可能です。\n推し馬・推し騎手・推し厩舎への応援を、華やかに、ときにはクスッとくるユニークな一枚で形にしませんか。\n視認性の高い色使い（赤・黄色などの原色）、太めのゴシック体、愛馬の特徴を捉えたイラスト、語呂の良いキャッチフレーズなど、遠くからでも目に留まるデザインをご提案します。\n生地はターポリン（発色が良く丈夫、雨風に強いがやや重い）とトロマット（軽くてしなやか、色味はやや控えめ）の2種類からお選びいただけます。\n※応援目的から外れる内容や誹謗中傷、著作権侵害にあたるデザインは掲載不可となる場合があります。",
    tags: ["応援", "記念"],
    price: "10,000〜",
    priceNote: "＋印刷代",
    relatedWorkIds: ["namura-lilac"],
    leadTime: "デザイン3日〜＋印刷7日〜",
    printPriceExample: "横断幕90cm×110cm ¥5,845（送料込み）※サイズが大きくなるほどコストは上がります",
    specNote:
      "縦1m×横3m以内が目安（競馬場ごとに規定が異なるため事前確認推奨）。正方形（1m×1m）などもOK。固定用の紐は1本1m〜・太さ3mm程度が目安",
    useCases: "推し馬・推し騎手・推し厩舎への「推し活」に、地方競馬場でのレース観戦に。",
  },
  {
    id: "tote-bag",
    name: "トートバッグ",
    category: "wear",
    image: "/tote-bag.webp",
    description:
      "日常に「推し」を持ち歩ける、普段使いしやすいアイテムです。\nプリント位置（片面／両面）、生地の色・素材を選択可能。\nA4が入るサイズからミニサイズ等サイズ展開も可能。\n競馬場行くとき割と荷物あるんですよね…",
    tags: ["応援", "ファンサービス"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考相場",
    printPriceExample: "小ロットで1枚1,000〜1,500円程度が一般的な相場です",
    specNote: "素材・サイズ・持ち手の長さなど選択可能",
    useCases: "普段使いのグッズとして、来場時の荷物入れに、ファンへの配布グッズに。",
  },
  {
    id: "uchiwa",
    name: "うちわ（扇子）",
    category: "wear",
    image: "/uchiwa.webp",
    description:
      "夏場のレース観戦の必需品。応援にも実用にも使える、季節感のあるグッズです。\nパドックや返し馬時にパタパタ見せるのはお馬が驚く可能性があるのでおすすめはしませんが、掲げる感じであればアイドルのコンサートのようにも使えるかも？\nうちわ・扇子から選択、両面フルカラー印刷にも対応。",
    tags: ["応援"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考相場",
    printPriceExample: "うちわで1本300〜500円程度が一般的な相場です（扇子はやや高め）",
    specNote: "うちわ（一般的なサイズ）／扇子、両面フルカラー対応",
    useCases: "夏場のレース観戦グッズに、イベントでの配布アイテムに、応援団のノベルティに。",
  },

  // 馬主活動・ビジネス
  {
    id: "namecard-custom",
    name: "オーダーメイド馬主名刺",
    category: "business",
    image: "/item11.webp",
    description:
      "馬主用名刺は無くても困りませんが、馬主会やイベントでの交流、調教師や厩舎関係者とのコミュニケーションのきっかけとして、専用の名刺があると会話が弾みます。競馬ならではのユニークなデザインは、調教師さんに渡しても面白がってもらえるアイスブレイクになります。\nSNSのQRコードを入れれば、その場でフォローしてもらえます。所有馬を裏面に記載したり、メモ欄にする方も多いですが頭数が多いと大変、引退や追加で情報の鮮度が落ちるというネックが有ります。\n他所のテンプレートではなかなか競馬・馬モチーフは有りませんが馬主デザイナーならおまかせあれ！",
    tags: ["馬主活動"],
    price: "8,000〜",
    priceNote: "＋印刷代",
    featured: true,
    relatedWorkIds: ["hasegawa-namecard"],
    crossSellItemId: "namecard-updatable",
    crossSellLabel: "更新できる馬主名刺",
    leadTime: "デザイン3日〜＋印刷3日〜",
    printPriceExample: "100部 両面カラー ¥680〜（送料込み）※片面のみ・片面モノクロなどもご相談可能",
    specNote: "完全オーダーメイドデザイン。100部以上や仕様変更にも対応",
    useCases: "馬主会・オーナーズイベントでの交流に、調教師・厩舎関係者への挨拶に、同じ趣味を持つ馬主同士の会話のきっかけに。",
  },
  {
    id: "namecard-updatable",
    name: "更新できる馬主名刺",
    category: "business",
    image: "/namecard-updatable.webp",
    description:
      "愛馬は増えたり減ったりするもの。オーダーメイドの名刺だと、馬を購入したり引退させたりするたびに印刷し直しが必要になってしまいます。\n「更新できる馬主名刺」なら、名刺自体はそのままに、QRコードの先の情報だけを常に最新の状態に保てます。\n表面には氏名・連絡先・所属馬主会・SNSなど、馬主ご本人の基本情報を掲載。裏面には「愛馬一覧はこちら」のQRコードを大きく配置します。読み取ると、UmanusiRewardの共有ページで通算成績・年間成績・勝率・現在の所有馬から引退馬まで、その時点の最新情報を確認できます。",
    tags: ["馬主活動", "交流"],
    price: "5,000〜",
    priceNote: "印刷代込み（テンプレート式）",
    externalUrl: "https://note.com/furakutaru/n/n704c7f94bacc",
    crossSellItemId: "namecard-custom",
    crossSellLabel: "オーダーメイド馬主名刺",
    leadTime: "デザイン1日＋印刷3日〜",
    printPriceExample: "100枚¥5,000／200枚¥5,500／300枚¥6,000　※それ以上の枚数は別途お見積り",
    specNote:
      "テンプレート式（表：本人情報／裏：愛馬一覧QRコード）。ご自身での入稿データ納品も可能（その場合の値引きはなし。データの改変・再配布・商用利用は不可）\n※ご利用にはUmanusiReward（https://umanusi-reward.onrender.com/）への事前登録が必要です。テンプレート編集型のため、プロフィールの差し替え・情報の削除以外のデザイン変更（レイアウト変更等）には対応していません。",
    useCases: "手軽に馬主名刺を持ちたい方に、所有馬の増減が多い方に、馬主会やイベントでその場で最新の所有馬情報を共有したい時に。",
    ctaHref: "/contact/mcard",
    ctaLabel: "更新できる馬主名刺を申し込む",
    flowSteps: [
      {
        title: "UmanusiRewardに登録",
        description:
          "未登録の場合は、先にUmanusiReward（https://umanusi-reward.onrender.com/）へ登録し、愛馬情報を入力しておきます。",
      },
      {
        title: "申し込みフォームを送信",
        description:
          "専用フォームから、掲載する情報（お名前・所属馬主会など）と、UmanusiRewardの「共有ページURL」をお送りいただきます。",
      },
      {
        title: "テンプレートに反映して制作",
        description:
          "いただいた情報をテンプレートに反映し、QRコードを設定します。内容に不明点があればメールでご確認します。",
      },
      {
        title: "お届け",
        description:
          "データ納品またはご指定の住所へ郵送します。以降、愛馬情報が変わってもUmanusiReward側を更新するだけでQRコードの先は常に最新の状態になります。",
      },
    ],
    itemFaq: [
      {
        question: "「共有ページURL」とは何ですか？UmanusiRewardにログインした後のマイページのURLとは違うのですか？",
        answer:
          "異なります。マイページ（ダッシュボード）のURLは本人専用の管理画面で、他の人がアクセスしても情報は見られません。名刺のQRコードに使う「共有ページURL」は、UmanusiRewardのトップページにあるシェアボタンから「公開ページを見る」を押したときに開く、誰でも閲覧できる公開用のページのURLです（シェア投稿文に表示されるURLと同じものです）。フォームにはこちらのURLをご入力ください。わからない場合は空欄のままお送りいただいても構いません。折り返しご連絡のうえ確認いたします。",
      },
      {
        question: "完成前にデザインのイメージを確認できますか？",
        answer:
          "本商品はレイアウトがあらかじめ決まったテンプレート式の商品のため、お一人おひとりへの事前の完成見本確認（校正）の工程は設けておりません。実際のデザインはこのページ上部の写真をご参照ください。入力いただいた情報をそのままテンプレートに反映してお作りします。もし完成後に修正が必要な場合は、「追加のご依頼」として再度フォームからご連絡いただければ対応いたします（目安¥1,500程度＋印刷代）。",
      },
    ],
  },
  {
    id: "logo",
    name: "馬名／厩舎／牧場ロゴ",
    category: "business",
    image: "/portfolio-horse-logo.webp",
    description:
      "愛馬名・厩舎名・牧場名・騎手名など、あなただけのオリジナルロゴをお作りします。メンコや記念品への刻印から、SNSでの展開まで、一貫したブランディングの土台になります。\n中途半端な装飾ではなく、きちんと設計されたロゴは「この馬といえば」という印象を強く残します。\n馬名の由来や理念をしっかりヒアリングした上で、血統や特徴、勝負服カラーなど様々な要素を取り入れてデザインします。シンプルながら個性的で、長く使えるタイムレスなデザインを意識しています。",
    tags: ["馬主活動"],
    price: "30,000〜",
    featured: true,
    relatedWorkIds: ["horse-logo", "namura-lilac"],
    leadTime: "3日〜",
    specNote:
      "納品データ：印刷用高解像度データ／Web用データ／透過PNG／ベクターデータ（AI・EPS形式）\nデザインのみのご提供（印刷や加工が必要な場合は別途印刷代がかかります）",
    useCases:
      "メンコ等の装具に。キャップ・Tシャツ・タオル・マグカップなどの記念品に、SNSのプロフィール画像やヘッダーに、名刺やステッカー、厩舎の看板・ドアプレートにも。",
  },
  {
    id: "print-materials",
    name: "印刷物・販促物",
    category: "business",
    image: "/print-materials.webp",
    description:
      "馬主会・イベント・厩舎の周年行事などで使う紙媒体を幅広く対応します。\n用途に応じてパンフレット、ポスター、リーフレット、のぼりなど、必要な媒体をご提案します。",
    tags: ["馬主活動"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考金額",
    printPriceExample: "ご相談時にご案内します（種類・サイズ・部数により大きく異なるため）",
    specNote: "種類・サイズ・部数は用途に応じてご提案",
    useCases: "馬主の集まりやイベントの配布資料に、厩舎の紹介パンフレットに、応援用のぼりに。",
  },
  {
    id: "sns-web",
    name: "SNS用画像",
    category: "business",
    image: "/sns-web.webp",
    description:
      "プロフィール画像・ヘッダー・投稿用画像など、SNS展開に使える画像デザインです。印刷を伴わないため、データ納品のみで完結します。\n勝利報告用テンプレート、プロフィール用アイコン、ヘッダー画像など、用途に応じてデザインします。",
    tags: ["馬主活動"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考相場",
    printPriceExample: "1点あたり5,000円程度が目安です（デザインの複雑さにより変動）",
    specNote: "データ納品のみ（印刷は伴いません）",
    useCases: "XやInstagramのプロフィール・ヘッダーに、勝利報告の投稿用画像に、SNS運用の統一感づくりに。",
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
    description:
      "日常使いの中で愛馬を身近に感じられる、実用性の高い記念品です。\nフルカラー印刷対応、写真やイラストの表現にも対応。\n印刷所によっては縁が発生してしまったりしますのでデザインを合わさせていただきます。\n毎日愛馬を感じられるアイテムです。陶器製、プラ製などもお選び頂けます。",
    tags: ["交流"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考相場",
    printPriceExample: "小ロットで1個1,500〜2,500円程度が一般的な相場です",
    specNote: "一般的なマグカップサイズ（容量300ml前後）、フルカラー対応",
    useCases: "普段使いの記念品に、厩舎関係者への贈り物に、馬主仲間へのちょっとしたギフトに。",
  },
  {
    id: "badge",
    name: "バッジ",
    category: "other",
    image: "/badge-set.webp",
    description:
      "手軽なコストで作れる、配布用の定番アイテムです。サイズ展開が豊富で、複数デザインを同時に作りやすいのも特徴です。\nアパレルほどファッションを限定せず胸元や、鞄等につけてチーム感を出す事が可能。サイズも大中小、形も定番の丸型からスクエアタイプ、星型などもございます。",
    tags: ["ファンサービス"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考相場",
    printPriceExample: "小ロット（20〜50個程度）で1個150〜300円程度が一般的な相場です（サイズにより変動）",
    specNote: "直径32mm〜76mm程度、複数サイズから選択可能",
    useCases: "イベントでの配布グッズに、ファンへのちょっとしたプレゼントに、複数デザインを揃えたコレクショングッズに。",
  },
  {
    id: "clear-file",
    name: "クリアファイル",
    category: "other",
    image: "/clear-file.webp",
    description:
      "実用性が高く、配布用グッズとしても定番のアイテムです。表裏フルカラー印刷、写真やイラストの自由なレイアウトに対応。\nビジネスシーンでも使えるアイテム、透明のみみたいな社内ルールがなければですが…\n書類を渡す時のアイスブレイクになること請け合いです！",
    tags: ["ファンサービス", "記念"],
    leadTime: "ご相談時にご案内します",
    printPriceLabel: "参考相場",
    printPriceExample: "小ロットで1枚100〜200円程度が一般的な相場です",
    specNote: "A4サイズが一般的（他サイズもご相談可）",
    useCases: "イベントでの配布グッズに、書類整理用の実用アイテムとして、ファンへのノベルティに。",
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
