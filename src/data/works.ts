export interface Work {
  id: string;
  image: string;
  title: string;
  description: string;
  featured?: boolean;
  // 以下は判明次第、順次追加していく詳細情報（未設定の場合は詳細ページで非表示）
  background?: string;
  requestDetail?: string;
  deliverables?: string;
  duration?: string;
  quantity?: string;
  useScene?: string;
  customerComment?: string;
}

export const WORKS: Work[] = [
  {
    id: "hasegawa-namecard",
    image: "/item11.webp",
    title: "長谷川厩舎さま名刺",
    description: "船橋競馬の長谷川厩舎さまの名刺を作成させて頂きました",
    featured: true,
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
