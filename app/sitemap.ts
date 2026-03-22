import type { MetadataRoute } from "next";

const BASE_URL = "https://groundupclimb.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "/",
    "/guides",
    "/guides/indoor",
    "/guides/indoor/introduction",
    "/guides/outdoor",
    "/guides/outdoor/introduction",
    "/gear",
    "/gear/indoor",
    "/gear/outdoor",
    "/gear/trad",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
