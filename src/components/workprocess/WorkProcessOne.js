"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const WorkProcessOne = (props) => {
  const { home_working_process } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="work-process ptb-120" data-aos="fade-right">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Process</h4>
              <h2>{home_working_process?.data?.attributes?.title}</h2>
              <p>{home_working_process?.data?.attributes?.description}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div
            className="col-lg-5 col-md-12 order-1 order-lg-0"
            data-aos="fade-right"
          >
            <div className="img-wrap">
              <PixelEdgeImage
                width={526}
                height={621}
                src={
                  home_working_process?.data?.attributes?.picture?.data
                    ?.attributes?.url
                }
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 order-0 order-lg-1"
            data-aos="fade-left"
          >
            <ul className="work-process-list list-unstyled">
              {home_working_process?.data?.attributes?.working_processes?.data?.map(
                (item, index) => {
                  return (
                    <>
                      <li className="d-flex align-items-start mb-4">
                        <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                          <i className="far fa-2x d-flex justify-content-center align-items-center">
                            {/* <RiNodeTree /> */}
                            <div className="mt-4">
                              <PixelEdgeImage
                                src={
                                  item?.attributes?.logo?.data?.attributes?.url
                                }
                                width={40}
                                height={40}
                              />
                            </div>
                          </i>
                        </div>
                        <div className="icon-content">
                          <span className="text-primary h6">{`Step ${
                            index + 1
                          }`}</span>
                          <h3 className="h5 mb-2">{item?.attributes?.title}</h3>
                          <p>{item?.attributes?.description}</p>
                        </div>
                      </li>
                    </>
                  );
                }
              )}
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

export default WorkProcessOne;
