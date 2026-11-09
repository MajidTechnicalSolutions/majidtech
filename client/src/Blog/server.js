// The blog's data, loaded on the server (app/api/blog and app/api/images).
// It replaces the Express API that used to run on Heroku.
//
// - Posts come from MongoDB: the "blogposts" collection in the "majid-tech"
//   database (MONGODB_URI).
// - Pictures come from an Unsplash collection (UNSPLASH_ACCESS_KEY).
import { MongoClient } from "mongodb";

const DB_NAME = "majid-tech";
const POSTS = "blogposts";
const UNSPLASH_COLLECTION = "_7OuPnAqFt4";

// One client per server instance, reused across requests (and across hot
// reloads in development) so each request doesn't open a new connection.
function mongo() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  globalThis.__blogMongo ??= new MongoClient(uri, { maxPoolSize: 5, serverSelectionTimeoutMS: 8000 }).connect();
  return globalThis.__blogMongo.catch((err) => {
    // Don't keep a failed connection around; the next request tries again.
    globalThis.__blogMongo = undefined;
    throw err;
  });
}

export async function getPosts() {
  const client = await mongo();
  return client.db(DB_NAME).collection(POSTS).find({}).toArray();
}

export async function getImages() {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) throw new Error("UNSPLASH_ACCESS_KEY is not set");
  const response = await fetch(`https://api.unsplash.com/collections/${UNSPLASH_COLLECTION}/photos/`, {
    headers: { Authorization: `Client-ID ${key}` },
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error(`Unsplash answered ${response.status}`);
  const photos = await response.json();
  // The blog only needs each picture's full-size address.
  return photos.map((photo) => ({ id: photo.id, urls: { full: photo.urls.full } }));
}

// Both lists change rarely, so Vercel's cache keeps a good answer for an hour
// (and serves it for up to a day while refreshing). Failures are never cached.
export const CACHED = { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" };
export const NOT_CACHED = { "Cache-Control": "no-store" };
