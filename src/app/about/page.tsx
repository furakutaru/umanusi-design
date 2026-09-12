import type { Metadata } from "next";
import Link from "next/link";
import { ProfileImage } from "../../components/ProfileImage";
import { ConsultCTA } from "../../components/ConsultCTA";
import { NOTE_ARTICLES } from "../../data/notes";
import { NOTE_URL } from "../../data/contact";

export const metadata: Metadata = {
  title: "馬主デザイナーについて",
  description:
    "UMANUSI Designを運営する馬主デザイナー・UMAのプロフィール。地方競馬の馬主とデザイナーという2つの視点から、愛馬の記念品や競馬関連グッズの制作をサポートします。",
};

const VALUE_POINTS = [
  {
    title: "アイデアの具現化と提案",
    description:
      "「作りたいけど、何がいいか分からない」というお悩みも解決します。漠然としたイメージを、具体的なデザインに描き起こします。",
  },
  {
    title: "デザイナー馬主の知見",
    description:
      "勝利の物語や愛馬の個性をデザインに落とし込みます。血統背景など、専門知識をデザインに活用し、一般的なデザイナーでは伝わらないニュアンスを形にします。",
  },
  {
    title: "面倒なプロセスを全て代行可",
    description:
      "デザインから印刷会社との連携、納品まで一貫サポート。馬主としての視点から、想いに最適なアイテムをご提案します。",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full pt-20 bg-white">
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <header className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black">馬主デザイナーについて</h1>
            <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
              私も、あなたと同じ一人の馬主です。
            </h2>
          </header>

          <div className="mb-10 md:mb-14 max-w-xs mx-auto">
            <ProfileImage src="/profile.png" alt="馬主デザイナー UMA" />
          </div>

          <div className="text-base md:text-lg text-gray-800 leading-7 md:leading-8 space-y-4 mb-10 md:mb-14">
            <p>勝った馬も、勝てなかった馬も、みんな宝物。</p>
            <p>
              はじめまして、馬主デザイナーのUMAです。このサービスを始めたのは、一般的なデザインでは表現しきれない、競馬の世界特有の「熱量」や「物語」を形にしたかったから。
            </p>
            <p>
              勝負服の色に込められた想いや、一戦一戦のドラマ。その価値を、私はあなたの次くらい理解しています。
            </p>
            <p>
              あなたの愛馬との絆、厩舎の誇りを、唯一無二のデザインへ。一つひとつの想いを丁寧に翻訳し、記憶に残る宝物をお届けすることをお約束します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-14">
            {VALUE_POINTS.map((value) => (
              <div key={value.title} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-black rounded-xl p-6 md:p-8 mb-10 md:mb-14">
            <h3 className="text-xl font-bold text-white mb-4">プロフィール</h3>
            <div className="text-base text-white whitespace-pre-line break-words leading-7">
              2023年地方馬主資格取得、デザイナー。
              <br />
              ダビスタで競馬に触れナリタブライアンや黄金世代に青春を費やしブランクがあったのちウマ娘で復帰。
              <br />
              馬券はからっきしなので応援馬券くらい。現在は共有馬のみ。
              <br />
              夢は一頭持ち、重賞出走、ドバイワールドカップ。
            </div>
          </div>

          <div className="mb-10 md:mb-14">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              noteでのストーリー
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {NOTE_ARTICLES.map((note) => (
                <a
                  key={note.id}
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-600 underline underline-offset-4 hover:text-red-700 transition-colors"
                >
                  {note.title}
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/#note"
                className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4"
              >
                その他の記事も見る
              </Link>
              {" ／ "}
              <a
                href={NOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4"
              >
                noteをフォローする
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <ConsultCTA location="about_page_bottom" />
          </div>
        </div>
      </section>
    </main>
  );
}
