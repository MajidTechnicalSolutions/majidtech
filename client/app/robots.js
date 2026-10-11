import { SITE_URL } from "../src/site";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
