import { Sometype_Mono } from "next/font/google";
import "./globals.css";

const sometype = Sometype_Mono({
  subsets: ["latin"],
  variable: "--custom-font-sometype",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sometype.className + ` bg-black`}>{children}</body>
    </html>
  );
}
