import { EastRounded } from "@mui/icons-material";
import Link from "next/link";

export default function ArrowedLink(props: {
  title: string;
  link: string;
  stay?: boolean;
}) {
  return (
    <Link
      className="flex gap-2 items-center"
      href={props.link}
      target={props.stay ? "_self" : "_blank"}
    >
      {props.title}
      <EastRounded sx={{ fontSize: "18px" }} />
    </Link>
  );
}
