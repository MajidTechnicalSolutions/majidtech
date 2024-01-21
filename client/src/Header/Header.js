import React from "react";

import Brackets from "../Resources/images/Brackets.svg";
import { RightArrow } from "../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";

const Header = () => {
  return (
    <section className="h-screen pt-7">
      <div id="Header" className="flex justify-start items-center">
        <div className="">
          <h1 className="text-white font-medium not-italic text-4xl lg:text-8xl">
            Eat,sleep
            <br />
            <span className="text-majidTech">&lt;code&gt;</span>
            <span>,repeat</span>
          </h1>
          <p className="text-silverDark break-keep mb-7 mt-4 text-xs lg:text-base xl:w-4/5">
            I'm a creative developer with years of experience in building products and appealing web
            experiences. I've collaborated with individuals and teams to build experiences for SMEs
            and large enterprises including Wise, Google, Interswitch and Intelia.
          </p>
          <ButtonPrimary
            Arrow={RightArrow}
            text="Start a Project"
            customClass="text-xl"
            destination="Contact"
          />
        </div>
        <img
          alt="Brackets"
          className=" w-[20%] l:w-[50%] xl:w-[50%] bg-no-repeat"
          src={Brackets}
        ></img>
      </div>
    </section>
  );
};

export default Header;
