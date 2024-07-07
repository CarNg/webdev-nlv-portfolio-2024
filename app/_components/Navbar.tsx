import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";

const links = ["about", "projects", "devlogs", "contact"];

export default function Navbar({
  hide = "",
  isProject = false,
  isDevlog = false,
}) {
  var link = "/";
  if (isProject) link = "/projects";
  if (isDevlog) link = "/devlogs";

  return (
    <div className="flex w-screen max-w-full py-6 px-7 md:px-12 justify-between">
      <Link className="z-20 flex flex-row gap-x-2 items-center" href={link}>
        <ArrowBackIosNewRounded sx={{ fontSize: { xs: "18px", md: "24px" } }} />
        {isProject && <div className="text-lg">projects</div>}
        {isDevlog && <div className="text-lg">devlogs</div>}
      </Link>
      {!isProject && !isDevlog && (
        <div className="z-20 flex gap-5 text-lg max-sm:hidden">
          {links.map((link) => {
            return (
              <Link
                key={link}
                href={`/${link}`}
                className={
                  hide === link
                    ? "text-dark-teal dark:text-light-teal italic max-sm:hidden"
                    : ""
                }
              >
                {link}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
