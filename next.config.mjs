/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Remove 'output: export' so Vercel handles the build natively
  // 2. Remove 'basePath' because your site is now at the root domain

  images: {
    // Keep this true if you want to avoid Vercel image optimization costs, 
    // but Vercel handles optimization much better than GitHub Pages.
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Browser caching for static media (30 days, revalidated in the background)
  async headers() {
    const cache = [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }];
    return [
      { source: '/images/:path*', headers: cache },
      { source: '/Videos/:path*', headers: cache },
    ];
  },
};

export default nextConfig;