import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import useScrollSpy from "../hooks/useScrollSpy";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import ResumeFile from "./Jamal Abdul Majid Updated Resume.docx";
// Prefer public asset to avoid bundler caching issues in dev
const Portrait = process.env.PUBLIC_URL + '/founder.png';

function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-white text-3xl lg:text-4xl font-medium">{value}</span>
      <span className="text-silverDark text-sm mt-1">{label}</span>
    </div>
  );
}

function SectionTitle({ eyebrow, title, children, alignRight = false }) {
  return (
    <div className={`mb-8 ${alignRight ? 'text-right' : ''}`}>
      {eyebrow ? (
        <small className="uppercase text-majidTech tracking-wider">{eyebrow}</small>
      ) : null}
      <h2 className="text-white text-3xl lg:text-4xl mt-2">{title}</h2>
      {children ? <p className="text-silverDark mt-4 lg:w-3/4">{children}</p> : null}
    </div>
  );
}

function Founder() {
  const sectionIds = [
    "founder-hero",
    "founder-about",
    "founder-experience",
    "founder-education",
    "founder-cta",
  ];
  const activeIndex = useScrollSpy(sectionIds, 120);
  useRevealOnScroll();
  const [showSocials, setShowSocials] = useState(false);

  const handleDotClick = (index) => {
    const el = document.getElementById(sectionIds[index]);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="Founder" className="m-auto w-9/12 py-20">
      {/* Scroll status (left side) */}
      <div className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-4">
        {sectionIds.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            aria-label={`Scroll to section ${idx + 1}`}
            onClick={() => handleDotClick(idx)}
            className={`w-2 h-10 rounded-full transition-colors ${
              activeIndex === idx ? "bg-majidTech" : "bg-grayMid/40"
            }`}
          />
        ))}
      </div>
      {/* Hero */}
      <div id="founder-hero" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-reveal>
        <div>
          <small className="uppercase text-majidTech">Founder</small>
          <h1 className="text-white text-4xl lg:text-6xl mt-3 leading-tight">
            Jamal Majid
          </h1>
          <p className="text-silverDark mt-5 lg:w-4/5">
            Software engineer with professional experience shipping high‑quality products since 2020.
            I build reliable, performant web apps with clear communication, pragmatic engineering,
            and clean interfaces. I’ve supported startups and large enterprises across ecommerce,
            learning platforms, and experimentation at scale.
          </p>
          <div className="flex gap-4 mt-8">
            <NavHashLink
              to="/#Contact"
              className="px-5 py-3 bg-majidTech text-white rounded"
              scroll={(el) => el && el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
              Start a Project
            </NavHashLink>
            <a
              href={ResumeFile}
              className="px-5 py-3 border border-silverDark text-white rounded"
              download
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            <Stat label="Years Experience" value="8+" />
            <Stat label="Projects Delivered" value="50+" />
            <Stat label="Clients Helped" value="20+" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={Portrait}
            alt="Founder portrait"
            className="w-72 h-[26rem] object-cover rounded-xl ring-1 ring-[#1f1f20] bg-[#0f0f10] brightness-90"
            loading="lazy"
          />
        </div>
      </div>

      {/* About */}
      <div id="founder-about" className="mt-24" data-reveal>
        <SectionTitle eyebrow="About" title="Crafting with care, shipping with confidence">
          I focus on fundamentals—fast pages, accessible UI, and maintainable code. I prefer
          small, high‑leverage teams and steady iteration over big‑bang releases. If we work
          together, you’ll get clarity, momentum, and a partner who treats your business like
          it’s his own.
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl ring-1 ring-[#1f1f20] bg-[#0b0b0c]">
            <h3 className="text-white mb-2">Product</h3>
            <p className="text-silverDark">
              Clear scopes, useful constraints, and designs that communicate. From idea to
              shipped MVP.
            </p>
          </div>
          <div className="p-6 rounded-xl ring-1 ring-[#1f1f20] bg-[#0b0b0c]">
            <h3 className="text-white mb-2">Engineering</h3>
            <p className="text-silverDark">
              React, Next.js, Node, and modern tooling. I optimize for performance and
              simplicity.
            </p>
          </div>
          <div className="p-6 rounded-xl ring-1 ring-[#1f1f20] bg-[#0b0b0c]">
            <h3 className="text-white mb-2">Delivery</h3>
            <p className="text-silverDark">
              Tight feedback loops, transparent communication, and on‑time delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div id="founder-experience" className="mt-24" data-reveal>
        <SectionTitle eyebrow="Experience" title="Experience Timeline" />
        <ol className="relative border-l border-[#1f1f20] ml-3">
          <li className="mb-10 ml-6">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-majidTech"></span>
            <h4 className="text-white">Software Engineer — Myka Health Systems</h4>
            <p className="text-silverDark text-sm">Atlanta, GA • Aug 2024 – Present</p>
            <p className="text-silverDark mt-2">Designing and developing a healthcare website using React, collaborating cross‑functionally to implement scalable solutions. Tools: React, Figma, Sketch.</p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-majidTech"></span>
            <h4 className="text-white">Software Engineer — Cognizant Technology Solutions</h4>
            <p className="text-silverDark text-sm">Boston, MA • Feb 2019 – Jul 2024</p>
            <p className="text-silverDark mt-2">Created and maintained client features, advised on UI frameworks and tooling, and supported CI/CD and release processes.</p>
            <ul className="list-disc ml-4 mt-4 text-silverDark space-y-2">
              <li>Verizon (Jun 2023 – Jul 2024): React, Redux, TypeScript, custom hooks, Adobe Target, Jest.</li>
              <li>Cengage (May 2022 – May 2023): React/Next.js, Bloomreach CMS, Node.js, Java; Release Manager for CI/CD launches.</li>
              <li>Home Depot (Oct 2020 – May 2022): A/B testing features across site; built RN internal app; Adobe Target, Figma, InVision.</li>
              <li>Thought Industries (Aug 2020 – Oct 2020): GraphQL, TypeScript, React, Storybook.</li>
              <li>Verizon (Apr 2020 – Jul 2020): Lead React Developer — migrated Angular to React.</li>
              <li>Macy’s (Jan 2020 – Apr 2020): Migrated legacy apps from Handlebars/Ember/Backbone to Vue.js.</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Education timeline (right-aligned, right-to-left) */}
      <div id="founder-education" className="mt-16 lg:w-1/2 ml-auto" data-reveal>
        <SectionTitle eyebrow="Education" title="Educational Timeline" alignRight />
        <ol className="relative border-r border-[#1f1f20] mr-3">
          <li className="mb-10 mr-6 text-right">
            <span className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full bg-majidTech"></span>
            <h4 className="text-white">Web Development — Udemy (Online)</h4>
            <p className="text-silverDark text-sm">2018 – 2019</p>
          </li>
          <li className="mb-10 mr-6 text-right">
            <span className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full bg-majidTech"></span>
            <h4 className="text-white">Front‑End Development — Codecademy (Online)</h4>
            <p className="text-silverDark text-sm">2018</p>
          </li>
          <li className="mb-10 mr-6 text-right">
            <span className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full bg-majidTech"></span>
            <h4 className="text-white">General Education — Georgia Perimeter College, Clarkston GA</h4>
            <p className="text-silverDark text-sm">2013 – 2015</p>
          </li>
          <li className="mr-6 text-right">
            <span className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full bg-majidTech"></span>
            <h4 className="text-white">General Education — Miller Grove HS, Lithonia GA</h4>
            <p className="text-silverDark text-sm">2011 – 2013</p>
          </li>
        </ol>
      </div>

      {/* CTA */}
      <div id="founder-cta" className="mt-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-xl ring-1 ring-[#1f1f20] bg-[#0b0b0c]" data-reveal>
        <div>
          <h3 className="text-white text-2xl">Let’s build something great</h3>
        </div>
        <div className="relative flex items-center justify-end w-full">
          <button
            type="button"
            onClick={() => setShowSocials((s) => !s)}
            className={`px-5 py-3 bg-majidTech text-white rounded w-max smooth-trans ease-smooth duration-500 ${showSocials ? 'mr-3' : 'mr-0'}`}
            aria-expanded={showSocials}
            aria-controls="founder-socials"
          >
            Contact
          </button>
          <div
            id="founder-socials"
            className={`flex items-center gap-3 smooth-trans ease-smooth duration-500 ${
              showSocials ? 'opacity-100 scale-100 w-auto' : 'opacity-0 scale-95 w-0 overflow-hidden pointer-events-none'
            }`}
          >
            <a
              href="https://github.com/jamalabd"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border-2 border-majidTech text-majidTech flex items-center justify-center text-sm font-medium smooth-trans ease-smooth duration-500 ${showSocials ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              style={{ transitionDelay: showSocials ? '0ms' : '0ms' }}
            >
              gh
            </a>
            <a
              href="https://www.linkedin.com/in/jamal-majid-0ab9ab177/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border-2 border-majidTech text-majidTech flex items-center justify-center text-sm font-medium smooth-trans ease-smooth duration-500 ${showSocials ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              style={{ transitionDelay: showSocials ? '120ms' : '0ms' }}
            >
              in
            </a>
            <a
              href="https://twitter.com/_jamalMajid"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border-2 border-majidTech text-majidTech flex items-center justify-center text-sm font-medium smooth-trans ease-smooth duration-500 ${showSocials ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              style={{ transitionDelay: showSocials ? '240ms' : '0ms' }}
            >
              x
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border-2 border-majidTech text-majidTech flex items-center justify-center text-sm font-medium smooth-trans ease-smooth duration-500 ${showSocials ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              style={{ transitionDelay: showSocials ? '360ms' : '0ms' }}
            >
              ig
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;


