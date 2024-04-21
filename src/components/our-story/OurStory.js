/* eslint-disable @next/next/no-img-element */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const OurStory = (props) => {
  const { about_us_head } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 order-lg-1">
            <div
              className="section-heading sticky-sidebar"
              data-aos="fade-left"
            >
              <h4 className="h5 text-primary">Our Story</h4>
              <h2>{about_us_head?.data?.attributes?.header}</h2>
              <p>{about_us_head?.data?.attributes?.headerDescription}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-0">
            <div
              className="story-grid-wrapper position-relative"
              data-aos="fade-right"
            >
              <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                <li className="layer" data-depth="0.02">
                  <PixelEdgeImage
                    width={129}
                    height={72}
                    src="/color-shape/image-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <PixelEdgeImage
                    width={129}
                    height={72}
                    src="/color-shape/feature-3.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>

              <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                {about_us_head?.data?.attributes?.aboutSideBar?.map(
                  (item, index) => {
                    return (
                      <div
                        className="story-item border"
                        style={{
                          backgroundColor:
                            index === 0 || index === 3 || index === 4
                              ? "#f8f9fa"
                              : "#ffffff",
                        }}
                        key={index}
                      >
                        <h3
                          className="display-5 fw-bold mb-1 "
                          style={{
                            color:
                              index == 0
                                ? "#289D8C"
                                : index == 1
                                ? "blue"
                                : index == 2
                                ? "black"
                                : index == 3
                                ? "orange"
                                : index == 4
                                ? "red"
                                : index == 5
                                ? "blue"
                                : "black",
                          }}
                        >
                          {item?.description}
                        </h3>
                        <h6 className="mb-0 text-dark">{item?.title}</h6>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
