"use client";

import { ThemeProvider } from "next-themes";
import { Sometype_Mono } from "next/font/google";
import ModeToggle from "./_components/ModeToggle";
import ParticlesBackground from "./_components/ParticlesBackground";
import "./globals.css";

const sometype = Sometype_Mono({
  subsets: ["latin"],
  variable: "--custom-font-sometype",
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          sometype.className +
          ` bg-white dark:bg-black relative text-black dark:text-white font-bold dark:font-normal`
        }
      >
        <ThemeProvider attribute="class">
          <ParticlesBackground />
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
