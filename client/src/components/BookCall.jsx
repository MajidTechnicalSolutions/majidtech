"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKING_EMBED, BOOKING_LINK } from "../site";
import { openAskMajid } from "./bookCallEvents";

// "Book a call": a pop-up holding Mr. Majid's Google Calendar booking page, so a
// visitor books a 30-minute Meet call straight onto his calendar (Google sends
// both of them the invite). Opened with openBookCall() after the contact form
// sends, or from Ask Mr. Majid. Full screen on phones. The booking page inside
// is Google's own and keeps Google's styling.

const EMAIL = "majidtechnicalsolutions@gmail.com";
const LOAD_TIMEOUT = 12000;

const COPY = {
  contact: {
    title: "Message sent",
    text: "Want to talk it through? Pick a time for a 30-minute video call with Mr. Majid.",
    dismiss: "Not now",
  },
  chat: {
    title: "Book a call with Mr. Majid",
    text: "Pick a time for a 30-minute video call. Bring your idea; he'll take it from there.",
    dismiss: "Back to chat",
  },
};

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12l5 5 9-10" />
  </svg>
);

export default function BookCall() {
  const [from, setFrom] = useState(null); // null when closed, else "contact" | "chat"
  const [frame, setFrame] = useState("loading"); // loading | ready | failed
  const closeButton = useRef(null);
  const opener = useRef(null);

  useEffect(() => {
    const open = (e) => {
      opener.current = document.activeElement;
      setFrame("loading");
      setFrom(e.detail?.from === "chat" ? "chat" : "contact");
    };
    window.addEventListener("book-call", open);
    return () => window.removeEventListener("book-call", open);
  }, []);

  useEffect(() => {
    if (!from) return;
    closeButton.current?.focus();
    const onKey = (e) => e.key === "Escape" && setFrom(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Some ad blockers and work networks block Google's embed. The frame then
    // shows the browser's error page (and still reports "loaded"), so check
    // Google Calendar can be reached at all; a frame that never loads also
    // falls back after a while. Either way, offer the link instead.
    let open = true;
    fetch(BOOKING_EMBED, { mode: "no-cors", cache: "no-store" }).catch(() => open && setFrame("failed"));
    const timer = setTimeout(() => setFrame((f) => (f === "loading" ? "failed" : f)), LOAD_TIMEOUT);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(timer);
      open = false;
      opener.current?.focus?.();
    };
  }, [from]);

  if (!from) return null;
  const copy = COPY[from];
  const close = () => setFrom(null);
  const dismiss = () => {
    close();
    if (from === "chat") openAskMajid();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center font-modernEra">
      <div aria-hidden="true" onClick={close} className="absolute inset-0 bg-black/70" />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-call-title"
        className="relative w-full h-full sm:w-[760px] sm:h-[min(804px,calc(100dvh-6rem))] bg-[#0b0b0c] sm:border border-[#1f1f20] sm:rounded-2xl flex flex-col overflow-hidden text-silverDark text-[13px] sm:text-sm leading-5 sm:leading-[21px]"
      >
        <header className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-5 pb-3 sm:pb-4 pl-4 sm:pl-6 pr-2 sm:pr-3">
          <span
            aria-hidden="true"
            className="w-9 h-9 sm:w-10 sm:h-10 flex-none rounded-full border-2 border-majidTech text-majidTech flex items-center justify-center text-[13px]"
          >
            {from === "chat" ? "MT" : <Check />}
          </span>
          <div className="flex-1 flex flex-col gap-0.5 sm:gap-1">
            <h2 id="book-call-title" className="text-white text-lg sm:text-[21px] leading-6 sm:leading-7">
              {copy.title}
            </h2>
            <p>{copy.text}</p>
          </div>
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            aria-label="Close"
            className="w-11 h-11 flex-none flex items-center justify-center text-silverDark hover:text-white transition-colors duration-150"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className="relative flex-1 mx-3 sm:mx-6 rounded-xl overflow-hidden border border-[#1f1f20]">
          {frame !== "failed" && (
            <iframe
              src={BOOKING_EMBED}
              title="Mr. Majid's Google Calendar booking page"
              onLoad={() => setFrame("ready")}
              className={`w-full h-full border-0 bg-white transition-opacity duration-200 ${frame === "ready" ? "opacity-100" : "opacity-0"}`}
            />
          )}
          {frame === "loading" && (
            <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-3.5">
              <div className="flex items-end gap-1.5" aria-hidden="true">
                {[0, 160, 320].map((delay) => (
                  <span
                    key={delay}
                    className="w-2 h-2 rounded-full bg-majidTech motion-safe:animate-typing motion-reduce:animate-typing-fade"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
              <span>Loading Mr. Majid&apos;s calendar…</span>
            </div>
          )}
          {frame === "failed" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-silverLight max-w-[340px]">The calendar didn&apos;t load here. You can book on Google Calendar instead.</p>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 inline-flex items-center gap-2 text-white border-b-4 border-majidTech hover:text-majidTech"
              >
                Open Google Calendar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
              <span className="text-xs text-[#8a8a8b]">or email {EMAIL}</span>
            </div>
          )}
        </div>

        <footer className="flex justify-between items-center gap-3 sm:gap-4 px-4 sm:px-6 pt-2 sm:pt-3 pb-5 sm:pb-4">
          <span className="hidden sm:inline text-xs text-[#8a8a8b]">You&apos;ll get a calendar invite with the Meet link.</span>
          <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 flex items-center text-xs sm:text-[13px] hover:text-white"
            >
              Open in Google Calendar ↗
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="min-h-11 px-4 border border-[#1f1f20] rounded-[10px] text-white text-[13px] hover:border-grayMid transition-colors duration-150"
            >
              {copy.dismiss}
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}
