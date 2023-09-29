import React from "react";

interface ButtonPrimaryProps {
  Arrow: any;
  text: any;
  customStyle: any;
}

export const ButtonPrimary = ({ Arrow, text, customStyle }: ButtonPrimaryProps): JSX.Element => (
  <button
    className={`font-normal h-8 not-italic tracking-tight border-b-4 border-majidTech text-white flex-none right-0`}
  >
    {text}
    <Arrow customStyle={customStyle} />
  </button>
);
