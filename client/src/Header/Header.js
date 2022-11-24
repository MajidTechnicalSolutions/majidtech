import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  const Heading = () => {
    return (
       <div className='absolute top-[287px] left-[240px] height-[464px] width-[708px]'>
          <h1 className='text-white font-medium absolute not-italic text-8xl'>
            Eat,sleep<br/>
            <span className='text-majidTech'>&lt;code&gt;</span>,repeat
          </h1>
      </div>
    )
  }
  return (
    <div className='header w-[1439px] z-[999999] h-[772px] absolute right-[50%] translate-x-1/2 top-12'>
     <Navbar/> 
     <Heading/> 
    </div>
  );
};

export default Header;
