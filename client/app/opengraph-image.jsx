import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The image shown when a page of the site is shared: the hero line in the
// brand's mono type on black, with the orange accent.
export const alt = "Majid Technical Solutions: Eat, sleep <code>, repeat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const font = await readFile(join(process.cwd(), "src/utils/Fonts/ModernEraMono-Regular.woff"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "ModernEra Mono",
        }}
      >
        <div style={{ fontSize: 34, display: "flex" }}>Majid Tech</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 1, letterSpacing: -3 }}>
          <span>Eat, sleep</span>
          <span style={{ display: "flex" }}>
            <span style={{ color: "#FD5A1E" }}>{"<code>"}</span>, repeat
          </span>
        </div>
        <div style={{ fontSize: 30, color: "#A5A5A6", display: "flex" }}>Web and mobile apps, built for you</div>
      </div>
    ),
    { ...size, fonts: [{ name: "ModernEra Mono", data: font, style: "normal", weight: 400 }] }
  );
}
