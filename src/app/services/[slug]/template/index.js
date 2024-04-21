/** @format */

"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import ServiceTwo from "@/components/services/ServicesTwo";
import PageHeaderInner from "@/components/common/PageHeaderInner";
import ServicesBanner from "@/components/services/ServicesBanner";
import ServicesContent from "@/components/services/ServicesContent";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import WorkProcessOne from "@/components/workprocess/WorkProcessOne";

const InnerService = (props) => {
  const {
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
  } = props;

  return (
    <>
      <Navbar
        classOption="navbar-light"
        home_header={home_header}
        services={services}
      />
      <PageHeaderInner
        title={get_services?.data[0]?.attributes?.header}
        desc={get_services?.data[0]?.attributes?.description}
      />

      <ServiceTwo get_services={get_services} />
      <ServicesContent get_services={get_services?.data[0]} />
      {/* <WorkProcessOne home_working_process={home_working_process} /> */}
      {/* <TestimonialTwo
        sectionBgClass="bg-white"
        swiperBgClass="bg-white"
        home_testimonial_head={home_testimonial_head}
        home_testimonial={home_testimonial}
        home_testimonial_user={home_testimonial_user}
      /> */}
      <Footer footer={footer} services={services} />
    </>
  );
};

export default InnerService;
