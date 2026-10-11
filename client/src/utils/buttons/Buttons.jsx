"use client";

import React from "react";

// The site's main call to action: white text over an orange underline.
// With `destination`, clicking it scrolls to the element with that id
// (e.g. "Contact") on the current page.
export const ButtonPrimary = ({
  Arrow,
  text,
  customStyle,
  destination,
  type = "button",
  customClass,
  callBack,
}) => {
  const scrollToDestination = () => {
    document.getElementById(destination)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      type={type}
      onSubmit={callBack}
      onClick={destination ? scrollToDestination : undefined}
      className={`font-normal h-8 not-italic tracking-tight border-b-4 border-majidTech text-white flex-none right-0 flex items-center justify-between gap-2 ${customClass}`}
    >
      <span className="whitespace-nowrap">{text}</span>
      {Arrow ? <Arrow customStyle={customStyle} /> : null}
    </button>
  );
};
