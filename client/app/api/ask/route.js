import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "../../../src/askMajid/knowledge";
import { FALLBACKS, MODEL, allow, claude, limitReached, readMessages } from "../../../src/askMajid/server";

// "Ask Mr. Majid": answers a visitor's question with Claude, streamed back as
// newline-delimited JSON events the chat reads as they arrive:
//   {"text": "..."}  more of the answer
//   {"reset": true}  drop what was shown (the answer was declined part-way)
//   {"error": true}  stop; show the "something went wrong" message
// Needs ANTHROPIC_API_KEY on the server.

const DECLINED = "I can't help with that one here. Mr. Majid can talk it through with you on a call.";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  const messages = readMessages(body?.messages);
  if (!messages) return Response.json({ error: "Invalid request" }, { status: 400 });
  if (!(await allow("question", request))) return limitReached();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // The visitor may close the chat mid-answer; writing to a closed stream throws.
      const send = (event) => {
        try {
          controller.enqueue(encoder.encode(`${JSON.stringify(event)}\n`));
        } catch {}
      };
      try {
        const answer = claude().beta.messages.stream(
          {
            model: MODEL,
            max_tokens: 4000,
            output_config: { effort: "low" },
            cache_control: { type: "ephemeral" },
            system: SYSTEM_PROMPT,
            messages,
            ...FALLBACKS,
          },
          { signal: request.signal }
        );
        answer.on("text", (text) => send({ text }));
        const message = await answer.finalMessage();
        if (message.stop_reason === "refusal") send({ reset: true, text: DECLINED });
      } catch (error) {
        if (!request.signal.aborted) {
          console.error("Ask Majid:", error instanceof Anthropic.APIError ? `${error.status} ${error.message}` : error);
          send({ error: true });
        }
      }
      try {
        controller.close();
      } catch {}
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-store" },
  });
}
