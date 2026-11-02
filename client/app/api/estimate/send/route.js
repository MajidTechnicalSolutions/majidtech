import { Resend } from "resend";
import { allow, limitReached } from "../../../../src/askMajid/server";
import { FROM, TO, clean, escape, isEmail } from "../../../../src/email";
import { planHtml, readPlan } from "../../../../src/Estimator/plan";

// The project estimator: emails the visitor's plan, with their idea, to Majid
// Tech (Reply-To the visitor) and a copy to the visitor. Only with their
// consent. Needs RESEND_API_KEY, like the contact form.

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  const email = clean(body?.email, 200);
  const idea = clean(body?.idea, 1000);
  const plan = readPlan(body?.plan);
  if (body?.consent !== true || !isEmail(email) || !idea || !plan) {
    return Response.json({ error: "A valid email, the plan and consent are required" }, { status: 400 });
  }
  if (!(await allow("planSend", request))) return limitReached();

  const details = `${planHtml(plan)}\n<p><strong>Their idea:</strong> ${escape(idea).replace(/\n/g, "<br>")}</p>`;

  if (!process.env.RESEND_API_KEY) {
    console.log("Estimator plan (email not sent: RESEND_API_KEY is not set):", email);
    return Response.json({ success: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Project estimator plan: ${plan.title.replace(/[\r\n]+/g, " ").slice(0, 80)}`,
    html: `<h2>New plan from the project estimator</h2>\n<p><strong>From:</strong> ${escape(email)}</p>\n${details}`,
  });
  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send the plan" }, { status: 502 });
  }

  // The visitor's copy. Majid already has the plan, so a failure here is only logged.
  const copy = await resend.emails.send({
    from: FROM,
    to: [email],
    subject: "Your project plan from Majid Tech",
    html: `<p>Thanks for describing your project. Here is your rough plan; Mr. Majid has a copy and will reply, usually within a working day. It's a plan from AI, not a quote: he confirms everything with you on a call.</p>\n${details}\n<p>Majid Technical Solutions</p>`,
  });
  if (copy.error) console.error("Resend error (visitor copy):", copy.error);

  return Response.json({ success: true });
}
