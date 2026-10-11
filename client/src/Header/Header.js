"use client";

import React from "react";

const Brackets = "/images/Brackets.svg";
import { RightArrow } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import HeroAvatar, { AVATAR_ON } from "../HeroAvatar";

const Header = () => {
  return (
    <section id="home" className="relative mt-56 mb-80">
      <div id="Header" className="flex justify-start items-center">
        <div className="relative z-10">
          <h1 className="text-white font-medium not-italic text-3xl lg:text-[6rem] lg:leading-none">
            Eat,sleep
            <br />
            <span className="text-majidTech">&lt;code&gt;</span>
            <span>,repeat</span>
          </h1>
          <p className="text-silverDark break-keep mb-16 mt-6 lg:text-base xl:w-4/5">
            Majid Technical solutions strives for creative development in all of our work, with
            years of experience in building responsive, modern, coherent web applications.
            Experienced in collaborating with SMEs as well as large enterprises including Macy&apos;s,
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
          className="hidden xl:block xl:w-[35%] bg-no-repeat relative z-10"
          src={Brackets}
        ></img>
      </div>
      {AVATAR_ON && <HeroAvatar />}
    </section>
  );
};

export default Header;
