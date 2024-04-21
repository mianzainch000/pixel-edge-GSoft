/* eslint-disable @next/next/no-img-element */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import PixelEdgeImage from "../PixelEdgeImage";

const BlogFeatureTags = (props) => {
  const { searchBlog, capitalize } = props;
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="masonary-blog-section ptb-120">
      <div className="container">
        <div className="row">
          {searchBlog?.blogs?.data?.map((item, i) => {
            return (
              <div
                key={i + 1}
                className="col-lg-4 col-md-6"
                data-aos="fade-right"
              >
                <div className="single-article rounded-custom my-3">
                  <Link
                    className="article-img"
                    href={`/blogs/${item?.attributes?.slug}`}
                  >
                    <PixelEdgeImage
                      width={414}
                      height={224}
                      src={
                        item?.attributes?.coverPicture?.data?.attributes?.url
                      }
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
                        {capitalize(item?.attributes?.tags)}
                      </Link>
                    </div>
                    <Link href={`/blogs/${item?.attributes?.slug}`}>
                      <h2 className="h5 article-title limit-2-line-text">
                        {item?.attributes?.title}
                      </h2>
                    </Link>
                    <p
                      className="limit-2-line-text"
                      dangerouslySetInnerHTML={{
                        __html: item?.attributes?.description,
                      }}
                    ></p>

                    <Link href="#">
                      <div className="d-flex align-items-center pt-4">
                        <div className="avatar">
                          <PixelEdgeImage
                            src={
                              item?.attributes?.user?.data?.attributes
                                ?.profilePicture?.data?.attributes?.url
                            }
                            alt="avatar"
                            width={40}
                            height={40}
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="avatar-info ms-3">
                          <h6 className="mb-0 avatar-name">
                            {" "}
                            {
                              item?.attributes?.user?.data?.attributes?.username
                            }{" "}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogFeatureTags;
