import React from "react";
import { ButtonPrimary } from "../utils/buttons";
import { BoxBackgroundSm } from "../Resources/Svgs";

function Services() {
  return (
    <>
      <section id="Services" className="w-full h-96 flex">
        <div className="iconSet1">
          {" "}
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
        </div>
        <div className="services flex flex-col justify-center items-center ">
          <h3 className="text-white">
            No matter the technology or architecture – I have you covered.
          </h3>
          <p className="text-silverDark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at urna ac orci
            ullamcorper pretium. Aenean facilisis id sem sit amet cursus. Vivamus non effici nisl.
            Maecenas ut risus porttitor lectus porttitor dapibus vel at dui. Aliquam auctor odio sit
            amet tortor mollis, a bibendum lectus volutpat.
          </p>
          <ButtonPrimary text="Start a Project" customClass="text-xl" destination="Contact" />
        </div>
        <div className="iconSet2">
          {" "}
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
          <BoxBackgroundSm />
        </div>
      </section>
      ;
    </>
  );
}

export default Services;
