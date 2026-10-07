'use client';
import React, { useState } from "react";
import Link from "next/link";
import { getStoredUtm } from "@/lib/utm";
import { sendEvent } from "@/lib/analytics";

const AWARENESS_OPTIONS = [
  "ご紹介（知人・関係者）",
  "インターネット検索",
  "SNS（X, Instagramなど）",
  "その他",
];

export default function ConsultFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [awareness, setAwareness] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  const toggleAwareness = (value: string) => {
    setAwareness((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          awareness,
          agree,
          utm: getStoredUtm(),
        }),
      });

      if (!res.ok) throw new Error("submit_failed");

      sendEvent("contact_form_submit", { form: "consult" });
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
            ご相談ありがとうございます。
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
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">まずは相談してみる</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          「こんなことは可能でしょうか？」という段階で構いません。お名前は任意です。
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">お名前（ニックネーム可）</span>
            <input
              type="text"
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

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gray-800">
              お問い合わせ内容 <span className="text-red-600">必須</span>
            </span>
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="例）愛馬の引退記念に何か作りたいが、何がいいか決まっていない"
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-600 focus:outline-none"
            />
          </label>

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
            <span>個人情報の取り扱いに同意する</span>
          </label>

          {status === "error" && (
            <p className="text-sm text-red-600">
              送信に失敗しました。お手数ですが時間をおいて再度お試しください。
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-red-600 py-4 text-base font-bold text-white transition-all duration-200 ease-out hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "submitting" ? "送信中…" : "まずは相談してみる"}
          </button>
        </form>
      </div>
    </main>
  );
}
