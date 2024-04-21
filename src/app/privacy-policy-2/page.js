import Page from "./template";
import { client } from "@/api/client";
import { SERVICES } from "@/api/graphql/queries/services";
import { FOOTER, HOME_HEADER } from "@/api/graphql/queries/home";

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
    ];
    const response = await Promise.all(queries);

    const home_header = response[0]?.data?.homePage || [];
    const footer = response[1]?.data?.footer || [];
    const services = response[2]?.data?.services || [];

    return {
      props: {
        home_header,
        footer,
        services,
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

export function generateMetadata() {
  return {
    title: "PixelEdge - Privacy Policy",
    icons: {
      icon: "/favicon.png",
    },
  };
}
