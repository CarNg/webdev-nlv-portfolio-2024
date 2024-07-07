import { fetchGraphQL } from ".";

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.pageDevlogCollection?.items;
}

export async function getDevlogPageData(isDraftMode = false, logTitle) {
  const data = await fetchGraphQL(
    `query {
      pageDevlogCollection(preview: ${
        isDraftMode ? "true" : "false"
      }, limit: 1) {
          items {
            devlogsCollection (where: {logUrl: "${logTitle}"})  {
              items {
                coverPhoto {
                  title,
                  url
                }
                title,
                date,
                logUrl,
                project {
                  title,
                  projectUrl
                },
                content {
                  internalName
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
    "devlog-page",
    isDraftMode
  );
  return extractPageData(data)[0].devlogsCollection.items[0];
}

export async function getDevlogUrls(isDraftMode = false) {
  const data = await fetchGraphQL(
    `query {
      pageDevlogCollection(preview: ${isDraftMode ? "true" : "false"}) {
          items {
            devlogsCollection {
              items {
                logUrl
              }
            }
          }
        }
      }`,
    "devlog-page-url",
    isDraftMode
  );

  return extractPageData(data)[0].devlogsCollection.items;
}

export async function getDevlogMetadataByUrl(isDraftMode = false, logUrl) {
  const data = await fetchGraphQL(
    `query {
      pageDevlogCollection(preview: ${
        isDraftMode ? "true" : "false"
      }, limit: 1) {
          items {
            devlogsCollection (where: {logUrl: "${logUrl}"})  {
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
    "devlog-page-metadata",
    isDraftMode
  );
  return extractPageData(data)[0].devlogsCollection.items[0];
}
