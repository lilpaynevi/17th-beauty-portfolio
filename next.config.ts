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
  env: {
    customKey: 'my-value',
    NEXT_PUBLIC_API_URL: 'https://17thbeauty.netlify.app'
  },
};

export default nextConfig;
