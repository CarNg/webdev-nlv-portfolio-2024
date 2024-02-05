import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";

const links = ["about", "projects", "contact"];

export default function Navbar({ hide }) {
  return (
    <div className="flex w-screen max-w-full py-6 px-7 md:px-12 justify-between">
      <Link className="z-20" href="/">
        <ArrowBackIosNewRounded sx={{ fontSize: { xs: "18px", md: "24px" } }} />
      </Link>
      <div className="z-20 flex gap-5 text-lg">
        {links.map((link) => {
          return (
            <Link
              key={link}
              href={`/${link}`}
              className={hide === link ? "text-dark-teal italic" : ""}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
