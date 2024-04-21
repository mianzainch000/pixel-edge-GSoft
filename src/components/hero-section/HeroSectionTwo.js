/* eslint-disable @next/next/no-img-element */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const HeroSectionTwo = (props) => {
  const { about_us_head } = props;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
              <div className="about-content-left" data-aos="fade-right">
                <div className="about-info mb-5">
                  <h1 className="fw-bold display-5">
                    {about_us_head?.data?.attributes?.title}
                  </h1>
                  <p className="lead">
                    {about_us_head?.data?.attributes?.description}
                  </p>
                </div>
                <PixelEdgeImage
                  src={
                    about_us_head?.data?.attributes?.picture?.data?.attributes
                      ?.url
                  }
                  alt="about"
                  className="img-fluid about-img-first mt-5 rounded-custom shadow"
                  width={458}
                  height={330}
                />
              </div>
              <div className="about-content-right" data-aos="fade-left">
                <PixelEdgeImage
                  src={
                    about_us_head?.data?.attributes?.picture2?.data?.attributes
                      ?.url
                  }
                  alt="about"
                  className="img-fluid rounded-custom shadow"
                  width={484}
                  height={369}
                />

                <PixelEdgeImage
                  src={
                    about_us_head?.data?.attributes?.picture3?.data?.attributes
                      ?.url
                  }
                  alt="about"
                  className="img-fluid rounded-custom shadow"
                  width={484}
                  height={369}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>
  );
};

export default HeroSectionTwo;
