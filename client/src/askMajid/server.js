// Shared by the "Ask Mr. Majid" API routes (app/api/ask): the Claude client, the
// question limits and the checks on what the browser sends. Server-side only;
// ANTHROPIC_API_KEY never reaches the browser.

import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const MODEL = "claude-opus-5-5";

// Fallbacks re-run a request that Claude's safety classifiers decline on the
// model Anthropic recommends for that case, inside the same call.
export const FALLBACKS = { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" };

let anthropic;
export const claude = () => (anthropic ??= new Anthropic());

// Limits per visitor (by IP) and for the whole site, per rolling day, so the
// assistant can't be used as a free chatbot. Counted in Upstash Redis (added
// from Vercel's Storage tab, which sets KV_REST_API_URL and KV_REST_API_TOKEN).
// Without it, for local development, each server keeps its own count.
const LIMITS = {
  question: { visitor: 20, site: 400 },
  brief: { visitor: 5, site: 60 },
  send: { visitor: 3, site: 40 },
};

const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = redisUrl && redisToken ? new Redis({ url: redisUrl, token: redisToken }) : null;

const memory = new Map();
const memoryLimit = (key, max) => {
  const now = Date.now();
  const hits = (memory.get(key) || []).filter((t) => now - t < 86_400_000);
  if (hits.length >= max) return { success: false };
  memory.set(key, [...hits, now]);
  return { success: true };
};

const limiters = {};
const limiter = (name, max) =>
  (limiters[name] ??= new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(max, "1 d"), prefix: `ask-majid:${name}` }));

// True when this visitor (and the site as a whole) may make another `kind` request.
export async function allow(kind, request) {
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const { visitor, site } = LIMITS[kind];
  const check = (scope, key, max) =>
    redis ? limiter(`${kind}:${scope}`, max).limit(key) : memoryLimit(`${kind}:${scope}:${key}`, max);
  const [mine, all] = await Promise.all([check("visitor", ip, visitor), check("site", "all", site)]);
  return mine.success && all.success;
}

export const limitReached = () => Response.json({ limit: true }, { status: 429 });

const MAX_TURNS = 30;
const MAX_CHARS = { user: 1000, assistant: 4000 };

// The conversation as the browser sends it: alternating turns starting with
// the visitor (and, for a question, ending with one), each trimmed to a
// sensible length. Null if it isn't.
export function readMessages(value, { endsWithVisitor = true } = {}) {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_TURNS) return null;
  const messages = [];
  for (const [i, m] of value.entries()) {
    const role = i % 2 === 0 ? "user" : "assistant";
    if (m?.role !== role || typeof m.content !== "string" || !m.content.trim()) return null;
    messages.push({ role, content: m.content.trim().slice(0, MAX_CHARS[role]) });
  }
  return !endsWithVisitor || messages.at(-1).role === "user" ? messages : null;
}
