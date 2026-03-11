import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
