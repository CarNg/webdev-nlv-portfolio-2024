"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const options = {
  renderMark: {
    [MARKS.BOLD]: (children) => <b>{children}</b>,
  },
  renderNode: {
    [BLOCKS.HEADING_3]: (node, children) => (
      <p className="font-bold h3 text-lg">{children}</p>
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
