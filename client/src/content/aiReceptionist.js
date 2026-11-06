// The AI receptionist page's copy: what it does, how we set it up, who it is
// for and the packages. The page shows it, and the "Ask Mr. Majid" assistant
// answers from it. Prices and timing are set on a call, case by case.

// The problem the page opens with. Only one figure: the one with a study behind
// it. The often-quoted "85% never call back" and "$126,000 a year" figures trace
// back to vendor blogs, not research, so they are left out.
export const PROBLEM = [
  {
    figure: "62%",
    text: "of calls to small businesses went unanswered in a 30-day study of 85 businesses.",
    source: { name: "411 Locals, 2016", href: "https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/" },
  },
  { figure: "After hours", text: "Evenings, weekends and lunch breaks are when many customers finally have time to call." },
  { figure: "One more ring", text: "A caller who gets voicemail can ring the next business on the list in seconds." },
];

export const FEATURES = [
  { title: "Answers every call", text: "First ring, day or night, weekends too. No caller hears voicemail or a busy tone." },
  { title: "Books appointments", text: "Finds a free slot and books it straight into your calendar." },
  { title: "Transfers calls", text: "Puts urgent calls, or callers who ask for a person, through to you or the right person on your team." },
  { title: "Takes messages", text: "Takes the caller's name, number and reason, and sends it to you straight away." },
  { title: "Filters spam", text: "Spots sales calls, robocalls and calls you don't want, so they never reach you." },
  { title: "Records every call", text: "Each call is recorded and summarised, so you can see what was said without listening." },
  { title: "Updates your CRM", text: "New callers and bookings go into your CRM, with the call summary attached." },
];

export const STEPS = [
  { title: "Plan", text: "We learn your business: hours, services, common questions, and who takes which calls." },
  { title: "Build", text: "We write how it answers, choose its voice and connect your calendar and CRM." },
  { title: "Test", text: "We call it ourselves, then with your team, until it handles your real calls well." },
  { title: "Go live and care", text: "We forward your calls to it, so your phone number never changes. Then we review calls and keep improving it." },
];

export const INDUSTRIES = ["Clinics and practices", "Home services and trades", "Law and accounting offices", "Local shops and studios"];

export const PACKAGES = [
  { title: "AI Receptionist", text: "One receptionist on your number. It answers, books, takes messages and transfers, with your calendar connected." },
  { title: "Receptionist + CRM", text: "Everything in AI Receptionist, plus your CRM updated after every call and routing set up for your team." },
  { title: "Talking Website", text: "A website with your receptionist built in, so visitors can press Talk to ask questions and book." },
  { title: "Care Plan", text: "Monthly call reviews, script updates and changes to your hours or services once it's live." },
];

export const OWNERSHIP =
  "What your receptionist learns from callers goes into a CRM under your own email, so that information is yours. The receptionist is yours for as long as your plan runs.";
