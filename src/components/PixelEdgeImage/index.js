"use client";
/** @format */
import React from "react";
import Image from "next/image";
import { useState } from "react";

const PixelEdgeImage = (props) => {
  const [error, setError] = useState(false);
  const imageSrc = props.src?.includes("/uploads/")
    ? process.env.NEXT_PUBLIC_HOST_MEDIA + props.src
    : props.src;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        alt=""
        {...props}
        src={error ? "/images/noImage.jpeg" : imageSrc}
        style={{
          ...props?.style,
        }}
        onError={() => {
          setError(true);
        }}
        priority
        placeholder="blur"
        blurDataURL="/images/loaderShim.png"
      />
    </div>
  );
};

export default PixelEdgeImage;
