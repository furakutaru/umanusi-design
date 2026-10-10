import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "個人情報の取り扱いについて",
  description: "UMANUSI Designにおける個人情報の取り扱いについてご案内します。",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-28">
      <div className="mx-auto max-w-[700px] px-4">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">個人情報の取り扱いについて</h1>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-7 text-gray-700">
          <section>
            <h2 className="text-base font-bold text-gray-900">1. 個人情報の利用目的</h2>
            <p className="mt-2">
              UMANUSI Design（以下「当サービス」）は、お問い合わせ・ご相談・ご依頼・ご注文フォームを通じてお預かりした氏名、メールアドレス、郵送先住所などの個人情報を、以下の目的の範囲内で利用します。
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>お問い合わせ・ご相談・ご依頼・ご注文への対応、確認、ご連絡のため</li>
              <li>制作物の納品（データ納品・郵送）のため</li>
              <li>代金の請求・お支払いに関するご案内のため</li>
              <li>サービス改善を目的とした統計データの作成（個人を特定しない形式）のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900">2. 第三者提供について</h2>
            <p className="mt-2">
              当サービスは、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900">3. 委託先について</h2>
            <p className="mt-2">
              お預かりした個人情報は、フォームの送信処理・データ保管・メール通知のため、Airtable社、Resend社等の外部サービスを利用して管理する場合があります。各社の定める適切なセキュリティ基準のもとで管理されます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900">4. 保管期間</h2>
            <p className="mt-2">
              個人情報は、利用目的の達成に必要な期間に限り保管し、不要となった場合には適切に削除します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900">5. 開示・訂正・削除のご請求</h2>
            <p className="mt-2">
              ご本人からの個人情報の開示・訂正・削除等のご請求については、お問い合わせフォームよりご連絡ください。内容を確認のうえ、速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900">6. その他</h2>
            <p className="mt-2">
              本ページの内容は、必要に応じて予告なく変更する場合があります。変更後の内容は本ページに掲載した時点から効力を生じるものとします。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
