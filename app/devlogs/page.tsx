import { extractMetadata } from "@/lib/api";
import {
  getDevlogsMetadata,
  getDevlogsPageData,
} from "@/lib/api/fetchDevlogsPage";
import { Metadata } from "next";
import Navbar from "../_components/Navbar";
import DevlogCard from "./DevlogCard";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getDevlogsMetadata();
  return extractMetadata(metadata);
}

export default async function Devlogs() {
  const devlogs = await getDevlogsPageData();

  return (
    <main>
      <Navbar hide="devlogs" />
      <div className="content-wrapper fade-in-anin flex flex-col sm:flex-row items-center justify-center sm:justify-start md:justify-between xl:justify-start sm:gap-x-8 md:gap-x-0 xl:gap-x-8 gap-y-8 flex-wrap h-fit mx-auto w-full">
        {devlogs.map((l) => {
          return <DevlogCard key={l.date} log={l} />;
        })}
      </div>
    </main>
  );
}
