import Image from "next/image";
import Link from "next/link";
import ProjectBullets from "./ProjectBullets";

export default function ProjectCard({ project }) {
  const date = new Date(project.year);

  return (
    <Link
      key={project.title}
      href={project.url || ""}
      target={project.url ? "_blank" : "_self"}
      className="z-10 w-full md:w-[48%] xl:w-[32%] project-card"
    >
      <div
        className={`z-10 flex flex-col border-white border-2 rounded-lg overflow-hidden link-box h-60 sm:h-80 md:h-72 ${
          project.url ? "" : "no-href-link"
        }`}
      >
        <div className="relative z-10 h-1/2 sm:h-[70%] md:h-[60%] flex-grow overflow-hidden">
          <Image
            className="cover-image z-10 object-cover object-center sm:grayscale sm:contrast-125"
            src={project.coverPhoto.url}
            alt=""
            fill
            sizes="50vw"
          />
          <div className="cover-image-mask absolute left-0 top-0 h-full w-full bg-black opacity-10 z-20"></div>
        </div>
        <div className="flex flex-col justify-between px-4 pt-3 pb-1.5 md:pb-2 h-1/2 sm:h-[30%] md:h-[40%] bg-black">
          <div>
            <div className="block sm:flex flex-row flex-wrap items-center text-lg font-bold leading-tight overflow-hidden text-nowrap overflow-ellipsis">
              {project.title}{" "}
              <span className="hidden sm:flex italic text-sm font-normal ml-1">
                ({date.getFullYear()})
              </span>
            </div>
            <div className="italic leading-5 mt-1">
              <span className="exception">
                {project.role} {project.company ? `@ ${project.company}` : ""}
              </span>
            </div>
          </div>
          <ProjectBullets
            tech={project.tech}
            players={project.players}
            playTime={project.playTime}
          />
        </div>
      </div>
    </Link>
  );
}
