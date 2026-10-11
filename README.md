# Majid Tech website

The company site at [www.majidtechnicalsolutions.com](https://www.majidtechnicalsolutions.com): the home page (hero, Selected Work, Services, Blog, Testimonials, Contact), the App creation page (`/app-creation`) and the Founder page (`/founder`), with the "Ask Mr. Majid" AI assistant on every page.

- `client/`: the website, a [Next.js](https://nextjs.org) app (App Router) styled with Tailwind CSS. It is deployed on Vercel.
- `server/`: the Majid Tech API, an Express + MongoDB app on Heroku. The site's blog reads its posts and images from it.

## Working on the site

In `client/`:

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Run the site at http://localhost:3000 with live reload |
| `npm run build` | Build for production (also checks every page renders) |
| `npm start` | Serve the production build |
| `npm run lint` | Lint with ESLint (Next.js core web vitals rules) |

Where things are:

- `client/app/`: the pages (`page.jsx`, `founder/`, `app-creation/`), the shared layout with the nav, page titles and descriptions, the share image (`opengraph-image.jsx`), `sitemap.js`, `robots.js`, and the server routes: the contact form (`api/contact`) and Ask Mr. Majid (`api/ask`).
- `client/src/`: the page sections and components (`Header`, `SelectedWork`, `Services`, `Blog`, `Contact`, `Navbar`, `AskMajid`, …). Components that run in the browser start with `"use client"`.
- `client/src/content/`: the App creation and Selected Work copy. The pages show it and Ask Mr. Majid answers from it, so edit it there.
- `client/public/`: files served as they are: the Selected Work loops and posters (`work/`), images, the founder photo, the résumé and the avatar's voice clip.

## Environment variables

Set these in Vercel (Project › Settings › Environment Variables), or in `client/.env.local` to try them locally.

| Variable | Needed for |
| --- | --- |
| `RESEND_API_KEY` | The contact form and Ask Mr. Majid's briefs. They are emailed to majidtechnicalsolutions@gmail.com through [Resend](https://resend.com), with Reply-To set to the visitor. Without it, they are only logged by the server. |
| `ANTHROPIC_API_KEY` | Ask Mr. Majid. Its answers come from Claude; the key stays on the server. Without it the chat says something went wrong. |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Ask Mr. Majid's question limits, kept in Upstash Redis. Vercel sets both when you add Upstash from the project's Storage tab. Without them each server counts on its own, which is fine locally. |
| `NEXT_PUBLIC_SITE_URL` | Optional. The site's address in links, the sitemap and share images. Defaults to https://majidtech.com. |
| `BLOG_API_URL` | Optional. The Majid Tech API the blog reads from. Defaults to the Heroku app. The site proxies it at `/blog-api`, so the API's CORS list doesn't need the site's addresses. |
| `NEXT_PUBLIC_HERO_AVATAR` | Optional. `on` shows the hero avatar outside preview deployments (see below). |

## Deploying (Vercel)

The Vercel project builds from this repo with **Root Directory** set to `client`; `client/vercel.json` pins the framework to Next.js, so no other settings are needed. Every pull request gets a preview deployment, and merging to `master` deploys to production.

## Ask Mr. Majid (AI assistant)

A chat in the corner of every page (`client/src/askMajid`) that answers visitors' questions about Majid Tech with Claude (Claude Opus 5.5, low effort). On phones it opens full screen.

- It answers only from the site's own copy (`client/src/content`) and the instructions in `client/src/askMajid/knowledge.js`: no prices (they are quoted on a call), no invented clients or results. It says it is an AI.
- From the chat, "Write my brief" has Claude turn the conversation into a project brief (idea, users, must-haves, timeline, the package that fits). The visitor checks or edits it, adds their email, agrees to send it, and it is emailed to Majid with the conversation (and a copy to the visitor).
- "Book a call" opens the Google Calendar booker (below); "Back to chat" there reopens the chat.
- Limits, per rolling day: 20 questions, 5 briefs and 3 sent briefs per visitor, and 400 questions for the whole site. After that the chat points to the contact form and email. Change them in `client/src/askMajid/server.js`.
- Routes: `api/ask` (streams the answer), `api/ask/brief` (writes the brief), `api/ask/send` (emails it).

To try it locally, put `ANTHROPIC_API_KEY` in `client/.env.local` and run `npm run dev`.

## Booking a call

After the contact form sends, a pop-up ("Message sent") offers a 30-minute video call with Mr. Majid. It shows his Google Calendar appointment schedule, so a visitor picks a slot and Google sends both of them the invite with a Meet link. Ask Mr. Majid's "Book a call" opens the same pop-up.

- The booking page is Google's and keeps Google's styling. Its hours, call length and Meet link are set in Google Calendar (the "Call with Mr. Majid" appointment schedule), not in the code.
- Its two addresses are in `client/src/site.js`: `BOOKING_LINK` (the share link) and `BOOKING_EMBED` (the full address with `gv=true`, the form Google allows other sites to embed). Making a new schedule means updating both.
- If Google is blocked (some ad blockers and work networks), the pop-up offers "Open Google Calendar" and the email address instead.
- The pop-up is `client/src/components/BookCall.jsx`; open it from anywhere with `openBookCall("contact" | "chat")` from `client/src/components/bookCallEvents.js`.

## Hero brackets

On wide screens (1280px and up) the hero's `{ }` brackets are a 3D wireframe that sways slowly and tilts toward the cursor (`client/src/Header/HeroBrackets.jsx`, drawn by `heroBracketsMesh.js` on a canvas, no 3D library). The still picture (`client/public/images/Brackets.svg`) shows first; the 3D version is fetched and faded in only once the page has loaded and the browser is idle, and it pauses when scrolled out of view or the tab is hidden. Reduced motion, data saver and low-power devices (under 4 CPU cores) keep the still picture. The shape, thickness, colours and particles are set at the top of `heroBracketsMesh.js`.

## Home page avatar

The home page hero has an avatar of Majid, large and centred behind the text, with a caption bar underneath (`client/src/HeroAvatar`). It greets the visitor while the hero is on screen and stops when they scroll away. Sound is off until the visitor taps the speaker; the caption always shows; with reduced motion on, only the caption shows.

It shows on Vercel preview deployments, and elsewhere only with `NEXT_PUBLIC_HERO_AVATAR=on`, so production stays as it is until the real clip is in. To try it locally: `NEXT_PUBLIC_HERO_AVATAR=on npm run dev` in `client/`.

The clip and caption are set at the top of `client/src/HeroAvatar/HeroAvatar.jsx`. For now a stock voice (`client/public/avatar/home.m4a`) reads the caption over a placeholder; add the rendered avatar video there (`video`, optional `webm`, and a `poster` still) to replace it.
