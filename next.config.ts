import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'cdn1.treatwell.net',
      },
      {
        hostname: 'res.cloudinary.com'
      }
    ],
  },
};

export default nextConfig;
