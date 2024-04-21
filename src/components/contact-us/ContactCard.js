"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const ContactCard = (props) => {
  const { contact_us } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          {contact_us?.data?.attributes?.contactPageBanner
            ?.slice(0, 3)
            ?.map((item, index) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 mt-4"
                    data-aos="fade-right"
                    key={index}
                  >
                    <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                      <span className="fad fa-3x text-primary">
                        <PixelEdgeImage
                          src={item?.picture?.data?.attributes?.url}
                          width={50}
                          height={50}
                        />
                      </span>
                      <div className="contact-promo-info mb-4">
                        <h5>{item?.title}</h5>
                        <p>{item?.description}</p>
                      </div>
                      <a href={item.link} className="btn btn-link mt-auto">
                        {item?.title}
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
