import React, { useEffect, useRef, useState } from "react";
import useFetch from "../utils/useFetch";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Tags from "../utils/Tags";

const Blog = () => {
  const url = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_DEF;
  const { data: blogPost } = useFetch(`${url}/blog`);
  let { data: imageObject } = useFetch(`${url}/images`);

  const [autoScroll, setAutoScroll] = useState(true);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [activeClass, setActiveClass] = useState(false);

  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    if (showModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [showModal]);

  // image efficiency ?
  const getRandomImage = () => {
    let image, urlObject;
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

  const openPost = (e, item) => {
    setAutoScroll(false);
    setCurrentBlog(item);
    // setShowModal(true);
    setActiveClass(true);
  };

  const closePost = () => {
    setShowModal(false);
    setActiveClass(false);
  };

  const PostModal = (toOpen) => {
    return currentBlog ? (
      <dialog className="blogModal" ref={ref}>
        <button onClick={closePost}> x </button>
        <div className="w-full h-full justify-between p-4 rounded-lg bg-tagDark">
          <img src={getRandomImage()} className="w-full" alt="Example of work done" />
          <Tags tagNames={currentBlog.tags} tagStyle="mt-4 mr-1" />
          <p className="my-4 text-white">{currentBlog.title}</p>
          <div id="additionalInfo" className="flex justify-between">
            <p className="text-silverDark mb-8">{currentBlog.desc}</p>
          </div>
        </div>
      </dialog>
    ) : null;
  };

  // click on post background change & post expands
  // click background changes to tag background
  // access current element
  // then: post should be come removed from of page, background expand, and is centered use dialog
  // then: details, image, & tag should realign and post should show fully and be scrollable in its on box
  // last: x in top corner to close post or click out side post.

  return (
    <section
      id="Blog"
      className="w-full pl-[12.5%] max-[1200px]:flex-col justify-evenly flex-column"
    >
      <h1 className="text-4xl text-white mb-5">From The Blog</h1>

      <div className="blog-feed">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          // ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={autoScroll}
          autoPlaySpeed={1000}
          // customTransition="all .5"
          transitionDuration={5000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {blogPost.map((item, index) => {
            let addClass = activeClass ? "bg-tagDark" : "";
            return (
              <article
                ref={ref2}
                onClick={(e) => openPost(e, item)}
                className={`w-full h-full justify-between p-4 rounded-lg ${addClass}`}
              >
                <img src={getRandomImage()} className="w-full" alt="Example of work done" />
                <Tags tagNames={item.tags} tagStyle="mt-4 mr-1" />
                <p className="my-4 text-white">{item.title}</p>
                <div id="additionalInfo" className="flex justify-between">
                  <p className="text-silverDark mb-8">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </Carousel>
        <PostModal />
      </div>
    </section>
  );
};

export default Blog;
