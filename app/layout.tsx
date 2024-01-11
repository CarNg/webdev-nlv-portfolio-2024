import { Sometype_Mono } from "next/font/google";
import "./globals.css";

const sometype = Sometype_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sometype.className}>{children}</body>
    </html>
  );
}
