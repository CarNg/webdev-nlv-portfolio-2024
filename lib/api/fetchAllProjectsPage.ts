import { fetchGraphQL } from ".";
import { SEO_FIELDS } from "../data/seoFields";

const PROJECTS_PAGE_SEO_FIELDS = `
  seoFields {
    ${SEO_FIELDS}
  }
`;

const PROJECTS_PAGE_FIELDS = `
  projectCardsCollection {
    items {
      type,
      coverPhoto {
        title,
        url
      }
      title,
      year,
      role,
      company,
      players,
      playTime,
      tech,
      url,
      projectUrl
    }
  }
`;

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageProjectsCollection?.items;
}

export async function getProjectsMetadata() {
  const data = await fetchGraphQL(
    `query {
      pageProjectsCollection(preview: ${"false"}) {
          items {
            ${PROJECTS_PAGE_SEO_FIELDS}
          }
        }
      }`,
    "projects-page-metadata"
  );
  return extractPageData(data)[0];
}

export async function getProjectsPageData(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageProjectsCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            ${PROJECTS_PAGE_FIELDS}
          }
        }
      }`,
    "projects-page",
    isDraftMode
  );

  return extractPageData(data)[0].projectCardsCollection.items;
}
