import {
  getProjectMetadataByUrl,
  getProjectUrls,
} from "@/lib/api/fetchProjectPage";
import type { Metadata } from "next";
import Navbar from "../../_components/Navbar";

type Props = {
  params: { project: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = params.project;
  const md = await getProjectMetadataByUrl(false, project);
  return {
    title: `Project | ${md.title}`,
    description:
      "Discover a collection of front-end web development and game design projects by a web developer and hobbyist game designer based in Hong Kong.",
    openGraph: {
      title: `Night Light Visuals | Project | ${md.title}`,
      description:
        "Discover a collection of front-end web development and game design projects by a web developer and hobbyist game designer based in Hong Kong.",
      images: [md.coverPhoto.url],
    },
  };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const urlsObject = await getProjectUrls();
  const urls = urlsObject
    .filter((u) => u.projectUrl !== null)
    .map((u) => u.projectUrl);
  return urls.map((t) => ({ project: t }));
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
      <Navbar isProject />
      <div className="content-wrapper">{children}</div>
    </main>
  );
}
