import type { Metadata } from "next";
// @ts-ignore (no types)
import "./globals.css";

import { Anton, Roboto } from "next/font/google";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticlesBackground";
import OpeningAnimation from "./OpeningAnimation";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Hamas - Portfolio",
  description:
    "Web Developer portfolio, can build frontend, backend and fullstack web apps",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${roboto.variable} antialiased container mx-auto px-4 sm:px-10 bg-black/80 text-white-whisper select-none cursor-default font-roboto`}
      >
        <OpeningAnimation />
        <ParticleBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
