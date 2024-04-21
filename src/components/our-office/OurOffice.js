"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const OurOffice = (props) => {
  const { about_us_office_head, about_us_our_office } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="office-address-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center" data-aos="fade-right">
              <h4 className="h5 text-primary">Our Office</h4>
              <h2>{about_us_office_head?.data?.attributes?.title}</h2>
              <p>{about_us_office_head?.data?.attributes?.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {about_us_our_office?.data?.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0"
                data-aos="fade-left"
                key={index}
              >
                <div
                  className="rounded-custom border d-block office-address overflow-hidden z-2"
                  style={{
                    backgroundImage: `url(${item?.attributes?.picture?.data?.attributes?.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="office-content text-center p-4">
                    <span className="office-overlay"></span>
                    <div className="office-info">
                      <h5>{item?.attributes?.location}</h5>
                      <address>{item?.attributes?.address}</address>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
