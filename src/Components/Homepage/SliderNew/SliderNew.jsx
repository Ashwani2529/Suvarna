import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Vector813 } from "../icons/Vector813/Vector813";
import { Vector84 } from "../icons/Vector84/Vector84";
import { Rectangle } from "../Rectangle/Rectangle";
import { Vector } from "../Vector/Vector";
import "../../../styles/SliderNewstyle.css";

export const SliderNew = ({
  property1,
  className,
  vector84Color = "url(#paint0_linear_1918_11414)",
  vectorPropertyDefaultClassName,
  vectorPropertyDefaultClassNameOverride,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-1.png",
      textwrapper: "Trusted by 100+ healthcare providers",
      text: `Our wide range of innovative technology-enabled solutions cater to hospitals,diagnostic centres, medical colleges and other healthcare touch points.`,
    },
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-2.png",
      textwrapper: "Simple. Reliable. Proven. Affordable",
      text: "Suvarna's streamlined healthcare solutions prioritize simplicity and affordability without compromising quality or reliability.",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-3.png",
      textwrapper: " Celebrating 23+ years of innovation",
      text: " Our two-decade journey of unwavering commitment to improving health outcomes signifies a legacy built on experience, expertise, and continuous innovation.",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-4.png",
      textwrapper: "Digitally transforming healthcare",
      text: " Suvarna pioneers the digital revolution in healthcare, leveraging cutting-edge technology and empowering healthcare providers to deliver superior patient care.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const currentSlideInfo = slides[currentSlide];
  return (
    <div className={`slider-new ${className}`}>
      {
        <div 
          style={{ position: "absolute",
          transition: 'opacity 1s ease-in-out'}}
        >
          <img 
            style={{ position: "relative",opacity:"1",transition: 'opacity 1s ease-out'}}
            src={`${currentSlideInfo.image}`}
          />
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgb(0,0,0,0.5)",
              top: "0",
              left: "0",
              transform: 'translate(-0%, -0%)',
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "500px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          ><div
          style={{
            textAlign:'center',
            width:'60%'
          }}
          >
            <div
              style={{
                marginTop:"10px",
                position: "relative",
                color: "white",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              {currentSlideInfo.textwrapper}
            </div>
            <h1
              style={{
                marginTop:"20px",
                fontStyle:"normal",
                lineHeight:"1.61",
                position: "relative",
                color: "white",
                fontWeight: "light",
                fontSize:"20px"
              }}
            >
              {currentSlideInfo.text}
            </h1></div>
          </div>
        </div>
      }
      
      {/* <div className={`overlap property-1-${property1}`}>
        <div className="frame-3">
          {property1 === "frame-482705" && (
            <Vector813 className="vector-8-13" />
          )}

          {property1 === "frame-482704" && (
            <Vector84
              className="vector-8-4"
              color="url(#paint0_linear_1927_11543)"
            />
          )}

          {["frame-482703", "frame-482706"].includes(property1) && (
            <Vector
              className={`${
                property1 === "frame-482706" ? "class-3" : "vector-instance"
              }`}
              property1="default"
              propertyDefault={
                property1 === "frame-482706"
                  ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-8-2.png"
                  : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-8-1.png"
              }
            />
          )}
        </div>
        {["frame-482703", "frame-482705", "frame-482706"].includes(
          property1
        ) && (
          <div className="frame-4">
            {property1 === "frame-482703" && (
              <>
                <img
                  className="pexels-artem-podrez"
                  alt="Pexels artem podrez"
                  src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-3.png"
                />
                <Vector
                  className={vectorPropertyDefaultClassName}
                  property1="default"
                  propertyDefault="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-8-2.png"
                />
              </>
            )}

            {["frame-482705", "frame-482706"].includes(property1) && (
              <div className="overlap-group">
                {property1 === "frame-482706" && (
                  <Vector
                    className="vector-5"
                    property1="default"
                    propertyDefault="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-8-8.png"
                  />
                )}

                {property1 === "frame-482705" && (
                  <Vector84
                    className="vector-8-4"
                    color="url(#paint0_linear_1927_11653)"
                  />
                )}
              </div>
            )}
          </div>
        )}

        {["frame-482704", "frame-482705"].includes(property1) && (
          <>
            <Rectangle
              className={`${
                property1 === "frame-482704" ? "rectangle-5" : "class-4"
              }`}
            />
            <div className="frame-5">
              <div className="div-2">
                {property1 === "frame-482705" && (
                  <p className="text-wrapper-24">
                    Celebrating 23+ years of innovation
                  </p>
                )}

                {property1 === "frame-482704" && (
                  <>Simple. Reliable. Proven. Affordable</>
                )}
              </div>
              <div className="div-3">
                {property1 === "frame-482705" && (
                  <p className="text-wrapper-24">
                    Our two-decade journey of unwavering commitment to improving
                    health outcomes signifies a legacy built on experience,
                    expertise, and continuous innovation.
                  </p>
                )}

                {property1 === "frame-482704" && (
                  <p className="text-wrapper-24">
                    Suvarna&#39;s streamlined healthcare solutions prioritize
                    simplicity and affordability without compromising quality or
                    reliability.
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div> */}
        {/* {property1 === "frame-482704" && (
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <Vector
                className="vector-instance"
                property1="default"
                propertyDefault="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-8-1.png"
              />
            </div>
          </div>
        )}

        <div className={`frame-6 property-1-1-${property1}`}>
          {["frame-482703", "frame-482704", "frame-482705"].includes(
            property1
          ) && (
            <Vector
              className={`${
                property1 === "frame-482704"
                  ? "class-5"
                  : vectorPropertyDefaultClassNameOverride
              }`}
              property1="default"
              propertyDefault="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-8-2.png"
            />
          )}

          {property1 === "frame-482706" && (
            <>
              <div className="vector-8-4-wrapper">
                <Vector84
                  className="vector-8-14"
                  color="url(#paint0_linear_1927_11567)"
                />
              </div>
              <Rectangle className="rectangle-5" />
              <div className="frame-2">
                <div className="div-2"></div>
                <p className="div-3">
                  Suvarna pioneers the digital revolution in healthcare,
                  leveraging cutting-edge technology and empowering healthcare
                  providers to deliver superior patient care.
                </p>
              </div>
            </>
          )}
        </div> */}
    </div>
  );
};

SliderNew.propTypes = {
  property1: PropTypes.oneOf([
    "frame-482705",
    "frame-482704",
    "frame-482703",
    "frame-482706",
  ]),
  vector84Color: PropTypes.string,
};
