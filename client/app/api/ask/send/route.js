import { Resend } from "resend";
import { PACKAGE_NAMES, packageTime } from "../../../../src/askMajid/knowledge";
import { allow, limitReached, readMessages } from "../../../../src/askMajid/server";
import { FROM, TO, clean, escape, isEmail } from "../../../../src/email";

// "Ask Mr. Majid": emails the brief the visitor checked, with the conversation, to
// Majid Tech (Reply-To the visitor), and a copy of the brief to the visitor.
// Only with their consent. Needs RESEND_API_KEY, like the contact form.

const FIELDS = { idea: "Idea", users: "Users", mustHaves: "Must-haves", timeline: "Timeline" };

const html = (text) => escape(text).replace(/\n/g, "<br>");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  const email = clean(body?.email, 200);
  const brief = Object.fromEntries(Object.keys(FIELDS).map((key) => [key, clean(body?.brief?.[key], 500)]));
  const pkg = PACKAGE_NAMES.includes(body?.brief?.package) ? body.brief.package : "";
  const messages = readMessages(body?.messages, { endsWithVisitor: false });
  if (body?.consent !== true || !isEmail(email) || !brief.idea || !messages) {
    return Response.json({ error: "A valid email, the brief and consent are required" }, { status: 400 });
  }
  if (!(await allow("send", request))) return limitReached();

  const rows = [
    ...Object.entries(FIELDS).map(([key, label]) => `<p><strong>${label}:</strong> ${html(brief[key] || "Not discussed yet")}</p>`),
    pkg ? `<p><strong>Fits:</strong> ${escape(`${pkg} · ${packageTime(pkg)}`)}</p>` : "",
  ].join("\n");
  const conversation = messages
    .map((m) => `<p><strong>${m.role === "user" ? "Visitor" : "Ask Mr. Majid"}:</strong> ${html(m.content)}</p>`)
    .join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.log("Ask Majid brief (email not sent: RESEND_API_KEY is not set):", email);
    return Response.json({ success: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Ask Mr. Majid brief: ${brief.idea.replace(/[\r\n]+/g, " ").slice(0, 80)}`,
    html: `<h2>New project brief from Ask Mr. Majid</h2>\n<p><strong>From:</strong> ${escape(email)}</p>\n${rows}\n<h3>Conversation</h3>\n${conversation}`,
  });
  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send the brief" }, { status: 502 });
  }

  // The visitor's copy. Majid already has the brief, so a failure here is only logged.
  const copy = await resend.emails.send({
    from: FROM,
    to: [email],
    subject: "Your project brief for Majid Tech",
    html: `<p>Thanks for telling us about your app. Here is the brief you sent to Mr. Majid; he will reply, usually within a working day.</p>\n${rows}\n<p>Majid Technical Solutions</p>`,
  });
  if (copy.error) console.error("Resend error (visitor copy):", copy.error);

  return Response.json({ success: true });
}
