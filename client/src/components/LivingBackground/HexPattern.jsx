"use client";

import { useEffect, useRef } from "react";
import HEX_LINES from "./hexLines";
import { hasTraces, useBgMode } from "./LivingBackground";

// The concentric hexagons behind Skills & Services, filling the section the way
// the old `background-size: cover` image did. With a Traces background chosen,
// streaks of light run around some of the rings.
//
// The rings differ a lot in length and the drawing is scaled to the section, so
// each streak's length and lap time are set from its size on screen: every
// streak is the same length and moves at the same speed as the diagonal ones.
const SPEED_PX = 420; // on-screen pixels per second, about the diagonal streaks' pace
const STREAK_PX = 200; // on-screen streak length, same as the diagonal streaks

function fitStreaks(svg) {
  const scale = svg.getScreenCTM()?.a;
  if (!scale) return;
  svg.querySelectorAll(".lb-trace-hex path").forEach((path) => {
    const length = path.getTotalLength();
    const dash = Math.min(STREAK_PX / scale, length / 3);
    path.style.strokeDasharray = `${dash} ${length - dash}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.animationDuration = `${(length * scale) / SPEED_PX}s`;
  });
}

export default function HexPattern() {
  const svg = useRef(null);
  const traces = hasTraces(useBgMode());
  // Every third ring, skipping the innermost: at full speed it would lap every couple of seconds.
  const glints = HEX_LINES.filter((_, i) => i % 3 === 1 && i < HEX_LINES.length - 3);

  useEffect(() => {
    const el = svg.current;
    if (!traces || !el) return undefined;
    // Fires once on observe, then whenever the section changes size.
    const observer = new ResizeObserver(() => fitStreaks(el));
    observer.observe(el);
    return () => observer.disconnect();
  }, [traces]);

  return (
    <svg
      ref={svg}
      aria-hidden="true"
      className="lb-hex-fade pointer-events-none absolute inset-0 -z-10 w-full h-full"
      viewBox="300 100 1400 780"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g opacity="0.2" stroke="#4A4A4A" strokeWidth="2">
        {HEX_LINES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {traces &&
        glints.map((d, i) => {
          // Duration, dash and offset are filled in by fitStreaks.
          const style = {
            animationDelay: `-${(i * 59) % 17}s`,
            animationDirection: i % 2 ? "reverse" : "normal",
          };
          return (
            <g key={i} className="lb-trace lb-trace-hex">
              <path d={d} stroke="#FD5A1E" strokeWidth="7" strokeOpacity="0.16" strokeLinecap="round" style={style} />
              <path d={d} stroke="#FF8A5C" strokeWidth="1.6" strokeOpacity="0.85" strokeLinecap="round" style={style} />
            </g>
          );
        })}
    </svg>
  );
}
