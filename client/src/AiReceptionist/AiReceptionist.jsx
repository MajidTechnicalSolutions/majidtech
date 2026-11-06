"use client";

import React from "react";
import { RightArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import Contact from "../Contact";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import DemoCall from "./DemoCall";
import { FEATURES, INDUSTRIES, OWNERSHIP, PACKAGES, STEPS } from "../content/aiReceptionist";

// The AI receptionist service page (/ai-receptionist), opened from Services in
// the nav. Laid out like the other service pages, with a demo call in the
// hero; packages have no prices or times, both are set on a call.

const card = "bg-[#0b0b0c] border-[1px] border-[#1f1f20] rounded-xl !p-12 lg:p-6";
const h2 = "text-white text-2xl lg:text-4xl tracking-tight";

const StartButton = ({ text = "Start your receptionist" }) => (
  <ButtonPrimary text={text} customClass="text-xl" destination="Contact" Arrow={RightArrow} />
);

function AiReceptionist() {
  useRevealOnScroll();

  return (
    <div className="m-auto w-9/12 text-silverDark">
      <section id="ai-receptionist" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-6 lg:pt-20">
        <div className="flex flex-col gap-12">
          <small className="uppercase text-majidTech tracking-wider">AI receptionist</small>
          <h1 className="text-white text-3xl lg:text-6xl lg:leading-none tracking-tight">Every call answered. Day and night.</h1>
          <p className="lg:text-xl max-w-[540px]">
            An AI receptionist answers your business phone, books appointments, takes messages and puts urgent calls
            through to you. Mr. Majid sets it up for your business and keeps it sharp.
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-2">
            <StartButton />
          </div>
        </div>
        <DemoCall />
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col !gap-3 lg:gap-3 max-w-[680px]">
          <h2 className={h2}>What it does</h2>
          <p>It picks up on the first ring, sounds natural, and knows your business: your hours, your services and who takes which calls.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-4 lg:gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className={`${card} flex flex-col !gap-2 lg:gap-2`}>
              <h3 className="text-white text-lg lg:text-2xl">{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <h2 className={h2}>How we set it up</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 !gap-8 lg:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col !gap-2 lg:gap-3 pt-5 border-t border-[#1f1f20]">
              <span className="text-majidTech">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-white text-lg lg:text-2xl">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="mt-20 lg:mt-36 bg-backgroundDark rounded-xl !p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 !gap-6 lg:gap-10 items-start"
        data-reveal
      >
        <div className="flex flex-col !gap-3 lg:gap-3">
          <h2 className="text-white text-xl lg:text-3xl tracking-tight">For any business that misses calls</h2>
          <p>After hours, at lunch, or when everyone is busy with a customer. Each missed call is someone who may ring the next business on the list.</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 !gap-y-2 lg:gap-y-3">
          {INDUSTRIES.map((name) => (
            <li key={name} className="flex gap-2.5">
              <span aria-hidden="true" className="text-majidTech">→</span>
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end !gap-6 lg:gap-8">
          <h2 className={h2}>Packages</h2>
          <p className="max-w-[560px]">Prices and timing are set on a call, once we know your calls. {OWNERSHIP}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 !gap-4 lg:gap-4">
          {PACKAGES.map((p) => (
            <div key={p.title} className={`${card} flex flex-col !gap-2 lg:gap-3`}>
              <h3 className="text-white text-lg lg:text-2xl">{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 lg:mt-36 py-10 lg:py-16 border-y border-[#1f1f20] flex flex-col lg:flex-row lg:justify-between lg:items-center !gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col gap-4">
          <h2 className={h2}>Stop missing calls.</h2>
          <p>Tell us about your business and the calls you get. Mr. Majid replies, usually within a working day.</p>
        </div>
        <div className="self-start lg:self-auto">
          <StartButton />
        </div>
      </section>

      <div className="pt-10" data-reveal>
        <Contact />
      </div>
    </div>
  );
}

export default AiReceptionist;
