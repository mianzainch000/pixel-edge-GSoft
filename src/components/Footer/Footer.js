"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import PixelEdgeImage from "@/components/PixelEdgeImage";
import {
  FaFacebook,
  FaLinkedinIn,
  FaDribbble,
  FaTwitter,
} from "react-icons/fa";

const Footer = ({ footerLight, footerGradient, footer }) => {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-bottom ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <div className="mb-lg-0 mb-md-0">
                    <PixelEdgeImage
                      width={121}
                      height={36}
                      src={
                        footer?.data?.attributes?.logo?.data?.attributes?.url
                      }
                      alt="logo"
                      className="img-fluid ps-2"
                    />
                    &copy; 2024 Pixel Edge
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <Link href={footer?.data?.attributes?.facebook || ""}>
                        <FaFacebook />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={footer?.data?.attributes?.twitter || ""}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={footer?.data?.attributes?.website || ""}>
                        <FaDribbble />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={footer?.data?.attributes?.github || ""}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
