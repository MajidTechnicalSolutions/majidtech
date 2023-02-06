import React from 'react';
import { Logo, GetArrow } from '../../Resources/Svgs';

import { Link } from 'react-router-dom';

const listItems = ['Selected Work', 'services', 'Testimonials', 'Blog', 'Contact'];

const ResumeButton = (): JSX.Element => (
  <button className="font-normal h-8 not-italic tracking-tight ml-4 border-b-4 border-majidTech text-white flex-none top-[.8rem] right-0">
    Download Resume
    <GetArrow className="inline" />
  </button>
);
function Navbar(): JSX.Element {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Logo />
      <ul className="flex flex-row items-center h-4 p-0 space-x-5 w-[629px] absolute right-40 font-modernEra not-italic">
        {listItems.map((item, index) => (
          <li
            key={index + '-id'}
            className="font-normal cursor-pointer h-4 not-italic tracking-tight text-silverLight flex-none"
          >
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
        <ResumeButton />
      </ul>
    </nav>
  );
}

export default Navbar;
