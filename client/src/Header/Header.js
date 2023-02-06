import React from 'react';
import Navbar from './Navbar';

import { Brackets } from '../Resources/Svgs';

const Header = () => {
  const Heading = () => {
    return (
      <section id="Header" className="relative top-[287px] left-0">
        <div className="w-3/6">
          <h1 className="text-white font-medium not-italic text-8xl">
            Eat, sleep
            <br />
            <span className="text-majidTech">&lt;code&gt;</span>, repeat
          </h1>
          <p className="text-silverDard break-keep font-modernEra mt-6 text-xl">
            I'm a creative developer with years of experience in building products and appealing web
            experiences. I've collaborated with individuals and teams to build experiences for SMEs
            and large enterprises including Wise, Google, Interswitch and Intelia.
          </p>
        </div>
      </section>
    );
  };
  return (
    <div className="z-[999999] h-[772px] m-auto w-9/12">
      <Navbar />
      <Heading />
    </div>
  );
};

export default Header;
