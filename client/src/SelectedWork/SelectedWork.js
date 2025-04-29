// @ts-ignore
import React from "react";
import { ArrowDown, UpArrow } from "../utils/Resources/Svgs";
import Tag from "../utils/Tags";
import Mock1 from "../utils/Resources/images/Mock.png";
import Mock2 from "../utils/Resources/images/Mock-2.png";
import Mock3 from "../utils/Resources/images/Mock-3.png";
import Mock4 from "../utils/Resources/images/Mock-4.png";
import Mock5 from "../utils/Resources/images/Mock-5.png";
// possoble get random images for these from unslplash
const SelectedWork = () => {
  const WorkComponent = ({ title, text, tags, img, customStyle, tagStyle }) => (
    <article className={`text-silverDark ${customStyle}`}>
      <img src={img} className="w-full" alt="Example of work done" />
      <p className="my-4">
        <span className="text-white">{title} — </span>
        {text}
      </p>
      <div id="additionalInfo" className="flex justify-between">
        <a className="text-grayMid flex h-0 pt-2">
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
    <section id="Selectedwork">
      <div className="flex justify-between flex-col lg:flex-row mb-10">
        <h1 className="text-white font-medium not-italic text-2xl sm:text-3xl lg:text-3xl flex items-center justify-center gap-2 w-full lg:w-auto">
          <span className="whitespace-nowrap">Selected Work</span> <ArrowDown color="#FD5A1E" />
        </h1>
        <p className="text-silverDark break-keep text-xs lg:text-base lg:w-2/4">
          A selected group of our projects we have worked on and a few in the making. We are
          dedicated to pushing new and creative ideas, not only for our clients for for ourselves as
          well. See what interesting solutions we have planed for the future.
        </p>
      </div>
      <div className="containers xl:grid grid-rows-3 grid-col-3">
        <div className="flex justify-between flex-col lg:flex-row gap-0">
          <WorkComponent
            title="Aro"
            text="Aro makes it easy to put down your phone so you can focus on the things that really matter."
            tags={["React", "Front-End"]}
            img={Mock2}
            customStyle="my-20 lg:mr-20 flex flex-column"
            tagStyle="ml-1"
          />
          <WorkComponent
            title="Settle"
            text="The all-in-one platform built to help
          e-commerce brands scale seamlessly."
            tags={["Bootstrap", "Front-End"]}
            img={Mock1}
            tagStyle="ml-1"
            customStyle="my-20"
          />
        </div>

        <div className="flex items-center">
          <WorkComponent
            title="Arcadia"
            text="A tech company empowering energy innovators and consumers to fight the climate crisis"
            tags={["React", "Front-End"]}
            img={Mock3}
            customStyle="my-20 lg:pr-80"
            tagStyle="ml-1"
          />
        </div>

        <div className="flex  justify-between flex-col lg:flex-row">
          <WorkComponent
            title="Zawj"
            text="Find you ideal match, with advance filtering you never have to settle"
            tags={["Bootstrap", "Development"]}
            img={Mock4}
            customStyle="my-20 lg:mr-10 flex flex-column"
            tagStyle="ml-1"
          />
          <WorkComponent
            title="MaaL"
            text="Focused on creating better financial outcomes for people and their unique lives."
            tags={["React", "Development"]}
            img={Mock5}
            customStyle="flex flex-column my-20"
            tagStyle="ml-1"
          />
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
