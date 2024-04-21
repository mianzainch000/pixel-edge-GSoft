/** @format */

"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const ServiceTwo = ({ get_services }) => {
  useEffect(() => {
    // AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="why-choose-us pt-100 pb-50">
      <div className="container">
        <div className="row justify-content-lg-between align-items-center text-center">
          <div className="why-choose-content">
            <h2> {get_services?.data[0]?.attributes?.header2}</h2>
            <p>{get_services?.data[0]?.attributes?.header2Description}</p>
          </div>
          {/* <div className="col-lg-5 col-12" data-aos="fade-right">
            <div className="why-choose-content">
              <h2> {get_services?.data[0]?.attributes?.header2}</h2>
              <p>{get_services?.data[0]?.attributes?.header2Description}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12" data-aos="fade-left">
            <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
              <PixelEdgeImage
                width={636}
                height={464}
                layout="responsive"
                src={
                  get_services?.data[0]?.attributes?.headerCoverPicture?.data
                    ?.attributes?.url
                }
                className="img-fluid"
                alt="feature-image"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
