# Majid Tech website

The company site at [majidtech.com](https://majidtech.com): the home page (hero, Selected Work, Services, Blog, Testimonials, Contact), the App creation page (`/app-creation`) and the Founder page (`/founder`).

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

- `client/app/`: the pages (`page.jsx`, `founder/`, `app-creation/`), the shared layout with the nav, page titles and descriptions, the share image (`opengraph-image.jsx`), `sitemap.js`, `robots.js`, and the contact form's server route (`api/contact/route.js`).
- `client/src/`: the page sections and components (`Header`, `SelectedWork`, `Services`, `Blog`, `Contact`, `Navbar`, …). Components that run in the browser start with `"use client"`.
- `client/public/`: files served as they are: the Selected Work loops and posters (`work/`), images, the founder photo, the résumé and the avatar's voice clip.

## Environment variables

Set these in Vercel (Project › Settings › Environment Variables), or in `client/.env.local` to try them locally.

| Variable | Needed for |
| --- | --- |
| `RESEND_API_KEY` | The contact form. It emails each message to majidtechnicalsolutions@gmail.com through [Resend](https://resend.com), with Reply-To set to the visitor. Without it, messages are only logged by the server. |
| `NEXT_PUBLIC_SITE_URL` | Optional. The site's address in links, the sitemap and share images. Defaults to https://majidtech.com. |
| `BLOG_API_URL` | Optional. The Majid Tech API the blog reads from. Defaults to the Heroku app. The site proxies it at `/blog-api`, so the API's CORS list doesn't need the site's addresses. |
| `NEXT_PUBLIC_HERO_AVATAR` | Optional. `on` shows the hero avatar outside preview deployments (see below). |

## Deploying (Vercel)

The Vercel project builds from this repo with **Root Directory** set to `client`; `client/vercel.json` pins the framework to Next.js, so no other settings are needed. Every pull request gets a preview deployment, and merging to `master` deploys to production.

## Home page avatar

The home page hero has an avatar of Majid, large and centred behind the text, with a caption bar underneath (`client/src/HeroAvatar`). It greets the visitor while the hero is on screen and stops when they scroll away. Sound is off until the visitor taps the speaker; the caption always shows; with reduced motion on, only the caption shows.

It shows on Vercel preview deployments, and elsewhere only with `NEXT_PUBLIC_HERO_AVATAR=on`, so production stays as it is until the real clip is in. To try it locally: `NEXT_PUBLIC_HERO_AVATAR=on npm run dev` in `client/`.

The clip and caption are set at the top of `client/src/HeroAvatar/HeroAvatar.jsx`. For now a stock voice (`client/public/avatar/home.m4a`) reads the caption over a placeholder; add the rendered avatar video there (`video`, optional `webm`, and a `poster` still) to replace it.
