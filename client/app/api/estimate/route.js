import Anthropic from "@anthropic-ai/sdk";
import { ESTIMATE_PROMPT } from "../../../src/askMajid/knowledge";
import { FALLBACKS, MODEL, allow, claude, limitReached } from "../../../src/askMajid/server";
import { clean } from "../../../src/email";
import { PLAN_SCHEMA, readPlan } from "../../../src/Estimator/plan";

// The project estimator: turns a visitor's app or website idea into a rough
// plan (screens or pages, features, the package that fits and a timeline) with
// Claude. Answers {plan}, or {more} with a question when the idea is too vague.
// Shares Ask Mr. Majid's Claude client and daily limits; needs ANTHROPIC_API_KEY.

const MIN_IDEA = 30; // characters; the page asks for the same
const KIND_LABEL = { app: "an app", website: "a website", unsure: "not sure" };

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  const idea = clean(body?.idea, 1000);
  const kind = KIND_LABEL[body?.kind] ? body.kind : "unsure";
  if (idea.length < MIN_IDEA) return Response.json({ error: "Tell us a bit more" }, { status: 400 });
  if (!(await allow("plan", request))) return limitReached();

  try {
    const response = await claude().beta.messages.create({
      model: MODEL,
      max_tokens: 6000,
      output_config: { effort: "low", format: { type: "json_schema", schema: PLAN_SCHEMA } },
      system: ESTIMATE_PROMPT,
      messages: [{ role: "user", content: `Building: ${KIND_LABEL[kind]}\n<idea>\n${idea}\n</idea>` }],
      ...FALLBACKS,
    });
    if (response.stop_reason === "refusal") {
      return Response.json({ more: "We can't plan that one here. Tell us about the app or website you want built." });
    }
    const text = response.content.find((b) => b.type === "text")?.text;
    if (response.stop_reason !== "end_turn" || !text) throw new Error(`plan not written (${response.stop_reason})`);
    const written = JSON.parse(text);
    if (!written.enough) {
      return Response.json({ more: clean(written.ask, 300) || "Tell us a bit more: who uses it and what they do on it." });
    }
    const plan = readPlan(written);
    if (!plan) throw new Error("plan incomplete");
    return Response.json({ plan });
  } catch (error) {
    console.error("Estimator:", error instanceof Anthropic.APIError ? `${error.status} ${error.message}` : error);
    return Response.json({ error: "Could not write the plan" }, { status: 502 });
  }
}
