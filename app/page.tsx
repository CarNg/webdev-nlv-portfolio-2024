import { extractMetadata } from "@/lib/api";
import {
  getLandingMetadata,
  getLangingPageData,
} from "@/lib/api/fetchLandingPage";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getLandingMetadata();
  return extractMetadata(metadata);
}

export default async function Home() {
  const data = await getLangingPageData();

  return (
    <main>
      <div className="fade-scale-in-anin flex min-h-screen flex-col items-center justify-center gap-2 md:pb-9 bg-white dark:bg-black">
        <div
          className="relative max-w-4xl z-10 w-4/5"
          style={{ aspectRatio: "80/51" }}
        >
          <Image
            className="dark:hidden"
            priority
            src={data.mainImage.url}
            alt={data.mainImage.title}
            fill
            sizes="100vw"
          />
          <Image
            className="dark:block hidden"
            priority
            src={data.mainImageDark.url}
            alt={data.mainImage.title}
            fill
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center z-10 gap-5 sm:gap-16 md:gap-24 lg:gap-32 text-2xl mt-20 sm:mt-0">
          <Link href="/about">about</Link>
          <Link href="/projects">projects</Link>
          <Link href="/contact">contact</Link>
        </div>
        {/* <TerminalText text={data.subtitle} /> */}
      </div>
    </main>
  );
}
