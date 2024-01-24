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
  RightArrow,
} from "../Resources/Svgs";

import PatternHex from "../Resources/images/PatternHex.svg";

import { ButtonPrimary } from "../utils/buttons";

function Services() {
  return (
    <>
      <section
        id="Services"
        className="w-full h-[36rem] flex justify-evenly my-40"
        // style={{ backgroundImage: `url(${PatternHex})` }}
      >
        <div className="iconSet1 relative">
          <HtmlCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              top: "0.5em",
              right: "5rem",
            }}
          />
          <BootstrapCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              top: "16rem",
              right: "2rem",
            }}
          />
          <CssCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              left: "3rem",
              bottom: "7rem",
            }}
          />
          <WebpackCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              bottom: "5rem",
              right: "5rem",
            }}
          />
          <GithubCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              bottom: "10rem",
              left: "2rem",
            }}
          />
          <GitCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              bottom: "0",
              right: "0",
            }}
          />
        </div>
        <div className="services flex flex-col justify-center items-center text-center flex-wrap w-[45%] z-50">
          <small className="uppercase text-majidTech"> Skills & Offered services </small>
          <h2 className="text-white text-4xl mb-2 mt-4">
            No matter the technology or architecture – I have you covered.
          </h2>
          <p className="text-silverDark mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at urna ac orci
            ullamcorper pretium. Aenean facilisis id sem sit amet cursus. Vivamus non effici nisl.
            Maecenas ut risus porttitor lectus porttitor dapibus vel at dui. Aliquam auctor odio sit
            amet tortor mollis, a bibendum lectus volutpat.
          </p>
          <ButtonPrimary
            text="Start a Project"
            customClass="text-xl"
            destination="Contact"
            Arrow={RightArrow}
          />
        </div>
        <div className="iconSet2 relative">
          {" "}
          <NodeCube
            customStyle={{
              backgroundColor: "black",
              position: "absolute",
              bottom: "1rem",
              right: "3rem",
            }}
          />
          <ReactCube
            customStyle={{
              backgroundColor: "black",
              position: "absolute",
              top: "22rem",
              left: "3rem",
            }}
          />
          <ReduxCube
            customStyle={{
              backgroundColor: "black",
              position: "absolute",
              bottom: "11rem",
              right: "8rem",
            }}
          />
          <JavascriptCube
            customStyle={{
              backgroundColor: "black",
              position: "absolute",
              top: "2rem",
              right: "rem",
            }}
          />
          <JqueryCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              top: "2rem",
              right: "9rem",
            }}
          />
          <SassCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              top: "5rem",
              right: "4rem",
            }}
          />
          <MongodbCube
            customStyle={{
              backgroundColor: "black",
              position: "relative",
              bottom: "0",
              left: "3rem",
            }}
          />
        </div>
      </section>
    </>
  );
}

export default Services;
