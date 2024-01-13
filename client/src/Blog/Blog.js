import React from "react";
import useFetch from "../utils/useFetch";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Tags from "../utils/Tags";

const Blog = () => {
  const { data: blogPost } = useFetch(`http://localhost:8000/api/blog`);
  let { data: imageObject } = useFetch(`http://localhost:8000/api/images`);

  // image efficiency ?
  const getRandomImage = () => {
    let image;
    let urlObject;
    if (imageObject) {
      urlObject = imageObject.map((el) => el.urls.full);
      image = urlObject[Math.floor(Math.random() * urlObject.length)];
    }
    return image;
  };

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
          swipeable={true}
          draggable={true}
          responsive={responsive}
          // ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          // customTransition="all .5"
          transitionDuration={5000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {blogPost.map((item) => {
            return (
              <article className="w-full h-full justify-between pr-8">
                <img src={getRandomImage()} className="w-full" alt="Example of work done" />
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
