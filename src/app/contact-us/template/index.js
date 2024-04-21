"use client";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/common/PageHeader";
import ContactCard from "@/components/contact-us/ContactCard";
import ContactForm from "@/components/contact-us/ContactForm";

const ContactUs = (props) => {
  const { home_header, footer, services, contact_us } = props;

  return (
    <>
      <Navbar
        classOption="navbar-light"
        home_header={home_header}
        services={services}
      />
      <PageHeader
        title={contact_us?.data?.attributes?.title}
        desc={contact_us?.data?.attributes?.description}
      />
      <ContactCard contact_us={contact_us} />
      <ContactForm contact_us={contact_us} />
      <Footer footer={footer} services={services} />
    </>
  );
};

export default ContactUs;
