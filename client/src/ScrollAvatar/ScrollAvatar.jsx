import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import useIsMobile from "../hooks/useIsMobile";
import CLIPS from "./clips";

// The home page avatar: it speaks one clip per section as the visitor scrolls.
// On wide screens it sits in the hero, then shrinks to a bubble in the corner;
// below xl it is the bubble, pinned at the top, the whole way down.
// Sound stays off until the visitor taps the speaker (browsers block autoplay
// with sound); captions always show. With reduced motion on, nothing plays and
// only the captions show.
//
// It is off unless REACT_APP_SCROLL_AVATAR=on, so it can be reviewed on deploy
// previews before the real avatar clips exist.

export const AVATAR_ON = process.env.REACT_APP_SCROLL_AVATAR === "on";

const SECTION_IDS = CLIPS.map((c) => c.section);
const LAST = CLIPS.length - 1;

const Ctx = createContext(null);
const useScrollAvatar = () => useContext(Ctx);

const Provider = ({ children }) => {
  // A section's clip starts once its top is about a third of the way up the screen.
  const index = useScrollSpy(SECTION_IDS, 300);
  const narrow = useIsMobile(1279);
  const [soundOn, setSoundOn] = useState(false);
  const [replays, setReplays] = useState(0);
  const [reduceMotion] = useState(
    () => !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
  const replay = () => {
    setReplays((n) => n + 1);
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };
  return (
    <Ctx.Provider value={{ index, narrow, soundOn, setSoundOn, replays, replay, reduceMotion }}>
      {children}
    </Ctx.Provider>
  );
};

export const ScrollAvatarProvider = AVATAR_ON ? Provider : ({ children }) => children;

const Placeholder = ({ small }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center bg-[#0b0b0c]">
    {small ? (
      <span className="text-majidTech text-sm">MT</span>
    ) : (
      <>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#686869" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
        <span className="text-grayMid text-sm">Avatar coming soon</span>
      </>
    )}
  </div>
);

const setMuted = (media, muted) => {
  media.muted = muted;
  // Safari wants the attribute too before it will autoplay.
  if (muted) media.setAttribute("muted", "");
  else media.removeAttribute("muted");
};

const start = (media) =>
  media.play().catch(() => {
    // Playing with sound was refused: carry on muted, captions still show.
    setMuted(media, true);
    media.play().catch(() => {});
  });

// One clip: the avatar video, or until that exists the voice over a placeholder.
// It plays from the start while `active` and stops when the visitor scrolls on.
const AvatarClip = ({ clip, active, small }) => {
  const ref = useRef(null);
  const { soundOn, reduceMotion, replays } = useScrollAvatar();
  const soundRef = useRef(soundOn);
  soundRef.current = soundOn;
  const src = clip.video || clip.audio;

  useEffect(() => {
    const media = ref.current;
    if (!media) return;
    setMuted(media, !soundRef.current);
    if (active && !reduceMotion) {
      media.currentTime = 0;
      start(media);
    } else media.pause();
  }, [active, reduceMotion, src, replays]);

  useEffect(() => {
    const media = ref.current;
    if (!media) return;
    setMuted(media, !soundOn);
    // Turning sound on replays the current clip, so the visitor hears it.
    if (soundOn && active && !reduceMotion) {
      media.currentTime = 0;
      start(media);
    }
  }, [soundOn]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <video
        key={src}
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover"
        poster={clip.poster}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        {clip.webm && <source src={clip.webm} type="video/webm" />}
        <source src={src} />
      </video>
      {!clip.video && <Placeholder small={small} />}
    </>
  );
};

const SoundButton = () => {
  const { soundOn, setSoundOn, reduceMotion } = useScrollAvatar();
  if (reduceMotion) return null;
  return (
    <button
      type="button"
      onClick={() => setSoundOn(!soundOn)}
      aria-pressed={soundOn}
      aria-label={soundOn ? "Mute Majid" : "Hear Majid"}
      className={`w-11 h-11 flex-none rounded-full flex items-center justify-center text-white transition-colors duration-200 ${soundOn ? "bg-[#1f1f20] hover:bg-[#2a2a2b]" : "bg-majidTech hover:bg-[#e14d14]"}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        {soundOn ? <path d="M15.5 8.5a5 5 0 010 7" /> : <path d="M23 9l-6 6M17 9l6 6" />}
      </svg>
    </button>
  );
};

// The avatar in the hero, on xl screens. Below xl the bubble takes its place.
export const AvatarHero = () => {
  const { index, narrow } = useScrollAvatar();
  const clip = CLIPS[0];
  return (
    <div className="hidden xl:flex flex-col gap-3 flex-none w-[38%] max-w-[520px]">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0b0b0c] border-[1px] border-[#1f1f20]">
        <AvatarClip clip={clip} active={index === 0 && !narrow} />
      </div>
      <div className="flex items-center gap-3 bg-backgroundDark border-[1px] border-[#1f1f20] rounded-xl py-2 pl-4 pr-2">
        <p className="flex-1 m-0 text-white">{clip.caption}</p>
        <SoundButton />
      </div>
    </div>
  );
};

// The bubble: past the hero on xl screens, all the way down below xl.
export const AvatarBubble = () => {
  const { index, narrow, replay } = useScrollAvatar();
  const [open, setOpen] = useState(true);
  if (!narrow && index === 0) return null;
  const clip = CLIPS[index];
  return (
    <aside
      aria-label="Majid's avatar"
      className="fixed z-40 top-4 left-4 right-4 sm:top-auto sm:left-auto sm:bottom-6 sm:right-6 sm:max-w-sm flex items-center gap-3 bg-backgroundDark border-[1px] border-[#1f1f20] rounded-2xl p-1.5 pr-2 text-sm"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Hide captions" : "Show captions"}
        className="relative w-12 h-12 flex-none rounded-full overflow-hidden border-2 border-majidTech"
      >
        <AvatarClip clip={clip} active small />
      </button>
      <p aria-live="polite" className={`flex-1 m-0 text-white ${open ? "" : "sr-only"}`}>
        {clip.caption}
      </p>
      {open && index === LAST && (
        <button
          type="button"
          onClick={replay}
          className="min-h-[44px] px-3 flex-none rounded-full border-[1px] border-[#1f1f20] text-silverDark hover:text-white transition-colors duration-200"
        >
          Replay intro
        </button>
      )}
      <SoundButton />
    </aside>
  );
};
