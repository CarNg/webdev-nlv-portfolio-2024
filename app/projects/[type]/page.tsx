import { getProjectsPageData } from "@/lib/api/fetchAllProjectsPage";
import ProjectCard from "./ProjectCard";

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
    <div className="fade-in-anin flex flex-col sm:flex-row items-center justify-center sm:justify-start md:justify-between xl:justify-start sm:gap-x-8 md:gap-x-0 xl:gap-x-8 gap-y-8 flex-wrap h-fit mx-auto w-full">
      {projects.map((p) => {
        return <ProjectCard key={p.title} project={p} />;
      })}
    </div>
  );
}
