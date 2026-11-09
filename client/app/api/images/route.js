import { CACHED, NOT_CACHED, getImages } from "../../../src/Blog/server";

// GET /api/images: the pictures shown with the blog posts.
export async function GET() {
  try {
    return Response.json(await getImages(), { headers: CACHED });
  } catch (err) {
    console.error("Blog images:", err);
    return Response.json({ message: "Could not load the blog images" }, { status: 502, headers: NOT_CACHED });
  }
}
