"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { gql } from "@apollo/client";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/client";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { uploadFileClient } from "../../api/client";
import { ToastContainer, toast } from "react-toastify";
import { ESTIMATE_YOUR_PROJECT } from "../../api/graphql/queries/estimate-your-project";
const ServiceForm = () => {
  const [images, setImages] = useState("");
  const [createEstimateYourProject, { data, loading }] = useMutation(
    ESTIMATE_YOUR_PROJECT
  );

  const notify = () => toast.success("Your form has been submitted");

  useEffect(() => {
    if (data?.createEstimateYourProject?.data && !loading) {
      notify();
    }
  }, [data?.createEstimateYourProject?.data, loading]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const submitHandler = async (values, { resetForm }) => {
    try {
      let response = await uploadFileClient.mutate({
        mutation: gql`
          mutation Upload($file: Upload!) {
            upload(file: $file) {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        `,
        variables: { file: images },
      });

      const imageUrl = response?.data?.upload?.data?.id || "";
      createEstimateYourProject({
        variables: {
          data: {
            company: values.website,
            description: values.description,
            email: values.email,
            name: values.firstName,
            phoneNumber: values.phoneNumber,
            selectYourRegion: values.country,
            budget: values.budget,
            policyValues: values.checkbox,
            picture: imageUrl,
          },
        },
      });
      resetForm({
        values: {
          firstName: "",
          email: "",
          website: "",
          phoneNumber: "",
          budget: "",
          country: "",
          image: "",
          description: "",
          checkbox: false,
        },
      });
      setImages("");
      document.getElementById("file").value = "";
    } catch (error) {}
  };

  return (
    <>
      <div
        className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1"
        data-aos="fade-left"
      >
        <div className="register-wrap p-5 bg-white shadow rounded-custom">
          <h3 className="fw-medium">
            Fill out the form and we will be in touch as soon as possible.
          </h3>

          <Formik
            initialValues={{
              firstName: "",
              email: "",
              website: "",
              phoneNumber: "",
              budget: "",
              country: "",
              image: "",
              description: "",
              checkbox: false,
            }}
            onSubmit={submitHandler}
          >
            {({ values, handleChange }) => (
              <Form action="#" className="mt-4 register-form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="firstName"
                        value={values?.firstName}
                        onChange={handleChange}
                        placeholder="Name"
                        aria-label="name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        value={values?.email}
                        onChange={handleChange}
                        placeholder="Email"
                        aria-label="email"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="website"
                        required
                        value={values?.website}
                        onChange={handleChange}
                        placeholder="Company name"
                        aria-label="company-website"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className="form-control"
                        name="phoneNumber"
                        required
                        value={values?.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone number"
                        aria-label="phone-number"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-group mb-3">
                      <select
                        className="form-control form-select"
                        name="budget"
                        required
                        onChange={handleChange}
                        id="budget"
                        data-msg="Please select your budget."
                        value={values?.budget}
                      >
                        <option value="budget" disabled="">
                          Budget
                        </option>
                        <option value="None, just getting started">
                          None, just getting started
                        </option>
                        <option value="Less than $20,000">
                          Less than $20,000
                        </option>
                        <option value="$20,000 to $50,000">
                          $20,000 to $50,000
                        </option>
                        <option value="$50,000 to $100,000">
                          $50,000 to $100,000
                        </option>
                        <option value="$100,000 to $500,000">
                          $100,000 to $500,000
                        </option>
                        <option value="More than $500,000">
                          More than $500,000
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-group mb-3">
                      <select
                        className="form-control form-select"
                        name="country"
                        required
                        id="country"
                        onChange={handleChange}
                        data-msg="Please select your country."
                        value={values?.country}
                      >
                        <option value="" disabled="">
                          Country
                        </option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        id="file"
                        name="image"
                        value={values?.images}
                        onChange={({
                          target: {
                            validity,
                            files: [file],
                          },
                        }) => {
                          setImages(file);
                        }}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Tell us more about your project, needs and budget"
                        name="description"
                        required
                        value={values?.description}
                        onChange={handleChange}
                        style={{ height: "120px" }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        required
                        checked={values?.checkbox}
                        onChange={handleChange}
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="flexCheckChecked"
                      >
                        Yes, I would like to receive occasional marketing emails
                        from us. I have the right to opt out at any time.
                        <Link href="#"> View privacy policy</Link>.
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary mt-4 d-block w-100"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <ToastContainer autoClose={2000} />
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
