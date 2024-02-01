import { extractMetadata } from "@/lib/api";
import { getProjectsMetadata } from "@/lib/api/fetchAllProjectsPage";
import { Metadata } from "next";
import Navbar from "../../_components/Navbar";
import ParticlesBackground from "../../_components/ParticlesBackground";
import ProjectFilter from "./ProjectFilter";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getProjectsMetadata();
  return extractMetadata(metadata);
}

export const dynamicParams = false;
const projectTypes = ["all", "web-dev", "digital-games", "analog-games"];
export async function generateStaticParams() {
  return projectTypes.map((t) => ({ type: t }));
}

export default function ProjectsLayout({
  params,
  children,
}: {
  params: { type: string };
  children: React.ReactNode;
}) {
  return (
    <main>
      <ParticlesBackground />
      <Navbar hide="projects" />
      <div className="content-wrapper flex flex-col">
        <ProjectFilter projectTypes={projectTypes} currentType={params.type} />
        {children}
      </div>
    </main>
  );
}
