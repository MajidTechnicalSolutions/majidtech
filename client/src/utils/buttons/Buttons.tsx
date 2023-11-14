import React from "react";
import { Link } from "react-scroll";

export const ButtonPrimary = ({ Arrow, text, customStyle, destination, type, customClass }) => (
  <button
    type={type}
    className={`font-normal h-8 not-italic tracking-tight border-b-4 border-majidTech text-white flex-none right-0 ${customClass}`}
  >
    {" "}
    <Link to={destination}>{text}</Link>
    {Arrow ? <Arrow customStyle={customStyle} /> : null}
  </button>
);
