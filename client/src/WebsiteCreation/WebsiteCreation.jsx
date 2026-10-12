"use client";

import React from "react";
import { preload } from "react-dom";
import HashLink from "../components/HashLink";
import { RightArrow, UpArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import Tag from "../utils/Tags";
import DeviceVideo from "../components/DeviceVideo";
import Turn3D from "../components/Turn3D";
import Laptop3D from "../components/Laptop3D";
import Contact from "../Contact";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { BUILDS, PACKAGES, SITES, STEPS } from "../content/websiteCreation";

// The website creation service page (/website-creation), opened from Services
// in the nav. Laid out like the App creation page; packages show what each
// covers and how long it takes, and prices are quoted on a call.

// The hero's 3D laptop plays the screen-only clip; the other laptops have the
// laptop drawn into the clip.
const HERO = { video: "/work/muhaaryb-screen.mp4", poster: "/work/muhaaryb-screen.jpg" };
const MEDIA = {
  Muhaaryb: { video: "/work/muhaaryb.mp4", poster: "/work/muhaaryb.jpg" },
  Inspire: { video: "/work/inspire.mp4", poster: "/work/inspire.jpg" },
};

const card = "bg-[#0b0b0c] border-[1px] border-[#1f1f20] rounded-xl !p-12 lg:p-6";
const h2 = "text-white text-2xl lg:text-4xl tracking-tight";

const WorkLink = ({ children }) => (
  <HashLink to="/#Selectedwork" className="text-grayMid hover:text-white transition-colors duration-200 inline-flex items-center">
    {children}
    <UpArrow
      customStyle={{
        general: { width: 26, height: 26, fill: "none", viewBox: "-12 3 43 25" },
        color: "#686869",
      }}
      viewBoxSetting="-5 -1 35 31"
    />
  </HashLink>
);

const StartButton = ({ text = "Start a website" }) => (
  <ButtonPrimary text={text} customClass="text-xl" destination="Contact" Arrow={RightArrow} />
);

function WebsiteCreation() {
  // The hero laptop's still frame is the first big thing on screen; fetch it early.
  preload(HERO.poster, { as: "image", fetchPriority: "high" });
  useRevealOnScroll();

  return (
    <div className="m-auto w-9/12 text-silverDark">
      <section id="website-creation" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-6 lg:pt-20">
        <div className="flex flex-col gap-12">
          <small className="uppercase text-majidTech tracking-wider">Website creation</small>
          <h1 className="text-white text-3xl lg:text-6xl lg:leading-none tracking-tight">
            We build your website, start to launch.
          </h1>
          <p className="lg:text-xl max-w-[480px]">
            Websites for businesses: planned with you, designed before any code, fast on every phone and looked after once
            it is live.
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-2">
            <StartButton />
            <WorkLink>See our work</WorkLink>
          </div>
        </div>
        <Turn3D className="px-3 lg:px-0">
          <Laptop3D src={HERO.video} poster={HERO.poster} title="Muhaaryb" />
        </Turn3D>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <h2 className={h2}>How we work</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 !gap-4 lg:gap-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className={`${card} flex lg:flex-col !gap-6 lg:gap-3`}>
              <span className="text-majidTech">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col !gap-2 lg:gap-3">
                <h3 className="text-white text-lg lg:text-2xl">{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <h2 className={h2}>What we build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t lg:border-l border-[#1f1f20]">
          {BUILDS.map((b) => (
            <div key={b.title} className="!py-6 lg:p-6 border-b lg:border-r border-[#1f1f20] flex flex-col !gap-1 lg:gap-2">
              <h3 className="text-white lg:text-xl">{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end !gap-6 lg:gap-8">
          <h2 className={h2}>Packages</h2>
          <p className="max-w-[520px]">Every site is different, so we quote from the scope we agree with you on a call.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-4 lg:gap-4">
          {PACKAGES.map((p) => (
            <div key={p.title} className={`${card} flex flex-col !gap-2 lg:gap-3`}>
              <div className="flex justify-between items-baseline gap-4 lg:flex-col lg:items-start">
                <h3 className="text-white text-lg lg:text-2xl">{p.title}</h3>
                <span className="text-grayMid text-xs lg:hidden">{p.time}</span>
              </div>
              <p>{p.text}</p>
              <span className="hidden lg:block mt-auto text-grayMid text-sm">{p.time}</span>
            </div>
          ))}
          <div className={`${card} flex flex-col gap-4 justify-center items-start`}>
            <h3 className="text-white text-lg lg:text-2xl">Get a quote</h3>
            <p>Tell us about your business. We will suggest a package and give you a price for it.</p>
            <StartButton text="Ask for a quote" />
          </div>
        </div>
      </section>

      <section id="recent-sites" className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <div className="flex justify-between items-end gap-6">
          <h2 className={h2}>Sites we have built</h2>
          <span className="hidden lg:inline-flex"><WorkLink>All selected work</WorkLink></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 !gap-12 lg:gap-12 items-start">
          {SITES.map((site) => (
            <article key={site.title} className="flex flex-col gap-3 lg:gap-4">
              <DeviceVideo src={MEDIA[site.title].video} poster={MEDIA[site.title].poster} device="laptop" title={site.title} />
              <p>
                <span className="text-white">{site.title} — </span>
                {site.text}
              </p>
              <Tag tagNames={site.tags} tagStyle="ml-1" />
            </article>
          ))}
        </div>
        <span className="lg:hidden"><WorkLink>All selected work</WorkLink></span>
      </section>

      <section className="mt-20 lg:mt-36 py-10 lg:py-16 border-y border-[#1f1f20] flex flex-col lg:flex-row lg:justify-between lg:items-center !gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col gap-4">
          <h2 className={h2}>Have a website in mind?</h2>
          <p>Tell us what it should do, and we will reply with the next steps.</p>
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

export default WebsiteCreation;
