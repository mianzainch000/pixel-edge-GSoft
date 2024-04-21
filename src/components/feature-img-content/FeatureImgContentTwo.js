"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const FeatureImgContentTwo = ({ bgWhite, about_us_values }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      className={`feature-section-two ptb-120 ${
        bgWhite ? "bg-white" : "bg-light"
      } `}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading" data-aos="fade-right">
              <h4 className="h5 text-primary">Our Values</h4>
              <h2>{about_us_values?.data?.attributes?.shortDescription}</h2>
              <p>{about_us_values?.data?.attributes?.longDescription}</p>
              <ul className="list-unstyled mt-5">
                {about_us_values?.data?.attributes?.ValuePoints?.map(
                  (item, index) => {
                    return (
                      <>
                        <li className="d-flex align-items-start mb-4">
                          <div className="icon-box bg-primary rounded me-4">
                            <span className="fas text-white">
                              <div className="mt-2">
                                <PixelEdgeImage
                                  width={40}
                                  height={40}
                                  src={item?.picture?.data?.attributes?.url}
                                  alt="feature image"
                                  className="img-fluid rounded-custom"
                                />
                              </div>
                            </span>
                          </div>
                          <div className="icon-content">
                            <h3 className="h5">{item?.title}</h3>
                            <p>{item?.description}</p>
                          </div>
                        </li>
                      </>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-7" data-aos="fade-left">
            <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
              <PixelEdgeImage
                width={493}
                height={662}
                src={
                  about_us_values?.data?.attributes?.picture?.data?.attributes
                    ?.url
                }
                alt="feature image"
                className="rounded-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentTwo;
