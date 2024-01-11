import { extractMetadata } from "@/lib/api";
import {
  getLangingMetadata,
  getLangingPageData,
} from "@/lib/api/fetchLandingPage";
import type { Metadata } from "next";
import Image from "next/image";
import ParticlesBackground from "./_components/particlesBackground";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getLangingMetadata();
  return extractMetadata(metadata);
}

export default async function Home() {
  const data = await getLangingPageData();

  return (
    <main>
      <ParticlesBackground />
      <div className="flex min-h-screen flex-col items-center align-middle justify-center gap-6 bg-black">
        <Image
          priority
          className="z-10"
          src={data.mainImage.url}
          alt={data.mainImage.title}
          width="800"
          height="510"
        />
        <h1 className="z-10 text-3xl text-white">{data.subtitle}</h1>
      </div>
    </main>
  );
}
