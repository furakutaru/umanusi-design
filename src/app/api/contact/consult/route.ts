import { NextResponse } from "next/server";
import { AIRTABLE_TABLE_INQUIRIES, createAirtableRecord, nowInJST } from "@/lib/airtable";
import { sendConfirmationMail, sendNotificationMail } from "@/lib/mail";

export async function POST(req: Request) {
  let body: {
    name?: string;
    email?: string;
    message?: string;
    awareness?: string[];
    utm?: string;
    agree?: boolean;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, email, message, awareness, utm, agree } = body;

  if (!email || !message || !agree) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  const summary = message.slice(0, 120);

  const fields: Record<string, unknown> = {
    問い合わせ内容: summary,
    受信日時: nowInJST(),
    メール: email,
    希望内容詳細: message,
    ステータス: "新規",
  };

  if (name) fields["氏名"] = name;
  if (awareness && awareness.length > 0) fields["認知経路"] = awareness;
  if (utm) fields["流入元"] = utm;

  try {
    await createAirtableRecord(AIRTABLE_TABLE_INQUIRIES, fields);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "airtable_error" }, { status: 502 });
  }

  await sendNotificationMail(
    `【UMANUSI Design】新しい相談：${name || "名前未入力"}様`,
    [
      `受信日時: ${fields["受信日時"]}`,
      `お名前: ${name || "（未入力）"}`,
      `メール: ${email}`,
      `お問い合わせ内容:\n${message}`,
      awareness && awareness.length > 0 ? `認知経路: ${awareness.join(", ")}` : null,
      utm ? `流入元: ${utm}` : null,
    ]
      .filter(Boolean)
      .join("\n\n")
  );

  await sendConfirmationMail(
    email,
    "【UMANUSI Design】お問い合わせありがとうございます",
    [
      `${name || "お客"}様`,
      "",
      "この度はUMANUSI Designへご相談いただき、ありがとうございます。",
      "以下の内容で承りました。内容を確認のうえ、改めてご連絡いたします。",
      "",
      `お問い合わせ内容:\n${message}`,
      "",
      "※このメールは送信確認のための自動返信です。心当たりがない場合はこのメールを破棄してください。",
    ].join("\n")
  );

  return NextResponse.json({ ok: true });
}
