import PropTypes from "prop-types";
import React from "react";
import { Component12 } from "../icons/Component12/Component12";
import "../../../styles/Tilestyle.css";

export const Tile = ({
  property1,
  className,
  thumbUpFill = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/thumb-up-2-fill-1-5.svg",
  secureSvgrepoCom = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/secure-svgrepo-com-1-5.svg",
  onMouseEnter,
  onMouseLeave,
  happyFill = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/happy-fill-1-1.svg",
  img = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/thumb-up-2-fill-1-6.svg",
}) => {
  return (
    <div className={`tile ${property1} ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="div">
        {["relaible-l", "reliable"].includes(property1) && <>Reliable</>}

        {["proven-l", "proven"].includes(property1) && <>Proven</>}

        {["simple-l", "simple"].includes(property1) && <>Simple</>}

        {["affordable-l", "affordable"].includes(property1) && <>Affordable</>}
      </div>
      {property1 === "simple" && <Component12 className="component" />}

      {["proven-l", "proven", "relaible-l", "reliable", "simple-l"].includes(property1) && (
        <img
          className="thumb-up-fill"
          alt="Thumb up fill"
          src={
            property1 === "proven"
              ? secureSvgrepoCom
              : property1 === "simple-l"
              ? happyFill
              : property1 === "relaible-l"
              ? img
              : property1 === "proven-l"
              ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/secure-svgrepo-com-1-3.svg"
              : thumbUpFill
          }
        />
      )}

      {["proven-l", "proven", "relaible-l", "reliable", "simple-l", "simple"].includes(property1) && (
        <div className="our-solutions-are">
          {["simple-l", "simple"].includes(property1) && (
            <p className="text-wrapper-16">
              Our solutions are engineered to optimize the workflows and provide a simple interaction with the system to
              take away the complexities of the daily operations
            </p>
          )}

          {["relaible-l", "reliable"].includes(property1) && (
            <p className="text-wrapper-16">
              Our products undergo multi level testing to ensure that our clients get the desired &amp; consistent
              outcomes all the time.
            </p>
          )}

          {["proven-l", "proven"].includes(property1) && (
            <p className="text-wrapper-16">
              We take pride in the fact that our products and solutions are being used and accepted by 500+ healthcare
              organizations of all sizes.
            </p>
          )}
        </div>
      )}

      {["affordable-l", "affordable"].includes(property1) && (
        <>
          <div className="frame">
            <div className="text-wrapper">$</div>
          </div>
          <p className="we-firmly-believe">
            We firmly believe that proven &amp; reliable products and solutions should be accessible to every healthcare
            provider.
          </p>
        </>
      )}
    </div>
  );
};

Tile.propTypes = {
  property1: PropTypes.oneOf([
    "relaible-l",
    "reliable",
    "affordable-l",
    "proven-l",
    "proven",
    "affordable",
    "simple-l",
    "simple",
  ]),
  thumbUpFill: PropTypes.string,
  secureSvgrepoCom: PropTypes.string,
  happyFill: PropTypes.string,
  img: PropTypes.string,
};
