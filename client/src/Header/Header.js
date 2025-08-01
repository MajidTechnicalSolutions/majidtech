import React from "react";

import Brackets from "../utils/Resources/images/Brackets.svg";
import { RightArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";

const Header = () => {
  return (
    <section className="mt-56 mb-80">
      <div id="Header" className="flex justify-start items-center">
        <div className="">
          <h1 className="text-white font-medium not-italic text-3xl lg:text-[6rem] lg:leading-none">
            Eat,sleep
            <br />
            <span className="text-majidTech">&lt;code&gt;</span>
            <span>,repeat</span>
          </h1>
          <p className="text-silverDark break-keep mb-7 mt-4 lg:text-base xl:w-4/5">
            Majid Technical solutions strives for creative development in all of our work, with
            years of experience in building responsive, modern, coherent web applications.
            Experienced in collaborating with SMEs as well as large enterprises including Macy's,
            Verizon, Cengage Group and Home Depot.
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
          className="hidden xl:block xl:w-[35%] bg-no-repeat"
          src={Brackets}
        ></img>
      </div>
    </section>
  );
};

export default Header;
