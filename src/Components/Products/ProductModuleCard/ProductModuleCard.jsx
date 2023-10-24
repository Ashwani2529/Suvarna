import React from "react";
import { ProductModuleImage } from "../ProductModuleImage/ProductModuleImage";
import "../../../styles/productMCstyle.css";

export const ProductModuleCard = ({head,path}) => {
  return (
    <div className="framePMC">
      <div className="overlap-group21">
      <img style={{marginLeft:"132px"}} src="../assets/Vector9.svg"/>
        <ProductModuleImage className="product-module-image" path={path} />
      </div>
      <div className="div21">
        <div className="compliance-header21">{head}</div>
        <div className="framePMC-wrapper21">
          <div className="div-2">
            <div className="div-3">
              <img src="../assets/tick.svg"/>
              <p className="text-wrapper">Configurable rules based outpatient and daycare workflows</p>
            </div>
            <div className="div-3">
            <img src="../assets/tick.svg"/>
              <p className="text-wrapper">Robust appointment system for consultation and diagnostic services</p>
            </div>
            <div className="div-3">
            <img src="../assets/tick.svg"/>
              <p className="text-wrapper">OMNI channel patient alerts and notifications</p>
            </div>
            <div className="div-3">
            <img src="../assets/tick.svg"/>
              <p className="text-wrapper">Manage patient wait times with effective Queue Management</p>
            </div>
            <div className="div-3">
            <img src="../assets/tick.svg"/>
              <p className="text-wrapper">Appointment booking via portal, kiosk &amp; mobile app</p>
            </div>
            <div className="div-3">
            <img src="../assets/tick.svg"/>
              <p className="text-wrapper">Robust billing system with IDC and payment gateway integrations</p>
            </div>
            <div className="div-3">
            <img src="../assets/tick.svg"/>
              <p className="text-wrapper">Used by 300 + Hospitals of all sizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};