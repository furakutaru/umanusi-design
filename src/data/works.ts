import { ITEMS } from "./items";

export interface Work {
  id: string;
  image: string;
  title: string;
  description: string;
  featured?: boolean;
  // 詳細ページに掲載するストーリー仕立ての本文（複数段落は\nで区切る）。
  // 画像ギャラリーを挿入したい箇所には "[[GALLERY]]"（単一ギャラリー）または
  // "[[GALLERY:キー名]]"（storyGalleriesの該当キー）とだけ書いた行を入れる。
  // 別の制作事例へのリンクは文中に "[[表示テキスト|workのid]]" と書く
  story?: string;
  // [[GALLERY]] の位置に挿入する画像（初稿案・制作途中の写真など）
  storyImages?: string[];
  storyImagesCaption?: string;
  // [[GALLERY:キー名]] に対応する複数ギャラリー（キー名は自由に命名可）
  storyGalleries?: Record<string, { images: string[]; caption?: string }>;
  // 制作の背景や完成写真など、より詳しい記事がある場合の外部リンク（note等）
  noteUrl?: string;
  // 詳細ページ下部「その他の制作事例」に優先表示するWork id（明示指定。最優先で使われる）
  relatedWorkIds?: string[];
  // 同一オーナー様の別の制作事例をひもづけるための任意キー（例: "owner-sun-or-slice"）
  ownerId?: string;
}

