// @ts-ignore
import React from "react";
import { ArrowDown, UpArrow } from "../Resources/Svgs";
import Tag from "../utils/Tags";
import Mock1 from "../Resources/images/Mock.png";
import Mock2 from "../Resources/images/Mock-2.png";
import Mock3 from "../Resources/images/Mock-3.png";
import Mock4 from "../Resources/images/Mock-4.png";
import Mock5 from "../Resources/images/Mock-5.png";

const SelectedWork = () => {
  const WorkComponent = ({ title, text, tags, img, customStyle, tagStyle }) => (
    <article className={`text-silverDark ${customStyle}`}>
      <img src={img} alt="Example of work done" />
      <p className="my-4">
        <span className="text-white">{title} — </span>
        {text}
      </p>
      <div id="additionalInfo" className="flex justify-between">
        <a href="" className="text-grayMid flex h-0 pt-2">
          Website{" "}
          <UpArrow
            customStyle={{
              general: { width: 26, height: 26, fill: "none", viewBox: "-12 3 43 25" },
              color: "#686869",
            }}
          />
        </a>
        <Tag tagNames={tags} tagStyle={tagStyle} />
      </div>
    </article>
  );
  return (
    <section id="Selectedwork">
      <div className="flex justify-between mb-10">
        <h1 className="text-white font-medium not-italic text-4xl lg:text-3xl">
          Selected Work <ArrowDown color="#FD5A1E" />
        </h1>
        <p className="text-silverDark break-keep text-xs lg:text-base w-2/4">
          Lorem psum dolor sit amet, consectetur adipiscing elit. Etiam at urna ac orci ullamcorper
          pretium. Aenean facilisis id sem sit amet cursus. Vivamus non fficitur nisl. Maecenas ut
          risus porttitor lectus porttitor dapibus vel at dui. Aliquam auctor odio sit amet tortor
          mollis, a bibendum lectus volutpat. Donec eu feugiat ante.
        </p>
      </div>
      <div className="containers grid grid-rows-3 grid-col-3">
        <div className="flex justify-between">
          <WorkComponent
            title="Aro"
            text="Aro makes it easy to put down your phone so you can focus on the things that really matter."
            tags={["React", "Front-End"]}
            img={Mock1}
            customStyle="mr-20 flex flex-column"
            tagStyle="ml-1"
          />
          <WorkComponent
            title="Settle"
            text="The all-in-one platform built to help
          e-commerce brands scale seamlessly."
            tags={["Bootstrap", "Front-End"]}
            img={Mock2}
            tagStyle="ml-1"
          />
        </div>

        <div className="col-span-2">
          <WorkComponent
            title="Arcadia"
            text="A tech company empowering energy innovators and consumers to fight the climate crisis"
            tags={["React", "Front-End"]}
            img={Mock3}
            customStyle="pr-80"
            tagStyle="ml-1"
          />
        </div>

        <div className="flex  justify-between">
          <WorkComponent
            title="WeWork"
            text="Get the workspace you need, when and where you need it so you can focus on your business"
            tags={["Bootstrap", "Development"]}
            img={Mock4}
            customStyle="mr-10 flex flex-column"
            tagStyle="ml-1"
          />
          <WorkComponent
            title="Current"
            text="Focused on creating better financial outcomes for people and their unique lives."
            tags={["React", "Development"]}
            img={Mock5}
            customStyle="flex flex-column"
            tagStyle="ml-1"
          />
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
