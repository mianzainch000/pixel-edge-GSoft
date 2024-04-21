/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import PixelEdgeImage from "../PixelEdgeImage";
import React, { useState, useEffect } from "react";

const HeroSectionOne = (props) => {
  const { home_carousel } = props;
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient"
      style={{ background: "url('/hero-dot-bg.png')no-repeat center right" }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div className="row align-items-center" data-aos="fade-right">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5">
                {home_carousel?.attributes?.title}
              </h1>
              <p className="lead">{home_carousel?.attributes?.description}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative circle-shape-images">
              <div
                className="img-fluid position-relative z-5"
                style={{ height: 319, width: 546 }}
              >
                <PixelEdgeImage
                  src={
                    home_carousel?.attributes?.coverPicture?.data.attributes.url
                  }
                  layout="fill"
                  alt="hero img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-4 mt-2">
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

export default HeroSectionOne;
