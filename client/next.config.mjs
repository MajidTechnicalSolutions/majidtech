/** @type {import('next').NextConfig} */
// The blog is served by the Majid Tech API (the Express app in /server, on
// Heroku). The site reaches it through /blog-api on its own domain, so the
// API's CORS list doesn't need every preview address.
const BLOG_API = process.env.BLOG_API_URL || "https://majidtech-35d0c5c21559.herokuapp.com";

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/blog-api/:path*", destination: `${BLOG_API}/:path*` }];
  },
};

export default nextConfig;
