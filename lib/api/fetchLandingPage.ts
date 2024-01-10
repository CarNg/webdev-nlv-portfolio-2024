import { fetchGraphQL } from ".";
import { SEO_FIELDS } from "../data/seoFields";

const LANDING_PAGE_GRAPHQL_FIELDS = `
  seoFields {
    ${SEO_FIELDS}
  }
  mainImage {
    url
  }
  subtitle
`;

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageLandingCollection?.items;
}

export async function getLangingPageData(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageLandingCollection(limit: 1, preview: ${
        isDraftMode ? "true" : "false"
      }) {
          items {
            ${LANDING_PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    "landing-page",
    isDraftMode
  );
  return extractPageData(data)[0];
}
