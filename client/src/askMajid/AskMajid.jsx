"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import HashLink from "../components/HashLink";
import { openBookCall } from "../components/bookCall";

// "Ask Mr. Majid": the AI assistant in the corner of every page. A button (with a
// one-time greeting) opens a chat panel, full screen on phones. Answers come
// from Claude through /api/ask; from the chat Claude can write a project brief
// (/api/ask/brief) that the visitor checks and sends to Majid (/api/ask/send).
// "Book a call" opens the Google Calendar booker (BookCall.jsx), whose "Back to
// chat" reopens this panel.
// The conversation is kept for the browser tab in sessionStorage.

const GREETING =
  "Hi, I'm Mr. Majid's assistant. Ask me about building your app: what we make, how we work and how long it takes.";
const SUGGESTIONS = ["How long does a mobile app take?", "What's in a Discovery Sprint?", "Can you add AI features to my app?"];
const DISCLAIMER = "AI can make mistakes. Mr. Majid confirms everything on a call.";
const EMAIL = "majidtechnicalsolutions@gmail.com";
const BRIEF_FIELDS = [
  ["idea", "Idea"],
  ["users", "Users"],
  ["mustHaves", "Must-haves"],
  ["timeline", "Timeline"],
];
const STORE = "ask-majid";
const TEASER_SEEN = "ask-majid-teaser-seen";

// Browser storage can be missing or blocked (private windows); the chat works without it.
const storage = {
  get(area, key) {
    try {
      return JSON.parse(window[area].getItem(key));
    } catch {
      return null;
    }
  },
  set(area, key, value) {
    try {
      window[area].setItem(key, JSON.stringify(value));
    } catch {}
  },
};

const post = (url, body, signal) =>
  fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal });

const Avatar = ({ size = "w-10 h-10" }) => (
  <span
    aria-hidden="true"
    className={`${size} flex-none rounded-full border-2 border-majidTech text-majidTech flex items-center justify-center text-[13px]`}
  >
    MT
  </span>
);

const Bubble = ({ from, children, className = "" }) =>
  from === "user" ? (
    <div className={`self-end max-w-[85%] bg-[#1f1f20] rounded-[12px_12px_4px_12px] px-3 py-2.5 text-white whitespace-pre-wrap break-words ${className}`}>
      {children}
    </div>
  ) : (
    <div
      className={`self-start max-w-[90%] bg-backgroundDark border border-[#1f1f20] rounded-[12px_12px_12px_4px] px-3 py-2.5 text-silverLight whitespace-pre-wrap break-words ${className}`}
    >
      {children}
    </div>
  );

const Dots = ({ label }) => (
  <div
    role="status"
    aria-label={label}
    className="self-start bg-backgroundDark border border-[#1f1f20] rounded-[12px_12px_12px_4px] px-4 pt-4 pb-3 flex items-end gap-1.5"
  >
    {[0, 160, 320].map((delay) => (
      <span
        key={delay}
        className="w-2 h-2 rounded-full bg-majidTech motion-safe:animate-typing motion-reduce:animate-typing-fade"
        style={{ animationDelay: `${delay}ms` }}
      />
    ))}
  </div>
);

const chip = "min-h-9 px-3 rounded-full border text-xs transition-colors duration-150";
const outline = "min-h-11 px-4 rounded-[10px] border flex items-center transition-colors duration-150";
const field = "w-full bg-black border border-[#1f1f20] rounded-[10px] px-3 text-white text-base sm:text-sm focus:outline-none focus:border-grayMid";

