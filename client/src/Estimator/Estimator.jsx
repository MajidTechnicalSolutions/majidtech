"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { RightArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import { openBookCall } from "../components/bookCallEvents";

// The project estimator (/estimate): a visitor describes an app or website idea,
// Claude turns it into a rough plan (/api/estimate), and the visitor can book a
// call (the booker opens over the page, so the plan stays) or email the plan
// to themselves and Mr. Majid (/api/estimate/send).

const EMAIL = "majidtechnicalsolutions@gmail.com";
const MAX_IDEA = 1000;
const MIN_IDEA = 30; // characters; /api/estimate asks for the same
const DISCLAIMER = "AI can make mistakes. Mr. Majid confirms everything on a call.";

const KINDS = [
  ["app", "An app", "App"],
  ["website", "A website", "Website"],
  ["unsure", "Not sure yet", "Not sure"],
];

// "Or start from": a first draft of the idea for the visitor to finish.
const STARTERS = {
  website: [
    ["A business website", "A business website for my company: a page for each service, an about page and a contact form that sends enquiries to my email."],
    ["A landing page", "A landing page for one offer: what it is, who it's for, a few customer quotes and a sign-up form."],
    ["An online store", "An online store for my products: a catalogue, a cart, card payments and shipping to my customers."],
    ["A portfolio", "A portfolio website to show my work: large images, a page for each project, an about page and a contact form."],
    ["Redesign my site", "A redesign of my current website: it's slow and dated on phones. Keep the content and search ranking, and make it faster and clearer."],
  ],
  app: [
    ["A records app", "An app where my staff keep records for each client: notes, schedules and documents, with reports for managers."],
    ["A chat app", "A chat app where my users message each other in real time, with their own accounts and notifications."],
    ["A scheduling app", "A scheduling app where people book times with my team and get reminders, and my team sees the day's calendar."],
    ["A members' app", "A members' app for my organization: members sign in, see what's on, book sessions and pay their membership."],
    ["Add AI to my app", "I have an app and want to add AI features: summaries of what users write and smart suggestions inside the app."],
    ["A team dashboard", "A dashboard for my team: one place to see our orders, customers and tasks, with roles for staff and managers."],
  ],
};

const STEPS = ["Reading your idea", "Listing the screens and features", "Choosing a package and timeline"];
const BAR = ["bg-majidTech", "bg-grayMid", "bg-silverDark", "bg-silverLight"];

const post = (url, body) =>
  fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });

const card = "bg-[#0b0b0c] border border-[#1f1f20] rounded-xl";
const h2 = "text-white text-xl lg:text-2xl";
const row = "flex gap-4 py-3 border-t border-[#141416]";
const tag = "bg-tagDark text-majidTech rounded px-1.5 text-sm whitespace-nowrap self-start";
const textLink = "text-grayMid hover:text-white transition-colors duration-200";
const field = "w-full bg-black border border-[#1f1f20] rounded-md text-silverLight placeholder:text-grayMid focus:outline-none focus:border-grayMid";

const Number2 = ({ i }) => <span className="text-majidTech flex-none">{String(i + 1).padStart(2, "0")}</span>;

