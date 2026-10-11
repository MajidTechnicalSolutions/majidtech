"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
const HomeVoice = "/avatar/home.m4a";

// The avatar of Majid in the home page hero: large, centred behind the text,
// fading into the background at its edges, with a caption bar underneath.
// It greets the visitor while the hero is on screen and stops when they
// scroll away. Sound stays off until the visitor taps the speaker (browsers
// block autoplay with sound); the caption always shows. With reduced motion
// on, nothing plays and only the caption shows.
//
// It shows on Vercel preview deployments, and elsewhere only with
// NEXT_PUBLIC_HERO_AVATAR=on, so it can be reviewed before the real avatar
// clip exists.

export const AVATAR_ON =
  process.env.NEXT_PUBLIC_HERO_AVATAR === "on" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

// Until the real avatar is rendered, a stock voice reads the caption over a
// placeholder. To drop in the avatar, add its render to ./media and set
// `video` (MP4, plus `webm` if you have it) and `poster` (a still from it,
// shown before it plays and with reduced motion). Keep the caption matching
// what is said.
const CLIP = {
  caption: "Hi, I'm Majid. We build responsive, modern web and mobile apps.",
  audio: HomeVoice,
  video: null,
  webm: null,
  poster: null,
};

const setMuted = (media, muted) => {
  media.muted = muted;
  // Safari wants the attribute too before it will autoplay.
  if (muted) media.setAttribute("muted", "");
  else media.removeAttribute("muted");
};

const start = (media) => {
  media.currentTime = 0;
  media.play().catch(() => {
    // Playing with sound was refused: carry on muted, the caption still shows.
    setMuted(media, true);
    media.play().catch(() => {});
  });
};

// Whether the visitor asked for reduced motion; false while rendering on the server.
const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (onChange) => {
  const query = window.matchMedia?.(REDUCED);
  query?.addEventListener?.("change", onChange);
  return () => query?.removeEventListener?.("change", onChange);
};
const useReducedMotion = () =>
  useSyncExternalStore(subscribeReduced, () => !!window.matchMedia?.(REDUCED).matches, () => false);

// The edges fade out so the avatar sits in the black background.
const fade = "radial-gradient(closest-side, #000 55%, transparent 100%)";

const HeroAvatar = () => {
  const layerRef = useRef(null);
  const mediaRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return undefined;
    setMuted(media, true);
    if (reduceMotion || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start(media);
        else media.pause();
      },
      { threshold: 0.4 }
    );
    observer.observe(layerRef.current);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const toggleSound = () => {
    const media = mediaRef.current;
    const on = !soundOn;
    setSoundOn(on);
    if (!media) return;
    setMuted(media, !on);
    // Turning sound on replays the greeting, so the visitor hears it.
    if (on) start(media);
  };

  const src = CLIP.video || CLIP.audio;
  return (
    <>
      <div
        ref={layerRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-32 -bottom-24 w-[760px] max-w-[100vw] opacity-60"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        <video
          ref={mediaRef}
          className="w-full h-full object-cover"
          poster={CLIP.poster || undefined}
          muted
          playsInline
          preload="auto"
        >
          {CLIP.webm && <source src={CLIP.webm} type="video/webm" />}
          <source src={src} />
        </video>
        {!CLIP.video && (
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 pb-10 bg-[#141415]">
            <svg width="320" height="374" viewBox="0 0 24 28" fill="none" stroke="#686869" strokeWidth="0.6">
              <circle cx="12" cy="8" r="5" />
              <path d="M2 28c0-7 4.5-10 10-10s10 3 10 10" />
              <path d="M6 25h12l-1.5-4h-9z" />
            </svg>
            <span className="text-grayMid text-sm">Avatar coming soon</span>
          </div>
        )}
      </div>
      <div className="relative z-10 mx-auto mt-16 max-w-[520px] flex items-center gap-4 bg-backgroundDark border-[1px] border-[#1f1f20] rounded-xl py-2 pl-4 pr-2">
        <p className="flex-1 m-0 text-white text-sm lg:text-base">{CLIP.caption}</p>
        {!reduceMotion && (
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={soundOn}
            aria-label={soundOn ? "Mute Majid" : "Hear Majid"}
            className={`w-11 h-11 flex-none rounded-full flex items-center justify-center text-white transition-colors duration-200 ${soundOn ? "bg-[#1f1f20] hover:bg-[#2a2a2b]" : "bg-majidTech hover:bg-[#e14d14]"}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              {soundOn ? <path d="M15.5 8.5a5 5 0 010 7" /> : <path d="M23 9l-6 6M17 9l6 6" />}
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default HeroAvatar;
