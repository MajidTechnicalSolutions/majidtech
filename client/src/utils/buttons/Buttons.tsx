import React from "react";
import { Link } from "react-scroll";

export const ButtonPrimary = ({
  Arrow,
  text,
  customStyle,
  destination,
  type,
  customClass,
  callBack,
}) => (
  <button
    type={type}
    onSubmit={callBack}
    className={`font-normal h-8 not-italic tracking-tight border-b-4 border-majidTech text-white flex-none right-0 flex items-center justify-between gap-2 ${customClass}`}
  >
    <span className="whitespace-nowrap">
      {destination ? <Link to={destination}>{text}</Link> : text}
    </span>
    {Arrow ? <Arrow customStyle={customStyle} /> : null}
  </button>
);
