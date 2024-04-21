"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";
import SectionTitle from "../common/SectionTitle";

const FeatureOne = (props) => {
  const { bgDark, home_about, home_services, services } = props;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="feature-promo ptb-120 bg-light">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-right">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                classNam="text-center"
                title={home_about?.data?.attributes?.title}
                description={home_about?.data?.attributes?.description}
              />
            </div>
          </div>

          <p className="h2 text-center" data-aos="fade-right">
            Our Services
          </p>
          <div className="row justify-content-center" data-aos="fade-right">
            {services?.data?.map((item, index) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6">
                    <Link
                      key={index}
                      href={`/services/${item?.attributes?.slug}`}
                    >
                      <div
                        className={`feature-card shadow-sm rounded-custom p-5  single-feature-promo p-lg-5 p-3 text-center mt-4 ${
                          bgDark
                            ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                            : "bg-white"
                        }`}
                        data-aos="fade-right"
                        style={{ height: "300px" }}
                      >
                        <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32 ">
                          <span className="fal">
                            <div
                              style={{
                                marginTop: "5px",
                              }}
                            >
                              <PixelEdgeImage
                                src={
                                  item?.attributes?.picture?.data?.attributes
                                    ?.url
                                }
                                width={30}
                                height={30}
                              />
                            </div>
                          </span>
                        </div>

                        <div className="feature-info-wrap">
                          <h3 className="h5">{item?.attributes?.header}</h3>
                          <p className="text-dark">
                            {item?.attributes?.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
            <div className="d-flex gap-4 justify-content-center mt-4">
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
      </section>
    </>
  );
};

export default FeatureOne;
