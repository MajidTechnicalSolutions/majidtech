import React from "react";
import Navbar from "./Navbar";

import Brackets from "../Resources/images/Brackets.svg";
import { RightArrow } from "../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
// fix header item alignment
// fix header hight
const Header = () => {
  const Heading = () => {
    return (
      <section id="Header" className="flex justify-start">
        <div className="">
          <h1 className="text-white font-medium not-italic text-4xl lg:text-8xl">
            Eat, sleep
            <br />
            <span className="text-majidTech">&lt;code&gt;</span>
            <span>, repeat</span>
          </h1>
          <p className="text-silverDard break-keep font-modernEra md:my-4 lg:my-7 text-xs lg:text-xl">
            I'm a creative developer with years of experience in building products and appealing web
            experiences. I've collaborated with individuals and teams to build experiences for SMEs
            and large enterprises including Wise, Google, Interswitch and Intelia.
          </p>
          <ButtonPrimary Arrow={RightArrow} text="Start a Project" customClass="text-xl" />
        </div>
        <img alt="Brackets" className="h-[50%] bg-no-repeat" src={Brackets}></img>
      </section>
    );
  };
  return (
    <div className="z-[999999] h-[772px] m-auto w-9/12 pt-7">
      <Navbar />
      <Heading />
    </div>
  );
};

export default Header;
