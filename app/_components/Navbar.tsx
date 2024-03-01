import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";

const links = ["about", "projects", "contact"];

export default function Navbar({ hide = "", isProject = false }) {
  return (
    <div className="flex w-screen max-w-full py-6 px-7 md:px-12 justify-between">
      <Link
        className="z-20 flex flex-row gap-x-2"
        href={isProject ? "/projects" : "/"}
      >
        <ArrowBackIosNewRounded sx={{ fontSize: { xs: "18px", md: "24px" } }} />
        {isProject && <div className="text-lg">projects</div>}
      </Link>
      {!isProject && (
        <div className="z-20 flex gap-5 text-lg">
          {links.map((link) => {
            return (
              <Link
                key={link}
                href={`/${link}`}
                className={
                  hide === link
                    ? "text-dark-teal dark:text-light-teal italic"
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
