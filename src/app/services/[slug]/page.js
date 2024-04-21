/** @format */

import Page from "./template";
import { client } from "@/api/client";
// export const dynamic = "force-dynamic";
import { convertSeo } from "@/utils/convertSeo";
import {
  GET_SERVICES,
  SERVICES,
  SERVICES_HEAD,
  SERVICES_SEO,
} from "@/api/graphql/queries/services";
import {
  FOOTER,
  HOME_CONTENT,
  HOME_HEADER,
  HOME_TESTIMONIAL,
  HOME_TESTIMONIAL_HEAD,
  HOME_TESTIMONIAL_USER,
  HOME_WORKING_PROCESS,
} from "@/api/graphql/queries/home";


export async function generateMetadata() {
  const { data } = await client.query({
    query: SERVICES_SEO,
  });
  const seoData = data?.servicePage.data.attributes.seo;

  return convertSeo(seoData);
}

const getData = async (params) => {
  try {
    const queries = [
      client.query({
        query: HOME_HEADER,
      }),
      client.query({
        query: SERVICES_HEAD,
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
        query: HOME_TESTIMONIAL_HEAD,
      }),
      client.query({
        query: HOME_TESTIMONIAL,
      }),
      client.query({
        query: HOME_TESTIMONIAL_USER,
      }),
      client.query({
        query: FOOTER,
      }),
      client.query({
        query: HOME_CONTENT,
      }),
      client.query({
        query: HOME_WORKING_PROCESS,
      }),
      client.query({
        query: GET_SERVICES,
        variables: {
          filters: {
            slug: {
              eq: params?.slug,
            },
          },
        },
      }),
      client.query({
        query: SERVICES_SEO,
      }),
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const services_head = response[1]?.data?.servicePage || [];
    const services = response[2]?.data?.services || [];
    const home_testimonial_head = response[3]?.data?.testimonial || [];
    const home_testimonial = response[4]?.data?.reviews || [];
    const home_testimonial_user =
      response[5]?.data?.usersPermissionsUsers || [];
    const footer = response[6]?.data?.footer || [];
    const home_content = response[7]?.data?.values || [];
    const home_working_process = response[8]?.data?.workingProcessPage || [];
    const get_services = response[9]?.data?.services || [];
    const services_seo =
      response[10]?.data?.servicePage.data.attributes.seo || [];

    return {
      props: {
        home_header,
        services_head,
        services,
        home_testimonial_head,
        home_testimonial,
        home_testimonial_user,
        footer,
        home_content,
        home_working_process,
        get_services,
        services_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function InnerService(props) {
  const data = await getData(props?.params);

  return <Page {...data?.props} />;
}
