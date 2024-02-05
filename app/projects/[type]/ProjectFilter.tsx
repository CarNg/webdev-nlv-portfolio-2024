"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectFilter({ projectTypes, currentType }) {
  const router = useRouter();

  return (
    <div className="z-10 mb-7">
      <div className="sm:hidden">
        projects:
        <select
          value={currentType}
          className="bg-transparent border-b-[1px] border-light-grey pb-[2px] ml-2 w-1/2"
          onChange={(e) => router.push(`/projects/${e.target.value}`)}
        >
          {projectTypes.map((p) => {
            return (
              <option key={p} className="bg-black" value={p}>
                {p.replace("-", " ")}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex-row items-center md:text-lg hidden sm:flex">
        projects:
        {projectTypes.map((link, index) => {
          return (
            <div key={link}>
              <Link
                className={`filter-links ${
                  currentType === link ? "active" : ""
                }`}
                href={`/projects/${link}`}
              >
                {link.replace("-", " ")}
              </Link>
              {index < projectTypes.length - 1 ? "/" : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
