import { Resend } from "resend";
import { FROM, TO, clean, escape, isEmail } from "../../../src/email";

// The contact form posts here. It emails the message to Majid Tech through
// Resend, with Reply-To set to the visitor. Needs RESEND_API_KEY on the server
// (Vercel › Settings › Environment Variables); without it the message is only
// logged, which is fine for local development.

const FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  interests: "Interested in",
  budget: "Budget",
  inbound: "How they found us",
  message: "Message",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request" }, { status: 400 });
  }

  const data = Object.fromEntries(
    Object.keys(FIELDS).map((key) => [key, clean(body?.[key], key === "message" ? 5000 : 200)])
  );
  if (!data.name || !isEmail(data.email)) {
    return Response.json({ success: false, message: "Name and a valid email are required" }, { status: 400 });
  }

  const html = [
    "<h2>New contact form submission</h2>",
    ...Object.entries(FIELDS).map(
      ([key, label]) => `<p><strong>${label}:</strong> ${escape(data[key] || "Not provided").replace(/\n/g, "<br>")}</p>`
    ),
  ].join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.log("Contact form submission (email not sent: RESEND_API_KEY is not set):", data.name, data.email);
    return Response.json({ success: true, message: "Contact form submitted (email is not configured here)" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    subject: `New contact form submission from ${data.name.replace(/[\r\n]+/g, " ")}`,
    html,
    replyTo: data.email,
  });
  if (error) {
    console.error("Resend error:", error);
    return Response.json({ success: false, message: "Failed to send the message" }, { status: 502 });
  }
  return Response.json({ success: true, message: "Contact form submitted successfully!" });
}
