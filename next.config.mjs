/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // This is the MAGIC LINE that fixes the 404 errors:
  basePath: '/dpv-offshore-redesign-website', 

  images: {
    unoptimized: true,
  }
};

export default nextConfig;