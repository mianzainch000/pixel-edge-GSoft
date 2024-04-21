"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const PortfolioDetail = (props) => {
  const { get_portfolio } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 pe-5">
              <div className="blog-details-wrap">
                <p
                  dangerouslySetInnerHTML={{
                    __html: get_portfolio?.attributes?.description,
                  }}
                  data-aos="fade-right"
                />

                <PixelEdgeImage
                  width={820}
                  height={351}
                  src={
                    get_portfolio?.attributes?.picture?.data?.attributes?.url
                  }
                  className="img-fluid mt-4 rounded-custom"
                  alt="apply"
                  data-aos="fade-right"
                />

                <PixelEdgeImage
                  width={820}
                  height={355}
                  src={
                    get_portfolio?.attributes?.picture?.data?.attributes?.url
                  }
                  className="img-fluid mt-5 rounded-custom"
                  alt="apply"
                  data-aos="fade-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetail;
