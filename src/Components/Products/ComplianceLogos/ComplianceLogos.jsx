import React from "react";
import "../../../styles/compliancestyleP.css";
import PropTypes from "prop-types";

export const ComplianceLogos = () => {
  return (
    <div className="compliance-logosP w-screen">
      <p className="md:w-full w-11/12 font-normal text-[#6D747A] text-[20px] text-center">
        All our products adhere to global compliance standards
      </p>
      <div className="lg:w-1/2 md:w-2/3 w-full mt-[10px] flex justify-evenly items-center flex-wrap">
        <img
          src="../assets/image1.svg"
          className="md:scale-90 scale-75"
          alt="product_global_complaince"
        />

        <img
          src="../assets/image2.svg"
          className="md:scale-90 scale-75"
          alt="product_global_complaince"
        />

        <img
          src="../assets/image3.svg"
          className="md:scale-90 scale-75"
          alt="product_global_complaince"
        />

        <img
          src="../assets/image4.svg"
          className="md:scale-90 scale-75"
          alt="product_global_complaince"
        />
      </div>
    </div>
  );
};

ComplianceLogos.propTypes = {
  image: PropTypes.string,
  img: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
};
