"use client";

import React from "react";
import Link from "next/link";
import { RightArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import { SERVICES, HIRE, STACK } from "../content/services";

// One stroke icon per service card, drawn in currentColor.
const ICONS = {
  websites: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M6 6.5h.01M8.5 6.5h.01" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  backend: (
    <>
      <rect x="4" y="4" width="16" height="6" rx="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" />
      <path d="M8 7h.01M8 17h.01" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18 16l.7 1.8 1.8.7-1.8.7L18 21l-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  care: (
    <>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  hire: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1-4 4-6 7-6s6 2 7 6" />
    </>
  ),
};

const Icon = ({ name }) => (
  <span className="w-11 h-11 flex-none rounded-full border border-[#1f1f20] flex items-center justify-center text-silverLight">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {ICONS[name]}
    </svg>
  </span>
);

const ServiceCard = ({ id, title, text, tags, href }) => {
  const Anchor = href.startsWith("#") ? "a" : Link;
  return (
    <Anchor
      href={href}
      className="group flex flex-col gap-4 p-6 bg-[#0b0b0c] border border-[#1f1f20] rounded-xl text-silverDark transition duration-200 hover:border-majidTech hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="flex items-center justify-between">
        <Icon name={id} />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="text-grayMid group-hover:text-white transition-colors">
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      </div>
      <h3 className="text-white text-2xl">{title}</h3>
      <p>{text}</p>
      <div className="flex gap-2 mt-auto">
        {tags.slice(0, 2).map((tag) => (
          <span key={tag} className="bg-tagDark text-majidTech rounded p-1.5 text-sm leading-none">
            {tag}
          </span>
        ))}
      </div>
    </Anchor>
  );
};

// The stack, drawn as a terminal listing. A figure with a text label, so screen
// readers get the list in one sentence.
const StackTerminal = () => (
  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-24">
    <div className="lg:w-[440px] flex-none flex flex-col gap-4">
      <small className="uppercase tracking-[0.12em] text-sm">The stack</small>
      <h3 className="text-white text-3xl lg:text-4xl tracking-tight">Modern tools, picked for the job.</h3>
      <p className="text-xl">The same stack behind MYKA-EMR, LingLing Chat and MyNights.</p>
    </div>
    <figure
      role="img"
      aria-label={`Tech stack: ${STACK.map((s) => `${s.area} ${s.tools}`).join("; ")}`}
      className="m-0 flex-1 min-w-0 bg-[#0b0b0c] border border-[#1f1f20] rounded-xl overflow-hidden"
    >
      <div className="flex justify-between px-4 lg:px-6 py-3 border-b border-[#1f1f20] text-grayMid text-sm">
        <span>~/majidtech</span>
        <span>stack.json</span>
      </div>
      <div className="p-4 lg:p-6 flex flex-col gap-3 lg:text-lg">
        <div>
          <span className="text-grayMid">$</span> <span className="text-white">stack --list</span>
        </div>
        <dl className="grid grid-cols-1 lg:grid-cols-[140px_minmax(0,1fr)] gap-x-4 gap-y-1 lg:gap-y-2.5 m-0">
          {STACK.map((s) => (
            <React.Fragment key={s.area}>
              <dt className="text-grayMid mt-2 lg:mt-0">{s.area}</dt>
              <dd className="text-silverLight m-0">{s.tools}</dd>
            </React.Fragment>
          ))}
        </dl>
        <div>
          <span className="text-grayMid">$</span>{" "}
          <span className="inline-block w-2 h-4 align-[-3px] bg-majidTech animate-blink motion-reduce:animate-none" />
        </div>
      </div>
    </figure>
  </div>
);

function Services() {
  return (
    // The section itself is a full-width band (index.css draws the hex pattern
    // across it); its content sits in the same 9/12 column as the other sections.
    <section id="Services">
      <div className="m-auto w-9/12 flex flex-col gap-12 text-silverDark">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-[720px]">
            <small className="uppercase tracking-[0.12em] text-sm">Skills &amp; services</small>
            <h2 className="text-white text-4xl lg:text-6xl leading-tight tracking-tight">
              Websites, apps and the engineer behind them.
            </h2>
            <p className="text-xl text-silverLight">
              Build something new with us, or bring Mr. Majid onto your team. Every project is planned, designed
              and quoted before any code.
            </p>
          </div>
          <div className="hidden lg:block">
            <ButtonPrimary text="Start a project" customClass="text-xl" destination="Contact" Arrow={RightArrow} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12 p-6 lg:p-8 bg-backgroundDark border border-[#1f1f20] rounded-xl">
          <div className="flex gap-6 items-start">
            <span className="hidden lg:flex">
              <Icon name="hire" />
            </span>
            <div className="flex flex-col gap-2">
              <small className="uppercase tracking-[0.12em] text-sm">For teams</small>
              <h3 className="text-white text-2xl">{HIRE.title}</h3>
              <p className="max-w-[640px]">{HIRE.text}</p>
            </div>
          </div>
          <div className="flex-none">
            <ButtonPrimary text="Talk about a role" customClass="text-xl" destination="Contact" Arrow={RightArrow} />
          </div>
        </div>

        <div className="pt-6 border-t border-[#141416]">
          <StackTerminal />
        </div>

        <div className="lg:hidden">
          <ButtonPrimary text="Start a project" customClass="text-xl" destination="Contact" Arrow={RightArrow} />
        </div>
      </div>
    </section>
  );
}

export default Services;
