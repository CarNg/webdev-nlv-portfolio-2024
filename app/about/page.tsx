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
      <div className="fade-in-anin content-wrapper flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="z-10 min-w-[180px] md:min-w-[200px] max-w-[180px] md:max-w-[200px]">
          <Image
            className="border-dark-teal border-solid border-2 rounded-full"
            src={data.avatar.url}
            alt={data.avatar.title}
            height="200"
            width="200"
          />
        </div>
        <div
          id="about-page-blurb"
          className="z-10 max-w-2xl flex-col flex gap-4 text-center md:text-left"
        >
          <ReactMarkdown>{data.blurb}</ReactMarkdown>
          <div className="flex w-full gap-10 text-lg justify-center md:justify-start">
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
