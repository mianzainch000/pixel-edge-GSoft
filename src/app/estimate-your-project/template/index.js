"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import SingleServiceRegister from "@/components/services/SingleServiceRegister";

const EstimateYourProject = (props) => {
  const {
    home_header,
    services,
    estimate_your_project_content,
    estimate_your_project_users,
    estimate_your_project_head,
    estimate_your_project_footer,
  } = props;
  return (
    <>
      <Navbar navDark home_header={home_header} services={services} />
      <SingleServiceRegister
        estimate_your_project_head={estimate_your_project_head}
        estimate_your_project_content={estimate_your_project_content}
        estimate_your_project_users={estimate_your_project_users}
      />
      <Footer footer={estimate_your_project_footer} />
    </>
  );
};

export default EstimateYourProject;
