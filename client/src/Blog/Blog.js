"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import useFetch from "../utils/useFetch";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Modal } from "../utils/Modals/Modals";

import Tags from "../utils/Tags";

// Custom arrow components with majidTech color
const CustomLeftArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous posts"
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-[100] hover:scale-110 hover:bg-opacity-90 active:scale-95 active:bg-[#FD5A1E] rounded-full p-2 transition-all duration-150 shadow-lg"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', border: '2px solid #FD5A1E' }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#FD5A1E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-150"
      />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next posts"
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-[100] hover:scale-110 hover:bg-opacity-90 active:scale-95 active:bg-[#FD5A1E] rounded-full p-2 transition-all duration-150 shadow-lg"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', border: '2px solid #FD5A1E' }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="#FD5A1E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-150"
      />
    </svg>
  </button>
);

const Blog = () => {
  // The blog lives on the Majid Tech API, proxied at /blog-api (next.config.mjs).
  const url = "/blog-api";
  const { data: blogPost = [], pending: pendingBlogpost } = useFetch(`${url}/blog`);
  const { data: imageObject } = useFetch(`${url}/images`);

  const [autoScroll, setAutoScroll] = useState(true);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const ref = useRef();

  // image efficiency ?
  // make blog post searchable
  // allow comments on each post

  // Memoize image selection to prevent re-fetching on each render
  const getRandomImage = useCallback(() => {
    if (!imageObject?.length) return '';
    const urlObject = imageObject.map((el) => el.urls.full);
    return urlObject[Math.floor(Math.random() * urlObject.length)];
  }, [imageObject]);

  // Pre-select images for each blog post to prevent re-randomization
  const blogPostsWithImages = useMemo(() => {
    return blogPost.map(post => ({
      ...post,
      imageUrl: getRandomImage()
    }));
  }, [blogPost, getRandomImage]);

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
    return (
      <span role="status" aria-label="Loading posts" className="inline-block w-10 h-10 rounded-full border-4 border-majidTech/30 border-t-majidTech animate-spin" />
    );
  }

  return (
    <section
      id="Blog"
      className="w-full px-[12.5%] max-[1200px]:flex-col justify-evenly flex-col"
    >
      <h1 className="text-4xl text-white mb-12">From The Blog</h1>

      <div className="blog-feed relative overflow-visible">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={autoScroll}
          autoPlaySpeed={3000}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {blogPostsWithImages.map((item) => (
            <article
              key={item.id || item.title}
              ref={ref}
              onClick={(e) => openPost(e, item)}
              className="w-full h-full justify-between p-6 rounded-lg"
            >
              <img 
                src={item.imageUrl} 
                className="w-full" 
                alt={item.title || "Blog post image"}
                loading="lazy"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <Tags tagNames={item.tags} tagStyle="mt-6 mr-1" />
              <p className="my-6 text-white">{item.title}</p>
              <div id="additionalInfo" className="flex justify-between">
                <p className="text-silverDark mb-20">{item.desc}</p>
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
