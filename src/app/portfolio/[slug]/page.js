import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { SERVICES } from "@/api/graphql/queries/services";
import { FOOTER, HOME_HEADER } from "@/api/graphql/queries/home";
import { GET_PORTFOLIO, PORTFOLIO_SEO } from "@/api/graphql/queries/portfolio";

export async function generateMetadata() {
  const { data } = await client.query({
    query: PORTFOLIO_SEO,
  });
  const seoData = data?.portfolioPage.data.attributes.seo;

  return convertSeo(seoData);
}

const getData = async (params) => {
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
        query: GET_PORTFOLIO,
        variables: {
          filters: {
            slug: {
              eq: params?.slug,
            },
          },
        },
      }),
      client.query({
        query: PORTFOLIO_SEO,
      }),
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const services = response[1]?.data?.services || [];
    const footer = response[2]?.data?.footer || [];
    const get_portfolio = response[3]?.data?.portfolios || [];
    const portfolio_seo =
      response[4]?.data?.portfolioPage.data.attributes.seo || [];

    return {
      props: {
        home_header,
        services,
        footer,
        get_portfolio,
        portfolio_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function PortfolioSingle(props) {
  const data = await getData(props?.params);
  return <Page {...data?.props} />;
}
