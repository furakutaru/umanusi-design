export interface Work {
  id: string;
  image: string;
  title: string;
  description: string;
  featured?: boolean;
  // 詳細ページに掲載するストーリー仕立ての本文（複数段落は\nで区切る）
  story?: string;
  // 制作の背景や完成写真など、より詳しい記事がある場合の外部リンク（note等）
  noteUrl?: string;
}

export const WORKS: Work[] = [
  {
    id: "hasegawa-namecard",
    image: "/item11.webp",
    title: "船橋競馬・長谷川剛史調教師「三毛猫厩舎」様｜名刺制作",
    description: "「三毛猫」でブランディングされた厩舎の名刺を、名刺自体が三毛猫に見えるデザインで制作",
    featured: true,
    story:
      "個人の馬主様ではなく、現場のプロである調教師様から直接ご依頼をいただいた事例です。面識もなく、まだ一頭も馬を預かったことのない中、X（旧Twitter）での発信を見て声をかけてくださいました。\n長谷川先生の厩舎は、メンコからジャンパー、ロゴまで「三毛猫」で統一したブランディングを実践されています。開業間もない厩舎にとって、名刺はただの連絡先ではなく「この人に会いたい」「この厩舎に馬を預けたい」と思ってもらう最初の一枚です。\nいただいたオーダーは「可愛い感じで、三毛猫モチーフを入れて」。そこで名刺そのものを三毛猫に見立てたデザインに。表面は三毛猫柄を基調に、裏面へ柄がシームレスにつながり、尻尾までデザインに組み込むことで「名刺＝三毛猫」というコンセプトを一枚で成立させました。フォントは明朝系をベースに少し遊びのある書体を選び、既存のメンコやジャンパー、ロゴとの色味・雰囲気にもなるべく寄せています。\n納品後、長谷川先生からは「しっかりと三毛猫です、可愛く作ってもらって大満足」とのお言葉をいただきました。\nこうしたロゴ・メンコ・馬着・名刺までを一貫したブランディングで支えるのが、UmanusiDesignが目指す形です。",
    noteUrl: "https://note.com/furakutaru/n/n3f8371ff3b73",
  },
  {
    id: "little-lily-towel",
    image: "/item12.webp",
    title: "リトルリリイ号出走記念レイ風タオル",
    description: "フリンジを縫い付けレイ風に",
  },
  {
    id: "sun-or-slice-shield",
    image: "/item13.webp",
    title: "サンオルソーライズ号蹄鉄盾",
    description: "馬名に合わせ朝日が登るイメージで作成",
  },
  {
    id: "oken-duke-card",
    image: "/item14.webp",
    title: "オウケンデューク号トレーディングカード",
    description: "低コストで配布に最適！",
  },
  {
    id: "luminaval-stand",
    image: "/item15.webp",
    title: "ルミナヴァル号アクリルスタンド",
    description: "ジオラマタイプで奥行きのあるアクリルスタンド",
  },
  {
    id: "pick-and-roll-tshirt",
    image: "/item16.webp",
    title: "ピックアンドロール号Tシャツ",
    description: "ツアーTシャツ風に仕上げました",
  },
  {
    id: "horse-logo",
    image: "/portfolio-horse-logo.webp",
    title: "馬名ロゴ",
    description: "オリジナルグッズや出馬予告画像、メンコなどに利用",
  },
  {
    id: "luminaval-towel",
    image: "/portfolio-luminaval-towel.webp",
    title: "ルミナヴァル号フェイスタオル",
    description: "口取り式で掲げたり応援にも使えます",
  },
  {
    id: "age-runner-card",
    image: "/portfolio-age-runner-card.webp",
    title: "エイジランナー号トレーディングカード",
    description: "サインを貰うのにも最適",
  },
  {
    id: "firmarpoint-card",
    image: "/portfolio-firmarpoint-card.webp",
    title: "フェルマーポイント号優勝記念トレーディングカード",
    description: "話題になったゴリアット号のトレーディングカードと同じフォーマットで",
    featured: true,
  },
  {
    id: "firmarpoint-stand",
    image: "/portfolio-firmarpoint-stand.webp",
    title: "フェルマーポイント号優勝記念アクリルスタンド",
    description: "口取り写真をアクリルスタンドに加工することで立体感のある特別な仕上がりに",
    featured: true,
  },
  {
    id: "sun-or-slice-cap",
    image: "/portfolio-sun-or-slice-cap.webp",
    title: "サンオルソーライス号キャップ",
    description: "関係者へのプレゼントにも、帽子タイプや刺繍なども選べます",
  },
  {
    id: "sun-or-slice-stand",
    image: "/portfolio-sun-or-slice-stand.webp",
    title: "サンオルソーライス号重賞出走記念アクリルスタンド",
    description: "台座をゼッケンに、疾走中の写真を使うことで躍動感が有る仕上がりに",
    featured: true,
  },
  {
    id: "south-express-shield",
    image: "/portfolio-south-express-shield.webp",
    title: "サウスエクスプレス号蹄鉄盾",
    description: "蹄鉄は幸運のお守りともしられインテリアにも最適です",
  },
  {
    id: "pick-and-roll-shield",
    image: "/portfolio-pick-and-roll-shield.webp",
    title: "ピックアンドロール号蹄鉄盾",
    description: "デザイン自由度の高い蹄鉄盾",
  },
  {
    id: "pick-and-roll-photo",
    image: "/portfolio-pick-and-roll-photo.webp",
    title: "ピックアンドロール号勝利写真",
    description: "L版の勝利写真をカスタマイズ",
  },
];

export const FEATURED_WORKS = WORKS.filter((work) => work.featured);
