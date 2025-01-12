import { extractMetadata } from "@/lib/api";
import {
  getContactMetadata,
  getContactPageData,
} from "@/lib/api/fetchContactPage";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Metadata } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../_components/Navbar";
import ItchIcon from "../assets/IconItch.svg";
import ItchIconLight from "../assets/IconItchLight.svg";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getContactMetadata();
  return extractMetadata(metadata);
}

const iconProps = {
  className: "exception text-black dark:text-white !w-9 md:!w-12 !h-9 md:!h-12",
};

export default async function Contact() {
  const data = await getContactPageData();

  return (
    <main>
      <Navbar hide="contact" />
      <div className="fade-in-anin content-wrapper w-">
        <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full sm:w-4/5 md:w-[650px] 2xl:w-full flex-wrap m-auto">
          {data.map((c) => {
            return (
              <Link
                key={c.type}
                href={c.link}
                target="_blank"
                className="w-full md:w-72"
              >
                <div className="z-10 flex flex-col gap-5 md:gap-10 border-black dark:border-white border-solid border-2 rounded-lg p-6 md:p-10 md:min-w-72 md:w-72 md:min-h-72 h-36 md:h-72 justify-center md:items-center break-words link-box bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50">
                  <div className="flex flex-row md:flex-col items-center gap-3 md:gap-4">
                    {c.type === "email" && <EmailIcon {...iconProps} />}
                    {c.type === "github" && <GitHubIcon {...iconProps} />}
                    {c.type === "linkedin" && <LinkedInIcon {...iconProps} />}
                    {c.type === "itch.io" && (
                      <div className="w-9 md:w-12 h-9 md:h-12">
                        <Image
                          className="dark:hidden"
                          src={ItchIconLight}
                          alt="Itch.io website icon"
                        />
                        <Image
                          className="hidden dark:block"
                          src={ItchIcon}
                          alt="Itch.io website icon"
                        />
                      </div>
                    )}
                    <span className="text-sm exception md:hidden">
                      {c.type}
                    </span>
                  </div>
                  {c.title}
                  <span className="text-sm exception hidden md:inline-block">
                    {c.type}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
