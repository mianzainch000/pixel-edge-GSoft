"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import OurTeam from "@/components/our-team/OurTeam";
import OurStory from "@/components/our-story/OurStory";
import OurOffice from "@/components/our-office/OurOffice";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import HeroSectionTwo from "@/components/hero-section/HeroSectionTwo";
import FeatureImgContentTwo from "@/components/feature-img-content/FeatureImgContentTwo";
const AboutUs = (props) => {
  const {
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
  } = props;

  return (
    <>
      <Navbar
        classOption="navbar-light"
        home_header={home_header}
        services={services}
      />
      <HeroSectionTwo about_us_head={about_us_head} />
      <OurStory about_us_head={about_us_head} />
      <FeatureImgContentTwo about_us_values={about_us_values} />
      <OurTeam
        about_us_team_head={about_us_team_head}
        about_us_our_team={about_us_our_team}
      />
      {/* <TestimonialTwo
        swiperBgClass="bg-white"
        home_testimonial_head={home_testimonial_head}
        home_testimonial={home_testimonial}
      /> */}
      <OurOffice
        about_us_office_head={about_us_office_head}
        about_us_our_office={about_us_our_office}
      />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default AboutUs;
