"use client";

import DeviceVideo from "./DeviceVideo";

// A laptop built in CSS 3D around a screen-only clip: a lid (bezel and screen
// in front, aluminium back, edges for thickness) leaning back on its hinge,
// and a keyboard base lying flat toward the viewer. Inside Turn3D it turns as
// a solid object instead of a flat picture. Seen slightly from above.

const PRESERVE = "[transform-style:preserve-3d]";
const EDGE = "absolute bg-[#2b2b2e]";

export default function Laptop3D({ src, poster, title }) {
  return (
    // Bottom padding leaves room for the base as it comes toward the viewer.
    <div className={`relative w-[88%] mx-auto pb-[12%] ${PRESERVE} [transform:rotateX(-12deg)]`}>
      <div className={`relative aspect-[16/10.6] ${PRESERVE}`}>
        <div className={`absolute inset-0 ${PRESERVE} [transform-origin:50%_100%] [transform:rotateX(14deg)]`}>
          {/* Back of the lid, seen when it turns away. */}
          <div className="absolute inset-0 rounded-[3%/4.5%] bg-gradient-to-br from-[#3a3a3e] to-[#1d1d20] [transform:translateZ(-7px)_rotateY(180deg)] [backface-visibility:hidden]">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[7%] aspect-square rounded-full bg-white/10" />
          </div>
          {/* Edges, so the lid has thickness side on. */}
          <div className={`${EDGE} left-0 top-[3%] bottom-[1%] w-[7px] [transform-origin:0_50%] [transform:rotateY(90deg)]`} />
          <div className={`${EDGE} right-0 top-[3%] bottom-[1%] w-[7px] [transform-origin:100%_50%] [transform:rotateY(-90deg)]`} />
          <div className={`${EDGE} top-0 left-[2%] right-[2%] h-[7px] [transform-origin:50%_0] [transform:rotateX(-90deg)]`} />
          {/* Front: bezel, camera and the screen. */}
          <div className="absolute inset-0 rounded-[3%/4.5%] bg-[#0c0c0d] ring-1 ring-[#2b2b2e] [backface-visibility:hidden] p-[2.4%] pt-[2.8%]">
            <span className="absolute left-1/2 top-[1%] -translate-x-1/2 w-[0.8%] aspect-square rounded-full bg-[#25252a]" />
            <div className="relative w-full h-full overflow-hidden rounded-[0.5%] bg-black">
              <DeviceVideo src={src} poster={poster} device="laptop" title={title} sizeClass="w-full h-full" />
            </div>
          </div>
        </div>
        {/* The base: the keyboard deck, hinged at the lid's bottom edge, lying flat. */}
        <div className={`absolute left-[-3%] right-[-3%] top-full aspect-[16/9.6] ${PRESERVE} [transform-origin:50%_0] [transform:rotateX(90deg)]`}>
          <div className="absolute inset-0 rounded-b-[3.5%/6%] rounded-t-[1%] bg-gradient-to-b from-[#45454a] to-[#333337] ring-1 ring-[#55555b] [backface-visibility:hidden] flex flex-col items-center pt-[5%] gap-[6%]">
            <div className="w-[80%] h-[44%] rounded-[1.5%] bg-[#1b1b1e] [background-image:repeating-linear-gradient(90deg,transparent_0_5.6%,#3a3a3f_5.6%_6.1%),repeating-linear-gradient(0deg,transparent_0_17%,#3a3a3f_17%_18.5%)]" />
            <div className="w-[32%] h-[30%] rounded-[3%] bg-[#3d3d42] ring-1 ring-[#58585e]" />
          </div>
          {/* Front edge of the base, facing the viewer. */}
          <div className="absolute left-[1%] right-[1%] bottom-0 h-[7px] bg-[#2a2a2e] [transform-origin:50%_100%] [transform:rotateX(-90deg)]" />
        </div>
      </div>
    </div>
  );
}
