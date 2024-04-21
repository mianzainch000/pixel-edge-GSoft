import Page from "./template";
import { client } from "@/api/client";
import { convertSeo } from "@/utils/convertSeo";
import { HOME_HEADER } from "@/api/graphql/queries/home";
import { SERVICES } from "@/api/graphql/queries/services";
import {
  ESTIMATE_YOUR_PROJECT_CONTENT,
  ESTIMATE_YOUR_PROJECT_HEAD,
  ESTIMATE_YOUR_PROJECT_SEO,
  ESTIMATE_YOUR_PROJECT_USER,
  ESTIMATE_YOUR_PROJECT_FOOTER,
} from "@/api/graphql/queries/estimate-your-project";

export async function generateMetadata() {
  const { data } = await client.query({
    query: ESTIMATE_YOUR_PROJECT_SEO,
  });
  const seoData = data?.estimateYourProjectPage.data.attributes.seo;
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
        query: ESTIMATE_YOUR_PROJECT_CONTENT,
      }),
      client.query({
        query: ESTIMATE_YOUR_PROJECT_USER,
      }),
      client.query({
        query: ESTIMATE_YOUR_PROJECT_HEAD,
      }),
      client.query({
        query: ESTIMATE_YOUR_PROJECT_SEO,
      }),
      client.query({
        query: ESTIMATE_YOUR_PROJECT_FOOTER,
      }),
    ];

    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const services = response[1]?.data?.services || [];
    const estimate_your_project_content =
      response[2]?.data?.userEstimateMessages || [];
    const estimate_your_project_users =
      response[3]?.data?.usersPermissionsUsers || [];
    const estimate_your_project_head =
      response[4]?.data?.estimateYourProjectPage || [];
    const estimate_your_project_seo =
      response[5]?.data?.estimateYourProjectPage.data.attributes.seo || [];
    const estimate_your_project_footer = response[6]?.data?.footer || [];

    return {
      props: {
        home_header,
        services,
        estimate_your_project_content,
        estimate_your_project_users,
        estimate_your_project_head,
        estimate_your_project_seo,
        estimate_your_project_footer,
      },
    };
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function Estimateyoutproject() {
  const data = await getData();

  return <Page {...data?.props} />;
}
