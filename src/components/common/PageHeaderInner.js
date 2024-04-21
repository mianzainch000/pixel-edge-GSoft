/* eslint-disable @next/next/no-img-element */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Link from "next/link";

const PageHeaderInner = ({ title, desc, integration, blogtags }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {integration ? (
        <section
          className="page-header position-relative overflow-hidden ptb-120 bg-dark"
          style={{
            background: "url('/page-header-bg.svg')no-repeat bottom left",
          }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8 col-12">
                <div className="company-info-wrap align-items-center">
                  <div className="company-logo p-4 bg-white shadow rounded-custom me-4 mt-2">
                    <div className="logo justify-content-center">
                      <img
                        src="/integations/2.png"
                        alt="company logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="company-overview" data-aos="fade-right">
                    <h1 className="display-5 fw-bold">{title}</h1>
                    <p className="lead mb-0">{desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="action-btns mt-4 mt-lg-0 mt-xl-0">
                  <Link href="#" className="btn btn-outline-light">
                    Connect with Google
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
          </div>
        </section>
      ) : (
        <section
          className="page-header position-relative overflow-hidden ptb-120 bg-dark"
          style={{
            background: "url('/page-header-bg.svg')no-repeat bottom left",
          }}
        >
          <div className="container">
            <div
              className={`row ${
                blogtags ? "justify-content-center text-center" : ""
              }`}
            >
              <div className="col-lg-8 col-md-12" data-aos="fade-right">
                <h1 className="display-5 fw-bold">{title}</h1>
                <p className="lead">{desc}</p>

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
              </div>
            </div>
            {blogtags ? (
              <div className="row justify-content-center text-center">
                <div className="col-xl-8">
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Marketing
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    {" "}
                    Sales
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    {" "}
                    Design
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    {" "}
                    Development
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    {" "}
                    Product Design
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    {" "}
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    {" "}
                    Agency
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    {" "}
                    Investors
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Research
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
          </div>
        </section>
      )}
    </>
  );
};

export default PageHeaderInner;
