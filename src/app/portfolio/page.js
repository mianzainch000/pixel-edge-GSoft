import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { SERVICES } from "@/api/graphql/queries/services";
import { FOOTER, HOME_HEADER } from "@/api/graphql/queries/home";
import {
  PORTFOLIO_HEAD,
  PORTFOLIO_SEO,
  PORTFOLIO_TABS,
  PORTFOLIO_TABS_NAME,
} from "@/api/graphql/queries/portfolio";

export async function generateMetadata() {
  const { data } = await client.query({
    query: PORTFOLIO_SEO,
  });
  const seoData = data?.portfolioPage.data.attributes.seo;

  return convertSeo(seoData);
}

const getData = async () => {
  try {
    const queries = [
      client.query({
        query: HOME_HEADER,
      }),
      client.query({
        query: SERVICES,
        variables: {
          pagination: {
            limit: 50,
          },
        },
      }),
      client.query({
        query: FOOTER,
      }),
      client.query({
        query: PORTFOLIO_HEAD,
      }),
      client.query({
        query: PORTFOLIO_TABS,
        variables: {
          filters: {
            portfolio_category: {
              name: {
                eq: "Web App",
              },
            },
          },
        },
      }),
      client.query({
        query: PORTFOLIO_TABS,
        variables: {
          filters: {
            portfolio_category: {
              name: {
                eq: "Mobile App",
              },
            },
          },
        },
      }),
      client.query({
        query: PORTFOLIO_TABS_NAME,
      }),
      client.query({
        query: PORTFOLIO_SEO,
      }),
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const services = response[1]?.data?.services || [];
    const footer = response[2]?.data?.footer || [];
    const portfolio_head = response[3]?.data?.portfolioPage || [];
    const portfolio_web = response[4]?.data?.portfolios || [];
    const portfolio_mobile = response[5]?.data?.portfolios || [];
    const portfolio_tabs_name = response[6]?.data?.portfolioCategories || [];
    const portfolio_seo =
      response[7]?.data?.portfolioPage.data.attributes.seo || [];

    return {
      props: {
        home_header,
        services,
        footer,
        portfolio_head,
        portfolio_web,
        portfolio_mobile,
        portfolio_tabs_name,
        portfolio_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function Portfolio() {
  const data = await getData();

  return <Page {...data?.props} />;
}