export default function AskMajid() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  // idle | waiting (for the first words) | streaming | error | limit
  const [status, setStatus] = useState("idle");
  const [view, setView] = useState("chat"); // chat | brief | sent
  const [brief, setBrief] = useState(null);
  const [briefStatus, setBriefStatus] = useState("idle"); // idle | loading | error
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sendStatus, setSendStatus] = useState("idle"); // idle | sending | error
  const [contactHref, setContactHref] = useState("/#Contact");
  const loaded = useRef(false);
  const abort = useRef(null);
  const log = useRef(null);
  const inputRef = useRef(null);

  // The greeting above the button, once per visitor, a moment after the page loads.
  useEffect(() => {
    if (storage.get("localStorage", TEASER_SEEN)) return;
    const timer = setTimeout(() => setTeaser(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // "Back to chat" in the booker.
  useEffect(() => {
    const reopen = () => openChatRef.current();
    window.addEventListener("ask-majid-open", reopen);
    return () => window.removeEventListener("ask-majid-open", reopen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      abort.current?.abort();
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    // Full screen on phones: stop the page scrolling behind the chat.
    const phone = window.matchMedia("(max-width: 639px)").matches;
    if (phone) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      if (phone) document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, status, view, briefStatus]);

  const openChat = () => {
    if (!loaded.current) {
      loaded.current = true;
      const saved = storage.get("sessionStorage", STORE);
      if (Array.isArray(saved)) setMessages(saved);
    }
    // "Book a call" goes to the contact form on this page, or the home page's.
    setContactHref(document.getElementById("Contact") ? `${pathname}#Contact` : "/#Contact");
    storage.set("localStorage", TEASER_SEEN, true);
    setTeaser(false);
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const openChatRef = useRef(openChat);
  useEffect(() => {
    openChatRef.current = openChat;
  });

  const bookCall = () => {
    close();
    openBookCall("chat");
  };

  function close() {
    abort.current?.abort();
    setOpen(false);
  }

  async function ask(text) {
    const question = text.trim();
    if (!question || status === "waiting" || status === "streaming" || status === "limit") return;
    const before = messages;
    const next = [...before, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setStatus("waiting");
    setView("chat");
    const controller = new AbortController();
    abort.current = controller;
    let answer = "";
    try {
      const res = await post("/api/ask", { messages: next }, controller.signal);
      if (res.status === 429) {
        setMessages(before);
        setStatus("limit");
        return;
      }
      if (!res.ok || !res.body) throw new Error(`Ask Majid ${res.status}`);
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      let buffer = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += value;
        const lines = buffer.split("\n");
        buffer = lines.pop();
        for (const line of lines.filter(Boolean)) {
          const event = JSON.parse(line);
          if (event.error) throw new Error("Ask Majid stream error");
          if (event.reset) answer = "";
          if (event.text) answer += event.text;
          setMessages([...next, { role: "assistant", content: answer }]);
          setStatus("streaming");
        }
      }
      if (!answer.trim()) throw new Error("Ask Majid: empty answer");
      storage.set("sessionStorage", STORE, [...next, { role: "assistant", content: answer }]);
      setStatus("idle");
    } catch {
      if (controller.signal.aborted && answer.trim()) {
        // Stopped part-way: keep what was written.
        storage.set("sessionStorage", STORE, [...next, { role: "assistant", content: answer }]);
        setStatus("idle");
        return;
      }
      // Nothing usable came back: take the question back so it can be sent again.
      setMessages(before);
      setInput(question);
      setStatus(controller.signal.aborted ? "idle" : "error");
    }
  }

  async function writeBrief() {
    setView("brief");
    setBrief(null);
    setEditing(false);
    setSendStatus("idle");
    setBriefStatus("loading");
    try {
      const res = await post("/api/ask/brief", { messages });
      if (res.status === 429) {
        setView("chat");
        setStatus("limit");
        return;
      }
      if (!res.ok) throw new Error(`Ask Majid brief ${res.status}`);
      setBrief((await res.json()).brief);
      setBriefStatus("idle");
    } catch {
      setBriefStatus("error");
    }
  }

  async function sendBrief(e) {
    e.preventDefault();
    if (!consent || sendStatus === "sending") return;
    setSendStatus("sending");
    try {
      const res = await post("/api/ask/send", { brief, email, consent, messages });
      if (res.status === 429) {
        setView("chat");
        setStatus("limit");
        return;
      }
      if (!res.ok) throw new Error(`Ask Majid send ${res.status}`);
      setSendStatus("idle");
      setView("sent");
    } catch {
      setSendStatus("error");
    }
  }

  const busy = status === "waiting" || status === "streaming";
  const answered = messages.length > 0 && messages.at(-1).role === "assistant";
  const contactLink = (label, className) => (
    <HashLink to={contactHref} onClick={close} className={className}>
      {label}
    </HashLink>
  );

  if (!open) {
    return (
      <div className="fixed right-4 bottom-4 sm:right-8 sm:bottom-8 z-40 flex flex-col items-end gap-3 font-modernEra">
        {teaser && (
          <button
            type="button"
            onClick={openChat}
            className="hidden sm:block max-w-[280px] text-left bg-backgroundDark border border-[#1f1f20] rounded-xl px-3 py-2.5 text-silverLight text-[13px] leading-5 hover:border-grayMid transition-colors duration-150"
          >
            Have an app idea? Ask me how we&apos;d build it.
          </button>
        )}
        <button
          type="button"
          onClick={openChat}
          aria-label="Open Ask Mr. Majid, AI assistant"
          className="min-h-[52px] flex items-center gap-2.5 pl-1.5 pr-[18px] py-1.5 bg-[#0b0b0c] border border-majidTech rounded-full text-white text-sm hover:bg-[#151516] transition-colors duration-150"
        >
          <Avatar />
          <span className="flex flex-col items-start leading-4">
            <span>Ask Mr. Majid</span>
            <span className="text-[11px] text-[#8a8a8b]">AI assistant</span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <section
      role="dialog"
      aria-label="Ask Mr. Majid, AI assistant"
      className="fixed z-[70] inset-0 sm:inset-auto sm:right-8 sm:bottom-8 sm:w-[400px] sm:h-[620px] sm:max-h-[calc(100dvh-4rem)] bg-[#0b0b0c] sm:border border-[#1f1f20] sm:rounded-2xl flex flex-col overflow-hidden font-modernEra text-silverDark text-[13px] sm:text-sm leading-5 sm:leading-[21px]"
    >
      <header className="flex items-center gap-3 py-3 sm:py-3.5 pl-4 pr-2 sm:pr-3 border-b border-[#1f1f20]">
        <Avatar />
        <div className="flex-1 flex flex-col">
          <span className="text-white">Ask Mr. Majid</span>
          <span className="text-[11px] sm:text-xs text-[#8a8a8b]">AI assistant · answers from this site</span>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label="Close chat"
          className="w-11 h-11 flex items-center justify-center text-silverDark hover:text-white transition-colors duration-150"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </header>

      {view === "sent" ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
          <span aria-hidden="true" className="w-14 h-14 rounded-full border-2 border-majidTech text-majidTech flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12l5 5 9-10" />
            </svg>
          </span>
          <h2 className="text-white text-[21px]">Sent to Mr. Majid</h2>
          <p className="max-w-[280px]">
            He&apos;ll reply to {email}, usually within a working day. A copy of your brief is in your inbox.
          </p>
          <button type="button" onClick={bookCall} className={`${outline} justify-center border-majidTech text-white hover:bg-[#151516]`}>
            Book a call now
          </button>
          <button type="button" onClick={() => setView("chat")} className="min-h-11 underline hover:text-white">
            Keep chatting
          </button>
        </div>
      ) : (
        <>
          <div ref={log} role="log" aria-live="polite" aria-busy={busy} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            <Bubble from="assistant">{GREETING}</Bubble>
            {messages.length === 0 && status !== "limit" && (
              <div className="flex flex-col gap-2">
                <span className="text-[11px] text-[#8a8a8b] uppercase tracking-[0.06em]">Try asking</span>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="min-h-11 text-left px-3 py-2 border border-[#1f1f20] rounded-[10px] text-silverLight hover:border-grayMid transition-colors duration-150"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <Bubble key={i} from={m.role}>
                {m.content}
              </Bubble>
            ))}
            {status === "waiting" && <Dots label="Ask Mr. Majid is writing" />}
            {status === "error" && (
              <Bubble from="assistant">Something went wrong on our side. Try again, or use the contact form.</Bubble>
            )}

            {view === "chat" && answered && !busy && status !== "limit" && (
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={writeBrief} className={`${chip} border-majidTech text-white hover:bg-[#151516]`}>
                  Write my brief
                </button>
                <button type="button" onClick={bookCall} className={`${chip} border-[#1f1f20] text-silverDark hover:text-white`}>
                  Book a call
                </button>
                <HashLink
                  to="/#Selectedwork"
                  onClick={close}
                  className={`${chip} border-[#1f1f20] text-silverDark hover:text-white flex items-center`}
                >
                  See apps we built
                </HashLink>
              </div>
            )}

            {view === "brief" && (
              <>
                {briefStatus === "loading" && (
                  <>
                    <Bubble from="assistant">Writing a brief from what you told me…</Bubble>
                    <Dots label="Writing your brief" />
                  </>
                )}
                {briefStatus === "error" && (
                  <Bubble from="assistant">
                    I couldn&apos;t write the brief just now.{" "}
                    <button type="button" onClick={writeBrief} className="underline hover:text-white">
                      Try again
                    </button>{" "}
                    or{" "}
                    <button type="button" onClick={() => setView("chat")} className="underline hover:text-white">
                      keep chatting
                    </button>
                    .
                  </Bubble>
                )}
                {brief && (
                  <>
                    <Bubble from="assistant">Here&apos;s a brief from what you told me. Check it, then I&apos;ll send it to Mr. Majid.</Bubble>
                    <article aria-label="Project brief" className="bg-black border border-[#1f1f20] rounded-xl p-3.5 flex flex-col gap-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-majidTech text-[11px] uppercase tracking-[0.08em]">Project brief</span>
                        <button
                          type="button"
                          onClick={() => setEditing(!editing)}
                          className="min-h-8 text-xs underline hover:text-white"
                        >
                          {editing ? "Done" : "Edit"}
                        </button>
                      </div>
                      <dl className="grid grid-cols-[96px_minmax(0,1fr)] gap-x-2.5 gap-y-1.5 text-[13px] leading-[19px]">
                        {BRIEF_FIELDS.map(([key, label]) => (
                          <div key={key} className="contents">
                            <dt className="text-[#8a8a8b]">{editing ? <label htmlFor={`brief-${key}`}>{label}</label> : label}</dt>
                            <dd className="text-white">
                              {editing ? (
                                <textarea
                                  id={`brief-${key}`}
                                  rows={2}
                                  maxLength={500}
                                  value={brief[key]}
                                  onChange={(e) => setBrief({ ...brief, [key]: e.target.value })}
                                  className={`${field} py-1.5 resize-none`}
                                />
                              ) : (
                                brief[key]
                              )}
                            </dd>
                          </div>
                        ))}
                        <dt className="text-[#8a8a8b]">Fits</dt>
                        <dd className="text-white">
                          {brief.package} · {brief.time}
                        </dd>
                      </dl>
                    </article>
                    <form onSubmit={sendBrief} className="flex flex-col gap-2.5">
                      <label htmlFor="brief-email" className="text-silverLight text-[13px]">
                        Your email, so Mr. Majid can reply
                      </label>
                      <input
                        id="brief-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@yourbusiness.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${field} min-h-11`}
                      />
                      <label className="flex gap-2.5 items-start text-xs leading-[18px]">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="w-[18px] h-[18px] m-0 flex-none accent-majidTech"
                        />
                        Send this brief and our chat to Majid Tech so they can get back to me.
                      </label>
                      {sendStatus === "error" && (
                        <p role="alert" className="text-xs text-silverLight">
                          That didn&apos;t send. Try again, or email {EMAIL}.
                        </p>
                      )}
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          disabled={!consent || sendStatus === "sending"}
                          className="flex-1 min-h-11 bg-majidTech rounded-[10px] text-black disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {sendStatus === "sending" ? "Sending…" : "Send to Mr. Majid"}
                        </button>
                        <button type="button" onClick={bookCall} className={`${outline} justify-center border-[#1f1f20] text-white hover:border-grayMid`}>
                          Book a call
                        </button>
                      </div>
                      <button type="button" onClick={() => setView("chat")} className="self-start min-h-9 text-xs underline hover:text-white">
                        Keep chatting
                      </button>
                    </form>
                  </>
                )}
              </>
            )}

            {status === "limit" && (
              <>
                <Bubble from="assistant">That&apos;s all the questions I can answer for now. Mr. Majid can pick it up from here.</Bubble>
                <div className="flex flex-col gap-2">
                  {contactLink("Use the contact form", `${outline} px-3.5 border-majidTech text-white hover:bg-[#151516]`)}
                  <a
                    href={`mailto:${EMAIL}`}
                    className={`${outline} px-3.5 border-[#1f1f20] text-white text-[13px] hover:border-grayMid`}
                  >
                    {EMAIL}
                  </a>
                </div>
              </>
            )}
          </div>

          {status === "limit" ? (
            <p className="px-4 py-3 border-t border-[#1f1f20] text-xs text-[#8a8a8b]">
              Questions are limited so the assistant stays fast for everyone. Try again tomorrow.
            </p>
          ) : view === "brief" ? (
            <p className="px-4 pt-2.5 pb-3.5 border-t border-[#1f1f20] text-[11px] text-[#8a8a8b]">{DISCLAIMER}</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="p-3 pb-5 sm:pb-3 border-t border-[#1f1f20] flex flex-col gap-2"
            >
              <div className="flex gap-2 items-center">
                <label htmlFor="ask-majid-input" className="sr-only">
                  Your question
                </label>
                <input
                  ref={inputRef}
                  id="ask-majid-input"
                  type="text"
                  maxLength={1000}
                  autoComplete="off"
                  placeholder="Ask about your app idea…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={busy}
                  className={`${field} flex-1 min-h-11 disabled:opacity-60`}
                />
                {busy ? (
                  <button
                    type="button"
                    onClick={() => abort.current?.abort()}
                    aria-label="Stop"
                    className="w-11 h-11 flex-none rounded-[10px] bg-[#1f1f20] text-white flex items-center justify-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <rect x="2" y="2" width="10" height="10" fill="currentColor" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    aria-label="Send"
                    disabled={!input.trim()}
                    className="w-11 h-11 flex-none rounded-[10px] bg-majidTech text-black flex items-center justify-center disabled:opacity-50"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                )}
              </div>
              <span className="text-[11px] text-[#8a8a8b]">{DISCLAIMER}</span>
            </form>
          )}
        </>
      )}
    </section>
  );
}
