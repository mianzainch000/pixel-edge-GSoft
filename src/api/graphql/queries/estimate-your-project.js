import { gql } from "@apollo/client";

export const ESTIMATE_YOUR_PROJECT = gql`
  mutation Mutation($data: EstimateYourProjectInput!) {
    createEstimateYourProject(data: $data) {
      data {
        id
        attributes {
          company
          description
          email
          name
          phoneNumber
          priority
          projectStatus
          projectType
          selectYourRegion
          policyValues
          budget
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
export const ESTIMATE_YOUR_PROJECT_HEAD = gql`
  query Query {
    estimateYourProjectPage {
      data {
        id
        attributes {
          title
          description
        }
      }
    }
  }
`;
export const ESTIMATE_YOUR_PROJECT_CONTENT = gql`
  query UserEstimateMessages {
    userEstimateMessages {
      data {
        id
        attributes {
          message
          target
          active
          user {
            data {
              id
              attributes {
                username
                designation
              }
            }
          }
        }
      }
    }
  }
`;
export const ESTIMATE_YOUR_PROJECT_USER = gql`
  query UsersPermissionsUsers {
    usersPermissionsUsers {
      data {
        id
        attributes {
          active
          profilePicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          target
        }
      }
    }
  }
`;
export const ESTIMATE_YOUR_PROJECT_SEO = gql`
  query EstimateYourProjectPage {
    estimateYourProjectPage {
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

export const ESTIMATE_YOUR_PROJECT_FOOTER = gql`
  query Query {
    footer {
      data {
        id
        attributes {
          copyRight
          description
          facebook
          github
          instagram
          linkdln
          twitter
          website
          logo {
            data {
              id
              attributes {
                url
              }
            }
          }
          footerSection {
            id
            point1
            point2
            point3
            point4
            point5
            point6
            title
          }
        }
      }
    }
  }
`;
