import React from "react";

const Tags = ({ tagNames, tagStyle }) => {
  return (
    <div className="flex">
      {tagNames.map((tagName) => (
        <span className={`bg-tagDark text-majidTech rounded p-1.5 justify-between ${tagStyle}`}>
          {tagName}
        </span>
      ))}
    </div>
  );
};

export default Tags;
