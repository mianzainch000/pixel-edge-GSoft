import { gql } from "@apollo/client";

export const SERVICES_HEAD = gql`
  query {
    servicePage {
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
          header
          headerDescription
        }
      }
    }
  }
`;

export const SERVICES = gql`
query($pagination: PaginationArg) {
  services(pagination: $pagination) {
    data {
      id
      attributes {
        slug
        header
        description
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
`;
export const GET_SERVICES = gql`
  query Query($filters: ServiceFiltersInput) {
    services(filters: $filters) {
      data {
        id
        attributes {
          header
          description
          longDescription
          slug
          title
          serviceType {
            id
            description
            title
            picture {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          photo {
            data {
              id
              attributes {
                url
              }
            }
          }
          header2
          header2Description
          headerCoverPicture {
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
`;
export const SERVICES_SEO = gql`
  query {
    servicePage {
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
