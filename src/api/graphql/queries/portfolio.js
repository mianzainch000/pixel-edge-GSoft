import { gql } from "@apollo/client";

export const PORTFOLIO_HEAD = gql`
  query PortfolioPage {
    portfolioPage {
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

export const PORTFOLIO_TABS = gql`
  query Query($filters: PortfolioFiltersInput) {
    portfolios(filters: $filters) {
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
          tags
          portfolio_category {
            data {
              id
              attributes {
                name
                order
              }
            }
          }
          slug
        }
      }
    }
  }
`;

export const PORTFOLIO_TABS_NAME = gql`
  query Query {
    portfolioCategories {
      data {
        id
        attributes {
          name
          order
          description
        }
      }
    }
  }
`;
export const GET_PORTFOLIO = gql`
  query Query($filters: PortfolioFiltersInput) {
    portfolios(filters: $filters) {
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
          tags
          portfolio_category {
            data {
              id
              attributes {
                name
                order
              }
            }
          }
          slug
        }
      }
    }
  }
`;
export const PORTFOLIO_SEO = gql`
  query PortfolioPage {
    portfolioPage {
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
