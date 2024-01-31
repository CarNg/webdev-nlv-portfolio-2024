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
      coverPhotoCollection(limit: 2) {
        items {
          url
        }
      }
      title,
      year,
      role,
      company,
      iconsCollection(limit: 3) {
        items {
          url,
          title,
          description
        }
      },
      url
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
    "projects-page"
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
