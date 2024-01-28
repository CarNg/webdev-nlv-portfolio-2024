import { EastRounded } from "@mui/icons-material";
import Link from "next/link";

export default function ArrowedLink({ title, link }) {
  return (
    <Link className="flex gap-2 items-center" href={link} target="_blank">
      {title}
      <EastRounded sx={{ fontSize: "18px" }} />
    </Link>
  );
}
