"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";

const Privacypolicy = (props) => {
  const { home_header, footer, services } = props;
  return (
    <>
      <Navbar
        classOption="navbar-light"
        home_header={home_header}
        services={services}
      />

      <PrivacyPolicy />

      <Footer footer={footer} />
    </>
  );
};

export default Privacypolicy;
