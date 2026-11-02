// The project estimator's plan: the shape Claude writes it in, the check every
// plan passes through (Claude's, and the copy the browser sends back to be
// emailed), and the plan as email HTML. Server-side only.

import { PLAN_PACKAGES } from "../askMajid/knowledge";
import { clean, escape } from "../email";

export const KINDS = ["app", "website"];
const PACKAGE_NAMES = [...PLAN_PACKAGES.app, ...PLAN_PACKAGES.website].map((p) => p.title);
const STEP_NAMES = ["Plan", "Design", "Build", "Launch"];

const text = { type: "string" };
const item = (fields) => ({
  type: "array",
  items: { type: "object", properties: fields, required: Object.keys(fields), additionalProperties: false },
});

export const PLAN_SCHEMA = {
  type: "object",
  properties: {
    enough: { type: "boolean" },
    ask: text,
    kind: { type: "string", enum: KINDS },
    title: text,
    screens: item({ name: text, text }),
    features: item({ name: text, tag: text }),
    package: { type: "string", enum: PACKAGE_NAMES },
    why: text,
    timeline: item({ step: { type: "string", enum: STEP_NAMES }, text, time: text, weeks: { type: "number" } }),
    total: text,
    questions: { type: "array", items: text },
  },
  required: ["enough", "ask", "kind", "title", "screens", "features", "package", "why", "timeline", "total", "questions"],
  additionalProperties: false,
};

const packageFor = (name) => {
  for (const kind of KINDS) {
    const found = PLAN_PACKAGES[kind].find((p) => p.title === name);
    if (found) return { kind, ...found };
  }
  return null;
};

const rows = (value, max, read) =>
  (Array.isArray(value) ? value : [])
    .slice(0, max)
    .map(read)
    .filter(Boolean);

// The plan with every field trimmed to a sensible length, the package's own
// time and description added, and the kind taken from the package. Null if it
// isn't a plan.
export function readPlan(value) {
  const pkg = packageFor(value?.package);
  const plan = {
    kind: pkg?.kind,
    title: clean(value?.title, 120),
    screens: rows(value?.screens, 8, (s) => (clean(s?.name, 60) ? { name: clean(s.name, 60), text: clean(s.text, 160) } : null)),
    features: rows(value?.features, 6, (f) => (clean(f?.name, 120) ? { name: clean(f.name, 120), tag: clean(f.tag, 20) } : null)),
    package: pkg?.title,
    packageTime: pkg?.time,
    packageText: pkg?.text,
    why: clean(value?.why, 400),
    timeline: rows(value?.timeline, 4, (t) =>
      STEP_NAMES.includes(t?.step)
        ? { step: t.step, text: clean(t.text, 120), time: clean(t.time, 30), weeks: Math.min(Math.max(Number(t.weeks) || 1, 0.5), 26) }
        : null
    ),
    total: clean(value?.total, 60),
    questions: rows(value?.questions, 3, (q) => clean(q, 200) || null),
  };
  return pkg && plan.title && plan.screens.length && plan.features.length && plan.timeline.length ? plan : null;
}

const li = (items, line) => `<ul>${items.map((x) => `<li>${line(x)}</li>`).join("")}</ul>`;

export const planHtml = (plan) =>
  [
    `<h3>${escape(plan.title)}</h3>`,
    `<p><strong>${plan.kind === "app" ? "Main screens" : "Main pages"}</strong></p>`,
    li(plan.screens, (s) => `${escape(s.name)} — ${escape(s.text)}`),
    `<p><strong>Features</strong></p>`,
    li(plan.features, (f) => `${escape(f.name)}${f.tag ? ` (${escape(f.tag)})` : ""}`),
    `<p><strong>The package that fits:</strong> ${escape(`${plan.package} · ${plan.packageTime}`)}<br>${escape(plan.why)}</p>`,
    `<p><strong>Rough timeline:</strong> ${escape(plan.total)}</p>`,
    li(plan.timeline, (t) => `${escape(t.step)} — ${escape(t.text)} (${escape(t.time)})`),
    plan.questions.length ? `<p><strong>To settle on the call</strong></p>${li(plan.questions, escape)}` : "",
  ].join("\n");
