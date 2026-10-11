import { SITE_URL } from "../src/site";

export default function sitemap() {
  return ["/", "/app-creation", "/founder"].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
