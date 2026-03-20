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
  }
};

export default nextConfig;