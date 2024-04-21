/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import Rating from "../common/Rating";
import React, { useEffect } from "react";
import { Navigation } from "swiper/modules";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import PixelEdgeImage from "@/components/PixelEdgeImage";

const TestimonialTwo = ({
  sectionBgClass,
  swiperBgClass,
  home_testimonial_head,
  home_testimonial,
}) => {
  const swiperOption = {
    slidesPerView: 2,
    mousewheel: true,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: ".swiper-nav-control .swiper-button-next",
      prevEl: ".swiper-nav-control .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section
        className={`testimonial-section ${
          sectionBgClass ? sectionBgClass : "bg-light"
        } ptb-120`}
      >
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6" data-aos="fade-right">
              {sectionBgClass ? (
                <SectionTitle
                  subtitle="Testimonial"
                  title={home_testimonial_head?.data?.attributes?.title}
                  description={
                    home_testimonial_head?.data?.attributes?.description
                  }
                  darkBg
                  centerAlign
                />
              ) : (
                <SectionTitle
                  subtitle="Testimonial"
                  title={home_testimonial_head?.data?.attributes?.title}
                  description={
                    home_testimonial_head?.data?.attributes?.description
                  }
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="position-relative" data-aos="fade-right">
                <Swiper {...swiperOption} modules={[Navigation]}>
                  {home_testimonial?.data?.map((item, i) => (
                    <SwiperSlide key={i + 1}>
                      <div
                        className={`p-5 rounded-custom position-relative border border-2 ${
                          swiperBgClass ? swiperBgClass : "bg-light"
                        }   `}
                      >
                        <img
                          src="/testimonial/quotes-dot.svg"
                          alt="quotes"
                          width="100"
                          className="position-absolute left-0 top-0 z--1 p-3"
                          layout="fill"
                        />
                        <div className="d-flex mb-32 align-items-center">
                          <PixelEdgeImage
                            width={60}
                            height={60}
                            src={
                              item?.attributes?.picture?.data?.attributes?.url
                            }
                            className="img-fluid rounded"
                            alt="user"
                          />
                          <div className="author-info ms-3">
                            <h6 className="mb-0">
                              {
                                item?.attributes?.user?.data?.attributes
                                  ?.username
                              }
                            </h6>
                            <small>
                              {
                                item?.attributes?.user?.data?.attributes
                                  ?.designation
                              }
                            </small>
                          </div>
                        </div>
                        <blockquote>
                          <h6>{item?.attributes?.review}</h6>
                          {item?.attributes?.description}
                        </blockquote>
                        <Rating />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-nav-control">
                  <span className="swiper-button-next"></span>
                  <span className="swiper-button-prev"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;
