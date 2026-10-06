import { NextResponse } from "next/server";
import { AIRTABLE_TABLE_INQUIRIES, createAirtableRecord, nowInJST } from "@/lib/airtable";
import { sendConfirmationMail, sendNotificationMail } from "@/lib/mail";

export async function POST(req: Request) {
  let body: {
    name?: string;
    email?: string;
    items?: string[];
    contactMethod?: string;
    deadline?: string;
    message?: string;
    paymentMethod?: string;
    awareness?: string[];
    utm?: string;
    agree?: boolean;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, email, items, contactMethod, deadline, message, paymentMethod, awareness, utm, agree } = body;

  if (!name || !email || !items || items.length === 0 || !message || !agree) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  const summary = message.slice(0, 120);

  const fields: Record<string, unknown> = {
    問い合わせ内容: summary,
    受信日時: nowInJST(),
    氏名: name,
    メール: email,
    希望アイテム: items,
    希望内容詳細: message,
    ステータス: "新規",
  };

  if (contactMethod) fields["連絡手段希望"] = contactMethod;
  if (deadline) fields["希望納期"] = deadline;
  if (paymentMethod) fields["支払い方法"] = paymentMethod;
  if (awareness && awareness.length > 0) fields["認知経路"] = awareness;
  if (utm) fields["流入元"] = utm;

  try {
    await createAirtableRecord(AIRTABLE_TABLE_INQUIRIES, fields);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "airtable_error" }, { status: 502 });
  }

  await sendNotificationMail(
    `【UMANUSI Design】新しい依頼：${name}様`,
    [
      `受信日時: ${fields["受信日時"]}`,
      `お名前: ${name}`,
      `メール: ${email}`,
      `希望アイテム: ${items.join(", ")}`,
      contactMethod ? `連絡手段希望: ${contactMethod}` : null,
      deadline ? `希望納期: ${deadline}` : null,
      paymentMethod ? `お支払い方法: ${paymentMethod}` : null,
      `ご依頼内容の詳細:\n${message}`,
      awareness && awareness.length > 0 ? `認知経路: ${awareness.join(", ")}` : null,
      utm ? `流入元: ${utm}` : null,
    ]
      .filter(Boolean)
      .join("\n\n")
  );

  await sendConfirmationMail(
    email,
    "【UMANUSI Design】ご依頼ありがとうございます",
    [
      `${name}様`,
      "",
      "この度はUMANUSI Designへご依頼いただき、ありがとうございます。",
      "以下の内容で承りました。内容を確認のうえ、改めてご連絡いたします。",
      "",
      `希望アイテム: ${items.join(", ")}`,
      deadline ? `希望納期: ${deadline}` : null,
      `ご依頼内容の詳細:\n${message}`,
      "",
      "※このメールは送信確認のための自動返信です。心当たりがない場合はこのメールを破棄してください。",
    ]
      .filter(Boolean)
      .join("\n")
  );

  return NextResponse.json({ ok: true });
}
