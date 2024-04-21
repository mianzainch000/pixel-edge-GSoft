"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const OurTeam = (props) => {
  const { about_us_team_head, about_us_our_team } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="our-team" className="team-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center" data-aos="fade-right">
              <h5 className="h6 text-primary">Our Team</h5>
              <h2>{about_us_team_head?.data?.attributes?.title}</h2>
              <p>{about_us_team_head?.data?.attributes?.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {about_us_our_team?.data?.map((item, i) => (
            <div
              key={i + 1}
              className="col-lg-3 col-md-6"
              data-aos="fade-right"
            >
              <div className="team-single-wrap mb-5">
                <div className="team-img rounded-custom">
                  <PixelEdgeImage
                    width={306}
                    height={306}
                    src={item?.attributes?.picture?.data?.attributes?.url}
                    alt="team"
                  />
                  <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                    <li className="list-inline-item">
                      <Link href={item?.attributes?.linkedln || ""}>
                        <i className="fab">
                          <FaLinkedinIn />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={item?.attributes?.twitter || ""}>
                        <i className="fab">
                          <FaTwitter />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={item?.attributes?.github || ""}>
                        <i className="fab">
                          <FaGithub />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={item?.attributes?.facebook || ""}>
                        <i className="fab">
                          <FaFacebookF />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="team-info mt-4 text-center">
                  <h5 className="h6 mb-1">{item?.attributes?.name} </h5>
                  <p className="text-muted small mb-0">
                    {item?.attributes?.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
