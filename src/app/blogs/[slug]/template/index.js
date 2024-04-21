"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import LatestBlog from "@/components/blogs/LatestBlog";
import PageHeader from "@/components/common/PageHeader";
import BlogSingleFeature from "@/components/blogs/BlogSingleFeature";

const BlogSingle = (props) => {
  const { home_header, services, footer, get_blogs, blogs, blogs_seo } = props;

  return (
    <>
      <Navbar
        classOption="navbar-light"
        home_header={home_header}
        services={services}
      />
      <PageHeader title={get_blogs?.data[0]?.attributes?.title} />
      <BlogSingleFeature get_blogs={get_blogs?.data[0]} />
      <LatestBlog blogs={blogs} />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default BlogSingle;
