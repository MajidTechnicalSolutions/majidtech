// @ts-ignore
import React from "react";
import { ArrowDown, UpArrow } from "../Resources/Svgs";
import Tag from "../utils/Tags";
// import Mock1 from "../Resources/images/Mock.png";

const SelectedWork = () => {
  return (
    <section id="Selectedwork">
      <div className="flex justify-between">
        <h1 className="text-white font-medium not-italic text-4xl lg:text-3xl">
          Selected Work <ArrowDown color="#FD5A1E" />
        </h1>
        <p className="text-silverDard break-keep text-xs lg:text-base w-2/4">
          Lorem psum dolor sit amet, consectetur adipiscing elit. Etiam at urna ac orci ullamcorper
          pretium. Aenean facilisis id sem sit amet cursus. Vivamus non fficitur nisl. Maecenas ut
          risus porttitor lectus porttitor dapibus vel at dui. Aliquam auctor odio sit amet tortor
          mollis, a bibendum lectus volutpat. Donec eu feugiat ante.
        </p>
      </div>
      <article className="w-96 h-[26rem] flex flex-column justify-between text-silverDard">
        {/* <img src={Mock1} alt="Mock" /> */}
        <p>
          <span className="text-white">Settle — </span>The all-in-one platform built to help
          e-commerce brands scale seamlessly.
        </p>
        <div id="additionalInfo" className="flex justify-between">
          <a href="" className="text-grayMid flex h-0">
            Website{" "}
            <UpArrow
              customStyle={{
                general: { width: 26, height: 26, fill: "none", viewBox: "-12 3 43 25" },
                color: "#686869",
              }}
            />
          </a>
          <Tag tagNames={["React", "Development"]} />
        </div>
      </article>
    </section>
  );
};

export default SelectedWork;
