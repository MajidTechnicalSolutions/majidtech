"use client";

import DeviceVideo from "./DeviceVideo";

// A laptop built in CSS 3D around a screen-only clip, styled after a silver
// MacBook Pro (no logo): a lid with a thin black bezel and camera notch inside
// an aluminium rim, leaning back on a keyboard base of the same width (black
// keys between speaker grilles, a large trackpad, a thumb notch at the front).
// Inside Turn3D it turns as a solid object instead of a flat picture.

const PRESERVE = "[transform-style:preserve-3d]";
const ALU = "bg-gradient-to-b from-[#d4d5d8] to-[#b4b6ba]";
const EDGE = "absolute bg-[#9c9ea2]";
const SPEAKER =
  "h-full w-[7%] rounded-[1px] [background-image:radial-gradient(#55575b_0.6px,transparent_0.9px)] [background-size:4px_4px]";
const KEYS =
  "bg-[#141416] [background-image:repeating-linear-gradient(90deg,transparent_0_6%,#9fa1a5_6%_6.6%),repeating-linear-gradient(0deg,transparent_0_15.5%,#9fa1a5_15.5%_16.7%)]";

export default function Laptop3D({ src, poster, title }) {
  return (
    // Bottom padding leaves room for the base as it comes toward the viewer.
    <div className={`relative w-[88%] mx-auto pb-[12%] ${PRESERVE} [transform:rotateX(-12deg)]`}>
      <div className={`relative aspect-[16/10.5] ${PRESERVE}`}>
        <div className={`absolute inset-0 ${PRESERVE} [transform-origin:50%_100%] [transform:rotateX(14deg)]`}>
          {/* Back of the lid, plain aluminium, seen when it turns away. */}
          <div className={`absolute inset-0 rounded-[2.4%/3.6%] ${ALU} [transform:translateZ(-5px)_rotateY(180deg)] [backface-visibility:hidden]`} />
          {/* Edges, so the lid has thickness side on. */}
          <div className={`${EDGE} left-0 top-[2%] bottom-[1%] w-[5px] [transform-origin:0_50%] [transform:rotateY(90deg)]`} />
          <div className={`${EDGE} right-0 top-[2%] bottom-[1%] w-[5px] [transform-origin:100%_50%] [transform:rotateY(-90deg)]`} />
          <div className={`${EDGE} top-0 left-[1.5%] right-[1.5%] h-[5px] [transform-origin:50%_0] [transform:rotateX(-90deg)]`} />
          {/* Front: aluminium rim, thin black bezel, the notch and the screen. */}
          <div className="absolute inset-0 rounded-[2.4%/3.6%] bg-[#c7c8cb] p-[0.6%] [backface-visibility:hidden]">
            <div className="relative w-full h-full rounded-[2%/3%] bg-[#060607] p-[1.7%] pt-[2.4%] pb-[1.7%]">
              <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 w-[11%] h-[3.6%] rounded-b-[6px] bg-[#060607]">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[9%] aspect-square rounded-full bg-[#1d2330]" />
              </span>
              <div className="relative w-full h-full overflow-hidden rounded-[1%] bg-black">
                <DeviceVideo src={src} poster={poster} device="laptop" title={title} sizeClass="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        {/* The base, the same width as the lid, hinged at its bottom edge and lying flat. */}
        <div className={`absolute inset-x-0 top-full aspect-[16/10.5] ${PRESERVE} [transform-origin:50%_0] [transform:rotateX(90deg)]`}>
          <div className={`absolute inset-0 rounded-b-[2.6%/4%] rounded-t-[0.6%] ${ALU} [backface-visibility:hidden] flex flex-col items-center pt-[3.5%] gap-[4.5%]`}>
            <div className="w-[92%] h-[47%] flex gap-[2%]">
              <div className={SPEAKER} />
              <div className={`flex-1 h-full rounded-[1.2%] ${KEYS}`} />
              <div className={SPEAKER} />
            </div>
            <div className="w-[44%] h-[36%] rounded-[2.4%/4%] bg-[#bfc1c4] ring-1 ring-[#a9abaf]" />
          </div>
          {/* Front edge of the base, with the thumb notch, facing the viewer. */}
          <div className="absolute inset-x-[0.8%] bottom-0 h-[6px] bg-[#9fa1a5] [transform-origin:50%_100%] [transform:rotateX(-90deg)]">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[13%] h-[55%] rounded-b-full bg-[#7f8186]" />
          </div>
        </div>
      </div>
    </div>
  );
}
