import { CACHED, NOT_CACHED, getPosts } from "../../../src/Blog/server";

// GET /api/blog: the blog posts.
export async function GET() {
  try {
    return Response.json(await getPosts(), { headers: CACHED });
  } catch (err) {
    console.error("Blog posts:", err);
    return Response.json({ message: "Could not load the blog" }, { status: 500, headers: NOT_CACHED });
  }
}
