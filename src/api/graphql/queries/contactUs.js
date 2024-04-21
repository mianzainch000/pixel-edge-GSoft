import { gql } from "@apollo/client";

export const CONTACT_US_HEAD = gql`
  query Query {
    contactPageStatic {
      data {
        id
        attributes {
          title
          description
          # link
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          contactPageBanner {
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
            link
          }
          header
          headerDescription
          headerPicture {
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

export const CONTACT_US_FORM = gql`
  mutation Mutation($data: ContactPageInput!) {
    createContactPage(data: $data) {
      data {
        id
        attributes {
          firstName
          lastName
          email
          phoneNumber
          message
        }
      }
    }
  }
`;

export const CONTACT_US_SEO = gql`
  query Query {
    contactPageStatic {
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
