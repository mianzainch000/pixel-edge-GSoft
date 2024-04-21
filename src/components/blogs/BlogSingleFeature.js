"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileCard from "./ProfileCard";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";

const BlogSingleFeature = (props) => {
  const { get_blogs } = props;
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
                    __html: get_blogs?.attributes?.description,
                  }}
                  data-aos="fade-right"
                />
                <div className="blog-details-info mt-5" data-aos="fade-right">
                  <h3 className="h5">
                    {get_blogs?.attributes?.descriptionSection[0]?.heading}
                  </h3>
                  <ul className="content-list list-unstyled">
                    <li>
                      {get_blogs?.attributes?.descriptionSection[0]?.point1}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[0]?.point2}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[0]?.point3}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[0]?.point4}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[0]?.point5}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[0]?.point6}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[0]?.point7}
                    </li>
                  </ul>
                  <blockquote
                    className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top"
                    data-aos="fade-right"
                  >
                    <p className="text-muted">
                      <i className="fas fa-quote-left me-2 text-primary"></i>
                      {get_blogs?.attributes?.noteSection}
                      <i className="fas fa-quote-right ms-2 text-primary"></i>
                    </p>
                  </blockquote>
                </div>
                <PixelEdgeImage
                  width={820}
                  height={351}
                  src={
                    get_blogs?.attributes?.descriptionSection[0]?.picture?.data
                      ?.attributes?.url
                  }
                  className="mt-4 rounded-custom"
                  alt="apply"
                  data-aos="fade-right"
                />
                <div className="job-details-info mt-5" data-aos="fade-right">
                  <h3 className="h5">
                    {get_blogs?.attributes?.descriptionSection[1]?.heading}
                  </h3>
                  <p>
                    {
                      get_blogs?.attributes?.descriptionSection[1]
                        ?.headerDescription
                    }
                  </p>
                  <ul className="content-list list-unstyled">
                    <li>
                      {get_blogs?.attributes?.descriptionSection[1]?.point1}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[1]?.point2}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[1]?.point3}
                    </li>
                  </ul>
                </div>

                <div className="blog-details-info mt-5" data-aos="fade-right">
                  <h3 className="h5">
                    {get_blogs?.attributes?.descriptionSection[2]?.heading}
                  </h3>
                  <ul className="content-list list-unstyled">
                    <li>
                      {get_blogs?.attributes?.descriptionSection[2]?.point1}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[2]?.point2}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[2]?.point3}
                    </li>
                    <li>
                      {get_blogs?.attributes?.descriptionSection[2]?.point4}
                    </li>
                  </ul>
                </div>

                <PixelEdgeImage
                  width={820}
                  height={355}
                  src={
                    get_blogs?.attributes?.descriptionSection[2]?.picture?.data
                      ?.attributes?.url
                  }
                  className="mt-5 rounded-custom"
                  alt="apply"
                  data-aos="fade-right"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <ProfileCard get_blogs={get_blogs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingleFeature;
