import Anthropic from "@anthropic-ai/sdk";
import { BRIEF_PROMPT, PACKAGE_NAMES, packageTime } from "../../../../src/askMajid/knowledge";
import { FALLBACKS, MODEL, allow, claude, limitReached, readMessages } from "../../../../src/askMajid/server";

// "Ask Mr. Majid": turns the conversation so far into a project brief (idea, users,
// must-haves, timeline and the package that fits) for the visitor to check
// before it is sent. Nothing is sent from here.

const FIELD = { type: "string" };
const SCHEMA = {
  type: "object",
  properties: {
    idea: FIELD,
    users: FIELD,
    mustHaves: FIELD,
    timeline: FIELD,
    package: { type: "string", enum: PACKAGE_NAMES },
  },
  required: ["idea", "users", "mustHaves", "timeline", "package"],
  additionalProperties: false,
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  const messages = readMessages(body?.messages, { endsWithVisitor: false });
  if (!messages) return Response.json({ error: "Invalid request" }, { status: 400 });
  if (!(await allow("brief", request))) return limitReached();

  const transcript = messages
    .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`)
    .join("\n\n");

  try {
    const response = await claude().beta.messages.create({
      model: MODEL,
      max_tokens: 4000,
      output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
      system: BRIEF_PROMPT,
      messages: [{ role: "user", content: `<conversation>\n${transcript}\n</conversation>` }],
      ...FALLBACKS,
    });
    const text = response.content.find((b) => b.type === "text")?.text;
    if (response.stop_reason !== "end_turn" || !text) throw new Error(`brief not written (${response.stop_reason})`);
    const brief = JSON.parse(text);
    return Response.json({ brief: { ...brief, time: packageTime(brief.package) } });
  } catch (error) {
    console.error("Ask Majid brief:", error instanceof Anthropic.APIError ? `${error.status} ${error.message}` : error);
    return Response.json({ error: "Could not write the brief" }, { status: 502 });
  }
}
