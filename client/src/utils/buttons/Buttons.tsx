import React from 'react';
export const ButtonPrimary = ({Arrow, text, customClass}): JSX.Element => (
    <button className={`${customClass} font-normal h-8 not-italic tracking-tight border-b-4 border-majidTech text-white flex-none top-[.8rem] right-0`}>
      {text}
      <Arrow className="inline" />
    </button>
  );