import { fetchGraphQL } from ".";
import { SEO_FIELDS } from "../data/seoFields";

const DEVLOGS_PAGE_SEO_FIELDS = `
  seoFields {
    ${SEO_FIELDS}
  }
`;

const DEVLOGS_PAGE_FIELDS = `
  devlogsCollection {
    items {
      coverPhoto {
        title,
        url
      }
      title,
      date,
      logUrl,
      project {
        title  
      }
    }
  }
`;

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageDevlogCollection.items;
}

export async function getDevlogsMetadata() {
  const data = await fetchGraphQL(
    `query {
      pageDevlogCollection(preview: ${"false"}) {
          items {
            ${DEVLOGS_PAGE_SEO_FIELDS}
          }
        }
      }`,
    "devlogs-page-metadata"
  );
  return extractPageData(data)[0];
}

export async function getDevlogsPageData(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageDevlogCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            ${DEVLOGS_PAGE_FIELDS}
          }
        }
      }`,
    "devlog-page",
    isDraftMode
  );

  return extractPageData(data)[0].devlogsCollection.items;
}
