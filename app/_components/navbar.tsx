import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";

const links = ["about", "projects", "contact"];

export default function Navbar({ hide }) {
  return (
    <div className="fade-in-anin flex w-full max-w-7xl py-6 px-8 justify-between">
      <Link className="z-20" href="/">
        <ArrowBackIosNewRounded />
      </Link>
      <div className="z-20 flex gap-5">
        {links.map((link) => {
          if (link !== hide) {
            return (
              <Link key={link} href={`/${link}`}>
                {link}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
