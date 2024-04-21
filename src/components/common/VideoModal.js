"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { IoCaretForwardOutline } from "react-icons/io5";

const VideoModal = ({ className, onlyButton }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <Link
        onClick={() => setOpen(true)}
        href="#!"
        className={` ${
          className
            ? "text-decoration-none popup-youtube align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 ms-3"
            : "video-icon popup-youtube text-decoration-none"
        }`}
      >
        <IoCaretForwardOutline className={`${onlyButton && "fa-2x"}`} />
      </Link>
      <span className="text-white ms-2 small">
        {!onlyButton && "Watch Video"}
      </span>
    </>
  );
};

export default dynamic(() => Promise.resolve(VideoModal), { ssr: false });
