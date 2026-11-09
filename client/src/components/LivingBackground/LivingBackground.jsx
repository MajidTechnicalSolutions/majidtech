"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import PATTERN_LINES from "./patternLines";
import { startParticles } from "./particles";

// Preview of four moving backgrounds behind the whole site. Pick one with the
// switcher at the bottom of the page (or ?bg=traces|aurora|spotlight|particles|
// traces-aurora|traces-particles). The last two layer 1 Traces over 2 or 4.
// "Current" is the site as it is today: the still diagonal lines.
export const MODES = [
  { id: "off", label: "Current" },
  { id: "traces", label: "1 Traces" },
  { id: "aurora", label: "2 Glow" },
  { id: "spotlight", label: "3 Spotlight" },
  { id: "particles", label: "4 Particles" },
  { id: "traces-aurora", label: "1 + 2" },
  { id: "traces-particles", label: "1 + 4" },
];

const STORAGE_KEY = "majidtech.bgPreview";
const REDUCED = "(prefers-reduced-motion: reduce)";

// The chosen mode lives outside React so it can be read from the URL / storage
// after hydration without a setState-in-effect.
let currentMode = null;
const modeListeners = new Set();
function subscribeMode(fn) {
  modeListeners.add(fn);
  return () => modeListeners.delete(fn);
}
function getMode() {
  if (currentMode === null) currentMode = readInitialMode();
  return currentMode;
}
function setModeStore(id) {
  currentMode = id;
  modeListeners.forEach((fn) => fn());
}

// The chosen background, for other parts of the page (the Services hexagons).
export function useBgMode() {
  return useSyncExternalStore(subscribeMode, getMode, () => "off");
}

// True for the modes that run light along the lines (1, 1 + 2, 1 + 4).
export function hasTraces(mode) {
  return mode === "traces" || mode.startsWith("traces-");
}

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
function subscribePointer(fn) {
  const mq = window.matchMedia(FINE_POINTER);
  mq.addEventListener("change", fn);
  return () => mq.removeEventListener("change", fn);
}

function readInitialMode() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("bg");
    if (MODES.some((m) => m.id === fromUrl)) return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (MODES.some((m) => m.id === saved)) return saved;
  } catch {
    // Storage can be blocked; fall back to the current look.
  }
  return "off";
}

// The site's existing lines, drawn exactly as before (1920 x 4000 at the top left).
function StaticLines({ className = "" }) {
  return (
    <div
      className={`absolute left-0 top-0 w-[1920px] h-[4000px] ${className}`}
      style={{ backgroundImage: "url(/images/Pattern.svg)", backgroundRepeat: "no-repeat" }}
    />
  );
}

// 1. Small streaks of orange light travel along some of the existing lines.
function Traces() {
  const glints = PATTERN_LINES.filter((_, i) => i % 6 === 3);
  return (
    <svg className="absolute left-0 top-0" width="1920" height="4000" viewBox="0 0 1920 4000" fill="none">
      <g opacity="0.5" stroke="#272727" strokeWidth="2">
        {PATTERN_LINES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {glints.map((d, i) => {
        const style = {
          animationDuration: `${10 + ((i * 37) % 9)}s`,
          animationDelay: `-${(i * 53) % 13}s`,
        };
        return (
          <g key={i} className="lb-trace">
            <path d={d} pathLength="1" stroke="#FD5A1E" strokeWidth="7" strokeOpacity="0.18" strokeLinecap="round" style={style} />
            <path d={d} pathLength="1" stroke="#FF8A5C" strokeWidth="1.6" strokeLinecap="round" style={style} />
          </g>
        );
      })}
    </svg>
  );
}

// 2. Large, soft pools of colour drift slowly behind everything.
function Aurora() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="lb-blob lb-blob-1" />
      <div className="lb-blob lb-blob-2" />
      <div className="lb-blob lb-blob-3" />
    </div>
  );
}

