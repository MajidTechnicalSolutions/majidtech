import React from "react";
import {Logo, GetArrow} from "../../Resources/Svgs";

import { Link, NavLink } from "react-router-dom";

const listItems = ['Selected Work', 'services', 'Testimonials', 'Blog', 'Contact'];

const ResumeButton =()=> (<button className="font-normal h-8 not-italic tracking-tight ml-4 border-b-4 border-majidTech text-silverLight flex-none absolute top-[.8rem] right-0">Download Resume<GetArrow className='inline'/></button>);
function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Logo/>
      <ul className="flex flex-row items-center h-4 p-0 gap-10 w-[629px] absolute right-40 font-modernEra not-italic">
        {listItems.map((item, index) => (<li to={`/${item}`} key={index + '-id'} className="font-normal cursor-pointer h-4 not-italic tracking-tight text-silverLight flex-none">{item}</li>))}
      </ul>
      <ResumeButton/>
    </nav>
  );
}

export default Navbar;
