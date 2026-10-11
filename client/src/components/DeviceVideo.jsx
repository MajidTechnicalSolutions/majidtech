"use client";

import React, { useEffect, useRef, useState } from "react";

// A device (phone or laptop) playing a short silent loop of the project in use.
// It only loads and plays while on screen. When the browser won't autoplay
// (Safari in Low Power Mode, a "never auto-play" setting), Safari plays the same
// MP4 as an image instead; elsewhere, or when the viewer has asked for reduced
// motion, it stays on its poster frame with a play button. `sizeClass` overrides
// the default width and aspect ratio.
const DeviceVideo = ({ src, poster, device, title, sizeClass }) => {
  const ref = useRef(null);
  // null while the video autoplays; "image" when Safari blocks autoplay (it can
  // still play an MP4 as an image); "tap" when neither works or motion is reduced.
  const [fallback, setFallback] = useState(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    // React sets `muted` only as a property; Safari also wants the attribute
    // before it will autoplay.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      // Only known in the browser, so it can't be the initial state (the
      // server-rendered page has to match the first render).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFallback("tap");
      return undefined;
    }
    // Safari in Low Power Mode can leave play() pending or pause the video
    // straight away instead of rejecting, so check it actually started.
    let check;
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(check);
        if (entry.isIntersecting) {
          const blocked = () => setFallback((f) => f || "image");
          video.play().catch(blocked);
          check = setTimeout(() => {
            if (video.paused || video.currentTime === 0) blocked();
          }, 2000);
        } else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => {
      clearTimeout(check);
      observer.disconnect();
    };
  }, []);
  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      video.muted = true;
      video.play().catch(() => {});
    }
    else video.pause();
  };
  const size = sizeClass || (device === "phone"
    ? "w-[290px] lg:w-[352px] aspect-[528/1080]"
    : "w-full aspect-[1140/706]");
  return (
    <div className={`relative ${size}`}>
      <video
        ref={ref}
        className="block w-full h-full"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${title} in use`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {fallback === "image" && (
        <img
          className="absolute inset-0 w-full h-full"
          src={src}
          alt={`${title} in use`}
          onError={() => setFallback("tap")}
        />
      )}
      {fallback === "tap" && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`${playing ? "Pause" : "Play"} ${title} demo`}
          className={`absolute ${device === "phone" ? "bottom-[5%] right-[9%]" : "bottom-[15%] right-[11%]"} w-11 h-11 rounded-full bg-black/70 ring-1 ring-white/30 flex items-center justify-center hover:bg-black transition-colors duration-200`}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" fill="#FD5A1E" /><rect x="8.5" y="1" width="3.5" height="12" fill="#FD5A1E" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9.5-5.5z" fill="#FD5A1E" /></svg>
          )}
        </button>
      )}
    </div>
  );
};

export default DeviceVideo;
