import type { Metadata } from "next";
import { Anton, Roboto } from "next/font/google";
import ParticleBackground from "./components/ParticlesBackground";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Hamas - Portfolio",
  description:
    "Web Developer portfolio, can build frontend, backend and fullstack web apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${roboto.variable} antialiased container mx-auto px-4 sm:px-10 bg-black/80`}
      >
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
