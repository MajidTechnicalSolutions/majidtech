"use client";

import { useEffect, useRef, useState } from "react";

// The hero's { } brackets. The still picture shows first and stays for
// reduced motion, data saver, low-power devices and screens under 1280px
// (where the brackets are hidden anyway). Elsewhere, once the page has loaded
// and the browser is idle, the 3D wireframe (heroBracketsMesh.js, fetched only
// then) fades in over it. Its canvas reaches past the picture's box so the
// brackets have room to turn without being cut off.

const PICTURE = "/images/Brackets.svg";

function canAnimate() {
  if (!window.matchMedia("(min-width: 1280px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (navigator.connection?.saveData) return false;
  if ((navigator.hardwareConcurrency ?? 8) < 4) return false;
  return !!document.createElement("canvas").getContext("2d");
}

export default function HeroBrackets() {
  const canvas = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let stop;
    let cancelled = false;
    const begin = () => {
      if (cancelled || !canAnimate()) return;
      import("./heroBracketsMesh").then(({ start }) => {
        if (cancelled || !canvas.current) return;
        stop = start(canvas.current);
        setLive(true);
      });
    };
    const whenIdle = () => (window.requestIdleCallback ? requestIdleCallback(begin, { timeout: 3000 }) : setTimeout(begin, 1500));
    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", whenIdle);
      stop?.();
    };
  }, []);

  return (
    <div className="hidden xl:block xl:w-[35%] shrink-0 relative z-10 aspect-[488/603]">
      <img
        alt="Brackets"
        src={PICTURE}
        className={`w-full h-full transition-opacity duration-700 ${live ? "opacity-0" : "opacity-100"}`}
      />
      <canvas
        ref={canvas}
        aria-hidden="true"
        className={`absolute -inset-[12%] w-[124%] h-[124%] pointer-events-none transition-opacity duration-700 ${live ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
