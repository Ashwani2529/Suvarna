import PropTypes from "prop-types";
import {React,useEffect,useState} from "react";
import "../../../styles/ClientLogosstyle.css";

export const ClientLogos1 = ({ className }) => {
  const [property1, setProperty1] = useState("default");
  useEffect(() => {
    const interval = setInterval(() => {
      setProperty1((prevProperty1) => (prevProperty1 === "variant-2" ? "default" : "variant-2"));
    }, 2150); 
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`client-logos ${className}`}>
      <img
        className={`image property-1-4-${property1}`}
        alt="Image"
        src={
          property1 === "variant-2"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-19@2x.png"
            : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-13.png"
        }
      />
      <img
        className={`image-2 property-1-5-${property1}`}
        alt="Image"
        src={
          property1 === "variant-2"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-20.png"
            : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-14.png"
        }
      />
      <img
        className="image-3"
        alt="Image"
        src={
          property1 === "variant-2"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-21.png"
            : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-15.png"
        }
      />
      <img
        className={`image-4 property-1-6-${property1}`}
        alt="Image"
        src={
          property1 === "variant-2"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-22.png"
            : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-16.png"
        }
      />
      <img
        className={`image-5 property-1-7-${property1}`}
        alt="Image"
        src={
          property1 === "variant-2"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-23@2x.png"
            : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-17.png"
        }
      />
     
    </div>
  );
};

ClientLogos1.propTypes = {
  className: PropTypes.string,
};