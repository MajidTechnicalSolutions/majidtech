// @ts-ignore
import React from "react";
import { ArrowDown, UpArrow } from "../utils/Resources/Svgs";
import useIsMobile from '../hooks/useIsMobile';
import Tag from "../utils/Tags";
import Mock1 from "../utils/Resources/images/1.png";
import Mock7 from "../utils/Resources/images/7.png";
import Mock4 from "../utils/Resources/images/Mock-4.png";
import Mock6 from "../utils/Resources/images/6.png";
import Mock8 from "../utils/Resources/images/8.png";
// possoble get random images for these from unslplash
  const SelectedWork = () => {
  const isMobile = useIsMobile();
  const WorkComponent = ({ title, text, tags, img, customStyle = "", tagStyle, link }) => (
    <article className={`text-silverDark ${customStyle || ""}`}>
      <img 
        src={img} 
        className="w-full" 
        alt={`${title} project screenshot`} 
        loading="lazy"
      />
      <p className="my-4">
        <span className="text-white">{title} — </span>
        {text}
      </p>
      <div id="additionalInfo" className="flex justify-between">
        <a 
          href={link} 
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
        <Tag tagNames={tags} tagStyle={tagStyle} />
      </div>
    </article>
  );
  return (
    <section id="Selectedwork" className="container mx-auto px-4">
      <div className={isMobile ? "flex justify-between flex-col lg:flex-row mb-10": "flex justify-between flex-col lg:flex-row mb-[20rem]" }>
        <h1 className="text-white font-medium not-italic text-2xl sm:text-3xl lg:text-3xl flex items-center justify-center gap-2 w-full lg:w-auto">
          <span className="whitespace-nowrap">Selected Work</span> <ArrowDown color="#FD5A1E" />
        </h1>
        <p className="text-silverDark break-keep text-xs lg:text-base lg:w-2/4">
          A selected group of our projects we have worked on and a few in the making. We are
          dedicated to pushing new and creative ideas, not only for our clients for for ourselves as
          well. See what interesting solutions we have planed for the future 😁.
        </p>
      </div>
      <div className="containers xl:grid grid-rows-3 grid-col-3 ">
        <div className="flex justify-between flex-col lg:flex-row gap-0">
          <WorkComponent
            title="MYKA-EMR"
            text="A comprehensive EMR platform designed specifically for nursing services, group homes, and assisted care facilities."
            tags={["Next.js", "Full-Stack"]}
            img={Mock6}
            customStyle="lg:mr-20 flex flex-column"
            tagStyle="ml-1"
            link="https://myka-emr.com/"
          />
          <WorkComponent
            title="Myka Health Systems"
            text="Provides services to ensure individuals with disabilities have independence while helping them to improve their decision making skills. "
            tags={["React", "Front-End"]}
            img={Mock1}
            customStyle={isMobile ? "mt-20" : ""}
            tagStyle="ml-1"
            link="https://mykahealthsystems.com/"
          />
        </div>


        <div className="flex items-center">
          <WorkComponent
            title="Muhaaryb"
            text="A faith based Brazilian jiu-jitsu school that provides a safe and supportive environment for students of all ages and skill levels."
            tags={["Liquid", "Shopify"]}
            img={Mock7}
            customStyle={isMobile ? "mt-20" : "mt-[-34rem] lg:pr-48"}
            tagStyle="ml-1"
            link="https://muhaaryb.com/"
            style={isMobile ? {} : {paddingRight: '9rem', marginTop: '-19rem'}}
          />
        </div>

        <div className="flex  justify-between flex-col lg:flex-row">
          <WorkComponent
            title="DreamPages (Coming Soon)"
            text="An AI-powered story telling app where the user can create ai generated books with moving  images for what ever story they create"
            tags={["Next.js", "AI"]}
            img={Mock4}
            customStyle={isMobile ? "mt-20" : "my-20 lg:mr-10 flex flex-column w-4/5"}
            tagStyle="ml-1"
          />
          <WorkComponent
            title="Inspire"
            text="Inspire Salon and Boutique in Cincinnati! They curate high-end women’s fashion and accessories"
            tags={["Wix", "Development"]}
            img={Mock8}
            customStyle={isMobile ? "mt-20" :"flex flex-column my-20 w-4/5"}
            tagStyle="ml-1"
            link="https://www.inspireboutique513.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