function Loading() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div role="status" className={`${card} p-6 flex flex-col gap-4`}>
      <h2 className={h2}>Writing your plan…</h2>
      <p className="text-sm">Usually under 30 seconds.</p>
      <ol className="flex flex-col text-sm">
        {STEPS.map((label, i) => (
          <li key={label} className="flex justify-between py-2.5 border-t border-[#141416]">
            <span className={i === step ? "text-white" : i < step ? "text-silverLight" : ""}>{label}</span>
            <span className={i < step ? "text-majidTech" : "text-silverLight"}>{i < step ? "Done" : i === step ? "…" : ""}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Estimator() {
  const [kind, setKind] = useState("unsure");
  const [idea, setIdea] = useState("");
  const [plan, setPlan] = useState(null);
  // idle | loading | short (too short, or Claude asked for more) | error | limit
  const [status, setStatus] = useState("idle");
  const [more, setMore] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sendStatus, setSendStatus] = useState("idle"); // idle | sending | sent | invalid | error | limit
  const ideaRef = useRef(null);
  const planRef = useRef(null);

  const start = (k, text) => {
    setKind(k);
    setIdea(text);
    setStatus("idle");
    setTimeout(() => {
      const el = ideaRef.current;
      el?.focus();
      el?.setSelectionRange(text.length, text.length);
    }, 0);
  };

  async function getPlan(e) {
    e.preventDefault();
    if (status === "loading") return;
    if (idea.trim().length < MIN_IDEA) {
      setMore("Tell us a bit more: who uses it and what they do on it. A couple of sentences is enough.");
      setStatus("short");
      ideaRef.current?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await post("/api/estimate", { idea, kind });
      if (res.status === 429) return setStatus("limit");
      const data = await res.json().catch(() => ({}));
      if (data.more) {
        setMore(data.more);
        setStatus("short");
        ideaRef.current?.focus();
        return;
      }
      if (!res.ok || !data.plan) throw new Error(`Estimator ${res.status}`);
      setPlan(data.plan);
      setSendStatus("idle");
      setStatus("idle");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => planRef.current?.focus(), 0);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  async function sendPlan(e) {
    e.preventDefault();
    if (sendStatus === "sending") return;
    setSendStatus("sending");
    try {
      const res = await post("/api/estimate/send", { email, consent, idea, plan });
      if (res.status === 429) return setSendStatus("limit");
      if (res.status === 400) return setSendStatus("invalid");
      if (!res.ok) throw new Error(`Estimator send ${res.status}`);
      setSendStatus("sent");
    } catch (error) {
      console.error(error);
      setSendStatus("error");
    }
  }

  const editIdea = () => {
    setPlan(null);
    setTimeout(() => ideaRef.current?.focus(), 0);
  };

  const startOver = () => {
    setPlan(null);
    setIdea("");
    setKind("unsure");
    setStatus("idle");
    setEmail("");
    setConsent(false);
    setSendStatus("idle");
    setTimeout(() => ideaRef.current?.focus(), 0);
  };

  const bookCall = () => openBookCall("estimate");

  if (plan) {
    const pages = plan.kind === "app" ? "Main screens" : "Main pages";
    return (
      <div className="m-auto w-9/12 text-silverDark pt-6 lg:pt-16 pb-10 flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <small className="uppercase text-majidTech tracking-wider">
            Project estimator · {plan.kind === "app" ? "App" : "Website"}
          </small>
          <h1 ref={planRef} tabIndex={-1} className="text-white text-3xl lg:text-6xl lg:leading-none tracking-tight focus:outline-none">
            Your plan
          </h1>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 py-4 border-y border-[#141416]">
            <span className="text-sm">Your idea</span>
            <p className="flex-[1_1_480px] text-silverLight whitespace-pre-wrap break-words">{idea}</p>
            <button type="button" onClick={editIdea} className={`${textLink} text-sm min-h-11`}>
              Edit idea
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <article className={`${card} p-6 flex flex-col gap-4`}>
            <h2 className={h2}>{pages}</h2>
            <ol className="flex flex-col">
              {plan.screens.map((s, i) => (
                <li key={i} className={row}>
                  <Number2 i={i} />
                  <span>
                    <span className="text-white">{s.name}</span> — {s.text}
                  </span>
                </li>
              ))}
            </ol>
          </article>

          <article className={`${card} p-6 flex flex-col gap-4`}>
            <h2 className={h2}>Features</h2>
            <ul className="flex flex-col">
              {plan.features.map((f, i) => (
                <li key={i} className={`${row} justify-between`}>
                  <span>{f.name}</span>
                  {f.tag && <span className={tag}>{f.tag}</span>}
                </li>
              ))}
            </ul>
          </article>

          <article className={`${card} p-6 flex flex-col gap-4`}>
            <h2 className={h2}>The package that fits</h2>
            <p className="text-white text-2xl lg:text-3xl tracking-tight">
              {plan.package} <span className="text-silverDark text-lg lg:text-xl">— {plan.packageTime}</span>
            </p>
            <p>{plan.why}</p>
            <p className="text-sm border-t border-[#141416] pt-4">{plan.packageText}</p>
          </article>

          <article className={`${card} p-6 flex flex-col gap-4`}>
            <h2 className={h2}>Rough timeline</h2>
            <p className="text-white text-2xl lg:text-3xl tracking-tight">
              {plan.total} <span className="text-silverDark text-lg lg:text-xl">to launch</span>
            </p>
            <div aria-hidden="true" className="grid gap-1 h-2" style={{ gridTemplateColumns: plan.timeline.map((t) => `${t.weeks}fr`).join(" ") }}>
              {plan.timeline.map((t, i) => (
                <span key={t.step} className={`${BAR[i]} rounded-sm`} />
              ))}
            </div>
            <ol className="flex flex-col">
              {plan.timeline.map((t) => (
                <li key={t.step} className={`${row} justify-between`}>
                  <span>
                    <span className="text-white">{t.step}</span> — {t.text}
                  </span>
                  <span className="whitespace-nowrap">{t.time}</span>
                </li>
              ))}
            </ol>
          </article>
        </section>

        {plan.questions.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className={h2}>To settle on the call</h2>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              {plan.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="border-t border-[#141416] pt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-2xl lg:text-3xl tracking-tight">Talk it through with Mr. Majid</h2>
            <p>A 30-minute video call. He goes through the plan with you and gives you a fixed quote.</p>
            <div className="flex flex-wrap items-center gap-8">
              <ButtonPrimary text="Book a call" customClass="text-xl" Arrow={RightArrow} onClick={bookCall} />
              <button type="button" onClick={startOver} className={`${textLink} min-h-11`}>
                Start over
              </button>
            </div>
          </div>

          {sendStatus === "sent" ? (
            <div role="status" className={`${card} p-6 flex flex-col gap-3`}>
              <h3 className="text-white text-lg">Plan sent</h3>
              <p>It&apos;s in your inbox, and Mr. Majid has a copy. He replies within a working day.</p>
            </div>
          ) : (
            <form onSubmit={sendPlan} className={`${card} p-6 flex flex-col gap-4`}>
              <h3 className="text-white text-lg">Email me this plan</h3>
              <label htmlFor="plan-email" className="text-sm">
                Your email
              </label>
              <input
                id="plan-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (sendStatus === "invalid") setSendStatus("idle");
                }}
                placeholder="you@company.com"
                aria-invalid={sendStatus === "invalid"}
                aria-describedby={sendStatus === "invalid" ? "plan-email-hint" : undefined}
                className={`${field} min-h-11 px-3.5 text-base sm:text-sm ${sendStatus === "invalid" ? "!border-majidTech" : ""}`}
              />
              {sendStatus === "invalid" && (
                <p id="plan-email-hint" className="text-sm text-silverLight">
                  Check the email address. If it&apos;s right, try again in a minute.
                </p>
              )}
              <label className="flex gap-2.5 items-start text-sm">
                <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 w-4 h-4 accent-majidTech flex-none" />
                <span>Send it to me and to Mr. Majid. He replies within a working day.</span>
              </label>
              <div className="self-start">
                <ButtonPrimary type="submit" text={sendStatus === "sending" ? "Sending…" : "Send plan"} Arrow={RightArrow} />
              </div>
              <div aria-live="polite" className="text-sm text-silverLight">
                {sendStatus === "error" && "That didn't send. Try again in a minute; the plan stays on this page."}
                {sendStatus === "limit" && (
                  <>
                    You&apos;ve sent today&apos;s plans. Email{" "}
                    <a href={`mailto:${EMAIL}`} className="underline hover:text-white">
                      {EMAIL}
                    </a>
                    .
                  </>
                )}
              </div>
            </form>
          )}
        </section>

        <p className="text-sm">A rough plan from AI, not a quote. {DISCLAIMER}</p>
      </div>
    );
  }

  const short = status === "short";
  return (
    <div className="m-auto w-9/12 text-silverDark pt-6 lg:pt-20 pb-10 flex flex-col gap-14">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-8">
          <small className="uppercase text-majidTech tracking-wider">Project estimator</small>
          <h1 className="text-white text-3xl lg:text-6xl lg:leading-none tracking-tight">Describe your project. Get a plan.</h1>
          <p className="lg:text-xl max-w-[520px]">
            An app or a website: tell us the idea in a few lines. Our AI turns it into the main screens or pages, the
            features, the package that fits and a rough timeline. Mr. Majid checks every plan with you on a call.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:pt-2">
          <h2 className={h2}>What you get</h2>
          <ol className="flex flex-col border-b border-[#141416]">
            {[
              ["Main screens or pages", "what people see, one line each."],
              ["Features", "sign-in, payments, a store, AI and the rest."],
              ["The package that fits", "app or website, and why."],
              ["A rough timeline", "from plan to launch. No prices: those are agreed on a call."],
            ].map(([title, text], i) => (
              <li key={title} className="flex gap-4 py-4 border-t border-[#141416]">
                <Number2 i={i} />
                <span>
                  <span className="text-white">{title}</span> — {text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {status === "loading" ? (
        <Loading />
      ) : status === "limit" ? (
        <section className={`${card} p-6 lg:p-8 flex flex-col gap-4`}>
          <h2 className={h2}>That&apos;s today&apos;s plans</h2>
          <p>You can make 5 plans a day. Tell Mr. Majid about your idea directly and he&apos;ll reply within a working day.</p>
          <div className="flex flex-wrap items-center gap-6">
            <ButtonPrimary text="Book a call" Arrow={RightArrow} onClick={bookCall} />
            <Link href="/#Contact" className={textLink}>
              Contact form
            </Link>
          </div>
        </section>
      ) : (
        <form onSubmit={getPlan} className={`${card} p-5 lg:p-8 flex flex-col gap-5`}>
          <fieldset className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-3 lg:gap-6">
            <legend className="text-white text-lg float-left lg:mr-2 mb-3 lg:mb-0">What are you building?</legend>
            <div className="grid grid-cols-3 lg:inline-flex border border-[#1f1f20] rounded-full p-1 gap-1">
              {KINDS.map(([value, label, phone]) => (
                <label
                  key={value}
                  className={`flex items-center justify-center gap-2 px-1 lg:px-4 min-h-11 lg:min-h-9 rounded-full cursor-pointer transition-colors duration-150 ${
                    kind === value ? "bg-tagDark text-white" : "text-silverLight hover:text-white"
                  }`}
                >
                  <input type="radio" name="kind" value={value} checked={kind === value} onChange={() => setKind(value)} className="accent-majidTech m-0" />
                  <span className="lg:hidden">{phone}</span>
                  <span className="hidden lg:inline">{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label htmlFor="idea" className="text-white text-lg border-t border-[#141416] pt-5">
            Your idea
          </label>
          <textarea
            id="idea"
            ref={ideaRef}
            rows={6}
            maxLength={MAX_IDEA}
            value={idea}
            onChange={(e) => {
              setIdea(e.target.value);
              if (short) setStatus("idle");
            }}
            placeholder="e.g. A website for our school with the class timetable, the instructors and a free-trial sign-up form. Later, an app where members book classes."
            aria-invalid={short}
            aria-describedby="idea-hint"
            className={`${field} resize-y p-3 lg:p-4 min-h-[180px] lg:min-h-[160px] text-base sm:text-sm ${short ? "!border-majidTech" : ""}`}
          />
          <div className="flex flex-wrap justify-between gap-3 text-sm">
            <span id="idea-hint" aria-live="polite" className={short ? "text-silverLight" : ""}>
              {short ? more : "Who it's for, what they do on it, anything it must have."}
            </span>
            <span className="whitespace-nowrap">
              {idea.length} / {MAX_IDEA}
            </span>
          </div>

          <div className="flex flex-col gap-2.5 text-sm">
            <span>Or start from:</span>
            {[
              ["website", "Websites"],
              ["app", "Apps"],
            ].map(([k, label]) => (
              <div key={k} className="flex flex-wrap items-center gap-2">
                <span className="w-full lg:w-20 text-xs lg:text-sm uppercase lg:normal-case tracking-wider lg:tracking-normal">{label}</span>
                {STARTERS[k].map(([name, text]) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => start(k, text)}
                    className="bg-tagDark text-majidTech rounded px-2.5 min-h-9 hover:text-white transition-colors duration-150"
                  >
                    {name}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {status === "error" && (
            <div role="alert" className="border-t border-[#141416] pt-5 flex flex-col gap-2">
              <p className="text-white">We couldn&apos;t write your plan</p>
              <p>
                Something went wrong on our side. Your idea is still here, so you can try again. Still stuck? Email{" "}
                <a href={`mailto:${EMAIL}`} className="text-silverLight underline hover:text-white">
                  {EMAIL}
                </a>
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#141416] pt-6">
            <ButtonPrimary type="submit" text={status === "error" ? "Try again" : "Get my plan"} customClass="text-xl" Arrow={RightArrow} />
            <span className="text-sm">{DISCLAIMER}</span>
          </div>
        </form>
      )}
    </div>
  );
}
