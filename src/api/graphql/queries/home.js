import { gql } from "@apollo/client";

export const HOME_HEADER = gql`
  query {
    homePage {
      data {
        id
        attributes {
          logo {
            data {
              id
              attributes {
                url
              }
            }
          }
          headerTitle1
          headerTitle2
          headerTitle3
          headerTitle4
          headerTitle5
          headerTitle6
          headerTitle7
        }
      }
    }
  }
`;

export const HOME_CAROUSEL = gql`
  query {
    homeCarousels {
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
        }
      }
    }
  }
`;
export const HOME_ABOUT = gql`
  query {
    aboutPage {
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

export const HOME_SERVICES = gql`
  query ($pagination: PaginationArg) {
    services(pagination: $pagination) {
      data {
        id
        attributes {
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

export const HOME_WORKING_PROCESS = gql`
  query {
    workingProcessPage {
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
          working_processes {
            data {
              id
              attributes {
                title
                description
                logo {
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
  }
`;
export const HOME_CONTENT = gql`
  query {
    values {
      data {
        id
        attributes {
          header
          description
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          point1
          point2
          point3
          point4
          point5
          point6
        }
      }
    }
  }
`;
export const HOME_TESTIMONIAL_HEAD = gql`
  query {
    testimonial {
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
export const HOME_TESTIMONIAL = gql`
  query {
    reviews {
      data {
        id
        attributes {
          review
          active
          target
          ratings
          description
          order
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
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
export const HOME_TESTIMONIAL_USER = gql`
  query {
    usersPermissionsUsers {
      data {
        id
        attributes {
          username
          designation
          target
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
  }
`;
export const HOME_FAQ = gql`
  query {
    questionPage {
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
          questions {
            data {
              id
              attributes {
                question
                answer
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
    }
  }
`;

export const FOOTER = gql`
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

export const HOME_SEO = gql`
  query {
    homePage {
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
