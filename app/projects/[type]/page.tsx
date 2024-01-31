import { extractMetadata } from "@/lib/api";
import {
  getProjectsMetadata,
  getProjectsPageData,
} from "@/lib/api/fetchAllProjectsPage";
import { Metadata } from "next";
import Navbar from "../../_components/Navbar";
import ParticlesBackground from "../../_components/ParticlesBackground";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getProjectsMetadata();
  return extractMetadata(metadata);
}

const projectTypes = ["all", "web-dev", "digital-games", "analog-games"];

export async function getStaticPaths() {
  const paths = projectTypes.map((t) => {
    return { params: { type: t } };
  });

  return { paths, fallback: false };
}

export default async function Projects({
  params,
}: {
  params: { type: string };
}) {
  const data = await getProjectsPageData();
  const projects = data.filter((p) => {
    return p.type === params.type || params.type === "all";
  });

  return (
    <main>
      <ParticlesBackground />
      <Navbar hide="projects" />
      <div className="fade-in-anin content-wrapper flex flex-col">
        <ProjectFilter projectTypes={projectTypes} currentType={params.type} />
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-8 md:gap-y-6 flex-wrap h-fit mx-auto w-full">
          {projects.map((p) => {
            return <ProjectCard key={p.title} project={p} />;
          })}
        </div>
      </div>
    </main>
  );
}
