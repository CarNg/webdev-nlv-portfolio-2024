import { extractMetadata } from "@/lib/api";
import { getAboutMetadata, getAboutPageData } from "@/lib/api/fetchAboutPage";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ArrowedLink from "../_components/ArrrowedLink";
import Navbar from "../_components/Navbar";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getAboutMetadata();
  return extractMetadata(metadata);
}

export default async function About() {
  const data = await getAboutPageData();

  return (
    <main>
      <Navbar hide="about" />
      <div className="fade-in-anin content-wrapper flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="z-10 min-w-[180px] md:min-w-[200px] max-w-[180px] md:max-w-[200px] sm:border-black border-light-teal dark:sm:border-white hover:border-dark-teal dark:hover:border-light-teal border-solid border-2 rounded-full overflow-hidden">
          <Image
            id="about-page-avatar"
            className="sm:grayscale"
            src={data.avatar.url}
            alt={data.avatar.title}
            height="200"
            width="200"
          />
        </div>
        <div
          id="about-page-blurb"
          className="z-10 max-w-3xl flex-col flex gap-4 text-center md:text-left md:text-lg bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50"
        >
          <ReactMarkdown>{data.blurb}</ReactMarkdown>
          <div className="flex w-full gap-10 text-lg justify-center md:justify-start mt-4">
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
