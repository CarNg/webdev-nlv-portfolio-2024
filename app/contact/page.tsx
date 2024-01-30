import { extractMetadata } from "@/lib/api";
import {
  getContactMetadata,
  getContactPageData,
} from "@/lib/api/fetchContactPage";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "../_components/Navbar";
import ParticlesBackground from "../_components/ParticlesBackground";
import IconEmail from "../assets/IconEmail";
import IconGithub from "../assets/IconGithub";
import IconItchIo from "../assets/IconItchIo";
import IconLinkedIn from "../assets/IconLinkedIn";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getContactMetadata();
  return extractMetadata(metadata);
}

const getIcon = (type: string) => {
  if (type === "email") {
    return (
      <IconEmail
        className="exception"
        sx={{ fontSize: { xs: "32px", md: "40px" } }}
      />
    );
  } else if (type === "github") {
    return (
      <IconGithub
        className="exception"
        sx={{ fontSize: { xs: "32px", md: "40px" } }}
      />
    );
  } else if (type === "itch.io") {
    return (
      <IconItchIo
        className="exception"
        sx={{ fontSize: { xs: "32px", md: "40px" } }}
      />
    );
  } else {
    return (
      <IconLinkedIn
        className="exception"
        sx={{ fontSize: { xs: "32px", md: "40px" } }}
      />
    );
  }
};

export default async function Contact() {
  const data = await getContactPageData();

  return (
    <main>
      <ParticlesBackground />
      <Navbar hide="contact" />
      <div className="fade-in-anin content-wrapper">
        <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full sm:w-4/5 md:w-[650px] 2xl:w-full flex-wrap m-auto">
          {data.map((c) => {
            return (
              <Link
                key={c.type}
                href={c.link}
                target="_blank"
                className="w-full md:w-auto"
              >
                <div className="z-10 flex flex-col gap-4 border-white border-solid border-2 rounded-lg p-6 md:p-10 md:min-w-72 md:w-72 md:min-h-72 h-36 md:h-72 justify-center md:items-center break-words link-box bg-black">
                  <div className="flex flex-row md:flex-col items-center gap-4">
                    {getIcon(c.type)}
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
