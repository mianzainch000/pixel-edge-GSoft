"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import PixelEdgeImage from "../PixelEdgeImage";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ProfileCard = (props) => {
  const { get_blogs } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0"
      data-aos="fade-left"
    >
      <PixelEdgeImage
        width={120}
        height={120}
        src={
          get_blogs?.attributes?.user?.data?.attributes?.profilePicture?.data
            ?.attributes?.url
        }
        alt="author"
        className="img-fluid shadow-sm rounded-circle"
      />
      <div className="author-info my-4">
        <h5 className="mb-0">
          {get_blogs?.attributes?.user?.data?.attributes?.username}
        </h5>
        <span className="small">
          {get_blogs?.attributes?.user?.data?.attributes?.designation}
        </span>
      </div>
      <p>{get_blogs?.attributes?.user?.data?.attributes?.description}</p>
      <ul className="list-unstyled author-social-list list-inline mt-3 mb-0">
        <li className="list-inline-item">
          <Link
            href={get_blogs?.attributes?.user?.data?.attributes?.linkedln || ""}
            passHref
            className="fab"
          >
            <FaLinkedinIn />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link
            href={get_blogs?.attributes?.user?.data?.attributes?.twitter || ""}
            passHref
            className="fab"
          >
            <FaTwitter />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link
            href={get_blogs?.attributes?.user?.data?.attributes?.github || ""}
            passHref
            className="fab"
          >
            <FaGithub />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link
            href={get_blogs?.attributes?.user?.data?.attributes?.facebook || ""}
            passHref
            className="fab"
          >
            <FaFacebookF />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProfileCard), { ssr: false });
