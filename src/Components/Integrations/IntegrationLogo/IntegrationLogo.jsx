import PropTypes from "prop-types";
import React from "react";
import "../../../styles/intlogo.css";

export const IntegrationLogo = ({ property1, className }) => {
  return (
    <div className={`integration-logo ${property1} ${className}`}>
      {(property1 === "ANIDS" ||
        property1 === "CGE-centricity" ||
        property1 === "GEMS" ||
        property1 === "MS-dynamics-AX" ||
        property1 === "MS-dynamics-NAV" ||
        property1 === "SAP" ||
        property1 === "UPI" ||
        property1 === "a-ayush" ||
        property1 === "abott" ||
        property1 === "accurex" ||
        property1 === "acon" ||
        property1 === "adonis" ||
        property1 === "agappe" ||
        property1 === "alere" ||
        property1 === "alifax" ||
        property1 === "arkray" ||
        property1 === "aspen" ||
        property1 === "biomerieux" ||
        property1 === "biorad" ||
        property1 === "biosystems" ||
        property1 === "dia-tek" ||
        property1 === "diatron" ||
        property1 === "diesse" ||
        property1 === "e-verlife" ||
        property1 === "focus" ||
        property1 === "med-synapse" ||
        property1 === "oracle" ||
        property1 === "paytm" ||
        property1 === "pos1" ||
        property1 === "pos2" ||
        property1 === "pos3" ||
        property1 === "radspa" ||
        property1 === "razorpay" ||
        property1 === "tally" ||
        property1 === "veckman") && (
        <img
          className="image"
          alt="Image"
          src={
            property1 === "razorpay"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-102@2x.png"
              : property1 === "paytm"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-104@2x.png"
              : property1 === "GEMS"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-114.png"
              : property1 === "ANIDS"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-113.png"
              : property1 === "CGE-centricity"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-112.png"
              : property1 === "med-synapse"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-111@2x.png"
              : property1 === "radspa"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-110.png"
              : property1 === "MS-dynamics-AX"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-109@2x.png"
              : property1 === "tally"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-108.png"
              : property1 === "a-ayush"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-107.png"
              : property1 === "oracle"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-106.png"
              : property1 === "MS-dynamics-NAV"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-105.png"
              : property1 === "focus"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-82@2x.png"
              : property1 === "SAP"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-83.png"
              : property1 === "abott"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-84@2x.png"
              : property1 === "accurex"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-85.png"
              : property1 === "acon"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-86.png"
              : property1 === "adonis"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-87.png"
              : property1 === "agappe"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-88.png"
              : property1 === "alere"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-89@2x.png"
              : property1 === "alifax"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-90.png"
              : property1 === "arkray"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-91.png"
              : property1 === "veckman"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-92.png"
              : property1 === "aspen"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-93@2x.png"
              : property1 === "biomerieux"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-94.png"
              : property1 === "biorad"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-95@2x.png"
              : property1 === "biosystems"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-96.png"
              : property1 === "e-verlife"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-97.png"
              : property1 === "dia-tek"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-98.png"
              : property1 === "diatron"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-99.png"
              : property1 === "diesse"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-100.png"
              : property1 === "pos1"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-124.png"
              : property1 === "pos2"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-125.png"
              : property1 === "pos3"
              ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-126.png"
              : "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6535b42c30c06f373d03571e/img/image-101.png"
          }
        />
      )}
    </div>
  );
};

IntegrationLogo.propTypes = {
  property1: PropTypes.oneOf([
    "two-decho",
    "MS-dynamics-AX",
    "whats-app",
    "pay-u-money",
    "adonis",
    "oracle",
    "biosystems",
    "MS-dynamics-NAV",
    "CGE-centricity",
    "pos1",
    "biomerieux",
    "SAP",
    "alere",
    "SMS",
    "ANIDS",
    "abott",
    "biorad",
    "arkray",
    "accurex",
    "gmail",
    "diatron",
    "petscan",
    "paytm",
    "alifax",
    "acon",
    "agappe",
    "tally",
    "focus",
    "pos3",
    "diesse",
    "e-verlife",
    "dia-tek",
    "radspa",
    "GEMS",
    "ultrasound",
    "UPI",
    "veckman",
    "aspen",
    "a-ayush",
    "med-synapse",
    "c-tscan",
    "pos2",
    "MR-iscan",
    "xray",
    "razorpay",
  ]),
};
