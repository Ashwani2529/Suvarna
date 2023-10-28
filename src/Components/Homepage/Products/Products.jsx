import PropTypes from "prop-types";
import React from "react";
import { ProductCardLogos26 } from "../icons/ProductCardLogos26/ProductCardLogos26";
import "../../../styles/Productstyle.css";
import { useNavigate } from "react-router-dom";

export const Products = ({
  property1,
  className,
  arrowRight = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right.svg",
  icon = <ProductCardLogos26 className="product-card-logos" />,
  pexelsDanielFrankClassName,
  text = "Business Intelligence & MIS",
  text1 = "BI & MIS",
  text2 = "Digital Campus Management System",
  text3 = "Edukares",
  text4 = "Suvarna Laboratory Information Management System",
  text5 = "SLIMS",
  text6 = "DMS",
  text7= "Hospital Information Management System",
  text8="HIMS",
  text9= "Radiology Information System",
  text10="RIS-PACS",
  text11 ="Electronic Medical Record",
  text12="EMR",
  text13="TRI Mangement System",
  text14="TRIMS"
}) => {
    let navigate=useNavigate();
 const navigateProducts=(a)=>{
    switch (a) {
      case "products-5":
        navigate("/products/bimis");
        break;
      case "products-2-instance":
        navigate("/products/edukares");
        break;
      case "products-instance":
        navigate("/products/dms");
        break;
      case "products-6":
        navigate("/products/slims");
        break;
      case "products-instance a":
        navigate("/products/hims");
        break;
      case "products-2-instance b":
        navigate("/products/rispacs");
        break;
      case "products-5 c":
        navigate("/products/emr");
        break;
      case "products-6 d":
        navigate("/products/trims");
        break;
    }
    window.scrollTo(0, 0);
 }
  return (
    <>
   
    <div className={`products ${className}`}>
   
     <div className="document-management">
        {property1 === "DMS" && <>Document Management System</>}

        {property1 === "edukares" && <>{text2}</>}

        {property1 === "BI-MIS" && <>{text}</>}

        {property1 === "SLIMS" && <p className="text-wrapper-24">{text4}</p>}

              {property1 === "HIMS" && <>{text7}</>}
           {property1 === "RIS-PACS" && <>{text9}</>}
           {property1 === "EMR" && <>{text11}</>}
           {property1 === "TRIMS" && <>{text13}</>}
      </div>
 
    <div onClick={() => navigateProducts(className)} className="frame-14">
        <div  className="text-wrapper-4" >Know more</div>
        <img className='arrow-right' alt="Arrow right" src={arrowRight} />
      </div>
      <div className="frame-15">
        {icon}
      <div className={`DMS-2 ${property1}`}>
        {property1 === "DMS" && <>{text6}</>}

          {property1 === "edukares" && <>{text3}</>}

          {property1 === "BI-MIS" && <>{text1}</>}

          {property1 === "SLIMS" && <>{text5}</>}

         {property1 === "HIMS" && <>{text8}</>}

          {property1 === "RIS-PACS" && <>{text10}</>}

          {property1 === "EMR" && <>{text12}</>}

          {property1 === "TRIMS" && <>{text14}</>}
        </div>

      </div>
      <img
        className={`pexels-daniel-frank property-1-${property1} ${pexelsDanielFrankClassName}`}
        alt="Pexels daniel frank"
        src={
          property1 === "edukares"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-anand-raj-2880979-1@2x.png"
            : property1 === "BI-MIS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-alphatradezone-5784807-1.png"
            : property1 === "SLIMS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-pixabay-356040-1.png"
            :property1==="DMS" 
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-daniel-frank-305566-1.png"
            :property1==="HIMS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-alphatradezone-5784807-1.png"
            :property1==="RIS-PACS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-anand-raj-2880979-1@2x.png"
            :property1==="EMR"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-pixabay-356040-1.png"
            : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-daniel-frank-305566-1.png"
        }
      />
    </div>
    </> );
};

Products.propTypes = {
  property1: PropTypes.oneOf(["TRIMS","EMR","RIS-PACS","HIMS","SLIMS", "BI-MIS", "edukares", "DMS"]),
  arrowRight: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15:PropTypes.string
};
