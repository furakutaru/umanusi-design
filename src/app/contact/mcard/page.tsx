'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getStoredUtm } from "@/lib/utm";
import { sendEvent } from "@/lib/analytics";

const UMANUSI_REWARD_URL = "https://umanusi-reward.onrender.com/";

const ORDER_TYPE_OPTIONS = ["新規ご依頼", "追加のご依頼"] as const;
const REWARD_STATUS_OPTIONS = ["はい", "いいえ"] as const;
const QUANTITY_OPTIONS = [
  { value: "100枚", label: "100枚 — ¥5,000" },
  { value: "200枚", label: "200枚 — ¥5,500" },
  { value: "300枚", label: "300枚 — ¥6,000" },
  { value: "300枚超（要見積）", label: "それ以上（別途お見積り）" },
] as const;
const DELIVERY_OPTIONS = ["郵送", "データ納品（ご自身で入稿）"] as const;
const PAYMENT_OPTIONS = ["銀行振込", "PayPay", "PayPal（クレジットカード）", "未定・相談したい"] as const;

export default function McardFormPage() {
  const [orderType, setOrderType] = useState<string>("");
  const [rewardStatus, setRewardStatus] = useState<string>("");
  const [name, setName] = useState("");
  const [kana, setKana] = useState("");
  const [email, setEmail] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");

  const [listedName, setListedName] = useState("");
  const [listedKana, setListedKana] = useState("");
  const [listedAssociation, setListedAssociation] = useState("");
  const [listedPhone, setListedPhone] = useState("");
  const [listedEmail, setListedEmail] = useState("");
  const [listedSns, setListedSns] = useState("");
  const [listedRewardUrl, setListedRewardUrl] = useState("");

  const [quantity, setQuantity] = useState("");
  const [delivery, setDelivery] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [notes, setNotes] = useState("");
  const [revisionDetails, setRevisionDetails] = useState("");

  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isAdditionalOrder = orderType === "追加のご依頼";
  const isMailDelivery = delivery === "郵送";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!orderType || !rewardStatus || !name || !kana || !email || !quantity || !delivery || !paymentMethod || !agree) {
      setErrorMessage("必須項目をご入力・ご選択ください。");
      setStatus("error");
      return;
    }
    if (isMailDelivery && !mailingAddress) {
      setErrorMessage("郵送をご希望の場合は郵送先住所をご入力ください。");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact/mcard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderType,
          rewardStatus,
          name,
          kana,
          email,
          mailingAddress,
          listedName,
          listedKana,
          listedAssociation,
          listedPhone,
          listedEmail,
          listedSns,
          listedRewardUrl,
          quantity,
          delivery,
          paymentMethod,
          notes,
          revisionDetails: isAdditionalOrder ? revisionDetails : "",
          agree,
          utm: getStoredUtm(),
        }),
      });

      if (!res.ok) throw new Error("submit_failed");

      sendEvent("form_submission_complete", {
        event_category: "engagement",
        event_label: "mcard_order",
      });
      setStatus("done");
    } catch {
      setErrorMessage("送信に失敗しました。お手数ですが時間をおいて再度お試しください。");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <main className="min-h-screen bg-gray-50 pb-20 pt-28">
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">送信しました</h1>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            お申し込みありがとうございます。
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
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">更新できる馬主名刺 お申し込み</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          テンプレート式の名刺に印刷したQRコードから、愛馬情報を常に最新の状態で見せられる商品です。ご利用にはUmanusiRewardへの登録が前提となります。
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">
              ご注文の種類 <span className="text-red-600">必須</span>
            </legend>
            {ORDER_TYPE_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="orderType"
                  required
                  value={option}
                  checked={orderType === option}
                  onChange={() => setOrderType(option)}
                  className="h-4 w-4"
                />
                {option}
              </label>
            ))}
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">
              UmanusiRewardに登録済みですか？ <span className="text-red-600">必須</span>
            </legend>
            <p className="text-xs text-gray-500">
              本商品にはUmanusiRewardへの登録が必要です。
              <a
                href={UMANUSI_REWARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                こちらから登録
              </a>
            </p>
            {REWARD_STATUS_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="rewardStatus"
                  required
                  value={option}
                  checked={rewardStatus === option}
                  onChange={() => setRewardStatus(option)}
                  className="h-4 w-4"
                />
                {option}
              </label>
            ))}
            {rewardStatus === "いいえ" && (
              <p className="mt-1 rounded-lg border border-red-300 bg-red-50 p-3 text-xs leading-5 text-red-700">
                本商品のご利用にはUmanusiRewardへの登録が前提となります。お申し込み前に
                <a
                  href={UMANUSI_REWARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  こちら
                </a>
                から登録をお願いいたします。
              </p>
            )}
          </fieldset>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">
              お名前（本名） <span className="text-red-600">必須</span>
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
              フリガナ <span className="text-red-600">必須</span>
            </span>
            <input
              type="text"
              required
              value={kana}
              onChange={(e) => setKana(e.target.value)}
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

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">
              郵送先住所{isMailDelivery && <span className="text-red-600"> 必須</span>}
            </span>
            <textarea
              required={isMailDelivery}
              rows={3}
              value={mailingAddress}
              onChange={(e) => setMailingAddress(e.target.value)}
              placeholder="データ納品の場合は入力不要です"
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            />
          </label>

          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4">
            <div>
              <h2 className="text-sm font-bold text-gray-900">名刺掲載情報</h2>
              <p className="mt-1 text-xs text-gray-500">掲載が不要な項目は空欄でOKです</p>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-gray-800">名刺に掲載するお名前</span>
              <span className="text-xs text-gray-500">上記ご本人のお名前と同じ場合は空欄でOKです</span>
              <input
                type="text"
                value={listedName}
                onChange={(e) => setListedName(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-gray-800">フリガナ</span>
              <input
                type="text"
                value={listedKana}
                onChange={(e) => setListedKana(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-gray-800">所属馬主会</span>
              <input
                type="text"
                value={listedAssociation}
                onChange={(e) => setListedAssociation(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-gray-800">電話番号</span>
              <input
                type="text"
                value={listedPhone}
                onChange={(e) => setListedPhone(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-gray-800">メールアドレス</span>
              <span className="text-xs text-gray-500">上記ご記入のメールアドレスと同じ場合は空欄でOKです</span>
              <input
                type="text"
                value={listedEmail}
                onChange={(e) => setListedEmail(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-gray-800">SNSアカウント</span>
              <input
                type="text"
                value={listedSns}
                onChange={(e) => setListedSns(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-gray-800">UmanusiReward共有ページURL</span>
              <span className="text-xs leading-5 text-gray-500">
                UmanusiRewardのトップページでシェアボタンを押し、「公開ページを見る」で開いたページのURL（または投稿テキストに表示されているURL）です。
                <br />
                例：https://umanusi-reward.onrender.com/p/KrTxmVkQxugMBl39eh5y0g
              </span>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src="/reward-share-guide.png"
                  alt="UmanusiRewardのシェア画面で「公開ページを見る」を押すとURLが確認できます"
                  width={840}
                  height={744}
                  className="w-full"
                />
              </div>
              <input
                type="text"
                value={listedRewardUrl}
                onChange={(e) => setListedRewardUrl(e.target.value)}
                placeholder="https://umanusi-reward.onrender.com/p/..."
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>
          </div>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">
              枚数 <span className="text-red-600">必須</span>
            </legend>
            {QUANTITY_OPTIONS.map((option) => (
              <label key={option.value} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="quantity"
                  required
                  value={option.value}
                  checked={quantity === option.value}
                  onChange={() => setQuantity(option.value)}
                  className="h-4 w-4"
                />
                {option.label}
              </label>
            ))}
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">
              納品方法 <span className="text-red-600">必須</span>
            </legend>
            {DELIVERY_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="delivery"
                  required
                  value={option}
                  checked={delivery === option}
                  onChange={() => setDelivery(option)}
                  className="h-4 w-4"
                />
                {option}
              </label>
            ))}
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-semibold text-gray-800">
              お支払い方法 <span className="text-red-600">必須</span>
            </legend>
            {PAYMENT_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="paymentMethod"
                  required
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

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">備考・ご要望</span>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            />
          </label>

          {isAdditionalOrder && (
            <label className="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4">
              <span className="text-sm font-semibold text-gray-800">修正内容</span>
              <span className="text-xs text-gray-500">
                大きな修正がある場合は¥1,500程度＋印刷代となります。
              </span>
              <textarea
                rows={4}
                value={revisionDetails}
                onChange={(e) => setRevisionDetails(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
              />
            </label>
          )}

          <label className="flex items-start gap-2 border-t border-gray-200 pt-6 text-sm text-gray-700">
            <input
              type="checkbox"
              required
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4"
            />
            <span>
              制作開始後のキャンセルはお受けできないこと、および
              <Link href="/privacy" className="underline">
                個人情報の取り扱い
              </Link>
              に同意する <span className="text-red-600">必須</span>
            </span>
          </label>

          {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-red-600 py-4 text-base font-bold text-white transition-all duration-200 ease-out hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "submitting" ? "送信中…" : "申し込み内容を送信する"}
          </button>
        </form>
      </div>
    </main>
  );
}
