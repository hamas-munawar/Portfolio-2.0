import type { NextConfig } from "next";

import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  // PWA configuration options
  swSrc: "app/sw.ts", // Path to your custom Service Worker file (will create this)
  swDest: "public/sw.js", // Output location for the compiled Service Worker
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
  // Other options for caching, precaching, etc.
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Your standard Next.js config goes here
  // e.g., reactStrictMode: true,
};

export default withSerwist(nextConfig);
