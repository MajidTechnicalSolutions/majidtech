import React from "react";

function Tags({ tagNames }) {
  return tagNames.map((tagName) => <div className="bg-tagDark text-majidTech">{tagName}</div>);
}

export default Tags;
