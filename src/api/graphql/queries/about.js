import { gql } from "@apollo/client";

export const ABOUT_US_HEAD = gql`
  query AboutPage {
    aboutPage {
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
          picture2 {
            data {
              id
              attributes {
                url
              }
            }
          }
          picture3 {
            data {
              id
              attributes {
                url
              }
            }
          }
          header
          headerDescription
          aboutSideBar {
            id
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
          }
        }
      }
    }
  }
`;

export const ABOUT_US_VALUES = gql`
  query ValueSection {
    valueSection {
      data {
        id
        attributes {
          shortDescription
          longDescription
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          ValuePoints {
            title
            id
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
  }
`;
export const ABOUT_US_TEAM_HEAD = gql`
  query TeamPage {
    teamPage {
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
export const ABOUT_US_OUR_TEAM = gql`
  query Query {
    ourTeams {
      data {
        id
        attributes {
          name
          designation
          facebook
          github
          instagram
          linkedln
          twitter
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
export const ABOUT_US_OFFICE_HEAD = gql`
  query Query {
    officePage {
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
export const ABOUT_US_OUR_OFFICE = gql`
  query Query {
    ourOffices {
      data {
        id
        attributes {
          address
          email
          location
          message
          phoneNumber
          picture {
            data {
              attributes {
                url
              }
              id
            }
          }
        }
      }
    }
  }
`;
export const ABOUT_SEO = gql`
  query AboutPage {
    aboutPage {
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
