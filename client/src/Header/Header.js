import React from "react";
import Navbar from "./Navbar";

import Brackets from "../Resources/images/Brackets.svg";
import { RightArrow } from "../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";

const Header = () => {
  const Heading = () => {
    return (
      <section id="Header" className="relative top-[210px] left-0">
        <div className="w-3/6">
          <h1 className="text-white font-medium not-italic text-2xl lg:text-8xl">
            Eat, sleep
            <br />
            <span className="text-majidTech">&lt;code&gt;</span>, repeat
          </h1>
          <p className="text-silverDard break-keep font-modernEra mt-7 text-xs lg:text-xl">
            I'm a creative developer with years of experience in building products and appealing web
            experiences. I've collaborated with individuals and teams to build experiences for SMEs
            and large enterprises including Wise, Google, Interswitch and Intelia.
          </p>
        </div>
        <img
          alt="Brackets"
          className="absolute right-0 top-[-5rem] h-[10%] lg:h-[50%] bg-no-repeat"
          src={Brackets}
        ></img>
        <ButtonPrimary Arrow={RightArrow} text="Start a Project" customClass="text-xl" />
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
