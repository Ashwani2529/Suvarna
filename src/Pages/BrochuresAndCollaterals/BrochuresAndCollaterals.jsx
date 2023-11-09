import React, { useState } from "react";

import { LogoHeader } from "../../Components/AboutUs/LogoHeader/LogoHeader";
// import "./style.css";
import "../../styles/BrochuresAndCollateral.css";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { Footer } from "../../Components/Homepage/Footer/Footer";

import BrochuresAndCollateralVector from "../../assets/ContactUs_Vector.png";
import PDF_icon from "../../assets/pdf_icon.png";

export const BrochuresAndCollateral = () => {
  const files = [
    {
      id: 1,
      title: "Company Flyer",
      total_pages: 12,
      image: "",
    },
    {
      id: 2,
      title: "HIMS Flyer",
      total_pages: 12,
      image: "",
    },
    {
      id: 3,
      title: "SLIMS Flyer",
      total_pages: 12,
      image: "",
    },
    {
      id: 4,
      title: "EMR Flyer",
      total_pages: 12,
      image: "",
    },
    {
      id: 5,
      title: "RIS-PACS Flyer",
      total_pages: 12,
      image: "",
    },
    {
      id: 6,
      title: "HIMS Brochures",
      total_pages: 12,
      image: "",
    },
    {
      id: 7,
      title: "Drug Detail Brochures",
      total_pages: 12,
      image: "",
    },
    {
      id: 8,
      title: "EMR Brochures",
      total_pages: 12,
      image: "",
    },
  ];

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [cardId, setCardId] = useState(0);

  return (
    <div className="BrochuresAndCollateral h-auto flex-col justify-start items-center ">
      {/*  vectors + heading */}

      <div className="w-screen min-h-[274px] flex justify-center items-center relative mt-[100px]">
        <img
          src={BrochuresAndCollateralVector}
          className="w-screen z-10 absolute top-0 left-0"
          alt="contact-us-vector"
        />

        <div className="lg:w-10/12 md:w-11/12 z-20 relative w-screen h-full flex flex-col justify-center items-start bg-transparent">
          <div className="heading">Brochures & Collaterals</div>
          <div className="sub-heading">
            Find up-to-date information on our whole suite of products &
            services
          </div>
        </div>
      </div>

      <div className="h-[700px] w-screen flex flex-col justify-start items-center my-64">
        <div className="lg:w-10/12 md:w-11/12 w-full flex flex-wrap justify-center items-center">
          {files.map((d, index) => {
            return (
              <div
                key={index}
                className="card"
                onMouseOver={() => {
                  setIsMouseOver(true);
                  setCardId(d.id);
                }}
                onMouseLeave={() => {
                  setIsMouseOver(false);
                  setCardId(0);
                }}
              >
                <div className="relative flex justify-center items-center">
                  <svg
                    width="132"
                    height="184"
                    className="relative"
                    viewBox="0 0 132 184"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.1">
                      <rect width="132" height="184" fill="#0A0C0E" />
                    </g>
                    <img src={PDF_icon} alt="pdf_icon" className="" />
                  </svg>
                  <img
                    src={PDF_icon}
                    alt="pdf_icon"
                    className="absolute z-10 bottom-0 end-0"
                  />
                </div>

                <div className="card_title">{d.title}</div>
                <div className="card_regular_text">{d.total_pages} Pages</div>

                {isMouseOver && d.id === cardId ? (
                  <button
                    type="button"
                    className={`card_dark_button text-white button-text cursor-pointer`}
                    onMouseOver={() => {
                      setIsMouseOver(true);
                      setCardId(d.id);
                    }}
                    onMouseLeave={() => {
                      setIsMouseOver(false);
                      setCardId(0);
                    }}
                  >
                    <div className="mx-0 ">Download</div>
                    <svg
                      width="25"
                      height="24"
                      className="w-[20px]"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0535 16.5061C12.9114 16.6615 12.7106 16.75 12.5 16.75C12.2894 16.75 12.0886 16.6615 11.9465 16.5061L7.94649 12.1311C7.66699 11.8254 7.68823 11.351 7.99393 11.0715C8.29964 10.792 8.77403 10.8132 9.05353 11.1189L11.75 14.0682V3C11.75 2.58579 12.0858 2.25 12.5 2.25C12.9142 2.25 13.25 2.58579 13.25 3V14.0682L15.9465 11.1189C16.226 10.8132 16.7004 10.792 17.0061 11.0715C17.3118 11.351 17.333 11.8254 17.0535 12.1311L13.0535 16.5061Z"
                        fill="white"
                      />
                      <path
                        d="M4.25 15C4.25 14.5858 3.91422 14.25 3.5 14.25C3.08579 14.25 2.75 14.5858 2.75 15V15.0549C2.74998 16.4225 2.74996 17.5248 2.86652 18.3918C2.98754 19.2919 3.24643 20.0497 3.84835 20.6516C4.45027 21.2536 5.20814 21.5125 6.10825 21.6335C6.97522 21.75 8.07754 21.75 9.44513 21.75H15.5549C16.9225 21.75 18.0248 21.75 18.8918 21.6335C19.7919 21.5125 20.5497 21.2536 21.1517 20.6516C21.7536 20.0497 22.0125 19.2919 22.1335 18.3918C22.25 17.5248 22.25 16.4225 22.25 15.0549V15C22.25 14.5858 21.9142 14.25 21.5 14.25C21.0858 14.25 20.75 14.5858 20.75 15C20.75 16.4354 20.7484 17.4365 20.6469 18.1919C20.5482 18.9257 20.3678 19.3142 20.091 19.591C19.8142 19.8678 19.4257 20.0482 18.6919 20.1469C17.9365 20.2484 16.9354 20.25 15.5 20.25H9.5C8.06459 20.25 7.06347 20.2484 6.30812 20.1469C5.57435 20.0482 5.18577 19.8678 4.90901 19.591C4.63225 19.3142 4.4518 18.9257 4.35315 18.1919C4.25159 17.4365 4.25 16.4354 4.25 15Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`card-light-button button-text cursor-pointer`}
                    onMouseOver={() => {
                      setIsMouseOver(true);
                      setCardId(d.id);
                    }}
                    onMouseLeave={() => {
                      setIsMouseOver(false);
                      setCardId(0);
                    }}
                  >
                    <div className="mx-0.5 ">Download</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      className="w-[20px]"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M13.0535 16.5061C12.9114 16.6615 12.7106 16.75 12.5 16.75C12.2894 16.75 12.0886 16.6615 11.9465 16.5061L7.94649 12.1311C7.66699 11.8254 7.68823 11.351 7.99393 11.0715C8.29964 10.792 8.77403 10.8132 9.05353 11.1189L11.75 14.0682V3C11.75 2.58579 12.0858 2.25 12.5 2.25C12.9142 2.25 13.25 2.58579 13.25 3V14.0682L15.9465 11.1189C16.226 10.8132 16.7004 10.792 17.0061 11.0715C17.3118 11.351 17.333 11.8254 17.0535 12.1311L13.0535 16.5061Z"
                        fill="#146DFA"
                      />
                      <path
                        d="M4.25 15C4.25 14.5858 3.91422 14.25 3.5 14.25C3.08579 14.25 2.75 14.5858 2.75 15V15.0549C2.74998 16.4225 2.74996 17.5248 2.86652 18.3918C2.98754 19.2919 3.24643 20.0497 3.84835 20.6516C4.45027 21.2536 5.20814 21.5125 6.10825 21.6335C6.97522 21.75 8.07754 21.75 9.44513 21.75H15.5549C16.9225 21.75 18.0248 21.75 18.8918 21.6335C19.7919 21.5125 20.5497 21.2536 21.1517 20.6516C21.7536 20.0497 22.0125 19.2919 22.1335 18.3918C22.25 17.5248 22.25 16.4225 22.25 15.0549V15C22.25 14.5858 21.9142 14.25 21.5 14.25C21.0858 14.25 20.75 14.5858 20.75 15C20.75 16.4354 20.7484 17.4365 20.6469 18.1919C20.5482 18.9257 20.3678 19.3142 20.091 19.591C19.8142 19.8678 19.4257 20.0482 18.6919 20.1469C17.9365 20.2484 16.9354 20.25 15.5 20.25H9.5C8.06459 20.25 7.06347 20.2484 6.30812 20.1469C5.57435 20.0482 5.18577 19.8678 4.90901 19.591C4.63225 19.3142 4.4518 18.9257 4.35315 18.1919C4.25159 17.4365 4.25 16.4354 4.25 15Z"
                        fill="#146DFA"
                      />
                    </svg>
                  </button >
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/*  same for every page  */}
      <Footer className="" />
      <header className="header z-50">
        <LogoHeader className="design-component-instance-node" />
        <div className="frame-33">
          <div className="menu-2">
            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};
