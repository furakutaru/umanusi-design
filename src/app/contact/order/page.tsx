'use client';
import React, { useState } from "react";
import Link from "next/link";
import { getStoredUtm } from "@/lib/utm";
import { sendEvent } from "@/lib/analytics";

const ITEM_OPTIONS = [
  "名刺",
  "更新できる馬主名刺",
  "トレカ",
  "アクスタ",
  "横断幕",
  "タオル",
  "ぬいぐるみ",
  "ロゴ",
  "蹄鉄盾",
  "Tシャツ",
  "シール・ステッカー",
  "記念冊子",
  "その他",
  "未定・相談したい",
];

const CONTACT_METHOD_OPTIONS = ["メール", "X DM", "LINE", "指定なし"];

const PAYMENT_OPTIONS = ["銀行振込", "PayPay", "PayPal（クレジットカード）", "未定・相談したい"];

const AWARENESS_OPTIONS = [
  "ご紹介（知人・関係者）",
  "インターネット検索",
  "SNS（X, Instagramなど）",
  "その他",
];

export default function OrderFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [awareness, setAwareness] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  const toggleItem = (value: string) => {
    setItems((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleAwareness = (value: string) => {
    setAwareness((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (items.length === 0) {
      setStatus("error");
      return;
    }
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          items,
          contactMethod,
          deadline,
          message,
          paymentMethod,
          awareness,
          agree,
          utm: getStoredUtm(),
        }),
      });

      if (!res.ok) throw new Error("submit_failed");

      sendEvent("contact_form_submit", { form: "order_request" });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <main className="min-h-screen bg-gray-50 pb-20 pt-28">
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">送信しました</h1>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ご依頼ありがとうございます。
            <br />
            内容を確認のうえ、ご記入いただいたメールアドレスへご連絡いたします。
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-red-600 px-8 py-3 text-sm font-bold text-white transition-all duration-200 ease-out hover:scale-105"
          >
            トップページへ戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-28">
      <div className="mx-auto max-w-[600px] px-4">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">制作を依頼する</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          詳しい仕様が決まっていなくても大丈夫です。わかる範囲でご記入ください。
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">
              お名前 <span className="text-red-600">必須</span>
            </span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">
              メールアドレス <span className="text-red-600">必須</span>
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            />
          </label>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">
              ご希望のデザインの種類（複数可） <span className="text-red-600">必須</span>
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {ITEM_OPTIONS.map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={items.includes(option)}
                    onChange={() => toggleItem(option)}
                    className="h-4 w-4"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">ご希望の連絡手段</span>
            <select
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            >
              <option value="">選択してください</option>
              {CONTACT_METHOD_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">希望納期（特になければ空欄可）</span>
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="例）来月のレースまでに"
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">
              ご依頼内容の詳細 <span className="text-red-600">必須</span>
            </span>
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            />
            <span className="text-xs text-gray-500">
              サイズ・枚数などの細かい仕様は、送信後にメールで確認させていただきます。参考資料がある場合はメールでお送りください。
            </span>
          </label>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">お支払い方法</legend>
            {PAYMENT_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option}
                  checked={paymentMethod === option}
                  onChange={() => setPaymentMethod(option)}
                  className="h-4 w-4"
                />
                {option}
              </label>
            ))}
            <span className="text-xs text-gray-500">
              お支払いは商品到着後1週間以内にお願いしております（先払い不要）。
            </span>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">
              UMANUSI Designを何でお知りになりましたか
            </legend>
            {AWARENESS_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={awareness.includes(option)}
                  onChange={() => toggleAwareness(option)}
                  className="h-4 w-4"
                />
                {option}
              </label>
            ))}
          </fieldset>

          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              required
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4"
            />
            <span>
              制作開始後のキャンセルはお受けできないこと、および個人情報の取り扱いに同意する
            </span>
          </label>

          {status === "error" && (
            <p className="text-sm text-red-600">
              {items.length === 0
                ? "ご希望のデザインの種類を1つ以上選択してください。"
                : "送信に失敗しました。お手数ですが時間をおいて再度お試しください。"}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-red-600 py-4 text-base font-bold text-white transition-all duration-200 ease-out hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "submitting" ? "送信中…" : "依頼内容を送信する"}
          </button>
        </form>
      </div>
    </main>
  );
}
