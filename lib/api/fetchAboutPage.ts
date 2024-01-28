import { fetchGraphQL } from ".";
import { SEO_FIELDS } from "../data/seoFields";

const ABOUT_PAGE_SEO_FIELDS = `
  seoFields {
    ${SEO_FIELDS}
  }
`;

const ABOUT_PAGE_FIELDS = `
  avatar {
    title
    url
  }
  blurb
`;

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageAboutCollection?.items;
}

export async function getAboutMetadata() {
  const data = await fetchGraphQL(
    `query {
      pageAboutCollection(preview: ${"false"}) {
          items {
            ${ABOUT_PAGE_SEO_FIELDS}
          }
        }
      }`,
    "about-page"
  );
  return extractPageData(data)[0];
}

export async function getAboutPageData(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageAboutCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            ${ABOUT_PAGE_FIELDS}
          }
        }
      }`,
    "about-page",
    isDraftMode
  );
  return extractPageData(data)[0];
}
