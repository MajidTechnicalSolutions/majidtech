import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blogimage1 from "../Resources/images/blogimage1.png";
import blogimage2 from "../Resources/images/blogimage2.png";
import blogimage3 from "../Resources/images/blogimage3.png";

import Tags from "../utils/Tags";

const Blog = () => {
  // get random image for each blog post
  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    const fetchImage = async () => {
      let response = await fetch(`https://api.unsplash.com/photos/?client_id=${key}`);
      let data = await response.json();
      console.log(data);
    };
    fetchImage();
  }, []);
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

  // make each blog post expandable
  // make blog post searchable
  // allow comments on each post
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      id="Blog"
      className="w-full h-[36rem] pl-[12.5%] flex justify-evenly my-52 flex-column"
    >
      <h1 className="text-4xl text-white mb-5">From The Blog</h1>

      <div className="blog-feed">
        <Carousel
          // centerMode={true}
          // swipeable={true}
          // draggable={true}
          responsive={responsive}
          // ssr={false} // means to render carousel on server-side.
          // infinite={true}
          // // autoPlay={deviceType !== "mobile" ? true : false}
          // // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((item) => {
            return (
              <article className="w-full h-full justify-between pr-8">
                <img src={item.image} className="w-full" alt="Example of work done" />
                <Tags tagNames={item.tag} tagStyle="mt-4 mr-1" />
                <p className="my-4 text-white">{item.title}</p>
                <div id="additionalInfo" className="flex justify-between">
                  <p className="text-silverDark mb-8">{item.details}</p>
                </div>
              </article>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Blog;
