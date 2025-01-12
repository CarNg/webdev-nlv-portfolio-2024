"use client";
import Image from "next/image";
import Link from "next/link";

export default function DevlogCard({ log }) {
  let date = new Date(log.date);
  const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;

  return (
    <Link
      key={log.title}
      href={`/devlog/${log.logUrl}`}
      className="z-10 w-full md:w-[48%] xl:w-[31%] summary-card"
    >
      <div className="z-10 flex flex-col border-black dark:border-white border-2 rounded-lg overflow-hidden link-box h-60 sm:h-80 md:h-72">
        <div className="relative z-10 h-1/2 sm:h-[70%] md:h-[60%] flex-grow overflow-hidden">
          <Image
            className="cover-image z-10 object-cover object-center dark:sm:grayscale dark:sm:contrast-125"
            src={log.coverPhoto.url}
            alt="Night Light Visuals devlog cover photo"
            fill
            sizes="50vw"
          />
          <div className="cover-image-mask absolute left-0 top-0 h-full w-full dark:bg-black opacity-10 z-20"></div>
        </div>
        <div className="flex flex-col justify-between px-4 pt-3 pb-1 md:pb-1. h-1/2 sm:h-[30%] md:h-[40%] bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div>
            <div className="block sm:flex flex-row flex-wrap items-center text-lg font-bold leading-tight overflow-hidden text-nowrap overflow-ellipsis">
              {log.title}
            </div>
            <div className="italic leading-5 mt-1">
              <span className="exception">{log.project.title}</span>
            </div>
          </div>
          <div className="flex justify-end text-sm mb-1">{formattedDate}</div>
        </div>
      </div>
    </Link>
  );
}
