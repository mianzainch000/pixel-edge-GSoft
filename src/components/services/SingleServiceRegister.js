/* eslint-disable @next/next/no-img-element */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceForm from "./ServiceForm";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";
import Link from "next/link";

const SingleServiceRegister = (props) => {
  const {
    estimate_your_project_head,
    estimate_your_project_content,
    estimate_your_project_users,
  } = props;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom right",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div
            className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0"
            data-aos="fade-right"
          >
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-white">
                {estimate_your_project_head?.data?.attributes?.title}
              </h2>
              <p>
                {" "}
                {estimate_your_project_head?.data?.attributes?.description}
              </p>
              <hr />
              <div
                className="tab-content testimonial-tab-content text-white-80"
                id="pills-tabContent"
              >
                {estimate_your_project_content?.data?.map((item, index) => {
                  return (
                    <div
                      className={`tab-pane fade ${item?.attributes?.active}`}
                      id={item?.attributes?.target}
                      role="tabpanel"
                      key={index}
                    >
                      <blockquote className="blockquote">
                        <em>&quot;{item?.attributes?.message}&quot;</em>
                      </blockquote>
                      <div className="author-info mt-3">
                        <span className="h6">
                          {item?.attributes?.user?.data?.attributes?.username}
                        </span>
                        <span className="d-block small">
                          {
                            item?.attributes?.user?.data?.attributes
                              ?.designation
                          }
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex gap-4  mt-2">
                <button className="btn btn-primary">
                  <Link
                    href="/estimate-your-project"
                    className="text-white text-decoration-none"
                  >
                      Lets Talk
                  </Link>
                </button>
                <button className="btn btn-primary">
                  <Link
                    href="/about-us"
                    className="text-white text-decoration-none"
                  >
                    Lets More
                  </Link>
                </button>
              </div>
              <ul
                className="nav nav-pills mb-0 testimonial-tab-indicator mt-5"
                id="pills-tab"
                role="tablist"
              >
                {estimate_your_project_users?.data?.map((item, index) => {
                  return (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className={`nav-link ${item?.attributes?.active}`}
                        data-bs-toggle="pill"
                        data-bs-target={item?.attributes?.target}
                        type="button"
                        role="tab"
                      >
                        <PixelEdgeImage
                          src={
                            item?.attributes?.profilePicture?.data?.attributes
                              ?.url
                          }
                          alt="testimonial"
                          width={55}
                          height={55}
                          className="img-fluid rounded-circle"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <ServiceForm />
        </div>
      </div>
    </section>
  );
};

export default SingleServiceRegister;
