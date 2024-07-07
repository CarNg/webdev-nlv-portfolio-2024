import {
  getDevlogMetadataByUrl,
  getDevlogUrls,
} from "@/lib/api/fetchDevlogPage ";
import type { Metadata } from "next";
import Navbar from "../../_components/Navbar";

type Props = {
  params: { log: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const log = params.log;
  const md = await getDevlogMetadataByUrl(false, log);
  return {
    title: `Devlog | ${md.title}`,
    description:
      "Explore the development logs for the latest apps and games by Night Light Visuals. Get insights into our creative process and behind-the-scenes updates.",
    openGraph: {
      title: `Night Light Visuals | Devlog | ${md.title}`,
      description:
        "Explore the development logs for the latest apps and games by Night Light Visuals. Get insights into our creative process and behind-the-scenes updates.",
      images: [md.coverPhoto.url],
    },
  };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const urlsObject = await getDevlogUrls();
  const urls = urlsObject.filter((u) => u.logUrl !== null).map((u) => u.logUrl);
  return urls.map((t) => ({ log: t }));
}

export default function DevlogsLayout({
  params,
  children,
}: {
  params: { type: string };
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar isDevlog />
      <div className="content-wrapper">{children}</div>
    </main>
  );
}
