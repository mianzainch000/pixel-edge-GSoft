/** @format */

"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const ServicesContent = (props) => {
  const { get_services } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {get_services?.attributes?.serviceType?.map((item, index) => {
        return (
          <section className="image-feature pt-60 " key={index}>
            <div className="container">
              <div
                className="row justify-content-between align-items-center"
                style={{ flexDirection: index % 2 != 0 ? "row-reverse" : "" }}>
                <div
                  className="col-lg-5 col-12 order-lg-1"
                  data-aos="fade-left">
                  <div className="feature-img-content">
                    <h2> {item?.title}</h2>
                    <p>{item?.description}</p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-12 order-lg-0"
                  data-aos="fade-right">
                  <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                    <PixelEdgeImage
                      width={315}
                      height={270}
                      layout="responsive"
                      src={item?.picture?.data?.attributes?.url}
                      className="img-fluid"
                      alt="feature-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ServicesContent;
