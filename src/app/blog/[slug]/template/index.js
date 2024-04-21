"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/common/PageHeader";
import { usePathname } from "next/navigation";
import BlogFeatureTags from "@/components/blogs/BlogFeatureTags";
import { SEARCH_BLOG } from "../../../../api/graphql/queries/blogs";
const Blog = (props) => {
  const { home_header, services, footer, blogs_head } = props;
  const pathname = usePathname();
  const tags = pathname.split("/").pop();
  const { data: searchBlog } = useQuery(SEARCH_BLOG, {
    variables: {
      filters: {
        tags: {
          containsi: tags,
          BlogFeatureTags,
        },
      },
    },
  });

  function capitalize(str) {
    return str?.replace(/\b\w/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <>
      <Navbar home_header={home_header} services={services} />
      <PageHeader
        title={capitalize(tags)}
        desc={blogs_head?.data?.attributes?.description}
        blogtags
        tags={blogs_head?.data?.attributes?.tags}
      />
      <BlogFeatureTags searchBlog={searchBlog} capitalize={capitalize} />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default Blog;
