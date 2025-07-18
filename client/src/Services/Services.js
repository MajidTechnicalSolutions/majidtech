import React, { useState, useEffect } from "react";
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
} from "../utils/Resources/Svgs";

import { ButtonPrimary } from "../utils/buttons";
import useIsMobile from "../hooks/useIsMobile";

function Services() {
 const isMobile = useIsMobile();


  return (
    <>
      <section id="Services" className="w-full flex justify-evenly">
        <div className={`iconSet1 relative ${isMobile ? 'hidden' : ''}`}>
          <div className="float-animation">
            <HtmlCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                top: "0.5em",
                right: "5rem",
              }}
            />
          </div>
          <div className="float-animation-delay-1">
            <BootstrapCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                top: "16rem",
                right: "2rem",
              }}
            />
          </div>
          <div className="float-animation-slow">
            <CssCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                left: "12rem",
                bottom: "7rem",
              }}
            />
          </div>
          <div className="float-animation-delay-2">
            <WebpackCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                bottom: "5rem",
                right: "5rem",
              }}
            />
          </div>
          <div className="float-animation-gentle">
            <GithubCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                bottom: "10rem",
                left: "9rem",
              }}
            />
          </div>
          <div className="float-animation-delay-3">
            <GitCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                bottom: "5rem",
                right: "0",
              }}
            />
          </div>
        </div>
        <div className="services flex flex-col justify-center items-center text-center flex-wrap w-[45%]">
          <small className="uppercase text-majidTech"> Skills & Offered services </small>
          <h2 className="text-white text-4xl mb-2 mt-4">
            No matter the technology or architecture – I have you covered.
          </h2>
          <p className="text-silverDark mb-8">
            Whether you are envisioning a sleek and responsive website, a robust e-commerce
            platform, or a dynamic web application, we thrive on embracing diverse technologies and
            architectures. Our seasoned team of developers is well-versed in the latest industry
            trends, ensuring that your digital presence not only meets but exceeds the ever-evolving
            standards. From classic HTML/CSS designs to cutting-edge frameworks and cloud-based
            solutions, we tailor our services to your unique needs. Partner with us, and let's turn
            your digital dreams into reality, irrespective of the technological landscape you wish
            to explore.
          </p>
          <ButtonPrimary
            text="Start a Project"
            customClass="text-xl"
            destination="Contact"
            Arrow={RightArrow}
          />
        </div>
        <div className={`iconSet2 relative ${isMobile ? 'hidden' : ''}`}>
          {" "}
          <div className="float-animation-delay-1">
            <NodeCube
              customStyle={{
                backgroundColor: "black",
                position: "absolute",
                bottom: "-5rem",
                right: "3rem",
              }}
            />
          </div>
          <div className="float-animation-gentle">
            <ReactCube
              customStyle={{
                backgroundColor: "black",
                position: "absolute",
                top: "22rem",
                left: "3rem",
              }}
            />
          </div>
          <div className="float-animation">
            <ReduxCube
              customStyle={{
                backgroundColor: "black",
                position: "absolute",
                bottom: "-5rem",
                right: "11rem",
              }}
            />
          </div>
          <div className="float-animation-slow">
            <JavascriptCube
              customStyle={{
                backgroundColor: "black",
                position: "absolute",
                top: "5rem",
                right: "rem",
              }}
            />
          </div>
          <div className="float-animation-delay-3">
            <JqueryCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                top: "2rem",
                right: "20rem",
              }}
            />
          </div>
          <div className="float-animation-delay-2">
            <SassCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                top: "9rem",
                right: "9rem",
              }}
            />
          </div>
          <div className="float-animation-gentle">
            <MongodbCube
              customStyle={{
                backgroundColor: "black",
                position: "relative",
                bottom: "0",
                left: "3rem",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
