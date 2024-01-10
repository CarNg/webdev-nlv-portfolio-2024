export const SEO_FIELDS = `
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 3) {
      items {
      title
      description
      width
      height
      url
      contentType
      }
  }
`;
