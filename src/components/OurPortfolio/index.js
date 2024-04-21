"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";
import SectionTitle from "../common/SectionTitle";

const OurPortfolio = (props) => {
  const { portfolio_web, portfolio_mobile, portfolio_tabs_name } = props;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="feature-promo ptb-120 bg-light">
        <div className="container">
          <div data-aos="fade-right">
            <SectionTitle subtitle="Our Portfolio" centerAlign />
          </div>
          <Tabs
            defaultActiveKey={1}
            id="uncontrolled-tab-example"
            className="mb-3 myClassTab"
            data-aos="fade-left"
          >
            <Tab
              eventKey={1}
              title={portfolio_tabs_name?.data[1]?.attributes?.name}
            >
              <div className="row">
                {portfolio_mobile?.data?.map((item, i) => {
                  return (
                    <div
                      key={i + 1}
                      className="col-lg-4 col-md-6"
                      data-aos="fade-right"
                    >
                      <div className="single-article rounded-custom my-3">
                        <Link
                          href={`/portfolio/${item?.attributes?.slug}`}
                          className="article-img"
                        >
                          <PixelEdgeImage
                            width={414}
                            height={224}
                            src={
                              item?.attributes?.picture?.data?.attributes?.url
                            }
                            alt="article"
                          />
                        </Link>
                        <div className="article-content p-4">
                          <Link href="#">
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

                          {item?.attributes?.tags?.split(",")?.map((itm, i) => {
                            return (
                              // eslint-disable-next-line react/jsx-key
                              <span
                                className="bg-dark text-white"
                                style={{
                                  border: "1px solid",
                                  padding: "2px 15px",
                                }}
                              >
                                {itm}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Tab>
            <Tab
              eventKey={2}
              title={portfolio_tabs_name?.data[0]?.attributes?.name}
            >
              <div className="row">
                {portfolio_web?.data?.map((item, i) => {
                  return (
                    <div
                      key={i + 1}
                      className="col-lg-4 col-md-6"
                      data-aos="fade-right"
                    >
                      <div className="single-article rounded-custom my-3">
                        <Link
                          href={`/portfolio/${item?.attributes?.slug}`}
                          className="article-img"
                        >
                          <PixelEdgeImage
                            width={414}
                            height={224}
                            src={
                              item?.attributes?.picture?.data?.attributes?.url
                            }
                            alt="article"
                          />
                        </Link>
                        <div className="article-content p-4">
                          <Link href="#">
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
                          <div>
                            {item?.attributes?.tags
                              ?.split(",")
                              ?.map((itm, i) => {
                                return (
                                  // eslint-disable-next-line react/jsx-key
                                  <span
                                    className="bg-dark text-white"
                                    style={{
                                      border: "1px solid",
                                      padding: "2px 15px",
                                    }}
                                  >
                                    {itm}
                                  </span>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default OurPortfolio;
