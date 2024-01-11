import process from "process";

export async function fetchGraphQL(query, tag, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches with a cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: [tag] },
    }
  ).then((response) => response.json());
}

export function extractMetadata(metadata) {
  return {
    title: metadata.seoFields.pageTitle,
    description: metadata.seoFields.pageDescription,
    alternates: {
      canonical: metadata.seoFields.canonicalUrl,
    },
    openGraph: {
      title: metadata.seoFields.pageTitle,
      description: metadata.seoFields.pageDescription,
      images: [...metadata.seoFields.shareImagesCollection.items],
    },
  };
}