export const WORKS: Work[] = [
  {
    id: "hasegawa-namecard",
    image: "/item11.webp",
    title: "船橋競馬・長谷川剛史調教師「三毛猫厩舎」様｜名刺制作",
    description: "「三毛猫」でブランディングされた厩舎の名刺を、名刺自体が三毛猫に見えるデザインで制作",
    featured: true,
    story:
      "個人の馬主様ではなく、現場のプロである調教師様から直接ご依頼をいただいた事例です。面識もなく、まだ一頭も馬を預かったことのない中、X（旧Twitter）での発信を見て声をかけてくださいました。\n長谷川先生の厩舎は、メンコからジャンパー、ロゴまで「三毛猫」で統一したブランディングを実践されています。開業間もない厩舎にとって、名刺はただの連絡先ではなく「この人に会いたい」「この厩舎に馬を預けたい」と思ってもらう最初の一枚です。\nいただいたオーダーは「可愛い感じで、三毛猫モチーフを入れて」。そこで__名刺そのものを三毛猫に見立てたデザイン__に。表面は三毛猫柄を基調に、裏面へ柄がシームレスにつながり、尻尾までデザインに組み込むことで「名刺＝三毛猫」というコンセプトを一枚で成立させました。フォントは明朝系をベースに少し遊びのある書体を選び、既存のメンコやジャンパー、ロゴとの色味・雰囲気にもなるべく寄せています。\n納品後、長谷川先生からは__「しっかりと三毛猫です、可愛く作ってもらって大満足」__とのお言葉をいただきました。\nこうしたロゴ・メンコ・馬着・名刺までを一貫したブランディングで支えるのが、UmanusiDesignが目指す形です。",
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
    ownerId: "owner-south-express",
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
    title: "サンオルソーライズ号キャップ",
    description: "関係者へのプレゼントにも、帽子タイプや刺繍なども選べます",
    story:
      "初めての個人所有馬でいきなり関東オークス（JPN2）に駒を進めた孝行馬、サンオルソーライズ号。その記念に作ったキャップが、思いがけない「縁」まで運んでくれた事例です。\n\n## ご依頼のきっかけ\nSNSで見つけていただいたのが最初の接点でした。まず蹄鉄盾をご依頼いただき、その後「キャップも作りたい」とご相談をいただきました。オーナーは縁や思い入れを大切にされる方で、担当の厩務員さんや応援してくださるファンの方へのプレゼントとして、全部で15個ほどのご希望でした。\n\n## サンオルソーライズ号のこと\nセリで落札された牝馬で、オーナーにとっては初の個人所有馬。その初めての一頭が重賞に出走してくれたのですから、記念品にも自然と力が入ります。\n\n## 制作のポイント\nキャップの形状、プリントか刺繍か、カラーの選択肢をご提案するところから始めました。デザインは先に制作した蹄鉄盾を踏襲しつつ、キャップの前立てに収まるよう最適化。__同じ馬の記念品として、並べたときに揃う一貫性__を意識しています。馬名から連想した「日の出」のイメージをモチーフに、写真はオーナー様のご希望でゴール前を疾走するシーンを使用しました。\n\n## 完成後のこと\n牧場や関係者の方々にとても好評だったそうです。のちに共通の知人となる方にもキャップを贈ったところ喜んでいただけて、その方がラジオパーソナリティだったご縁で、馬主デザイナーとしてラジオに出演するきっかけにもなりました。オーナーの「縁の輪」に加えていただけた気がした出来事でした。\n\n## その後\nサンオルソーライズ号は故障で現役を退き、口取りでキャップを目にする機会はありませんでしたが、引退記念グッズも制作させていただきました。繁殖に上がり、いずれ産駒が走る日を楽しみにしています。\n\n初の個人所有馬、しかも重賞出走馬のアイテムに携われたことは、私にとっても大きな喜びでした。",
    noteUrl: "https://note.com/furakutaru/n/n19a991eadc18",
    relatedWorkIds: ["sun-or-slice-stand", "sun-or-slice-shield"],
    ownerId: "owner-south-express",
  },
  {
    id: "sun-or-slice-stand",
    image: "/portfolio-sun-or-slice-stand.webp",
    title: "サンオルソーライズ号重賞出走記念アクリルスタンド",
    description: "台座をゼッケンに、疾走中の写真を使うことで躍動感が有る仕上がりに",
    featured: true,
    ownerId: "owner-south-express",
    story:
      "サンオルソーライズ号のキャップなどをお作りしたオーナー様から、次のご依頼をいただきました。エンプレス杯に出走した愛馬の記念アクリルスタンドです。\n\n## ご依頼のきっかけ\n私がSNSに投稿していた別のアクリルスタンドの制作物をご覧になり、「大変素晴らしい出来栄えに見えました」と、同じものをお願いできないかとお声がけをいただきました。__実績の投稿が次のご依頼につながった__、ありがたい流れです。\n\n## いただいた素材とオーダー\nエンプレス杯のレース写真と、鞍上の町田騎手のサインが入った実際のゼッケンの画像を共有いただきました。「レース名のゼッケンを左、馬名のゼッケンを右にして、1枚の土台に」というイメージ、そして撮影時にスマホの影などが写り込んでいるので消してほしい、というご要望でした。\n\n## 制作のポイント①　ゼッケンを土台にする\n検討の結果、ゼッケンを横並びにするレイアウトは難しいと分かり、台座そのものをゼッケンにする形に変更しました。さらに、町田騎手のサインの位置が台座の差し込み穴と重ならないよう配置を調整して、デザインが完成しました。\n\n## 制作のポイント②　写真アクリルスタンドの難所\n写真のアクリルスタンドで一番の難関は切り抜きです。特に馬の尻尾やたてがみは細かく、手間がかかります。\nもうひとつ大事なのが「白抑え」です。アクリルは透明な素材に印刷するため、そのままではインクが透けて発色が悪くなります。そこで裏に白のインクを重ねるのですが、この白の範囲づくりが甘いと、写真の縁から白がはみ出して見えて不格好になります。仕上がりの印象を大きく左右するので、気を使う工程です。\n今回はゴール前の疾走感あふれるシーンを使いましたが、口取り写真をアクリルスタンドにするのもおすすめです。\n\n## 納期への向き合い方\n数量は5個。「熱量が冷めないうちに」というオーナー様のお気持ちを受けて、お急ぎの印刷手配で対応しました。\n\n## オーナー様のお声\n__「とても重厚感のあるシッカリとしたものに仕上げて頂き、どうもありがとうございました！」__\n\n## その後のこと\nアクリルスタンドの制作後、共通の知人のラジオパーソナリティの方に再びお招きいただき、そこで初めてオーナー様とお会いすることができました。制作後はX上でのやり取りも増えていたので、知人には「もう競馬場で会っているものと思っていた」と言われたのですが、同じ日に同じ競馬場で愛馬が走っても、同じレースでもない限り、意外と会わないものなんですよね。",
  },
  {
    id: "south-express-shield",
    image: "/portfolio-south-express-shield.webp",
    title: "サウスエクスプレス号蹄鉄盾",
    description: "蹄鉄は幸運のお守りともしられインテリアにも最適です",
    ownerId: "owner-south-express",
    story:
      "このあと何度もリピート頂いているオーナー様との最初の記念品になったのが、引退したサウスエクスプレス号の蹄鉄盾です。\nSNSで見つけていただいたのがご縁の始まりでした。\n\n## サウスエクスプレス号のこと\n川崎で新馬勝ちを飾ったのち、サラブレッドオークションに出され、オーナー様が落札されました。名古屋競馬へ移って3勝を挙げ、引退。その記念として蹄鉄盾をお作りすることになりました。\n\n## 制作のポイント①　「額」選びの相談から\n当初は2脚分の蹄鉄盾をご希望でしたが、立体額は正方形以外だと選べる種類が極端に少なくなるため、1脚でのご提案に。額はメタル調をご希望でしたが、各種調査のうえ複数の選択肢をご提案し、最終的に白のウッディ調に決まりました。__ご希望をそのまま形にするだけでなく、「できること・できないこと」を先に整理してご提案する__のも大切な仕事だと考えています。\n\n## 制作のポイント②　初稿から仕上げまで\n初稿として5案をご提案しました（ダークな写真ベース、グリーン、ブルー、レッド×ホワイトなど、色もテイストもあえて振り幅をつけています）。その中から白赤ベースに決定。さらに「馬をもっと大きく、馬名は控えめに」と調整し、勝負服の黄色が映える一枚に仕上げました。その後、印刷して額装。\n[[GALLERY]]\n※初稿画像中央のグレーの「U」はダミーです。実際の制作物では、この位置に蹄鉄が入ります。\n\n## UmanusiDesignの蹄鉄盾\n蹄鉄盾は他でも扱われていますが、ベロアの上に蹄鉄を載せる落ち着いた雰囲気のものが多い印象です。UmanusiDesignでは、サイズや額の制約はあるものの、背景デザインを自由にカスタマイズでき、モダンな仕上がりが可能です。\n\n## オーナー様のお声\nサイズは事前にお伝えしていましたが、届いた実物は__「思っていた以上に大きくて、またとても格好良く仕上げて頂き」__と喜んでいただけました。__「ようやく引退した愛馬にも顔向けが出来そうでホッとしております」__という言葉は、制作者として一番うれしい一言でした。",
    storyImages: [
      "/south-express-draft-1.webp",
      "/south-express-draft-2.webp",
      "/south-express-draft-3.png",
      "/south-express-draft-4.png",
      "/south-express-draft-5.png",
    ],
    storyImagesCaption: "実際にご提案した初稿5案",
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
  {
    id: "sun-or-slice-shield-2",
    image: "/sun-or-slice-shield-2-final.webp",
    title: "サンオルソーライズ号蹄鉄盾（2度目のご依頼）",
    description: "ラジオでの出会いから生まれた、同オーナー様からの2度目の蹄鉄盾ご依頼",
    ownerId: "owner-south-express",
    story:
      "## ご依頼のきっかけ\nラジオで共演させていただいた際に、直接お声がけいただきました。ご希望は壁掛けタイプ、メタル調のフレーム。__前回同様、1脚でのご依頼__です。前回のご依頼は[[コチラ|south-express-shield]]。\n\n## 額選びの舞台裏\nメタル調のフレームは条件に合うものがなかなか見つからず、探し回った末にようやく1点だけ発見してご提案しました。蹄鉄を収める関係で、立体額にはある程度の奥行きが必要になります。額をオーダーメイドすることも可能ですが、コストが大きく上がってしまうため、なるべく不要なコストを強いないよう既製品の中から探すようにしています。\n\n## ラフ案5パターン\nデザインは馬名「SUN ALSO RISE」から「日の出」をイメージして展開しました。\nA. ご要望をいただく前に試作していたもの。写真を大胆に使い、シルバーのフレームに映えることを狙った案\nB. アメリカンでちょっとレトロな雰囲気\nC. 水平線から昇る朝日をイメージ\nD. キャップのデザインに寄せて、シンプルにまとめた案\nE. 写真を大きく使い、馬名と血統を半透明で重ねた案\n[[GALLERY:roughs]]\n※画像中央のグレーの「U」はダミーです。実際の制作物では、この位置に蹄鉄が入ります。\nラフをご覧になったオーナー様からは__「どれも素敵なデザインで目移りばかりしています！」__とのお言葉をいただきました。\n\n## Bから絞り込む\nBの方向性をベースに調整したのがB1〜B3です。\n[[GALLERY:bvariants]]\n構図・トリミングの違いを比較検討いただき、B3のレイアウトに決定。最後に馬名の色を、鞍上・町田騎手の勝負服の黄色に合わせて、デザインがFIXしました。\n\n## オーナー様のお声\n__「額縁届きました！素晴らしい出来栄えに仕上げて頂き、どうもありがとうございます！」__",
    storyGalleries: {
      roughs: {
        images: ["/sun-or-slice-shield-2-roughs.webp"],
        caption: "ラフ案5パターン（A〜E）",
      },
      bvariants: {
        images: ["/sun-or-slice-shield-2-b-variants.webp"],
        caption: "Bをベースにした調整案（B1〜B3）",
      },
    },
  },
];

export const FEATURED_WORKS = WORKS.filter((work) => work.featured);

// workのidから決定論的な擬似乱数(0以上1未満)を作る。ビルドの度に結果がぶれないよう、
// Math.randomではなく文字列ハッシュを利用する
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return (Math.abs(hash) % 1000) / 1000;
}

