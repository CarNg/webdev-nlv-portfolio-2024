import type { Metadata } from "next";
import { Sono } from "next/font/google";
import "./globals.css";

const sono = Sono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Night Light Visuals | Front-end Developer & Game Designer",
  description: "Front-end developer and game designer based in Hong Kong.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sono.className}>{children}</body>
    </html>
  );
}
