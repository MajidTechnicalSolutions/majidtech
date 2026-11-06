"use client";

import React, { useEffect, useRef, useState } from "react";
import HashLink from "../components/HashLink";

// "Try a demo AI receptionist": a browser call to the demo receptionist on
// Retell. Needs NEXT_PUBLIC_RETELL_PUBLIC_KEY and NEXT_PUBLIC_RETELL_AGENT_ID;
// without them the card says the demo is coming soon. The SDK loads only when
// someone presses Call.

const KEY = process.env.NEXT_PUBLIC_RETELL_PUBLIC_KEY;
const AGENT = process.env.NEXT_PUBLIC_RETELL_AGENT_ID;

const PhoneIcon = ({ size = 16, className = "", stroke = "currentColor" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

const pill = "inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] px-7 rounded-full border bg-transparent text-white transition-colors duration-200";

const clock = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function DemoCall() {
  // idle | connecting | live | ended | error
  const [status, setStatus] = useState("idle");
  const [seconds, setSeconds] = useState(0);
  const [line, setLine] = useState("");
  const call = useRef(null);

  useEffect(() => {
    if (status !== "live") return;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [status]);

  // Hang up if the visitor leaves the page mid-call.
  useEffect(() => () => void call.current?.end(), []);

  const start = async () => {
    if (call.current && call.current.status !== "ended") return;
    setStatus("connecting");
    setSeconds(0);
    setLine("");
    try {
      const { RetellClient } = await import("retell-client-js-sdk");
      call.current = new RetellClient({ key: KEY }).createWebCall({
        agent_id: AGENT,
        transcript: true,
        hooks: {
          onStatus: (s) => s === "live" && setStatus("live"),
          onTranscript: (items) => {
            const said = items.filter((u) => u.role === "agent" && u.content).at(-1);
            if (said) setLine(said.content);
          },
          onEnd: () => setStatus((s) => (s === "error" ? s : "ended")),
          onError: (error) => {
            console.error("Demo call:", error);
            setStatus("error");
          },
        },
      });
    } catch (error) {
      console.error("Demo call:", error);
      setStatus("error");
    }
  };

  const end = () => call.current?.end();

  const inCall = status === "connecting" || status === "live";

  return (
    <section
      id="demo"
      aria-labelledby="demo-title"
      className="bg-[#0b0b0c] border border-[#1f1f20] rounded-xl !p-8 lg:p-8 flex flex-col items-center text-center !gap-5 lg:gap-5"
    >
      <span
        className={`w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full border flex items-center justify-center text-white transition-colors duration-200 ${
          inCall ? "border-majidTech" : "border-[#1f1f20]"
        }`}
      >
        <PhoneIcon size={26} />
      </span>
      <h2 id="demo-title" className="text-white text-xl lg:text-3xl tracking-tight">
        Try a demo AI receptionist
      </h2>

      {!KEY || !AGENT ? (
        <>
          <p className="max-w-[360px]">The demo is being set up. Leave your details and Mr. Majid will show you one on a call.</p>
          <button type="button" disabled className={`${pill} border-[#1f1f20] text-silverDark`}>
            Demo coming soon
          </button>
        </>
      ) : inCall ? (
        <div className="flex flex-col items-center gap-5 w-full" aria-live="polite">
          <span className="text-majidTech">{status === "live" ? `Connected · ${clock(seconds)}` : "Connecting…"}</span>
          {line && (
            <p className="w-full px-4 py-3.5 bg-backgroundDark rounded-lg text-left">
              <span className="text-silverLight">Receptionist:</span> {line}
            </p>
          )}
          <button type="button" onClick={end} className={`${pill} border-[#1f1f20] hover:border-white`}>
            End call
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5 w-full">
          <p className="max-w-[360px]" aria-live="polite">
            {status === "error"
              ? "The call couldn't start. Check that your browser can use the microphone, then try again."
              : status === "ended"
                ? "Thanks for trying it. Want one that answers your calls like that?"
                : "Press call and ask what a customer would: your hours, a booking, a question about a service. It's a demo business, so nothing is booked for real."}
          </p>
          <button type="button" onClick={start} className={`${pill} border-majidTech hover:bg-majidTech/10`}>
            <PhoneIcon className="ring-shake" stroke="#fd5a1e" />
            Call
          </button>
          {status === "ended" ? (
            <HashLink to="#Contact" className="text-silverLight underline decoration-majidTech underline-offset-4 hover:text-white">
              Start your receptionist
            </HashLink>
          ) : (
            <span className="text-xs">Runs in your browser and uses your microphone.</span>
          )}
        </div>
      )}
    </section>
  );
}

export default DemoCall;
