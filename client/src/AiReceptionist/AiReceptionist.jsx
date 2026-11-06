"use client";

import React from "react";
import { RightArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import Contact from "../Contact";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import DemoCall from "./DemoCall";
import { FEATURES, INCLUDED, INDUSTRIES, OWNERSHIP, PACKAGES, PRICING, PRIVACY, PROBLEM, STEPS } from "../content/aiReceptionist";

// The AI receptionist service page (/ai-receptionist), opened from Services in
// the nav. Laid out like the other service pages, with a demo call in the
// hero. Written for DBHDD providers, with packages priced by calls a day.

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
          <small className="uppercase text-majidTech tracking-wider">AI receptionist for DBHDD providers</small>
          <h1 className="text-white text-3xl lg:text-6xl lg:leading-none tracking-tight">Every call answered. Day and night.</h1>
          <p className="lg:text-xl max-w-[540px]">
            An AI receptionist for DBHDD providers in Georgia. It answers families, staff and support coordinators, takes
            messages and puts urgent calls through to whoever is on call. Mr. Majid sets it up for your homes and programs
            and keeps it sharp.
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-2">
            <StartButton />
          </div>
        </div>
        <DemoCall />
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <h2 className={h2}>Every missed call is someone waiting</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 !gap-4 lg:gap-4">
          {PROBLEM.map((p) => (
            <div key={p.figure} className={`${card} flex flex-col !gap-3 lg:gap-3`}>
              <span className="text-white text-4xl lg:text-5xl tracking-tight">{p.figure}</span>
              <p>{p.text}</p>
              {p.source && (
                <a href={p.source.href} target="_blank" rel="noopener noreferrer" className="mt-auto text-sm text-grayMid hover:text-white">
                  Source: {p.source.name} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col !gap-3 lg:gap-3 max-w-[680px]">
          <h2 className={h2}>What it does</h2>
          <p>It picks up on the first ring, sounds natural and knows your agency: your homes and programs, your hours and who is on call. It never gives medical advice.</p>
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
        <div className="flex flex-col !gap-3 lg:gap-3 max-w-[680px]">
          <h2 className={h2}>How we set it up</h2>
          <p>Your phone number stays the same. We forward your calls to the receptionist, and families and staff dial the number they already know.</p>
        </div>
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
          <h2 className="text-white text-xl lg:text-3xl tracking-tight">Built for DBHDD providers</h2>
          <p>Families, staff, support coordinators and referrals call at all hours. The receptionist answers each one the way your office would.</p>
          <p className="text-sm">
            <span className="text-white">Privacy:</span> {PRIVACY}
          </p>
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
          <p className="max-w-[560px]">{PRICING}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 !gap-4 lg:gap-4">
          {PACKAGES.map((p) => (
            <div key={p.title} className={`${card} flex flex-col !gap-4 lg:gap-4 ${p.featured ? "!border-majidTech" : ""}`}>
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-lg lg:text-2xl">{p.title}</h3>
                <span className="text-sm text-majidTech">{p.calls}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-white text-4xl lg:text-5xl leading-none tracking-tight">{p.fee}</span>/mo
                </p>
                <span className="text-silverLight">+ {p.minute} a minute on calls</span>
              </div>
              <p>{p.text}</p>
              <p className="mt-auto pt-4 border-t border-[#1f1f20] text-sm">{p.example}</p>
            </div>
          ))}
        </div>
        <p className="max-w-[820px] text-sm">
          {INCLUDED} {OWNERSHIP}
        </p>
      </section>

      <section className="mt-20 lg:mt-36 py-10 lg:py-16 border-y border-[#1f1f20] flex flex-col lg:flex-row lg:justify-between lg:items-center !gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col gap-4">
          <h2 className={h2}>Stop missing calls.</h2>
          <p>Tell us about your homes and programs and the calls you get. Mr. Majid replies, usually within a working day.</p>
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
