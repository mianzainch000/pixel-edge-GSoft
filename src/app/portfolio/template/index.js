"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import OurPortfolio from "@/components/OurPortfolio";
import PageHeader from "@/components/common/PageHeader";

const Portfolios = (props) => {
  const {
    home_header,
    services,
    footer,
    portfolio_head,
    portfolio_web,
    portfolio_mobile,
    portfolio_tabs_name,
  } = props;
  return (
    <>
      <Navbar home_header={home_header} services={services} />
      <PageHeader
        title={portfolio_head?.data?.attributes?.title}
        desc={portfolio_head?.data?.attributes?.description}
      />
      <OurPortfolio
        portfolio_tabs_name={portfolio_tabs_name}
        portfolio_web={portfolio_web}
        portfolio_mobile={portfolio_mobile}
      />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default Portfolios;
