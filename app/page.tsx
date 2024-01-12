import { extractMetadata } from "@/lib/api";
import {
  getLangingMetadata,
  getLangingPageData,
} from "@/lib/api/fetchLandingPage";
import type { Metadata } from "next";
import Image from "next/image";
import ParticlesBackground from "./_components/particlesBackground";
import TerminalText from "./_components/terminalText";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getLangingMetadata();
  return extractMetadata(metadata);
}

export default async function Home() {
  const data = await getLangingPageData();

  return (
    <main>
      <ParticlesBackground />
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 md:gap-4 bg-black">
        <div
          className="relative max-w-4xl z-10 w-4/5"
          style={{ aspectRatio: "80/51" }}
        >
          <Image
            priority
            src={data.mainImage.url}
            alt={data.mainImage.title}
            layout="fill"
          />
        </div>
        <TerminalText text={data.subtitle} />
      </div>
    </main>
  );
}
