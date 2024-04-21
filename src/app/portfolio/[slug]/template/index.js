"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/common/PageHeader";
import PortfolioDetail from "@/components/portfolio/PortfolioDetail";

const PortfolioSingle = (props) => {
  const { home_header, services, footer, get_portfolio } = props;

  return (
    <>
      <Navbar
        classOption="navbar-light"
        home_header={home_header}
        services={services}
      />
      <PageHeader
        title={get_portfolio?.data[0]?.attributes?.title}
        desc={get_portfolio?.data[0]?.attributes?.description}
      />
      <PortfolioDetail get_portfolio={get_portfolio?.data[0]} />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default PortfolioSingle;
