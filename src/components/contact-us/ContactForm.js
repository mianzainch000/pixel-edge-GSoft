"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import "react-toastify/dist/ReactToastify.css";
import PixelEdgeImage from "../PixelEdgeImage";
import { ToastContainer, toast } from "react-toastify";
import { CONTACT_US_FORM } from "../../api/graphql/queries/contactUs";

const ContactForm = (props) => {
  const { contact_us } = props;
  const [createContactPage, { data, loading }] = useMutation(CONTACT_US_FORM);
  const notify = () => toast.success("Your form has been submitted");

  useEffect(() => {
    if (data?.createContactPage?.data && !loading) {
      notify();
    }
  }, [data?.createContactPage?.data, loading]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const submitHandler = (values, { resetForm }) => {
    createContactPage({
      variables: {
        data: {
          email: values?.email,
          firstName: values?.firstName,
          lastName: values?.lastName,
          message: values?.description,
          phoneNumber: values?.phoneNumber,
        },
      },
    });
    resetForm();
  };

  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8" data-aos="fade-right">
            <div className="section-heading">
              <h2>{contact_us?.data?.attributes?.header}</h2>
              <p>{contact_us?.data?.attributes?.headerDescription}</p>
            </div>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                description: "",
              }}
              onSubmit={submitHandler}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form action="#" className="register-form">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="mb-1">
                        First name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={values?.firstName}
                          onChange={handleChange}
                          required
                          placeholder="First name"
                          aria-label="First name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <label htmlFor="lastName" className="mb-1">
                        Last name
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={values?.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          aria-label="Last name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="phone" className="mb-1">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phoneNumber"
                          value={values?.phoneNumber}
                          onChange={handleChange}
                          required
                          placeholder="Phone"
                          aria-label="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email" className="mb-1">
                        Email<span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={values?.email}
                          onChange={handleChange}
                          required
                          placeholder="Email"
                          aria-label="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourMessage" className="mb-1">
                        Message <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <textarea
                          className="form-control"
                          id="yourMessage"
                          name="description"
                          value={values?.description}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          style={{ height: "120px" }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Get in Touch
                  </button>
                </Form>
              )}
            </Formik>
            <ToastContainer autoClose={2000} />
          </div>
          <div className="col-lg-5 col-md-10" data-aos="fade-left">
            <div className="contact-us-img">
              <PixelEdgeImage
                width={526}
                height={406}
                src={
                  contact_us?.data?.attributes?.headerPicture?.data?.attributes
                    ?.url
                }
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
