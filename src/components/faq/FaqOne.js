"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const FaqOne = (props) => {
  const { home_faq } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="faq-section ptb-120 bg-light">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-right">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">FAQ</h4>
              <h2>{home_faq?.data?.attributes?.title}</h2>
              <p>{home_faq?.data?.attributes?.description}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-12" data-aos="fade-right">
            <div className="faq-wrapper">
              {home_faq?.data?.attributes?.questions?.data?.map(
                (item, index) => {
                  return (
                    <div className="faq-item mb-5" key={index}>
                      <h5>
                        <span className="h3 text-primary me-2">{`${
                          index + 1
                        }.`}</span>{" "}
                        {item?.attributes?.question}
                      </h5>
                      <p> {item?.attributes?.answer}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="text-center mt-4 mt-lg-0 mt-md-0">
              <PixelEdgeImage
                width={636}
                height={522}
                src={home_faq?.data?.attributes?.picture?.data?.attributes?.url}
                alt="faq"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="d-flex gap-4 justify-content-center mt-2">
          <button className="btn btn-primary">
            <Link
              href="/estimate-your-project"
              className="text-white text-decoration-none"
            >
             Lets Talk
            </Link>
          </button>
          <button className="btn btn-primary">
            <Link href="/about-us" className="text-white text-decoration-none">
              Lets More
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
