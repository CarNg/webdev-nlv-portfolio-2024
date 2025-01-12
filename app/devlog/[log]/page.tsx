import ArrowedLink from "@/app/_components/ArrrowedLink";
import Content from "@/app/_components/Content";
import Swiper from "@/app/_components/Swiper";
import { getDevlogPageData } from "@/lib/api/fetchDevlogPage ";
import Image from "next/image";
import Link from "next/link";

export default async function Devlog({ params }: { params: { log: string } }) {
  const log = await getDevlogPageData(false, params.log);
  const { content, date } = log;
  const _date = new Date(date);
  const formattedDate = `${_date.getDate()} ${_date.toLocaleString("default", {
    month: "long",
  })} ${_date.getFullYear()}`;

  return (
    <div className="flex flex-col w-full max-w-4xl m-x-auto fade-in-anin z-10 m-auto justify-start">
      <h1 className="h1 text-4xl mb-8 font-bold">{content.internalName}</h1>
      <div className="flex flex-col">
        {content.imagesCollection.items.length === 1 && (
          <div className="w-full px-16">
            <div className="w-full pt-[45%] relative mb-6">
              <Image
                className="rounded-lg"
                src={content.imagesCollection.items[0].url}
                alt={content.imagesCollection.items[0].title}
                layout="fill"
              />
            </div>
          </div>
        )}
        {content.imagesCollection.items.length > 1 && (
          <Swiper images={content.imagesCollection.items} />
        )}
        <div className="text-right">
          <b>Date: </b>
          {formattedDate}
        </div>
        <div className="text-right mb-6 md:mb-10">
          <b>Project: </b>
          <Link href={`/project/${log.project.projectUrl}`}>
            {log.project.title}
          </Link>
        </div>
        <Content content={content} />
        <div className="self-center flex flex-col md:flex-row gap-y-3 md:gap-x-11 mt-5 items-center md:items-start">
          {content.links !== null &&
            content.links.map((l, i) => {
              return (
                <ArrowedLink key={l} title={content.linkTexts[i]} link={l} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
