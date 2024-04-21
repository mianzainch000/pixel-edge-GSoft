import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { SERVICES } from "@/api/graphql/queries/services";
import { FOOTER, HOME_HEADER } from "@/api/graphql/queries/home";
import { BLOGS_HEAD, BLOGS_SEO } from "@/api/graphql/queries/blogs";

export async function generateMetadata() {
  const { data } = await client.query({
    query: BLOGS_SEO,
  });
  const seoData = data?.blogPage.data.attributes.seo;

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
        query: BLOGS_HEAD,
      }),
      client.query({
        query: BLOGS_SEO,
      }),
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const services = response[1]?.data?.services || [];
    const footer = response[2]?.data?.footer || [];
    const blogs_head = response[3]?.data?.blogPage || [];
    const blogs_seo = response[4]?.data?.blogPage.data.attributes.seo || [];

    return {
      props: {
        home_header,
        services,
        footer,
        blogs_head,
        blogs_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function Blogs(props) {
  const data = await getData();

  return <Page {...data?.props} />;
}
