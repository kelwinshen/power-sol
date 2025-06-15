import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  distDir: 'dist',  // Specify the output directory
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static exports
  },
};

export default nextConfig;
