import type { Metadata } from "next";
import Link from "next/link";
import { CONSULT_FORM_PATH, ORDER_FORM_PATH } from "@/data/contact";
import { ContactChannelCards } from "@/components/ContactChannelCards";

export const metadata: Metadata = {
  title: "ご相談・お問い合わせ",
  description:
    "UMANUSI Designへのご相談・ご依頼はこちらから。まだ仕様が決まっていない段階でもお気軽にどうぞ。",
};

function Card({
  href,
  title,
  description,
  cta,
}: {
  href: string;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border-2 border-red-600 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
    >
      <h3 className="text-xl font-bold text-red-600">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-700">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-red-600 underline">
        {cta}
      </span>
    </Link>
  );
}

export default function ContactHubPage() {
  return (
    <main className="min-h-screen w-full bg-gray-50 pb-20 pt-28">
      <div className="mx-auto max-w-[800px] px-4">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            ご相談・お問い合わせ
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-700">
            「こんなことは可能でしょうか？」という段階でも大歓迎です。
            <br />
            まだ仕様が決まっていなくても構いません。まずはお気軽にご相談ください。
          </p>
        </header>

        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card
            href={CONSULT_FORM_PATH}
            title="まずは相談してみる"
            description="「いくらくらいかかる？」「こんなの作れる？」など、気軽に聞きたい方向けの軽量フォームです。お名前は任意、1分程度で送信できます。"
            cta="相談フォームへ"
          />
          <Card
            href={ORDER_FORM_PATH}
            title="制作を依頼する"
            description="作りたいものがある程度決まっている方向けのフォームです。ご希望のアイテムや納期などをお伺いします。"
            cta="依頼フォームへ"
          />
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900">他の連絡方法</h2>
          <p className="mt-2 text-sm text-gray-600">
            フォーム以外でも、お好きな方法でご連絡いただけます。
          </p>
          <ContactChannelCards />
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-xl font-bold text-gray-900">ご不安な点はありますか？</h2>
          <p className="mt-2 text-sm text-gray-600">
            料金やお支払い、納期などよくあるご質問をまとめています。
          </p>
          <Link
            href="/#faq"
            className="mt-4 inline-block text-sm font-semibold text-red-600 underline"
          >
            よくある質問を見る
          </Link>
        </section>
      </div>
    </main>
  );
}
