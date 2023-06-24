import React from "react";
import { ArrowDown } from "../Resources/Svgs";
import Tag from "../Components/Tags";
function SelectedWork() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-white font-medium not-italic text-4xl lg:text-3xl font-modernEra">
          Selected Work <ArrowDown />
        </h1>
        <p className="text-silverDard break-keep font-modernEra text-xs lg:text-base w-2/4">
          Lorem psum dolor sit amet, consectetur adipiscing elit. Etiam at urna ac orci ullamcorper
          pretium. Aenean facilisis id sem sit amet cursus. Vivamus non fficitur nisl. Maecenas ut
          risus porttitor lectus porttitor dapibus vel at dui. Aliquam auctor odio sit amet tortor
          mollis, a bibendum lectus volutpat. Donec eu feugiat ante.
        </p>
      </div>
      <article>
        <img src="" alt="" />
        <p></p>
        <div id="additionalInfo">
          <link rel="stylesheet" href="" />
          <Tag tagNames={["React", "Development"]} />
        </div>
      </article>
      <article>
        <img src="" alt="" />
        <p></p>
      </article>
      <article>
        <img src="" alt="" />
        <p></p>
      </article>
      <article>
        <img src="" alt="" />
        <p></p>
      </article>
      <article>
        <img src="" alt="" />
        <p></p>
      </article>
    </section>
  );
}

export default SelectedWork;
