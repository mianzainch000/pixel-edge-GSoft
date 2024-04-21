import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { SERVICES } from "@/api/graphql/queries/services";
import {
  FOOTER,
  HOME_ABOUT,
  HOME_CAROUSEL,
  HOME_CONTENT,
  HOME_FAQ,
  HOME_HEADER,
  HOME_SEO,
  HOME_SERVICES,
  HOME_TESTIMONIAL,
  HOME_TESTIMONIAL_HEAD,
  HOME_TESTIMONIAL_USER,
  HOME_WORKING_PROCESS,
} from "@/api/graphql/queries/home";

export async function generateMetadata() {
  const { data } = await client.query({
    query: HOME_SEO,
  });
  const seoData = data?.homePage.data.attributes.seo;

  return convertSeo(seoData);
}

const getData = async () => {
  try {
    const queries = [
      client.query({
        query: HOME_HEADER,
      }),
      client.query({
        query: HOME_CAROUSEL,
      }),
      client.query({
        query: HOME_ABOUT,
      }),
      client.query({
        query: HOME_SERVICES,
        variables: {
          pagination: {
            limit: 50,
          },
        },
      }),
      client.query({
        query: HOME_WORKING_PROCESS,
      }),
      client.query({
        query: HOME_CONTENT,
      }),
      client.query({
        query: HOME_TESTIMONIAL_HEAD,
      }),
      client.query({
        query: HOME_TESTIMONIAL,
      }),
      client.query({
        query: HOME_TESTIMONIAL_USER,
      }),
      client.query({
        query: HOME_FAQ,
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
        query: HOME_SEO,
      }),
    ];

    const response = await Promise.all(queries);
    const home_header = response[0]?.data?.homePage || [];
    const home_carousel = response[1]?.data?.homeCarousels.data[0] || [];
    const home_about = response[2]?.data?.aboutPage || [];
    const home_services = response[3]?.data?.services || [];
    const home_working_process = response[4]?.data?.workingProcessPage || [];
    const home_content = response[5]?.data?.values || [];
    const home_testimonial_head = response[6]?.data?.testimonial || [];
    const home_testimonial = response[7]?.data?.reviews || [];
    const home_testimonial_user =
      response[8]?.data?.usersPermissionsUsers || [];
    const home_faq = response[9]?.data?.questionPage || [];
    const footer = response[10]?.data?.footer || [];
    const services = response[11]?.data?.services || [];
    const home_seo = response[12]?.data?.homePage.data.attributes.seo || [];

    return {
      props: {
        home_header,
        home_carousel,
        home_about,
        home_services,
        home_working_process,
        home_content,
        home_testimonial_head,
        home_testimonial,
        home_testimonial_user,
        home_faq,
        footer,
        services,
        home_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function Home() {
  const data = await getData();

  return <Page {...data?.props} />;
}
