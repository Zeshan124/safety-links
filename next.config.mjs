/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Next.js <Image> to optimize images from these external domains
    remotePatterns: [
      { protocol: "https", hostname: "safetylinks.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    // Serve modern formats — browsers that support WebP/AVIF get much smaller files
    formats: ["image/avif", "image/webp"],
    // Reasonable cache TTL for production assets
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
