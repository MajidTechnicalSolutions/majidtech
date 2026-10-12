// The home page's Skills and services section: what we offer, hiring Mr. Majid
// as an engineer, and the stack. The section shows it, and the "Ask Mr. Majid"
// assistant answers from it.

// `href` is where each card leads.
export const SERVICES = [
  { id: "websites", title: "Websites", text: "Business sites, landing pages and online stores that load fast and are easy to update.", tags: ["Next.js", "Shopify"], href: "/website-creation" },
  { id: "web", title: "Web apps", text: "Apps that run in the browser, on any computer or phone, with dashboards for your team.", tags: ["React", "Next.js"], href: "/app-creation" },
  { id: "mobile", title: "Mobile apps", text: "iPhone and Android from one codebase, through the app stores.", tags: ["Capacitor", "React"], href: "/app-creation" },
  { id: "backend", title: "Back end and APIs", text: "Sign-in, payments, real-time chat and the database behind them.", tags: ["Node.js", "Supabase"], href: "/app-creation" },
  { id: "ai", title: "AI features", text: "Translation, summaries, assistants and smart suggestions inside your app.", tags: ["Claude API"], href: "/app-creation" },
  { id: "care", title: "Care plans", text: "Hosting, updates, bug fixes and small changes once you're live.", tags: ["Vercel", "Monthly"], href: "/app-creation" },
];

export const HIRE = {
  title: "Hire a software engineer",
  text: "Need another engineer on your team? Mr. Majid joins by contract: full-stack in React, Next.js and Node.js, for features, fixes and code reviews.",
};

export const STACK = [
  { area: "front-end", tools: "React · Next.js · Tailwind CSS" },
  { area: "mobile", tools: "Capacitor → iPhone + Android" },
  { area: "back-end", tools: "Node.js · Socket.IO · Supabase · MongoDB" },
  { area: "websites", tools: "Next.js · Shopify · Wix" },
  { area: "ai", tools: "Claude API" },
  { area: "ship", tools: "Vercel · GitHub · App Store · Google Play" },
];
