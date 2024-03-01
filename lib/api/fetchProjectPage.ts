import { fetchGraphQL } from ".";

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageProjectsCollection?.items;
}

export async function getProjectPageData(isDraftMode = false, projectTitle) {
  const data = await fetchGraphQL(
    `query {
      pageProjectsCollection(preview: ${
        isDraftMode ? "true" : "false"
      }, limit: 1) {
          items {
            projectCardsCollection (where: {projectUrl: "${projectTitle}"})  {
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
                projectUrl,
                content {
                  imagesCollection {
                    items {
                      title,
                      url
                    }
                  }
                  content {
                    json
                  }
                  links,
                  linkTexts
                }
              }
            }
          }
        }
      }`,
    "project-page",
    isDraftMode
  );
  return extractPageData(data)[0].projectCardsCollection.items[0];
}

export async function getProjectUrls(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageProjectsCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            projectCardsCollection {
              items {
                projectUrl
              }
            }
          }
        }
      }`,
    "project-page-url",
    isDraftMode
  );

  return extractPageData(data)[0].projectCardsCollection.items;
}

export async function getProjectMetadataByUrl(isDraftMode = false, projectUrl) {
  const data = await fetchGraphQL(
    `query {
      pageProjectsCollection(preview: ${
        isDraftMode ? "true" : "false"
      }, limit: 1) {
          items {
            projectCardsCollection (where: {projectUrl: "${projectUrl}"})  {
              items {
                coverPhoto {
                  url
                }
                title
              }
            }
          }
        }
      }`,
    "project-page-metadata",
    isDraftMode
  );
  return extractPageData(data)[0].projectCardsCollection.items[0];
}
