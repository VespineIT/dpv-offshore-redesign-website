/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // This is the MAGIC LINE that fixes the 404 errors:
  basePath: '/dpv-offshore-redesign-website', 

  images: {
    unoptimized: true,
    // Whitelist the domain used in the OfficeGlobe component
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
};

export default nextConfig;