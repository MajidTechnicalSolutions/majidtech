import React from 'react';
import { Logo, UpArrow } from '../../Resources/Svgs';
import { ButtonPrimary }  from '../../utils/buttons';

import { Link } from 'react-router-dom';

const listItems = ['Selected Work', 'services', 'Testimonials', 'Blog'];

function Navbar(): JSX.Element {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Logo customStyle={{paddingTop: '0.5rem'}}/>
      <ul className="flex flex-row items-center h-4 p-0 space-x-5 right-40 font-modernEra not-italic">
        {listItems.map((item, index) => (
          <li
            key={index + '-id'}
            className="font-normal cursor-pointer h-4 not-italic tracking-tight text-silverLight flex-none"
          >
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
        <ButtonPrimary Arrow={UpArrow} text='Contact'/>
      </ul>
    </nav>
  );
}

export default Navbar;
