"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PATTERN_LINES from "./patternLines";

// The site's moving background, behind every page: soft orange and deep red
// glows drift slowly across the viewport, and streaks of orange light run
// along the diagonal lines. The lines appear at the top of the page and again
// from the Testimonials section, with faded edges. The hexagons behind
// Skills & Services are drawn by HexPattern.jsx with matching streaks.
// With reduced motion the glows hold still and the streaks are hidden.

// The diagonal lines from /images/Pattern.svg (1920 x 4000), with streaks of
// light travelling along every sixth one.
function Lines() {
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

// A run of the diagonal lines placed `top` px down the page. Its edges fade out
// (bottom, right, and top unless it starts at the top of the page) so there is
// no hard line where the pattern stops.
function LinesAt({ top }) {
  return (
    <div className={`lb-lines-fade absolute left-0 w-[1920px] h-[4000px] ${top > 0 ? "lb-lines-fade-top" : ""}`} style={{ top }}>
      <Lines />
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
  const secondTop = useSecondLinesTop(layer);

  return (
    <div ref={layer} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden">
        <div className="lb-blob lb-blob-1" />
        <div className="lb-blob lb-blob-2" />
      </div>
      <LinesAt top={0} />
      {secondTop !== null && <LinesAt top={secondTop} />}
    </div>
  );
}
