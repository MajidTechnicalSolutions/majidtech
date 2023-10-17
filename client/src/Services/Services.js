import React from "react";
import {
  MongodbCube,
  SassCube,
  JqueryCube,
  GitCube,
  GithubCube,
  JavascriptCube,
  CssCube,
  BootstrapCube,
  HtmlCube,
  NodeCube,
  ReactCube,
  ReduxCube,
  WebpackCube,
} from "../Resources/Svgs";

import { ButtonPrimary } from "../utils/buttons";

function Services() {
  return (
    <>
      <section id="Services" className="w-full h-96 flex">
        <div className="iconSet1 relative">
          <HtmlCube customStyle={{ position: "absolute", left: "1rem" }} />
          <BootstrapCube customStyle={{ position: "absolute", left: "5rem" }} />
          <CssCube customStyle={{ position: "absolute", left: "10rem" }} />
          <WebpackCube customStyle={{ position: "absolute", left: "0" }} />
          <GithubCube customStyle={{ position: "absolute", left: "0" }} />
          <GitCube customStyle={{ position: "absolute", left: "0" }} />
        </div>
        <div className="services flex flex-col justify-center items-center flex-wrap ">
          <h2 className="text-white text-4xl">
            No matter the technology or architecture – I have you covered.
          </h2>
          <p className="text-silverDark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at urna ac orci
            ullamcorper pretium. Aenean facilisis id sem sit amet cursus. Vivamus non effici nisl.
            Maecenas ut risus porttitor lectus porttitor dapibus vel at dui. Aliquam auctor odio sit
            amet tortor mollis, a bibendum lectus volutpat.
          </p>
          <ButtonPrimary text="Start a Project" customClass="text-xl" destination="Contact" />
        </div>
        <div className="iconSet2 relative">
          {" "}
          <NodeCube customStyle={{ position: "absolute", left: "0" }} />
          <ReactCube customStyle={{ position: "absolute", left: "0" }} />
          <ReduxCube customStyle={{ position: "absolute", left: "0" }} />
          <JavascriptCube customStyle={{ position: "absolute", left: "0" }} />
          <JqueryCube customStyle={{ position: "absolute", left: "0" }} />
          <SassCube customStyle={{ position: "absolute", left: "0" }} />
          <MongodbCube customStyle={{ position: "absolute", left: "0" }} />
        </div>
      </section>
      ;
    </>
  );
}

export default Services;
