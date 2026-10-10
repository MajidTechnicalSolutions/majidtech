import React, { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { RightArrow, UpArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import Tag from "../utils/Tags";
import DeviceVideo from "../components/DeviceVideo";
import Contact from "../Contact";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import MykaVideo from "../utils/Resources/work/myka.mp4";
import MykaPoster from "../utils/Resources/work/myka.jpg";
import LingLingVideo from "../utils/Resources/work/lingling.mp4";
import LingLingPoster from "../utils/Resources/work/lingling.jpg";
import MyNightsVideo from "../utils/Resources/work/mynights.mp4";
import MyNightsPoster from "../utils/Resources/work/mynights.jpg";

// The app creation service page (/app-creation), opened from Services in the nav.
// Packages show what each covers and how long it takes; prices are quoted on a call.

const STEPS = [
  { title: "Plan", text: "We agree what the app must do and who uses it. You get screen mock-ups and a fixed quote." },
  { title: "Design", text: "Every screen is designed and clickable before any code, so changes are cheap." },
  { title: "Build", text: "We build in short rounds and show you a working version as we go." },
  { title: "Launch and care", text: "We put it live on the web or the app stores, then keep it hosted, updated and fixed." },
];

const BUILDS = [
  { title: "Web apps", text: "Apps that run in the browser, on any computer or phone." },
  { title: "Mobile apps", text: "iPhone and Android from one codebase, through the app stores." },
  { title: "Dashboards and admin", text: "One place for your team to see and manage the work." },
  { title: "Accounts and payments", text: "Sign-in, user roles and taking payments in the app." },
  { title: "Real-time features", text: "Chat, live updates and notifications." },
  { title: "AI features", text: "Translation, summaries and smart suggestions inside your app." },
];

const PACKAGES = [
  { title: "Discovery Sprint", time: "1–2 weeks", text: "Requirements, screen mock-ups, a clickable prototype and a fixed quote. Credited against the build if you go ahead." },
  { title: "Starter App", time: "3–5 weeks", text: "Up to about 6 screens: a web app or one mobile platform, with login, a simple database and launch." },
  { title: "Growth App", time: "6–12 weeks", text: "iPhone and Android, or web and mobile: accounts, a backend, payments, an admin dashboard, up to 3 integrations and app store submission." },
  { title: "Advanced App", time: "3–6 months", text: "Real-time features, several user roles and AI features. Starts with a Discovery Sprint." },
  { title: "Care Plan", time: "Monthly", text: "Hosting, updates, bug fixes and small changes once your app is live." },
];

const APPS = [
  { title: "MYKA-EMR", text: "An EMR platform for nursing services, group homes and assisted care.", tags: ["Next.js", "AI"], video: MykaVideo, poster: MykaPoster, device: "laptop" },
  { title: "LingLing Chat", text: "Messaging that teaches you a language.", tags: ["React", "Node.js"], video: LingLingVideo, poster: LingLingPoster, device: "phone" },
  { title: "MyNights", text: "A calendar that rotates time fairly.", tags: ["Next.js", "Mobile"], video: MyNightsVideo, poster: MyNightsPoster, device: "phone" },
];

const card = "bg-[#0b0b0c] border-[1px] border-[#1f1f20] rounded-xl p-5 lg:p-6";
const h2 = "text-white text-2xl lg:text-4xl tracking-tight";

const WorkLink = ({ children }) => (
  <NavHashLink to="/#Selectedwork" className="text-grayMid hover:text-white transition-colors duration-200 inline-flex items-center">
    {children}
    <UpArrow
      customStyle={{
        general: { width: 26, height: 26, fill: "none", viewBox: "-12 3 43 25" },
        color: "#686869",
      }}
      viewBoxSetting="-5 -1 35 31"
    />
  </NavHashLink>
);

const StartButton = ({ text = "Start your app" }) => (
  <ButtonPrimary text={text} customClass="text-xl" destination="Contact" Arrow={RightArrow} />
);

function AppCreation() {
  useRevealOnScroll();
  useEffect(() => {
    document.title = "App creation | Majid Tech";
    return () => {
      document.title = "Majid Tech";
    };
  }, []);

  return (
    <div className="m-auto w-9/12 text-silverDark">
      <section id="app-creation" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-6 lg:pt-20">
        <div className="flex flex-col gap-5">
          <small className="uppercase text-majidTech tracking-wider">App creation</small>
          <h1 className="text-white text-3xl lg:text-6xl lg:leading-none tracking-tight">
            We build your app, start to launch.
          </h1>
          <p className="lg:text-xl max-w-[480px]">
            Web and mobile apps for businesses: planned with you, designed before any code, built in
            weekly rounds and looked after once it is live.
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-2">
            <StartButton />
            <WorkLink>See our work</WorkLink>
          </div>
        </div>
        <div className="relative">
          <DeviceVideo src={MykaVideo} poster={MykaPoster} device="laptop" title="MYKA-EMR" sizeClass="w-full lg:w-[92%] aspect-[1140/706] lg:mt-10" />
          <div className="hidden lg:block absolute right-0 -top-6">
            <DeviceVideo src={LingLingVideo} poster={LingLingPoster} device="phone" title="LingLing Chat" sizeClass="w-[170px] xl:w-[200px] aspect-[528/1080]" />
          </div>
        </div>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <h2 className={h2}>How we work</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className={`${card} flex lg:flex-col gap-4 lg:gap-3`}>
              <span className="text-majidTech">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-2 lg:gap-3">
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
            <div key={b.title} className="py-4 lg:p-6 border-b lg:border-r border-[#1f1f20] flex flex-col gap-1 lg:gap-2">
              <h3 className="text-white lg:text-xl">{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-8">
          <h2 className={h2}>Packages</h2>
          <p className="max-w-[520px]">Every app is different, so we quote from the scope we agree with you on a call.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {PACKAGES.map((p) => (
            <div key={p.title} className={`${card} flex flex-col gap-2 lg:gap-3`}>
              <div className="flex justify-between items-baseline gap-3 lg:flex-col lg:items-start">
                <h3 className="text-white text-lg lg:text-2xl">{p.title}</h3>
                <span className="text-grayMid text-xs lg:hidden">{p.time}</span>
              </div>
              <p>{p.text}</p>
              <span className="hidden lg:block mt-auto text-grayMid text-sm">{p.time}</span>
            </div>
          ))}
          <div className={`${card} flex flex-col gap-3 justify-center items-start`}>
            <h3 className="text-white text-lg lg:text-2xl">Get a quote</h3>
            <p>Tell us about your idea. We will suggest a package and give you a price for it.</p>
            <StartButton text="Ask for a quote" />
          </div>
        </div>
      </section>

      <section id="recent-apps" className="pt-20 lg:pt-36 flex flex-col gap-6 lg:gap-8" data-reveal>
        <div className="flex justify-between items-end gap-4">
          <h2 className={h2}>Apps we have built</h2>
          <span className="hidden lg:inline-flex"><WorkLink>All selected work</WorkLink></span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-12 items-end">
          {APPS.map((app) => (
            <article key={app.title} className={`flex flex-col gap-3 lg:gap-4 ${app.device === "laptop" ? "col-span-2 lg:col-span-1" : ""}`}>
              <DeviceVideo
                src={app.video}
                poster={app.poster}
                device={app.device}
                title={app.title}
                sizeClass={app.device === "phone" ? "w-full aspect-[528/1080]" : undefined}
              />
              <p>
                <span className="text-white">{app.title} — </span>
                {app.text}
              </p>
              <Tag tagNames={app.tags} tagStyle="ml-1" />
            </article>
          ))}
        </div>
        <span className="lg:hidden"><WorkLink>All selected work</WorkLink></span>
      </section>

      <section className="mt-20 lg:mt-36 py-10 lg:py-16 border-y border-[#1f1f20] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-8" data-reveal>
        <div className="flex flex-col gap-3">
          <h2 className={h2}>Have an app in mind?</h2>
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

export default AppCreation;
