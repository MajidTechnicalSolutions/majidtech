"use client";

import { useEffect, useRef } from "react";

// Turns its content slowly in 3D (a gentle side-to-side sway) and, with a
// mouse, tilts it toward the cursor. Plain CSS transforms, set straight on the
// element each frame, so nothing re-renders. Still for reduced motion, and
// paused while off screen or in a background tab.

const SWAY = 15; // degrees each way
const TILT = 10; // extra degrees toward the cursor

export default function Turn3D({ children, className = "" }) {
  const inner = useRef(null);

  useEffect(() => {
    const el = inner.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const started = performance.now();
    let target = { x: 0, y: 0 };
    let tilt = { x: 0, y: 0 };
    let frame = 0;
    let running = false;

    const draw = (now) => {
      const t = (now - started) / 1000;
      tilt = { x: tilt.x + (target.x - tilt.x) * 0.06, y: tilt.y + (target.y - tilt.y) * 0.06 };
      const y = Math.sin(t * 0.4) * SWAY + tilt.y;
      const x = 4 + Math.sin(t * 0.27) * 2 + tilt.x;
      el.style.transform = `rotateY(${y.toFixed(2)}deg) rotateX(${x.toFixed(2)}deg)`;
      if (running) frame = requestAnimationFrame(draw);
    };
    const play = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(draw);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    let onScreen = true;
    const sync = () => (onScreen && !document.hidden ? play() : pause());
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    observer.observe(el);

    const onPointer = (e) => {
      if (e.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
      target = { x: Math.max(-1, Math.min(1, -dy * 2)) * TILT, y: Math.max(-1, Math.min(1, dx * 2)) * TILT };
    };
    const onLeave = () => (target = { x: 0, y: 0 });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      pause();
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div className={`[perspective:1400px] ${className}`}>
      <div ref={inner} className="[transform:rotateY(-12deg)_rotateX(4deg)] [transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  );
}
