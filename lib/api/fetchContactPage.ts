import { fetchGraphQL } from ".";
import { SEO_FIELDS } from "../data/seoFields";

const CONTACT_PAGE_SEO_FIELDS = `
  seoFields {
    ${SEO_FIELDS}
  }
`;

const CONTACT_PAGE_FIELDS = `
  cardsCollection {
    items {
      title,
      link,
      type
    }
  }
`;

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageContactCollection?.items;
}

export async function getContactMetadata() {
  const data = await fetchGraphQL(
    `query {
      pageContactCollection(preview: ${"false"}) {
          items {
            ${CONTACT_PAGE_SEO_FIELDS}
          }
        }
      }`,
    "contact-page"
  );
  return extractPageData(data)[0];
}

export async function getContactPageData(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageContactCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            ${CONTACT_PAGE_FIELDS}
          }
        }
      }`,
    "contact-page",
    isDraftMode
  );
  return extractPageData(data)[0].cardsCollection?.items;
}
