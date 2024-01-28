import { extractMetadata } from "@/lib/api";
import { getAboutMetadata, getAboutPageData } from "@/lib/api/fetchAboutPage";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ArrowedLink from "../_components/arrrowedLink";
import Navbar from "../_components/navbar";
import ParticlesBackground from "../_components/particlesBackground";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getAboutMetadata();
  return extractMetadata(metadata);
}

export default async function About() {
  const data = await getAboutPageData();

  return (
    <main>
      <ParticlesBackground />
      <Navbar hide="about" />
      <div className="fade-in-anin flex min-h-screen flex-row items-center justify-center gap-12 md:pb-9 bg-black">
        <Image
          className="z-10 border-dark-teal border-solid border-2 rounded-full"
          src={data.avatar.url}
          alt={data.avatar.title}
          height="200"
          width="200"
        />
        <div
          id="about-page-blurb"
          className="z-10 max-w-lg flex-col flex gap-4"
        >
          <ReactMarkdown>{data.blurb}</ReactMarkdown>
          <div className="flex gap-10 text-lg">
            <ArrowedLink
              title="linkedin"
              link="https://www.linkedin.com/in/carng/"
            />
            <ArrowedLink title="resume" link="/CarmenNgResume.pdf" />
          </div>
        </div>
      </div>
    </main>
  );
}