function shuffleBySeed<T>(items: T[], seed: string): T[] {
  return items
    .map((item, index) => ({ item, sortKey: seededRandom(`${seed}-${index}`) }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ item }) => item);
}

function getWorkCategories(work: Work): Set<string> {
  return new Set(
    ITEMS.filter((item) => item.relatedWorkIds?.includes(work.id)).map((item) => item.category)
  );
}

/**
 * 制作事例詳細ページ「その他の制作事例」の選出ロジック。
 * 1. relatedWorkIds（明示指定）があれば最優先
 * 2. 同一オーナー（ownerId一致）
 * 3. 対応アイテムのカテゴリが近いもの
 * 4. 上記で3件に満たない場合はランダム（work.idで決定論的にシャッフル）で補う
 */
export function getRelatedWorks(work: Work, limit = 3): Work[] {
  if (work.relatedWorkIds) {
    return work.relatedWorkIds
      .map((id) => WORKS.find((w) => w.id === id))
      .filter((w): w is Work => Boolean(w))
      .slice(0, limit);
  }

  const picked: Work[] = [];
  const excludeIds = new Set([work.id]);

  if (work.ownerId) {
    for (const w of WORKS) {
      if (picked.length >= limit) break;
      if (w.ownerId === work.ownerId && !excludeIds.has(w.id)) {
        picked.push(w);
        excludeIds.add(w.id);
      }
    }
  }

  if (picked.length < limit) {
    const myCategories = getWorkCategories(work);
    if (myCategories.size > 0) {
      const sameCategoryWorks = shuffleBySeed(
        WORKS.filter((w) => {
          if (excludeIds.has(w.id)) return false;
          const categories = getWorkCategories(w);
          return [...categories].some((c) => myCategories.has(c));
        }),
        work.id
      );
      for (const w of sameCategoryWorks) {
        if (picked.length >= limit) break;
        picked.push(w);
        excludeIds.add(w.id);
      }
    }
  }

  if (picked.length < limit) {
    const rest = shuffleBySeed(
      WORKS.filter((w) => !excludeIds.has(w.id)),
      `${work.id}-fallback`
    );
    for (const w of rest) {
      if (picked.length >= limit) break;
      picked.push(w);
      excludeIds.add(w.id);
    }
  }

  return picked;
}
