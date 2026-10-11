import { SITE_DESCRIPTION, SITE_NAME } from "../src/site";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "Majid Tech",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [{ src: "/icon.png", sizes: "16x16", type: "image/png" }],
  };
}
