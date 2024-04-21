"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import OffCanvasMenu from "./OffCanvasMenu";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import PixelEdgeImage from "@/components/PixelEdgeImage";

const Navbar = ({ navDark, insurance, classOption, home_header, services }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setIsHover(false);
  };

  const boxStyle = {
    color: isHover ? "#175cff" : "",
  };
  return (
    <header
      className={`main-header ${
        navDark ? "position-absolute" : ""
      } w-100 ${classOption} ${
        insurance && "ins-header main-header w-100 z-10"
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-50 ${
          navDark ? "navbar-dark" : "navbar-light"
        } sticky-header ${scroll > headerTop ? "affix" : ""}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
          >
            {scroll > headerTop || !navDark ? (
              <div style={{ width: "113px", height: "36px " }}>
                <PixelEdgeImage
                  src={
                    home_header?.data?.attributes?.logo?.data?.attributes?.url
                  }
                  alt="logo"
                  className="img-fluid logo-color"
                  layout="fill"
                />
              </div>
            ) : (
              <div style={{ width: "113px", height: "36px " }}>
                <PixelEdgeImage
                  src={
                    home_header?.data?.attributes?.logo?.data?.attributes?.url
                  }
                  alt="logo"
                  className="img-fluid logo-white"
                  layout="fill"
                />
              </div>
            )}
          </Link>
          <button
            className="navbar-toggler position-absolute right-0 border-0"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link href="/" className="nav-link">
                  {home_header?.data?.attributes?.headerTitle1}
                </Link>
              </li>

              <li>
                <Dropdown
                  show={showDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/services" className="nav-link">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      style={{
                        margin: "-28px",

                        color:
                          scroll > headerTop || !navDark ? "#575757" : "white",
                        border: "none",
                      }}
                    >
                      <span style={boxStyle}>
                        {home_header?.data?.attributes?.headerTitle2}
                      </span>
                    </Dropdown.Toggle>
                  </Link>

                  <Dropdown.Menu>
                    <div className="rounded-custom shadow py-0 bg-white">
                      <div
                        className="dropdown-grid rounded-custom width-full overflow-y-auto"
                        style={{ maxHeight: "480px" }}
                      >
                        <div className="dropdown-grid-item">
                          {services?.data?.slice(0, 11)?.map((item, i) => (
                            <Link
                              key={item?.id}
                              href={`/services/${item?.attributes?.slug}`}
                              className="dropdown-link"
                            >
                              <span className="dropdown-info mb-0">
                                <span className="drop-title">
                                  {item?.attributes?.header}
                                </span>
                                <span>{item?.attributes?.description}</span>
                              </span>
                            </Link>
                          ))}
                        </div>

                        <div className="dropdown-grid-item">
                          {services?.data?.slice(11, 22)?.map((item, i) => (
                            <Link
                              key={item?.id}
                              href={`/services/${item?.attributes?.slug}`}
                              className="dropdown-link"
                            >
                              <span className="dropdown-info mb-0">
                                <span className="drop-title">
                                  {item?.attributes?.header}
                                </span>
                                <span>{item?.attributes?.description}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Link href="/portfolio" className="nav-link">
                  {" "}
                  {home_header?.data?.attributes?.headerTitle3}
                </Link>
              </li>

              <li>
                <Link href="/blogs" className="nav-link">
                  {" "}
                  {home_header?.data?.attributes?.headerTitle4}
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link ">
                  {home_header?.data?.attributes?.headerTitle5}
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="nav-link">
                  {" "}
                  {home_header?.data?.attributes?.headerTitle6}
                </Link>
              </li>

              <div
                className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block"
                style={{ position: "relative", left: "170px" }}
              >
                <Link
                  href="/estimate-your-project"
                  className={
                    insurance ? "ins-btn ins-primary-btn" : "btn btn-primary"
                  }
                >
                  Estimate Your Project
                </Link>
              </div>
            </ul>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link
                href="/"
                className="d-flex align-items-center mb-md-0 text-decoration-none"
              >
                <PixelEdgeImage
                  width={121}
                  height={36}
                  src={
                    home_header?.data?.attributes?.logo?.data?.attributes?.url
                  }
                  alt="logo"
                  className="img-fluid ps-2"
                />
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu home_header={home_header} services={services} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
