import { gql } from "@apollo/client";

export const BLOGS_HEAD = gql`
  query BlogPage {
    blogPage {
      data {
        id
        attributes {
          title
          description
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          tags
          seo {
            id
            canonicalURL
            keywords
            metaDescription
            metaRobots
            metaViewport
            structuredData
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaTitle
            metaSocial {
              id
              description
              title
              socialNetwork
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const BLOGS = gql`
  query Blogs($pagination: PaginationArg) {
    blogs(pagination: $pagination) {
      data {
        id
        attributes {
          title
          description
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          order
          publishedDate
          slug
          tags
          user {
            data {
              id
              attributes {
                username
                profilePicture {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                designation
                description
                facebook
                github
                linkedln
                twitter
              }
            }
          }
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          seo {
            id
            canonicalURL
            keywords
            metaDescription
            metaRobots
            metaViewport
            structuredData
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaTitle
            metaSocial {
              id
              description
              title
              socialNetwork
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
          noteSection
          descriptionSection {
            heading
            headerDescription
            id
            point1
            point2
            point3
            point4
            point5
            point6
            point7
            point8
            picture {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageCount
          pageSize
        }
      }
    }
  }
`;
export const GET_BLOGS = gql`
  query Blogs($filters: BlogFiltersInput) {
    blogs(filters: $filters) {
      data {
        id
        attributes {
          title
          description
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          order
          publishedDate
          slug
          tags
          user {
            data {
              id
              attributes {
                username
                profilePicture {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                designation
                description
                facebook
                github
                linkedln
                twitter
              }
            }
          }
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          seo {
            id
            canonicalURL
            keywords
            metaDescription
            metaRobots
            metaViewport
            structuredData
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaTitle
            metaSocial {
              id
              description
              title
              socialNetwork
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
          noteSection
          descriptionSection {
            heading
            headerDescription
            id
            point1
            point2
            point3
            point4
            point5
            point6
            point7
            point8
            picture {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const BLOGS_SEO = gql`
  query BlogPage {
    blogPage {
      data {
        id
        attributes {
          seo {
            id
            canonicalURL
            keywords
            metaDescription
            metaRobots
            metaViewport
            structuredData
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaTitle
            metaSocial {
              id
              description
              title
              socialNetwork
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const SEARCH_BLOG = gql`
  query Blogs($filters: BlogFiltersInput) {
    blogs(filters: $filters) {
      data {
        id
        attributes {
          title
          description
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          order
          publishedDate
          slug
          tags
          user {
            data {
              id
              attributes {
                username
                profilePicture {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          seo {
            id
            canonicalURL
            keywords
            metaDescription
            metaRobots
            metaViewport
            structuredData
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaTitle
            metaSocial {
              id
              description
              title
              socialNetwork
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
