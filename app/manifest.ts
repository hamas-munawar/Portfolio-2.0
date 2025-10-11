import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hamas Portfolio",
    short_name: "HamasDev",
    description:
      "Web Developer portfolio, can build frontend, backend and fullstack web apps",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.svg", // <-- Path to your SVG in /public
        sizes: "any", // <-- Use 'any' because it's a vector graphic
        type: "image/svg+xml", // <-- The correct MIME type for SVG
        purpose: "maskable", // <-- Crucial for Android/Chrome compatibility
      },
    ],
  };
}
