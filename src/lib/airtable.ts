const AIRTABLE_API_BASE = "https://api.airtable.com/v0";

export const AIRTABLE_TABLE_INQUIRIES = "tbln6HTURFF1UHJ1h";

// 「更新できる馬主名刺」専用フォームの書き込み先。相談・依頼フォームとはテーブル（必要に応じてベースも）を分ける。
export const AIRTABLE_TABLE_MCARD = "tbl1INF4pFppRavnn";

export async function createAirtableRecord(
  tableId: string,
  fields: Record<string, unknown>,
  baseIdOverride?: string
) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = baseIdOverride || process.env.AIRTABLE_BASE_ID;

  if (!token || !baseId) {
    throw new Error("Airtable env vars (AIRTABLE_TOKEN / AIRTABLE_BASE_ID) are not set");
  }

  const res = await fetch(`${AIRTABLE_API_BASE}/${baseId}/${tableId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [{ fields }],
      typecast: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable request failed (${res.status}): ${body}`);
  }

  return res.json();
}

export function nowInJST(): string {
  const d = new Date();
  const offsetMs = 9 * 60 * 60 * 1000;
  const jst = new Date(d.getTime() + offsetMs);
  const iso = jst.toISOString().replace("Z", "+09:00");
  return iso.replace(".000", "");
}
