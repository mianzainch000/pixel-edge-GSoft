"use client";
import React from "react";
import Link from "next/link";

const OffCanvasMenu = (props) => {
  const { home_header, services } = props;

  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li>
          <Link href="/" className="nav-link">
            {home_header?.data?.attributes?.headerTitle1}
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            href="/services"
            className="nav-link dropdown-toggle d-flex justify-content-between"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {home_header?.data?.attributes?.headerTitle2}
          </Link>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-half">
              <div className="dropdown-grid-item">
                {services?.data?.map((item, i) => (
                  <span key={i + 1}>
                    <Link
                      href={`/services/${item?.attributes?.slug}`}
                      className="dropdown-link"
                    >
                      <span className="dropdown-info mb-0">
                        <span className="drop-title">
                          {" "}
                          {item?.attributes?.header}
                        </span>
                        <span>{item?.attributes?.description}</span>
                      </span>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="/portfolio" className="nav-link">
            {home_header?.data?.attributes?.headerTitle3}
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="nav-link">
            {home_header?.data?.attributes?.headerTitle4}
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="nav-link">
            {home_header?.data?.attributes?.headerTitle5}
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="nav-link">
            {home_header?.data?.attributes?.headerTitle6}
          </Link>
        </li>{" "}
      </ul>
      <div className="action-btns mt-4 ps-3 text-center">
        <Link href="/estimate-your-project" className="btn btn-primary">
          Estimate Your Project
        </Link>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
