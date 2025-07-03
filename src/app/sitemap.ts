import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://use-s-react.christbm.dev";

  const staticRoutes = [
    "",
    "/docs",
    "/docs/getting-started",
    "/docs/api",
    "/docs/debug",
    "/docs/global-store",
    "/docs/local-state",
    "/docs/derived-state",
    "/docs/executable-state",
  ];

  const now = new Date().toISOString();

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));
}
