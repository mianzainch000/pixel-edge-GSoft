"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/common/PageHeader";
import BlogFeature from "@/components/blogs/BlogFeature";

const Blogs = (props) => {
  const { home_header, services, footer, blogs_head, blogs_seo } = props;

  return (
    <>
      <Navbar home_header={home_header} services={services} />
      <PageHeader
        title={blogs_head?.data?.attributes?.title}
        desc={blogs_head?.data?.attributes?.description}
        blogtags
        tags={blogs_head?.data?.attributes?.tags}
      />
      <BlogFeature />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default Blogs;
