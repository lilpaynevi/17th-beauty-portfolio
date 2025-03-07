import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn1.treatwell.net",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL:
      process.env.NODE_ENV === "production"
        ? "https://17thbeauty.netlify.app"
        : "http://localhost:3001",
  },
  env: {
    customKey: "my-value",
    NEXT_PUBLIC_API_URL:
      process.env.NODE_ENV === "production"
        ? "https://17thbeauty.netlify.app"
        : "http://localhost:3001",
  },
};

export default nextConfig;
