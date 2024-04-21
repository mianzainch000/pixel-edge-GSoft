/* eslint-disable @next/next/no-img-element */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import PixelEdgeImage from "../PixelEdgeImage";
import SectionTitle from "../common/SectionTitle";

const LatestBlog = (props) => {
  const { blogs } = props;
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="related-blog-list ptb-120 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-12" data-aos="fade-right">
            <SectionTitle
              subtitle="Blog"
              title="Check our Latest News and Update"
            />
          </div>
          <div className="col-lg-7 col-md-12">
            <div
              className="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0"
              data-aos="fade-left"
            >
              <Link href="/blogs" className="btn btn-primary">
                View All Article
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs?.data?.map((item, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div
                className="single-article rounded-custom mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <Link
                  href={`/blogs/${item?.attributes?.title}`}
                  className="article-img"
                >
                  <PixelEdgeImage
                    width={414}
                    height={224}
                    src={item?.attributes?.coverPicture?.data?.attributes?.url}
                    alt="article"
                  />
                </Link>
                <div className="article-content p-4">
                  <div className="article-category mb-4 d-block">
                    <Link
                      href="#"
                      className={`d-inline-block text-dark badge ${
                        i % 2 == 0
                          ? "bg-primary-soft"
                          : i % 3 == 0
                          ? "bg-warning-soft"
                          : "bg-danger-soft"
                      }`}
                    >
                      {item?.attributes?.tags}
                    </Link>
                  </div>
                  <Link href={`/blogs/${item?.attributes?.title}`}>
                    <h2 className="h5 article-title limit-2-line-text">
                      {item?.attributes?.title}
                    </h2>
                  </Link>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item?.attributes?.description,
                    }}
                    className="limit-2-line-text"
                  ></p>

                  <Link href="#">
                    <div className="d-flex align-items-center pt-4">
                      <div className="avatar">
                        <PixelEdgeImage
                        height={50}
                        width={50}
                          src={
                            item?.attributes?.user?.data?.attributes
                              ?.profilePicture?.data?.attributes?.url
                          }
                          alt="avatar"
                       
                          className="img-fluid rounded-circle me-3"
                        />
                      </div>
                      <div className="avatar-info">
                        <h6 className="mb-0 avatar-name">
                          {item?.attributes?.user?.data?.attributes?.username}{" "}
                        </h6>
                        <span className="small fw-medium text-muted">
                          {item?.attributes?.publishedDate}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
