// The site's public address, for links in page metadata, the sitemap and share
// images. Set NEXT_PUBLIC_SITE_URL once the domain points at Vercel.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://majidtech.com");

export const SITE_NAME = "Majid Technical Solutions";
export const SITE_DESCRIPTION =
  "Majid Tech builds web and mobile apps for businesses: planned with you, designed before any code, built in weekly rounds and looked after once live.";

// Mr. Majid's Google Calendar appointment schedule (a 30-minute call with a Meet
// link). Its hours and length are set in Google Calendar, not here. The full
// address with `gv=true` is the form Google lets other sites embed.
export const BOOKING_LINK = "https://calendar.app.google/Ku3tfrcSeJddta8r6";
export const BOOKING_EMBED =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2x-R7uukMLY5VeTiz-H9Tp81sT5JIo6sNp7UE0mOvxaPQpeI5RBTk5dXjqruHp9CvaWtOSqtEM?gv=true";
