"use client";

// @ts-ignore
import React from "react";
import { ArrowDown, UpArrow } from "../utils/Resources/Svgs";
import useIsMobile from '../hooks/useIsMobile';
import Tag from "../utils/Tags";
import DeviceVideo from "../components/DeviceVideo";
import { WORK } from "../content/work";
const MykaVideo = "/work/myka.mp4";
const MykaPoster = "/work/myka.jpg";
const LingLingVideo = "/work/lingling.mp4";
const LingLingPoster = "/work/lingling.jpg";
const MyNightsVideo = "/work/mynights.mp4";
const MyNightsPoster = "/work/mynights.jpg";
const MuhaarybVideo = "/work/muhaaryb.mp4";
const MuhaarybPoster = "/work/muhaaryb.jpg";
const InspireVideo = "/work/inspire.mp4";
const InspirePoster = "/work/inspire.jpg";

const WorkComponent = ({ title, text, tags, video, poster, device, customStyle = "", tagStyle, link }) => (
  <article className={`text-silverDark flex flex-col ${device === "phone" ? "items-center" : ""} ${customStyle || ""}`}>
    <DeviceVideo src={video} poster={poster} device={device} title={title} />
    <div className={`w-full ${device === "phone" ? "max-w-[440px] mt-8" : "mt-6 lg:px-10"}`}>
      <p className="mb-6">
        <span className="text-white">{title} — </span>
        {text}
      </p>
      <div id="additionalInfo" className="flex justify-between">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-grayMid flex h-0 pt-2 hover:text-white transition-colors duration-200"
            aria-label={`Visit ${title} website`}
          >
            Website{" "}
            <UpArrow
              customStyle={{
                general: { width: 26, height: 26, fill: "none", viewBox: "-12 3 43 25" },
                color: "#686869",
              }}
              viewBoxSetting="-5 -1 35 31"
            />
          </a>
        ) : (
          <span />
        )}
        <Tag tagNames={tags} tagStyle={tagStyle} />
      </div>
    </div>
  </article>
);

const SelectedWork = () => {
  const isMobile = useIsMobile();
  // Cards stack below Tailwind's lg breakpoint; there each laptop is followed by a phone.
  const isStacked = useIsMobile(1023);
  const myNights = (
    <WorkComponent
      {...WORK.myNights}
      video={MyNightsVideo}
      poster={MyNightsPoster}
      device="phone"
      tagStyle="ml-1"
    />
  );
  const muhaaryb = (
    <WorkComponent
      {...WORK.muhaaryb}
      video={MuhaarybVideo}
      poster={MuhaarybPoster}
      device="laptop"
      tagStyle="ml-1"
    />
  );
  return (
    <section id="Selectedwork" className="container mx-auto px-6">
      <div className={isMobile ? "flex justify-between flex-col lg:flex-row mb-32": "flex justify-between flex-col lg:flex-row mb-36" }>
        <h1 className="text-white font-medium not-italic text-2xl sm:text-3xl lg:text-3xl flex items-center justify-center gap-2 w-full lg:w-auto">
          <span className="whitespace-nowrap">Selected Work</span> <ArrowDown color="#FD5A1E" />
        </h1>
        <p className="text-silverDark break-keep text-xs lg:text-base lg:w-2/4">
          A selected group of our projects we have worked on and a few in the making. We are
          dedicated to pushing new and creative ideas, not only for our clients for for ourselves as
          well. See what interesting solutions we have planed for the future 😁.
        </p>
      </div>
      <div className="flex flex-col gap-16 lg:gap-36">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-center">
          <WorkComponent
            {...WORK.myka}
            video={MykaVideo}
            poster={MykaPoster}
            device="laptop"
            tagStyle="ml-1"
          />
          <WorkComponent
            {...WORK.lingLing}
            video={LingLingVideo}
            poster={LingLingPoster}
            device="phone"
            tagStyle="ml-1"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20 items-center">
          {isStacked ? <>{muhaaryb}{myNights}</> : <>{myNights}{muhaaryb}</>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-16 lg:gap-20">
          <WorkComponent
            {...WORK.inspire}
            video={InspireVideo}
            poster={InspirePoster}
            device="laptop"
            customStyle="lg:col-start-2"
            tagStyle="ml-1"
          />
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
