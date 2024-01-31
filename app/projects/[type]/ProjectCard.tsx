import { Box } from "@mui/material";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const date = new Date(project.year);
  const coverImages = project.coverPhotoCollection.items;
  const icons = project.iconsCollection.items;

  return (
    <Link
      key={project.title}
      href={project.url || ""}
      target="_blank"
      className="z-10 w-full sm:w-[48%] lg:w-[32%]"
    >
      <div className="z-10 flex flex-col border-white border-2 rounded-lg link-box h-72">
        <Box
          className="z-10 h-2/3 sm:h-1/2 bg-cover sm:bg-center"
          sx={{ backgroundImage: `url(${coverImages[0].url})` }}
        ></Box>
        <div className="flex flex-col justify-between px-4 py-2 sm:py-3 h-1/3 sm:h-1/2 bg-black">
          <div>
            <div className="text-lg font-bold">
              {project.title}{" "}
              <span className="italic text-sm font-normal">
                ({date.getFullYear()})
              </span>
            </div>
            <div className="italic leading-5">
              <span className="exception">
                {project.role} {project.company ? `@ ${project.company}` : ""}
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-end text-sm">
            {icons.map((i) => {
              return i.title;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
