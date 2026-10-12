"use client";

import { useEffect, useRef } from "react";
import DeviceVideo from "./DeviceVideo";

// A laptop built in CSS 3D around a screen-only clip, styled after a silver
// MacBook Pro (no logo). The lid (thin black bezel, camera notch, aluminium rim)
// and the base (black keys between speaker grilles, a large trackpad, a thumb
// notch at the front) are solid slabs with sides, so it turns as an object
// inside Turn3D. Their thickness follows the laptop's width (--lid, --base).

const PRESERVE = "[transform-style:preserve-3d]";
const ALU = "bg-gradient-to-b from-[#a4a6aa] to-[#8a8c91]";
const SIDE = "absolute bg-gradient-to-b from-[#7d7f84] to-[#606266]";
const SPEAKER =
  "h-full w-[7%] rounded-[1px] [background-image:radial-gradient(#3f4145_0.6px,transparent_0.9px)] [background-size:4px_4px]";
const KEYS =
  "bg-[#111113] [background-image:repeating-linear-gradient(90deg,transparent_0_6%,#7f8186_6%_6.6%),repeating-linear-gradient(0deg,transparent_0_15.5%,#7f8186_15.5%_16.7%)]";

export default function Laptop3D({ src, poster, title }) {
  const root = useRef(null);

  // Thickness in px from the laptop's width: lid about 1.1%, base about 2.6%.
  useEffect(() => {
    const el = root.current;
    if (!el) return undefined;
    const size = () => {
      const w = el.offsetWidth;
      el.style.setProperty("--lid", `${Math.max(3, w * 0.011)}px`);
      el.style.setProperty("--base", `${Math.max(6, w * 0.026)}px`);
    };
    size();
    const observer = new ResizeObserver(size);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // Bottom padding leaves room for the base as it comes toward the viewer.
    <div
      ref={root}
      style={{ "--lid": "5px", "--base": "12px" }}
      className={`relative w-[88%] mx-auto pb-[14%] ${PRESERVE} [transform:rotateX(-12deg)]`}
    >
      <div className={`relative aspect-[16/10.5] ${PRESERVE}`}>
        {/* The lid, leaning back on its hinge. */}
        <div className={`absolute inset-0 ${PRESERVE} [transform-origin:50%_100%] [transform:rotateX(14deg)]`}>
          <div className={`absolute inset-0 rounded-[2.4%/3.6%] ${ALU} [transform:translateZ(calc(var(--lid)*-1))_rotateY(180deg)] [backface-visibility:hidden]`} />
          <div className={`${SIDE} left-0 top-[1.5%] bottom-[0.5%] w-[var(--lid)] [transform-origin:0_50%] [transform:rotateY(90deg)]`} />
          <div className={`${SIDE} right-0 top-[1.5%] bottom-[0.5%] w-[var(--lid)] [transform-origin:100%_50%] [transform:rotateY(-90deg)]`} />
          <div className={`${SIDE} top-0 left-[1.2%] right-[1.2%] h-[var(--lid)] [transform-origin:50%_0] [transform:rotateX(-90deg)]`} />
          <div className="absolute inset-0 rounded-[2.4%/3.6%] bg-[#8f9196] p-[0.6%] [backface-visibility:hidden]">
            <div className="relative w-full h-full rounded-[2%/3%] bg-[#060607] p-[1.7%] pt-[2.4%]">
              <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 w-[11%] h-[3.6%] rounded-b-[6px] bg-[#060607]">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[9%] aspect-square rounded-full bg-[#1d2330]" />
              </span>
              <div className="relative w-full h-full overflow-hidden rounded-[1%] bg-black">
                <DeviceVideo src={src} poster={poster} device="laptop" title={title} sizeClass="w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        {/* The base: a slab as wide as the lid, lying flat from the hinge toward the viewer. */}
        <div className={`absolute inset-x-0 top-full aspect-[16/10.5] ${PRESERVE} [transform-origin:50%_0] [transform:rotateX(90deg)]`}>
          {/* The deck. */}
          <div className={`absolute inset-0 rounded-b-[2.6%/4%] rounded-t-[0.6%] ${ALU} [backface-visibility:hidden] flex flex-col items-center pt-[3.5%] gap-[4.5%]`}>
            <div className="w-[92%] h-[47%] flex gap-[2%]">
              <div className={SPEAKER} />
              <div className={`flex-1 h-full rounded-[1.2%] ${KEYS}`} />
              <div className={SPEAKER} />
            </div>
            <div className="w-[44%] h-[36%] rounded-[2.4%/4%] bg-[#96989d] ring-1 ring-[#7f8186]" />
          </div>
          {/* Underside, sides and front, giving the base its thickness. */}
          <div className="absolute inset-0 rounded-[2.6%/4%] bg-[#4e5054] [transform:translateZ(calc(var(--base)*-1))]" />
          <div className={`${SIDE} left-0 top-0 bottom-[1%] w-[var(--base)] [transform-origin:0_50%] [transform:rotateY(90deg)]`} />
          <div className={`${SIDE} right-0 top-0 bottom-[1%] w-[var(--base)] [transform-origin:100%_50%] [transform:rotateY(-90deg)]`} />
          <div className={`${SIDE} inset-x-[1%] bottom-0 h-[var(--base)] [transform-origin:50%_100%] [transform:rotateX(90deg)]`}>
            <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[13%] h-[45%] rounded-b-full bg-[#4a4c50]" />
          </div>
        </div>
      </div>
    </div>
  );
}
