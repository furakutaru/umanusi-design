import { NextResponse } from "next/server";
import { AIRTABLE_TABLE_MCARD, createAirtableRecord, nowInJST } from "@/lib/airtable";
import { sendConfirmationMail, sendNotificationMail } from "@/lib/mail";

const ORDER_TYPE_MAP: Record<string, string> = {
  新規ご依頼: "新規作成",
  追加のご依頼: "更新・差し替え",
};

const REWARD_STATUS_MAP: Record<string, string> = {
  はい: "登録済み",
  いいえ: "未登録",
};

export async function POST(req: Request) {
  let body: {
    orderType?: string;
    rewardStatus?: string;
    name?: string;
    kana?: string;
    email?: string;
    mailingAddress?: string;
    listedName?: string;
    listedKana?: string;
    listedAssociation?: string;
    listedPhone?: string;
    listedEmail?: string;
    listedSns?: string;
    listedRewardUrl?: string;
    quantity?: string;
    delivery?: string;
    paymentMethod?: string;
    notes?: string;
    revisionDetails?: string;
    agree?: boolean;
    utm?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const {
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
    revisionDetails,
    agree,
    utm,
  } = body;

  if (
    !orderType ||
    !rewardStatus ||
    !name ||
    !kana ||
    !email ||
    !quantity ||
    !delivery ||
    !paymentMethod ||
    !agree
  ) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  if (delivery === "郵送" && !mailingAddress) {
    return NextResponse.json({ ok: false, error: "missing_mailing_address" }, { status: 400 });
  }

  const receivedAt = nowInJST();

  const fields: Record<string, unknown> = {
    注文ラベル: `${name}_${receivedAt.slice(0, 10)}`,
    受付日時: receivedAt,
    注文区分: ORDER_TYPE_MAP[orderType] || orderType,
    UmanusiReward登録状況: REWARD_STATUS_MAP[rewardStatus] || rewardStatus,
    氏名: name,
    "フリガナ（本人）": kana,
    メール: email,
    希望枚数: quantity,
    納品方法: delivery,
    お支払い方法: paymentMethod,
    ステータス: "新規",
  };

  if (mailingAddress) fields["郵送先住所"] = mailingAddress;
  if (listedName) fields["掲載_お名前"] = listedName;
  if (listedKana) fields["掲載_フリガナ"] = listedKana;
  if (listedAssociation) fields["掲載_所属馬主会"] = listedAssociation;
  if (listedPhone) fields["掲載_電話番号"] = listedPhone;
  if (listedEmail) fields["掲載_メールアドレス"] = listedEmail;
  if (listedSns) fields["掲載_SNSアカウント"] = listedSns;
  if (listedRewardUrl) fields["掲載_UmanusiReward共有ページURL"] = listedRewardUrl;
  if (notes) fields["備考・ご要望"] = notes;
  if (revisionDetails) fields["修正内容"] = revisionDetails;
  if (utm) fields["流入元"] = utm;

  try {
    await createAirtableRecord(
      AIRTABLE_TABLE_MCARD,
      fields,
      process.env.AIRTABLE_MCARD_BASE_ID
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "airtable_error" }, { status: 502 });
  }

  await sendNotificationMail(
    `【UMANUSI Design】更新できる馬主名刺の申し込み：${name}様`,
    [
      `受付日時: ${receivedAt}`,
      `注文区分: ${ORDER_TYPE_MAP[orderType] || orderType}`,
      `UmanusiReward登録状況: ${REWARD_STATUS_MAP[rewardStatus] || rewardStatus}`,
      `お名前: ${name}`,
      `フリガナ: ${kana}`,
      `メール: ${email}`,
      mailingAddress ? `郵送先住所: ${mailingAddress}` : null,
      listedName ? `掲載_お名前: ${listedName}` : null,
      listedKana ? `掲載_フリガナ: ${listedKana}` : null,
      listedAssociation ? `掲載_所属馬主会: ${listedAssociation}` : null,
      listedPhone ? `掲載_電話番号: ${listedPhone}` : null,
      listedEmail ? `掲載_メールアドレス: ${listedEmail}` : null,
      listedSns ? `掲載_SNSアカウント: ${listedSns}` : null,
      listedRewardUrl ? `掲載_UmanusiReward共有ページURL: ${listedRewardUrl}` : null,
      `希望枚数: ${quantity}`,
      `納品方法: ${delivery}`,
      `お支払い方法: ${paymentMethod}`,
      notes ? `備考・ご要望:\n${notes}` : null,
      revisionDetails ? `修正内容:\n${revisionDetails}` : null,
      utm ? `流入元: ${utm}` : null,
    ]
      .filter(Boolean)
      .join("\n\n")
  );

  await sendConfirmationMail(
    email,
    "【UMANUSI Design】更新できる馬主名刺のお申し込みありがとうございます",
    [
      `${name}様`,
      "",
      "この度は「更新できる馬主名刺」へお申し込みいただき、ありがとうございます。",
      "以下の内容で承りました。内容を確認のうえ、改めてご連絡いたします。",
      "",
      `希望枚数: ${quantity}`,
      `納品方法: ${delivery}`,
      notes ? `備考・ご要望:\n${notes}` : null,
      "",
      "※このメールは送信確認のための自動返信です。心当たりがない場合はこのメールを破棄してください。",
    ]
      .filter(Boolean)
      .join("\n")
  );

  return NextResponse.json({ ok: true });
}
