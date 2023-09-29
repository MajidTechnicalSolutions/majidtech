import React from "react";

interface TagsProps {
  tagNames: string[];
}

const Tags = ({ tagNames }: TagsProps): JSX.Element => {
  return (
    <div className="flex">
      {tagNames.map((tagName) => (
        <span className="bg-tagDarkOp text-majidTech ml-1 rounded p-1.5 justify-between">
          {tagName}
        </span>
      ))}
    </div>
  );
};

export default Tags;
