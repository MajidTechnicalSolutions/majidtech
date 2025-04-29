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

function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section id="Services" className="w-full flex justify-evenly">
        <div className={`iconSet1 relative ${isMobile ? 'hidden' : ''}`}>
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
