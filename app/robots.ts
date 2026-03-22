import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "https://groundupclimb.co.uk/sitemap.xml",
    host: "https://groundupclimb.co.uk",
  };
}
