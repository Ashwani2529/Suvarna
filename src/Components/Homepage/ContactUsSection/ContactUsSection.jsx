import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import "../../../styles/ContactUSstyle.css";
import ReCaptchaV2 from 'react-google-recaptcha';

export const ContactUsSection = () => {
  return (
    <div className="contact-us-section" id="contactus">
      <div className="frame-27" />
      <div className="frame-28">
        <div className="div-6">
          <p className="text-wrapper-8">Got queries? We’d love to help.</p>
          <p className="text-wrapper-9">Share your details and we’ll get in touch within 24 hours</p>
        </div>
        <div className="input-fields">
          <div className="frame-29">
            <InputField className="design-component-instance-node" property1="default" text="Name" text1="John Doe" />
            <InputField
              className="design-component-instance-node"
              property1="default"
              text="Organisation name"
              text1="e.g. First Cry Hospital"
            />
          </div>
          <div className="frame-29">
            <InputField
              className="design-component-instance-node"
              property1="default"
              text="Email"
              text1="contact@company.com"
            />
            <InputField
              className="design-component-instance-node"
              property1="default"
              text="Phone"
              text1="e.g. person@gmail.com"
            />
          </div>
          <div className="frame-29">
            <InputField className="design-component-instance-node" property1="default" text="City" text1="Ahmedabad" />
            <InputField className="design-component-instance-node" property1="default" text="Country" text1="India" />
          </div>
          <InputField className="design-component-instance-node" property1="message" />
          <div className="div-6">
          <ReCaptchaV2 sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F" />
            <div className="frame-30">
              <input className="check-square-svgrepo border-slate-950 border-2" alt="Check square svgrepo" type="checkbox"/>
              <p className="you-agree-to-our">
                <span className="text-wrapper-10">You agree to our friendly </span>
                <span className="text-wrapper-11">privacy policy</span>
              </p>
            </div>
          </div>
          <button className="btn btn-primary" property1="default-small" text="Submit" >Submit</button>
        </div>
      </div>
    </div>
  );
};

ContactUsSection.propTypes = {
  checkSquareSvgrepo: PropTypes.string,
};
