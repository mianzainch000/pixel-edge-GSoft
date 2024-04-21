import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { SERVICES } from "@/api/graphql/queries/services";
import {
  FOOTER,
  HOME_HEADER,
  HOME_TESTIMONIAL,
  HOME_TESTIMONIAL_HEAD,
} from "@/api/graphql/queries/home";
import {
  ABOUT_SEO,
  ABOUT_US_HEAD,
  ABOUT_US_OFFICE_HEAD,
  ABOUT_US_OUR_OFFICE,
  ABOUT_US_OUR_TEAM,
  ABOUT_US_TEAM_HEAD,
  ABOUT_US_VALUES,
} from "@/api/graphql/queries/about";

export async function generateMetadata() {
  const { data } = await client.query({
    query: ABOUT_SEO,
  });
  const seoData = data?.aboutPage.data.attributes.seo;

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
        query: HOME_TESTIMONIAL_HEAD,
      }),
      client.query({
        query: HOME_TESTIMONIAL,
      }),
      client.query({
        query: ABOUT_US_HEAD,
      }),
      client.query({
        query: ABOUT_US_VALUES,
      }),
      client.query({
        query: ABOUT_US_TEAM_HEAD,
      }),
      client.query({
        query: ABOUT_US_OUR_TEAM,
      }),
      client.query({
        query: ABOUT_US_OFFICE_HEAD,
      }),
      client.query({
        query: ABOUT_US_OUR_OFFICE,
      }),
      client.query({
        query: ABOUT_SEO,
      }),
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const footer = response[1]?.data?.footer || [];
    const services = response[2]?.data?.services || [];
    const home_testimonial_head = response[3]?.data?.testimonial || [];
    const home_testimonial = response[4]?.data?.reviews || [];
    const about_us_head = response[5]?.data?.aboutPage || [];
    const about_us_values = response[6]?.data?.valueSection || [];
    const about_us_team_head = response[7]?.data?.teamPage || [];
    const about_us_our_team = response[8]?.data?.ourTeams || [];
    const about_us_office_head = response[9]?.data?.officePage || [];
    const about_us_our_office = response[10]?.data?.ourOffices || [];
    const about_seo = response[11]?.data?.aboutPage.data.attributes.seo || [];

    return {
      props: {
        home_header,
        footer,
        services,
        home_testimonial_head,
        home_testimonial,
        about_us_head,
        about_us_values,
        about_us_team_head,
        about_us_our_team,
        about_us_office_head,
        about_us_our_office,
        about_seo,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function AboutUs() {
  const data = await getData();

  return <Page {...data?.props} />;
}
