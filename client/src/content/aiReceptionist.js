// The AI receptionist page's copy: what it does, how we set it up, who it is
// for and the packages. The page shows it, and the "Ask Mr. Majid" assistant
// answers from it. It is written for DBHDD providers in Georgia, our main
// market; setup timing is set case by case, so there are no times.

// The problem the page opens with. Only one figure: the one with a study behind
// it. The often-quoted "85% never call back" and "$126,000 a year" figures trace
// back to vendor blogs, not research, so they are left out.
export const PROBLEM = [
  {
    figure: "62%",
    text: "of calls to small businesses went unanswered in a 30-day study of 85 businesses.",
    source: { name: "411 Locals, 2016", href: "https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/" },
  },
  { figure: "After hours", text: "Families, staff and support coordinators call at night and on weekends, when the office is closed." },
  { figure: "One more ring", text: "A referral who reaches voicemail can call the next provider on the list in seconds." },
];

export const FEATURES = [
  { title: "Answers every call", text: "First ring, day or night, weekends and holidays. No caller hears voicemail or a busy tone." },
  { title: "Puts urgent calls through", text: "Sends urgent calls to your on-call manager. Emergencies are told to call 911, and a mental health crisis 988 or GCAL." },
  { title: "Takes messages", text: "Families, support coordinators and case managers leave a message, and it goes to the right person straight away." },
  { title: "Logs staff call-outs", text: "Staff calling out of a shift are logged and your supervisor is told at once, so the shift gets covered." },
  { title: "Updates your CRM", text: "Every caller and message goes into your CRM under your own email, with a short call summary." },
  { title: "Filters spam", text: "Sales calls and robocalls are spotted and never reach your team." },
];

export const STEPS = [
  { title: "Plan", text: "We learn your agency: your homes and programs, the calls you get and who is on call." },
  { title: "Build", text: "We write how it answers, choose its voice and connect your calendar and CRM." },
  { title: "Test", text: "We call it ourselves, then with your team, until it handles your real calls well." },
  { title: "Go live and care", text: "We forward your calls to it, so your phone number never changes. Then we review calls and keep improving it." },
];

export const INDUSTRIES = ["Group homes and community living", "Day programs", "In-home and respite supports", "Agencies with several locations"];

export const PRIVACY =
  "Callers' personal details are removed from saved call records, and the receptionist never gives medical advice.";

// One monthly price with the minutes included, so customers never deal with
// Retell or a separate phone bill: we run the Retell account and pay for the
// calls. Allowances assume about 2 minutes a call over 30 days. Our cost is
// about $0.13 a minute on Retell's own price list (voice infra $0.055, voice
// $0.015, LLM about $0.03, phone line $0.015, PII removal $0.01, knowledge base
// $0.005); we plan with $0.15, so a package that uses every minute still keeps
// about 65 to 77% of its price, and extra minutes ($0.30) double our cost.
export const OVERAGE = "$0.30";

export const PACKAGES = [
  {
    title: "Starter",
    calls: "Up to 10 calls a day",
    fee: "$397",
    minutes: "600 minutes included",
    text: "For one home or program. Answers every call, takes messages, logs call-outs and puts urgent calls through to one on-call number.",
    example: "600 minutes is about 10 calls a day of 2 minutes each.",
  },
  {
    title: "Growth",
    calls: "10 to 30 calls a day",
    fee: "$797",
    minutes: "1,800 minutes included",
    text: "For several homes or programs. Everything in Starter, plus on-call routing for each home or program.",
    example: "1,800 minutes is about 30 calls a day of 2 minutes each.",
    featured: true,
  },
  {
    title: "Agency",
    calls: "30+ calls a day",
    fee: "$1,297",
    minutes: "3,000 minutes included",
    text: "For agencies with many locations. Everything in Growth, plus a number for each location or program and a monthly call report.",
    example: "3,000 minutes is about 50 calls a day of 2 minutes each.",
  },
];

export const PRICING = `Pick a package by how many calls you get a day. One monthly price covers the receptionist and its call minutes, with no other accounts or phone bills to set up. If a busy month goes over, extra minutes are ${OVERAGE} each. Move up or down a package any month.`;

export const INCLUDED =
  "Every package includes crisis routing, call summaries, your CRM updated after every call, monthly call reviews and your same phone number. Setup is a one-time fee, the same as your package's monthly fee.";

export const OWNERSHIP =
  "What your receptionist learns from callers goes into a CRM under your own email, so that information is yours. The receptionist is yours for as long as your plan runs.";
