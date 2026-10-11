// The site's public address, for links in page metadata, the sitemap and share
// images. Set NEXT_PUBLIC_SITE_URL once the domain points at Vercel. A trailing
// slash is dropped so paths join without "//".
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://majidtech.com")
).replace(/\/+$/, "");

export const SITE_NAME = "Majid Technical Solutions";
export const SITE_DESCRIPTION =
  "Majid Tech builds web and mobile apps for businesses: planned with you, designed before any code, built in weekly rounds and looked after once live.";
