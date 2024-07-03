"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";

const options = {
  renderMark: {
    [MARKS.BOLD]: (children) => <b>{children}</b>,
    [MARKS.ITALIC]: (children) => <i>{children}</i>,
  },
  renderNode: {
    [BLOCKS.HEADING_3]: (node, children) => (
      <p className="font-bold h3 text-xl leading-9 mt-9">{children}</p>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <p className="font-bold h5 text-lg leading-9">{children}</p>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.QUOTE]: (node, children) => (
      <div className="ml-2 px-4 border-l-2 border-black dark:border-white mb-8">
        {children}
      </div>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link
        href={node.data.uri}
        target="_blank"
        className="font-extrabold underline underline-offset-4"
      >
        {children}
      </Link>
    ),
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  },
};

export default function Content(props: { content: any }) {
  return (
    <div className=" bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
      {documentToReactComponents(props.content.content.json, options)}
    </div>
  );
}
