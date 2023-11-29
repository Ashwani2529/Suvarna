import PropTypes from "prop-types";
import React from "react";

import ReCaptchaV2 from "react-google-recaptcha";

import contact_us_vector from "../assets/pexels-gustavo-fring-4173250 1.png";

export const ContactUsSection = () => {
  return (
    <div
      className="w-screen md:h-10/12 my-[60px] flex justify-center items-center relative"
    >
      <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-end items-center">
        <div className="min-w-[696px] h-full flex justify-start items-start overflow-hidden absolute left-0">
          <img
            src={contact_us_vector}
            alt="contact_us_image"
            className="w-full"
          />
        </div>
        <form className="lg:w-1/2 w-full h-full flex flex-col justify-center items-center px-4 z-40">
          <div className="w-full h-full flex flex-col justify-between items-start">
            <div className="w-full h-36 flex flex-col justify-start items-start ">
              <p className="text-[28px] font-medium">
                Got queries? We’d love to help.
              </p>
              <p className="text-[16px] font-normal">
                Share your details and we’ll get in touch within 24 hours
              </p>
            </div>
            <div className="w-full flex flex-grow-1 flex-col justify-start items-center ">
              <div className="w-full flex md:flex-row flex-col justify-start items-center">
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="John Doe"
                    name="full_name"
                  />
                </div>
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="e.g. First Cry Hospital"
                    name="organisation_name"
                  />
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-start items-center">
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="contact@company.com"
                    name="email"
                  />
                </div>
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="e.g. person@gmail.com"
                    name="phone"
                  />
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-start items-center">
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="Ahemdabad"
                    name="city"
                  />
                </div>
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="India"
                    name="country"
                  />
                </div>
              </div>
              <div className="w-full flex justify-start items-start">
                <div className="w-[90%] flex flex-col justify-start items-start">
                  <label
                    htmlFor="name"
                    className="py-2 font-medium text-[16px]"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                    placeholder="Leave us a message..."
                    name="message"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start my-2">
                <ReCaptchaV2 sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F" />
                <div className="frame-30 my-2 flex ">
                  <input
                    className="check-square-svgrepo border-slate-950 border-2 cursor-pointer"
                    alt="Check square svgrepo"
                    type="checkbox"
                  />
                  <p className="you-agree-to-our">
                    <span className="text-[#08090A] font-normal mx-2">
                      You agree to our friendly
                    </span>
                    <span className="text-[#146DFA] font-normal">
                      privacy policy
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-start items-center my-2">
                <button
                  className="btn btn-primary"
                  property1="default-small"
                  text="Submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

ContactUsSection.propTypes = {
  checkSquareSvgrepo: PropTypes.string,
};
