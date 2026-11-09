"use client";

import HEX_LINES from "./hexLines";
import { hasTraces, useBgMode } from "./LivingBackground";

// The concentric hexagons behind Skills & Services, filling the section the way
// the old `background-size: cover` image did. With a Traces background chosen,
// streaks of light run around some of the rings.
export default function HexPattern() {
  const traces = hasTraces(useBgMode());
  const glints = HEX_LINES.filter((_, i) => i % 3 === 1);

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 w-full h-full"
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
          const style = {
            animationDuration: `${16 + ((i * 41) % 10)}s`,
            animationDelay: `-${(i * 59) % 17}s`,
            animationDirection: i % 2 ? "reverse" : "normal",
          };
          return (
            <g key={i} className="lb-trace lb-trace-hex">
              <path d={d} pathLength="1" stroke="#FD5A1E" strokeWidth="7" strokeOpacity="0.16" strokeLinecap="round" style={style} />
              <path d={d} pathLength="1" stroke="#FF8A5C" strokeWidth="1.6" strokeOpacity="0.85" strokeLinecap="round" style={style} />
            </g>
          );
        })}
    </svg>
  );
}
