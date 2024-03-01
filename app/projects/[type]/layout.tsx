import { extractMetadata } from "@/lib/api";
import { getProjectsMetadata } from "@/lib/api/fetchAllProjectsPage";
import { Metadata } from "next";
import Navbar from "../../_components/Navbar";
import ProjectFilter from "./ProjectFilter";

type Props = {
  params: { type: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = await getProjectsMetadata();
  const extractedMetadata = extractMetadata(metadata);

  let type;
  switch (params.type) {
    case "web-dev":
      type = "Web Development";
      break;
    case "tabletop-games":
      type = "Tabletop Games";
      break;
    case "digital-games":
      type = "Digital Games";
      break;
    default:
      type = "All Projects";
  }
  extractedMetadata.title = `Projects | ${type}`;
  return extractedMetadata;
}

export const dynamicParams = false;
const projectTypes = ["all", "web-dev", "digital-games", "tabletop-games"];
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
      <Navbar hide="projects" />
      <div className="content-wrapper flex flex-col">
        <ProjectFilter projectTypes={projectTypes} currentType={params.type} />
        {children}
      </div>
    </main>
  );
}
