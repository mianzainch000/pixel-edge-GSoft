import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { SERVICES } from "@/api/graphql/queries/services";
import { FOOTER, HOME_HEADER } from "@/api/graphql/queries/home";
import { BLOGS, BLOGS_SEO, GET_BLOGS } from "@/api/graphql/queries/blogs";

export async function generateMetadata() {
  const { data } = await client.query({
    query: BLOGS_SEO,
  });
  const seoData = data?.blogPage.data.attributes.seo;

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
        query: GET_BLOGS,
        variables: {
          filters: {
            slug: {
              eq: params?.slug,
            },
          },
        },
      }),
      client.query({
        query: BLOGS,
        variables: {
          pagination: {
            limit: 3,
          },
        },
      }),
      client.query({
        query: BLOGS_SEO,
      }),
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const services = response[1]?.data?.services || [];
    const footer = response[2]?.data?.footer || [];
    const get_blogs = response[3]?.data?.blogs || [];
    const blogs = response[4]?.data?.blogs || [];
    const blogs_seo = response[5]?.data?.blogPage.data.attributes.seo || [];

    return {
      props: {
        home_header,
        services,
        footer,
        get_blogs,
        blogs,
        blogs_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function BlogSingal(props) {
  const data = await getData(props?.params);

  return <Page {...data?.props} />;
}
