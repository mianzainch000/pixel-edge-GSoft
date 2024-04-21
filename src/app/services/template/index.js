"use cleint";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/common/PageHeader";
import ServiceOne from "@/components/services/ServiceOne";

const services = (props) => {
  const {
    home_header,
    services_head,
    services,
    home_testimonial_head,
    home_testimonial,
    home_testimonial_user,
    footer,
  } = props;
  return (
    <>
      <Navbar
        classOption="navbar-light"
        home_header={home_header}
        services={services}
      />
      <PageHeader
        title={services_head?.data?.attributes?.header}
        desc={services_head?.data?.attributes?.headerDescription}
      />
      <ServiceOne services_head={services_head} services={services} />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default services;
