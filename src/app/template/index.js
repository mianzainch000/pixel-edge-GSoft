/** @format */
"use client";
import React, { useEffect } from "react";
import FaqOne from "@/components/faq/FaqOne";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import FeatureOne from "@/components/features/FeatureOne";
import TestimonialOne from "@/components/testimonial/TestimonialOne";
import WorkProcessOne from "@/components/workprocess/WorkProcessOne";
import HeroSectionOne from "@/components/hero-section/HeroSectionOne";
import FeatureImgContentOne from "@/components/feature-img-content/FeatureImgContentOne";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
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
  } = props;

  return (
    <>
      <Navbar navDark home_header={home_header} services={services} />
      <HeroSectionOne home_carousel={home_carousel} />
      <FeatureOne
        home_about={home_about}
        home_services={home_services}
        services={services}
      />
      {/* <FeatureImgContentOne home_content={home_content} /> */}
      <TestimonialOne
        darkBg
        home_testimonial_head={home_testimonial_head}
        home_testimonial={home_testimonial}
        home_testimonial_user={home_testimonial_user}
      />
      {/* <WorkProcessOne home_working_process={home_working_process} /> */}
      <FaqOne home_faq={home_faq} />
      <Footer footer={footer} services={services} />
    </>
  );
}
