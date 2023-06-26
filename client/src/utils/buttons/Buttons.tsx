import React from "react";
export const ButtonPrimary = ({ Arrow, text, customClass }): JSX.Element => (
  <button
    className={`${customClass} font-normal h-8 not-italic tracking-tight border-b-4 border-majidTech text-white flex-none right-0`}
  >
    {text}
    <Arrow
      customStyle={{
        general: {
          width: 26,
          height: 26,
          viewBox: "-7 -1 30 25",
        },
        color: "#fff",
      }}
    />
  </button>
);
