export async function sendNotificationMail(subject: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_TO_EMAIL;
  const from = process.env.NOTIFY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.warn("Resend env vars are not set; skipping notification mail");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend request failed (${res.status}): ${body}`);
  }
}
