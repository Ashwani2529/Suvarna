import PropTypes from "prop-types";
import React from "react";
import { IntegrationLogo } from "../IntegrationLogo/IntegrationLogo";
import "../../../styles/intappcard.css";

export const IntegrationAppcard = ({
  property1,
  integrationLogoProperty1 = "oracle",
  text = "Oracle",
  text1 = "RADSpa",
  text2 = "Abbott",
  text3 = "mSwipe",
  text4 = "CT-Scan",
  text5 = "Paytm",
  text6 = "WhatsApp",
}) => {
  return (
    <div className="integration-app-card mr-[21px] mb-[21px]">
      <IntegrationLogo
        className={`${
          property1 === "payments"
            ? "class"
            : property1 === "modalities"
            ? "class-2"
            : property1 === "comm"
            ? "class-3"
            : "class-4"
        }`}
        property1={integrationLogoProperty1}
      />
      <div className="frame">
        <div className="div">
          {property1 === "payments" && <>{text5}</>}

          {property1 === "accounting" && <>{text}</>}

          {property1 === "PACS" && <>{text1}</>}

          {property1 === "lab-analyzer" && <>{text2}</>}

          {property1 === "POS" && <>{text3}</>}

          {property1 === "modalities" && <>{text4}</>}

          {property1 === "comm" && <>{text6}</>}
        </div>
        <div className="manage-your-payments">
          {property1 === "payments" && (
            <p className="md:text-[16px] text-[14px] text-[#6D747A]">Manage your payments at ease with quick integration.</p>
          )}

          {property1 === "accounting" && (
            <p className="md:text-[16px] text-[14px] text-[#6D747A]">Integrate easily with Accounting, ERP &amp; CRM tools.</p>
          )}

          {property1 === "PACS" && (
            <p className="md:text-[16px] text-[14px] text-[#6D747A]">Integrated Picture Archiving and Communications System (PACS).</p>
          )}

          {property1 === "lab-analyzer" && (
            <p className="md:text-[16px] text-[14px] text-[#6D747A]">Seamlessly connect with your favourite lab analyser tools.</p>
          )}

          {property1 === "POS" && (
            <p className="md:text-[16px] text-[14px] text-[#6D747A]">Streamline payments with the best EDC and POS systems.</p>
          )}

          {property1 === "modalities" && (
            <p className="md:text-[16px] text-[14px] text-[#6D747A]">Integrated diagnostics with best-in-class modalities systems.</p>
          )}

          {property1 === "comm" && (
            <p className="md:text-[16px] text-[14px] text-[#6D747A]">Integrate with the best-in-class email and communication apps.</p>
          )}
        </div>
      </div>
    </div>
  );
};

IntegrationAppcard.propTypes = {
  property1: PropTypes.oneOf(["PACS", "comm", "lab-analyzer", "accounting", "payments", "POS", "modalities"]),
  integrationLogoProperty1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
};
