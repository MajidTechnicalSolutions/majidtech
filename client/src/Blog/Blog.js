import React, { useState } from "react";

import blogimage1 from "../Resources/images/blogimage1.png";
import blogimage2 from "../Resources/images/blogimage2.png";
import blogimage3 from "../Resources/images/blogimage3.png";

import Tags from "../utils/Tags";

const Blog = () => {
  const [data, setData] = useState([
    {
      image: `${blogimage1}`,
      tag: ["twitter", "Wireframes"],
      title: "12.08.22 — Why you should not forget wireframes",
      details:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non ante neque. Aliquam auctor, tortor eu eleifend scelerisque, quam purus pretium neque, nec tristique ex lacus pharetra.",
    },
    {
      image: `${blogimage2}`,
      tag: ["blog", "webflow"],
      title: "12.08.22 — The Best 19 Webflow shortcuts for faster development workflow",
      details:
        "Phasellus dapibus mauris ut diam ultricies, vitae tincidunt ipsum luctus. Cras faucibus ex ac ligula sollicitudin lacinia. Nulla nunc mauris, gravida in eleifend sed, aliquam in massa. Integer luctus gravida tellus, vitae tristique velit maximus sed.",
    },
    {
      image: `${blogimage3}`,
      tag: ["twitter", "webflow"],
      title: "12.08.22 — 27 Tips for great user experience",
      details:
        "Nam elementum porttitor elit sed accumsan. Nunc lobortis volutpat urna, eget fermentum sem. Fusce laoreet nec nisi in lacinia. Quisque at lacus sapien consequat velit non.",
    },
    {
      image: `${blogimage1}`,
      tag: ["blog", "webflow"],
      title: "12.08.22 — Why you should not forget wireframes",
      details:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non ante neque. Aliquam auctor, tortor eu eleifend scelerisque, quam purus pretium neque, nec tristique ex lacus pharetra dui.",
    },
  ]);

  return (
    <section id="Blog" className="w-full h-[36rem] p-20 flex justify-evenly my-40 flex-column">
      <h1 className="text-4xl text-white mb-5">From The Blog</h1>
      <div className="blog-feed flex flex-row">
        {data.map((item) => {
          return (
            <article className="w-full h-full justify-between">
              <img src={item.image} className="w-96" alt="Example of work done" />
              <Tags tagNames={item.tag} tagStyle="mt-4 mr-1" />
              <p className="my-4 text-white">{item.title}</p>
              <div id="additionalInfo" className="flex justify-between">
                <p className="text-silverDark mb-8">{item.details}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
