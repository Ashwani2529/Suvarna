import React from "react";
import "../../../styles/productMIstyle.css";

export const ProductModuleImage = ({path}) => {
  return (
    <div className="product-module-image">
      <img src={`${path}`}/>
      <div className="overlap-group">    
      </div>
    </div>
  );
};