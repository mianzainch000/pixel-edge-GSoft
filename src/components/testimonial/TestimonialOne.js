"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Rating from "../common/Rating";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const TestimonialOne = ({
  darkBg,
  home_testimonial_head,
  home_testimonial,
  home_testimonial_user,
}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      className={`customer-review-tab ptb-120 ${
        darkBg ? "bg-gradient text-white" : "bg-light"
      } position-relative z-2`}
    >
      <div className="container">
        <div
          className="row justify-content-center align-content-center"
          data-aos="fade-right"
        >
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h4 className="h5 text-warning text-primary">Testimonial</h4>
              <h2>{home_testimonial_head?.data?.attributes?.title}</h2>
              <p>{home_testimonial_head?.data?.attributes?.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="testimonial-tabContent">
              {home_testimonial?.data?.map((item, i) => (
                <div
                  key={i + 1}
                  className={`tab-pane fade ${item?.attributes?.active}`}
                  id={item?.attributes?.target}
                  role="tabpanel"
                >
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6">
                      <div
                        className="testimonial-tab-content mb-5 mb-lg-0 mb-md-0"
                        data-aos="fade-right"
                      >
                        <div className="blockquote-title-review mb-4">
                          <h3 className="mb-0 h4 fw-semi-bold">
                            {item?.attributes?.review}
                          </h3>
                          <Rating />
                        </div>

                        <blockquote className="blockquote">
                          <p> {item?.attributes?.review}</p>
                        </blockquote>
                        <div className="author-info mt-4">
                          <h6 className="mb-0">
                            {item?.attributes?.user?.data?.attributes?.username}{" "}
                          </h6>
                          <span>
                            {
                              item?.attributes?.user?.data?.attributes
                                ?.designation
                            }{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="author-img-wrap pt-5 ps-5">
                        <div
                          className="testimonial-video-wrapper position-relative"
                          data-aos="fade-left"
                        >
                          <PixelEdgeImage
                            width={478}
                            height={382}
                            src={
                              item?.attributes?.picture?.data?.attributes?.url
                            }
                            className="img-fluid rounded-custom shadow-lg"
                            alt="testimonial author"
                          />
                          <div className="position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul
              className="nav nav-pills testimonial-tab-menu mt-60"
              id="testimonial"
              role="tablist"
            >
              {home_testimonial_user?.data?.map((item, i) => (
                <li key={i + 1} className="nav-item" role="presentation">
                  <div
                    className="nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link"
                    data-bs-toggle="pill"
                    data-bs-target={item?.attributes?.target}
                    role="tab"
                    aria-selected="false"
                    data-aos="fade-right"
                  >
                    <div className="testimonial-thumb me-3">
                      <PixelEdgeImage
                        width={50}
                        height={50}
                        src={
                          item?.attributes?.profilePicture?.data?.attributes
                            ?.url
                        }
                        className="rounded-circle"
                        alt="testimonial thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h6 className="mb-0">{item?.attributes?.username} </h6>
                      <span>{item?.attributes?.designation} </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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

export default TestimonialOne;