// 3. A soft light follows the mouse and lights up the lines and a dot grid under it.
function Spotlight({ layer, secondTop }) {
  const enabled = useSyncExternalStore(subscribePointer, () => window.matchMedia(FINE_POINTER).matches, () => false);

  useEffect(() => {
    if (!enabled) return undefined;
    const el = layer.current;
    if (!el) return undefined;
    let cx = -2000;
    let cy = -2000;
    let frame = 0;
    const paint = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${cx - rect.left}px`);
      el.style.setProperty("--my", `${cy - rect.top}px`);
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onMove = (e) => {
      cx = e.clientX;
      cy = e.clientY;
      queue();
    };
    const onLeave = () => {
      cx = -2000;
      cy = -2000;
      queue();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", queue, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", queue);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    };
  }, [enabled, layer]);

  return (
    enabled && (
      <>
        <div className="lb-spot-dots absolute inset-0" />
        <LinesAt top={0}>
          <StaticLines className="lb-spot-lines" />
        </LinesAt>
        {secondTop !== null && (
          <LinesAt top={secondTop}>
            <StaticLines className="lb-spot-lines" />
          </LinesAt>
        )}
        <div className="lb-spot-glow absolute inset-0" />
      </>
    )
  );
}

// 4. Drifting dots that join up with thin lines when they come close.
function Particles() {
  const canvas = useRef(null);
  useEffect(() => {
    if (!canvas.current) return undefined;
    return startParticles(canvas.current, { still: window.matchMedia(REDUCED).matches });
  }, []);
  return <canvas ref={canvas} className="fixed inset-0 w-full h-full" />;
}

// A run of the diagonal lines placed `top` px down the page. Its edges fade out
// (bottom, right, and top unless it starts at the top of the page) so there is
// no hard line where the pattern stops.
function LinesAt({ top, children }) {
  return (
    <div className={`lb-lines-fade absolute left-0 w-[1920px] h-[4000px] ${top > 0 ? "lb-lines-fade-top" : ""}`} style={{ top }}>
      {children}
    </div>
  );
}

// Where the second run of lines starts: a little above the Testimonials
// section, measured against the background layer. null when the page has none.
const SECOND_LINES_LEAD = 160;
function useSecondLinesTop(layer) {
  const pathname = usePathname();
  const [top, setTop] = useState(null);
  useEffect(() => {
    const el = layer.current;
    if (!el) return undefined;
    const measure = () => {
      const target = document.getElementById("Testimonials");
      if (!target) return setTop(null);
      const y = target.getBoundingClientRect().top - el.getBoundingClientRect().top;
      setTop(Math.max(0, Math.round(y - SECOND_LINES_LEAD)));
    };
    // Fires once on observe, then whenever the page height changes.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [layer, pathname]);
  return top;
}

export default function LivingBackground() {
  const layer = useRef(null);
  const mode = useBgMode();
  const secondTop = useSecondLinesTop(layer);
  const Lines = hasTraces(mode) ? Traces : StaticLines;

  const choose = (id) => {
    setModeStore(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
      const url = new URL(window.location.href);
      if (id === "off") url.searchParams.delete("bg");
      else url.searchParams.set("bg", id);
      window.history.replaceState(window.history.state, "", url);
    } catch {
      // Not remembering the choice is fine.
    }
  };

  return (
    <>
      <div ref={layer} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {(mode === "aurora" || mode === "traces-aurora") && <Aurora />}
        {(mode === "particles" || mode === "traces-particles") && <Particles />}
        <LinesAt top={0}>
          <Lines />
        </LinesAt>
        {secondTop !== null && (
          <LinesAt top={secondTop}>
            <Lines />
          </LinesAt>
        )}
        {mode === "spotlight" && <Spotlight layer={layer} secondTop={secondTop} />}
      </div>

      <div
        role="radiogroup"
        aria-label="Background preview"
        className="fixed left-3 bottom-20 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-6 z-40 max-w-[calc(100vw-6.5rem)] flex flex-wrap items-center gap-1 rounded-2xl border border-[#2a2a2c] bg-black/80 backdrop-blur px-2 py-2 font-modernEra text-[11px] text-silverDark"
      >
        <span className="px-1.5 text-grayMid">Background</span>
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={mode === m.id}
            onClick={() => choose(m.id)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              mode === m.id ? "bg-majidTech text-black" : "hover:bg-[#1c1c1e] hover:text-silverLight"
            }`}
          >
            {m.label}
          </button>
        ))}
        {mode === "spotlight" && <span className="px-1.5 text-grayMid sm:hidden">desktop only</span>}
      </div>
    </>
  );
}
