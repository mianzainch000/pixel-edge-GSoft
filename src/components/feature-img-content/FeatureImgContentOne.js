"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";
import { FaCheckCircle } from "react-icons/fa";

const FeatureImgContentOne = (props) => {
  const { home_content } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content" data-aos="fade-right">
                <h2> {home_content?.data[0]?.attributes?.header}</h2>
                <p>{home_content?.data[0]?.attributes?.description}</p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[0]?.attributes?.point1}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[0]?.attributes?.point2}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[0]?.attributes?.point3}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[0]?.attributes?.point4}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[0]?.attributes?.point5}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[0]?.attributes?.point6}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="feature-img-holder mt-4 mt-lg-0 mt-xl-0"
                data-aos="fade-left"
              >
                <PixelEdgeImage
                  width={636}
                  height={464}
                  layout="responsive"
                  src={
                    home_content?.data[0]?.attributes?.coverPicture?.data
                      ?.attributes?.url
                  }
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-feature pt-60 pb-120" data-aos="fade-left">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content" data-aos="fade-left">
                <h2> {home_content?.data[1]?.attributes?.header}</h2>
                <p>{home_content?.data[1]?.attributes?.description}</p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[1]?.attributes?.point1}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[1]?.attributes?.point2}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[1]?.attributes?.point3}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[1]?.attributes?.point4}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[1]?.attributes?.point5}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {home_content?.data[1]?.attributes?.point6}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div
                className="feature-img-holder mt-4 mt-lg-0 mt-xl-0"
                data-aos="fade-right"
              >
                <PixelEdgeImage
                  width={636}
                  height={492}
                  layout="responsive"
                  src={
                    home_content?.data[1]?.attributes?.coverPicture?.data
                      ?.attributes?.url
                  }
                  className="img-fluid"
                  alt="feature-image"
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
              <Link
                href="/about-us"
                className="text-white text-decoration-none"
              >
                Lets More
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentOne;
