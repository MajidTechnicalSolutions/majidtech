import React from "react";

function Tags({ tagNames }) {
  return (
    <div className="flex">
      {tagNames.map((tagName) => (
        <span className="bg-tagDarkOp text-majidTech ml-1 rounded p-1.5 justify-between">
          {tagName}
        </span>
      ))}
    </div>
  );
}

export default Tags;
