import React from "react";
import { ButtonPrimary } from "../utils/buttons";

function Services() {
  return (
    <>
      <section id="Services">
        <div className="iconSet1"></div>
        <div className="services">
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
        <div className="iconSet2"> </div>
      </section>
      ;
    </>
  );
}

export default Services;
