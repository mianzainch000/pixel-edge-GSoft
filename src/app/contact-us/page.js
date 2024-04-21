import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { SERVICES } from "@/api/graphql/queries/services";
import { FOOTER, HOME_HEADER } from "@/api/graphql/queries/home";
import {
  CONTACT_US_HEAD,
  CONTACT_US_SEO,
} from "@/api/graphql/queries/contactUs";

export async function generateMetadata() {
  const { data } = await client.query({
    query: CONTACT_US_SEO,
  });
  const seoData = data?.contactPageStatic.data.attributes.seo;

  return convertSeo(seoData);
}

const getData = async () => {
  try {
    const queries = [
      client.query({
        query: HOME_HEADER,
      }),
      client.query({
        query: FOOTER,
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
        query: CONTACT_US_HEAD,
      }),
      client.query({
        query: CONTACT_US_SEO,
      }),
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const footer = response[1]?.data?.footer || [];
    const services = response[2]?.data?.services || [];
    const contact_us = response[3]?.data?.contactPageStatic || [];
    const contact_us_seo =
      response[4]?.data?.contactPageStatic.data.attributes.seo || [];

    return {
      props: {
        home_header,
        footer,
        services,
        contact_us,
        contact_us_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function Contact() {
  const data = await getData();

  return <Page {...data?.props} />;
}
