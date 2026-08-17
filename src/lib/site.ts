/**
 * Update NEXT_PUBLIC_SITE_URL when deploying to production — this single
 * value feeds metadataBase, canonical URLs, Open Graph, robots.txt, and
 * sitemap.xml. Falls back to a placeholder so local builds don't break.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://testforge.example.com";
