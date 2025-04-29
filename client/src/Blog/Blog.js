import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import useFetch from "../utils/useFetch";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Modal } from "../utils/Modals/Modals";

import Tags from "../utils/Tags";

const Blog = () => {
  const url = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_DEF;
  const { data: blogPost = [], pending: pendingBlogpost } = useFetch(`${url}/blog`);
  const { data: imageObject } = useFetch(`${url}/images`);

  const [autoScroll, setAutoScroll] = useState(true);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const ref = useRef();

  // image efficiency ?
  // make blog post searchable
  // allow comments on each post

  const getRandomImage = () => {
    if (!imageObject?.length) return '';
    const urlObject = imageObject.map((el) => el.urls.full);
    return urlObject[Math.floor(Math.random() * urlObject.length)];
  };

  const handleButtonClick = () => {
    setModalOpen(false);
    setAutoScroll(true); // Restore auto-scroll when modal closes
  };

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
    e.preventDefault();
    setAutoScroll(false);
    setCurrentBlog(item);
    setModalOpen(true);
  };

  if (pendingBlogpost) {
    return <CircularProgress style={{ color: "#FD5A1E" }} />;
  }

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
          infinite={true}
          autoPlay={autoScroll}
          autoPlaySpeed={1000}
          transitionDuration={5000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {blogPost.map((item) => (
            <article
              key={item.id || Math.random().toString()}
              ref={ref}
              onClick={(e) => openPost(e, item)}
              className="w-full h-full justify-between p-4 rounded-lg"
            >
              <img src={getRandomImage()} className="w-full" alt={item.title || "Blog post image"} />
              <Tags tagNames={item.tags} tagStyle="mt-4 mr-1" />
              <p className="my-4 text-white">{item.title}</p>
              <div id="additionalInfo" className="flex justify-between">
                <p className="text-silverDark mb-8">{item.desc}</p>
              </div>
            </article>
          ))}
        </Carousel>

        {modalOpen &&
          createPortal(
            <Modal
              closeModal={handleButtonClick}
              onSubmit={handleButtonClick}
              data={currentBlog}
              getImage={getRandomImage}
            />,
            document.body
          )}
      </div>
    </section>
  );
};

export default Blog;
