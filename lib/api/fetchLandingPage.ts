import { fetchGraphQL } from ".";
import { SEO_FIELDS } from "../data/seoFields";

const LANDING_PAGE_SEO_FIELDS = `
  seoFields {
    ${SEO_FIELDS}
  }
`;

const LANDING_PAGE_FIELDS = `
  mainImage {
    title
    url
  }
  subtitle
`;

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageLandingCollection?.items;
}

export async function getLangingMetadata() {
  const data = await fetchGraphQL(
    `query {
      pageLandingCollection(preview: ${"false"}) {
          items {
            ${LANDING_PAGE_SEO_FIELDS}
          }
        }
      }`,
    "landing-page"
  );
  return extractPageData(data)[0];
}

export async function getLangingPageData(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageLandingCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            ${LANDING_PAGE_FIELDS}
          }
        }
      }`,
    "landing-page",
    isDraftMode
  );
  return extractPageData(data)[0];
}
