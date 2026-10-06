async function sendMail(to: string, subject: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NOTIFY_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn("Resend env vars are not set; skipping mail");
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

export async function sendNotificationMail(subject: string, text: string) {
  const to = process.env.NOTIFY_TO_EMAIL;
  if (!to) {
    console.warn("NOTIFY_TO_EMAIL is not set; skipping notification mail");
    return;
  }
  await sendMail(to, subject, text);
}

export async function sendConfirmationMail(to: string, subject: string, text: string) {
  await sendMail(to, subject, text);
}
