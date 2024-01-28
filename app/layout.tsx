"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Sometype_Mono } from "next/font/google";
import "./globals.css";

const sometype = Sometype_Mono({
  subsets: ["latin"],
  variable: "--custom-font-sometype",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sometype.className + ` bg-black`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
