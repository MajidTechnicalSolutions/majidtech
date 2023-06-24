import React from "react";
import Navbar from "./Navbar";

import Brackets from "../Resources/images/Brackets.svg";
import { RightArrow } from "../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";

const Header = () => {
  const Heading = () => {
    return (
      <div id="Header" className="flex justify-start items-center">
        <div className="">
          <h1 className="text-white font-medium not-italic text-4xl lg:text-8xl font-modernEra">
            Eat,sleep
            <br />
            <span className="text-majidTech">&lt;code&gt;</span>
            <span>,repeat</span>
          </h1>
          <p className="text-silverDard break-keep font-modernEra mb-7 mt-4 text-xs lg:text-base xl:w-4/5">
            I'm a creative developer with years of experience in building products and appealing web
            experiences. I've collaborated with individuals and teams to build experiences for SMEs
            and large enterprises including Wise, Google, Interswitch and Intelia.
          </p>
          <ButtonPrimary Arrow={RightArrow} text="Start a Project" customClass="text-xl" />
        </div>
        <img alt="Brackets" className=" w-[50%] xl:w-[100%] bg-no-repeat" src={Brackets}></img>
      </div>
    );
  };
  return (
    <section className="h-screen pt-7">
      <Navbar />
      <Heading />
    </section>
  );
};

export default Header;
