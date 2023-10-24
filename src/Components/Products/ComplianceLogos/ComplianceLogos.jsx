import React from "react";
import "../../../styles/compliancestyleP.css";
import PropTypes from "prop-types";

export const ComplianceLogos = ({   
}) => {
  return (
    <div className="compliance-logosP">
      <p className="compliance-header">All our products adhere to global compliance standards</p>
      <div className="div mt-6">
        <div className="Cframe">
          <div className="image-wrapper">
            <img src="../assets/image1.svg"/>
          </div>
        </div>  
        <div className="Cframe">
          <img src="../assets/image2.svg" />
        </div>
        <div className="Cframe">
          <img src="../assets/image3.svg" />
        </div>
        <div className="Cframe">
          <img src="../assets/image4.svg"  />
        </div>
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