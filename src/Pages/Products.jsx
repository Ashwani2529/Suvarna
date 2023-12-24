import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsPre } from "../Components/ProductsPre";

import KeyModules from "../Components/KeyModules/KeyModules";
import vector_products from "../VectorDMS.png";
import module_image_even from "../assets/Product_Module_Image (1).png";
import module_image_odd from "../assets/Product_Module_Image.png";
import useWindowDimensions from "../utils/windowDimension";

const Products = () => {
  const [laptop, setLaptop] = React.useState(false);
  var { type } = useParams();
  const { width,height } = useWindowDimensions();
  
  React.useEffect(() => {
    if (((width <= 1366) && (width >= 1024)) && (height <= 769)) {
      setLaptop(true);
    } else {
      setLaptop(false);
    }
  },[width,height]);
  
console.log(laptop);
  const hims = [
    {
      id: 1,
      title: "Outpatient Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 2,
      title: "Inpatient & ER Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 3,
      title: "Patient Engagement - (CRM)",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 4,
      title: "Revenue Cycle Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 5,
      title: "Inpatient & ER Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 6,
      title: "Patient Engagement - (CRM)",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 7,
      title: "Revenue Cycle Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
  ];

  const rispacs = [
    {
      id: 1,
      title: "Centralized Reporting",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 2,
      title: "PACS/ Modality Integration",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 3,
      title: "Radiology Workflow Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
  ];

  const dms = [
    {
      id: 1,
      title: "Digitize Physical Documents",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
  ];

  const edukares = [
    {
      id: 1,
      title: "Outpatient Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
  ];

  const slims = [
    {
      id: 1,
      title: "Centralized Reporting",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 2,
      title: "PACS/ Modality Integration",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 3,
      title: "Radiology Workflow Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
    {
      id: 4,
      title: "Radiology Workflow Management",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
  ];

  const bimis = [
    {
      id: 1,
      title: "Digitize Physical Documents",
      lists: [
        "Configurable rules based outpatient and daycare workflows",
        "Robust appointment system for consultation and diagnostic services",
        "OMNI channel patient alerts and notifications",
        "Manage patient wait times with effective Queue Management",
        "Appointment booking via portal, kiosk & mobile app",
        "Robust billing system with IDC and payment gateway integrations",
        "Used by 300 + Hospitals of all sizes",
      ],
    },
  ];

  return (
    <div className="relative w-screen flex flex-col justify-start items-start">
      <ProductsPre
        head={`${type === "bimis" ? "Business Intelligence & MIS" : ""}

                ${
                  type === "hims"
                    ? "Hospital Information Management System"
                    : ""
                }
                
                ${type === "rispacs" ? "Radiology Information System" : ""}

                ${type === "dms" ? "Document Management System" : ""}

                ${type === "edukares" ? "Digital Campus Management System" : ""}
                
                ${
                  type === "slims"
                    ? "Suvarna Laboratory Information Management System"
                    : ""
                }
        
        `}
        paragraph={` ${
          type === "hims"
            ? "Streamline operations, enhance patient care and transform patient engagement with Suvarna HIMS"
            : ""
        } 
        
        ${
          type === "rispacs"
            ? "Transform enterprise imaging, radiology workflows and reporting with Suvarna RIS-PACS"
            : ""
        }
        ${
          type === "dms"
            ? "Digitize your physical case sheets, prescriptions, reports & more with Document Management System"
            : ""
        }

        ${
          type === "edukares"
            ? "Experience the new age Campus Management System"
            : ""
        }
       ${
         type === "bimis"
           ? "Measure, manage & grow your business with intelligent analytics and live dashboards"
           : ""
       }

        ${
          type === "slims"
            ? "Automate workflows, reduce TAT, error free reporting, achieve compliance and enhance customer satisfaction with SLIMS"
            : ""
        }
        
        
        `}
      />

      <div
        className={`w-full 
        ${type === "hims" ? "min-h-[4000px]" : ""} 
        ${type === "rispacs" ? "min-h-[1800px]" : ""} 
        ${type === "dms" ? "min-h-[1000px]" : ""} 
        ${type === "bimis" ? "min-h-[500px]" : ""} 
        ${type === "edukares" ? "min-h-[1000px]" : ""} 
        ${type === "slims" ? "min-h-[2400px]" : ""} 
        relative flex justify-center items-center overflow-hidden`}
        style={{
          backgroundImage: `url(${vector_products})`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute min-h-fit lg:w-10/12 md:w-11/12 w-full flex flex-col items-center justify-center mt-[100px] z-30">
          {type === "hims"
            ? hims?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[100%] flex items-center my-[32px] ${
                      d.id === 1 || d.id === 3 || d.id === 5 || d.id === 7
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className="md:w-[1096px] w-full h-fit flex justify-center items-center relative bg-white py-5"
                      style={{
                        "box-shadow": "0px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="md:w-1/2 flex flex-col justify-center items-center">
                        <div className="text-[#2B6997] font-bold lg:text-[36px] md:text-[28px] text-[22px] text-left w-11/12 mb-2">
                          {d.title}
                        </div>
                        {d.lists.map((elem, indx) => {
                          return (
                            <div
                              key={indx}
                              className="w-11/12 flex justify-start items-start mb-1"
                            >
                              <div className="md:mr-3 mr-1 w-[20px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                >
                                  <path
                                    d="M8.6 15.0219L15.65 7.97187L14.25 6.57187L8.6 12.2219L5.75 9.37187L4.35 10.7719L8.6 15.0219ZM10 20.4219C8.61667 20.4219 7.31667 20.1592 6.1 19.6339C4.88333 19.1085 3.825 18.3962 2.925 17.4969C2.025 16.5969 1.31267 15.5385 0.788 14.3219C0.263333 13.1052 0.000666667 11.8052 0 10.4219C0 9.03854 0.262667 7.73854 0.788 6.52187C1.31333 5.30521 2.02567 4.24687 2.925 3.34687C3.825 2.44687 4.88333 1.73454 6.1 1.20987C7.31667 0.685208 8.61667 0.422542 10 0.421875C11.3833 0.421875 12.6833 0.684542 13.9 1.20987C15.1167 1.73521 16.175 2.44754 17.075 3.34687C17.975 4.24687 18.6877 5.30521 19.213 6.52187C19.7383 7.73854 20.0007 9.03854 20 10.4219C20 11.8052 19.7373 13.1052 19.212 14.3219C18.6867 15.5385 17.9743 16.5969 17.075 17.4969C16.175 18.3969 15.1167 19.1095 13.9 19.6349C12.6833 20.1602 11.3833 20.4225 10 20.4219Z"
                                    fill="#67C380"
                                  />
                                </svg>
                              </div>
                              <div className="md:text-[16px] text-[14px]">
                                {elem} fgff
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-1/2 h-full flex justify-center items-center relative">
                        {d.id === 1 ||
                        d.id === 3 ||
                        d.id === 5 ||
                        d.id === 7 ? (
                          <img src={module_image_even} alt="evenImage" />
                        ) : (
                          <img src={module_image_odd} alt="oddImage" />
                        )}
                        <div className="absolute top-0 end-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="220"
                            height="221"
                            viewBox="0 0 220 221"
                            fill="none"
                          >
                            <path
                              d="M89.0458 58.6174L16.402 31.9475C6.54912 28.3302 0 18.9492 0 8.4533C0 -5.36902 11.2052 -16.5742 25.0275 -16.5742H183.788C210.967 -16.5742 233 5.45856 233 32.6374V203.877C233 221.868 208.163 226.637 201.5 209.926L166.361 130.939C151.428 97.3702 123.536 71.2799 89.0458 58.6174Z"
                              fill="#EEF9EF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}

          {type === "rispacs"
            ? rispacs?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[100%] flex items-center my-[32px] ${
                      d.id === 1 || d.id === 3 || d.id === 5 || d.id === 7
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className="md:w-[1096px] w-full h-fit flex justify-center items-center relative bg-white py-5"
                      style={{
                        "box-shadow": "0px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="text-[#2B6997] font-bold lg:text-[36px] md:text-[28px] text-[22px] text-left w-11/12 mb-2">
                          {d.title}
                        </div>
                        {d.lists.map((elem, indx) => {
                          return (
                            <div
                              key={indx}
                              className="w-11/12 flex justify-start items-start mb-1"
                            >
                              <div className="mr-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                >
                                  <path
                                    d="M8.6 15.0219L15.65 7.97187L14.25 6.57187L8.6 12.2219L5.75 9.37187L4.35 10.7719L8.6 15.0219ZM10 20.4219C8.61667 20.4219 7.31667 20.1592 6.1 19.6339C4.88333 19.1085 3.825 18.3962 2.925 17.4969C2.025 16.5969 1.31267 15.5385 0.788 14.3219C0.263333 13.1052 0.000666667 11.8052 0 10.4219C0 9.03854 0.262667 7.73854 0.788 6.52187C1.31333 5.30521 2.02567 4.24687 2.925 3.34687C3.825 2.44687 4.88333 1.73454 6.1 1.20987C7.31667 0.685208 8.61667 0.422542 10 0.421875C11.3833 0.421875 12.6833 0.684542 13.9 1.20987C15.1167 1.73521 16.175 2.44754 17.075 3.34687C17.975 4.24687 18.6877 5.30521 19.213 6.52187C19.7383 7.73854 20.0007 9.03854 20 10.4219C20 11.8052 19.7373 13.1052 19.212 14.3219C18.6867 15.5385 17.9743 16.5969 17.075 17.4969C16.175 18.3969 15.1167 19.1095 13.9 19.6349C12.6833 20.1602 11.3833 20.4225 10 20.4219Z"
                                    fill="#67C380"
                                  />
                                </svg>
                              </div>
                              <div className="md:text-[16px] text-[14px]">
                                {elem}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-1/2 h-full flex justify-center items-center relative">
                        {d.id === 1 ||
                        d.id === 3 ||
                        d.id === 5 ||
                        d.id === 7 ? (
                          <img src={module_image_even} alt="evenImage" />
                        ) : (
                          <img src={module_image_odd} alt="oddImage" />
                        )}
                        <div className="absolute top-0 end-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="220"
                            height="221"
                            viewBox="0 0 220 221"
                            fill="none"
                          >
                            <path
                              d="M89.0458 58.6174L16.402 31.9475C6.54912 28.3302 0 18.9492 0 8.4533C0 -5.36902 11.2052 -16.5742 25.0275 -16.5742H183.788C210.967 -16.5742 233 5.45856 233 32.6374V203.877C233 221.868 208.163 226.637 201.5 209.926L166.361 130.939C151.428 97.3702 123.536 71.2799 89.0458 58.6174Z"
                              fill="#EEF9EF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}

          {type === "dms"
            ? dms?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[100%] flex items-center my-[32px] ${
                      d.id === 1 || d.id === 3 || d.id === 5 || d.id === 7
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className="md:w-[1096px] w-full h-fit flex justify-center items-center relative bg-white py-5"
                      style={{
                        "box-shadow": "0px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="text-[#2B6997] font-bold lg:text-[36px] md:text-[28px] text-[22px] text-left w-11/12 mb-2">
                          {d.title}
                        </div>
                        {d.lists.map((elem, indx) => {
                          return (
                            <div
                              key={indx}
                              className="w-11/12 flex justify-start items-start mb-1"
                            >
                              <div className="mr-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                >
                                  <path
                                    d="M8.6 15.0219L15.65 7.97187L14.25 6.57187L8.6 12.2219L5.75 9.37187L4.35 10.7719L8.6 15.0219ZM10 20.4219C8.61667 20.4219 7.31667 20.1592 6.1 19.6339C4.88333 19.1085 3.825 18.3962 2.925 17.4969C2.025 16.5969 1.31267 15.5385 0.788 14.3219C0.263333 13.1052 0.000666667 11.8052 0 10.4219C0 9.03854 0.262667 7.73854 0.788 6.52187C1.31333 5.30521 2.02567 4.24687 2.925 3.34687C3.825 2.44687 4.88333 1.73454 6.1 1.20987C7.31667 0.685208 8.61667 0.422542 10 0.421875C11.3833 0.421875 12.6833 0.684542 13.9 1.20987C15.1167 1.73521 16.175 2.44754 17.075 3.34687C17.975 4.24687 18.6877 5.30521 19.213 6.52187C19.7383 7.73854 20.0007 9.03854 20 10.4219C20 11.8052 19.7373 13.1052 19.212 14.3219C18.6867 15.5385 17.9743 16.5969 17.075 17.4969C16.175 18.3969 15.1167 19.1095 13.9 19.6349C12.6833 20.1602 11.3833 20.4225 10 20.4219Z"
                                    fill="#67C380"
                                  />
                                </svg>
                              </div>
                              <div className="md:text-[16px] text-[14px]">
                                {elem}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-1/2 h-full flex justify-center items-center relative">
                        {d.id === 1 ||
                        d.id === 3 ||
                        d.id === 5 ||
                        d.id === 7 ? (
                          <img src={module_image_even} alt="evenImage" />
                        ) : (
                          <img src={module_image_odd} alt="oddImage" />
                        )}
                        <div className="absolute top-0 end-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="220"
                            height="221"
                            viewBox="0 0 220 221"
                            fill="none"
                          >
                            <path
                              d="M89.0458 58.6174L16.402 31.9475C6.54912 28.3302 0 18.9492 0 8.4533C0 -5.36902 11.2052 -16.5742 25.0275 -16.5742H183.788C210.967 -16.5742 233 5.45856 233 32.6374V203.877C233 221.868 208.163 226.637 201.5 209.926L166.361 130.939C151.428 97.3702 123.536 71.2799 89.0458 58.6174Z"
                              fill="#EEF9EF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}

          {type === "slims"
            ? slims?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[100%] flex items-center my-[32px] ${
                      d.id === 1 || d.id === 3 || d.id === 5 || d.id === 7
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className="md:w-[1096px] w-full h-fit flex justify-center items-center relative bg-white py-5"
                      style={{
                        "box-shadow": "0px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="text-[#2B6997] font-bold lg:text-[36px] md:text-[28px] text-[22px] text-left w-11/12 mb-2">
                          {d.title}
                        </div>
                        {d.lists.map((elem, indx) => {
                          return (
                            <div
                              key={indx}
                              className="w-11/12 flex justify-start items-start mb-1"
                            >
                              <div className="mr-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                >
                                  <path
                                    d="M8.6 15.0219L15.65 7.97187L14.25 6.57187L8.6 12.2219L5.75 9.37187L4.35 10.7719L8.6 15.0219ZM10 20.4219C8.61667 20.4219 7.31667 20.1592 6.1 19.6339C4.88333 19.1085 3.825 18.3962 2.925 17.4969C2.025 16.5969 1.31267 15.5385 0.788 14.3219C0.263333 13.1052 0.000666667 11.8052 0 10.4219C0 9.03854 0.262667 7.73854 0.788 6.52187C1.31333 5.30521 2.02567 4.24687 2.925 3.34687C3.825 2.44687 4.88333 1.73454 6.1 1.20987C7.31667 0.685208 8.61667 0.422542 10 0.421875C11.3833 0.421875 12.6833 0.684542 13.9 1.20987C15.1167 1.73521 16.175 2.44754 17.075 3.34687C17.975 4.24687 18.6877 5.30521 19.213 6.52187C19.7383 7.73854 20.0007 9.03854 20 10.4219C20 11.8052 19.7373 13.1052 19.212 14.3219C18.6867 15.5385 17.9743 16.5969 17.075 17.4969C16.175 18.3969 15.1167 19.1095 13.9 19.6349C12.6833 20.1602 11.3833 20.4225 10 20.4219Z"
                                    fill="#67C380"
                                  />
                                </svg>
                              </div>
                              <div className="md:text-[16px] text-[14px]">
                                {elem}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-1/2 h-full flex justify-center items-center relative">
                        {d.id === 1 ||
                        d.id === 3 ||
                        d.id === 5 ||
                        d.id === 7 ? (
                          <img src={module_image_even} alt="evenImage" />
                        ) : (
                          <img src={module_image_odd} alt="oddImage" />
                        )}
                        <div className="absolute top-0 end-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="220"
                            height="221"
                            viewBox="0 0 220 221"
                            fill="none"
                          >
                            <path
                              d="M89.0458 58.6174L16.402 31.9475C6.54912 28.3302 0 18.9492 0 8.4533C0 -5.36902 11.2052 -16.5742 25.0275 -16.5742H183.788C210.967 -16.5742 233 5.45856 233 32.6374V203.877C233 221.868 208.163 226.637 201.5 209.926L166.361 130.939C151.428 97.3702 123.536 71.2799 89.0458 58.6174Z"
                              fill="#EEF9EF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}

          {type === "edukares"
            ? edukares?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[100%] flex items-center my-[32px] ${
                      d.id === 1 || d.id === 3 || d.id === 5 || d.id === 7
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className="md:w-[1096px] w-full h-fit flex justify-center items-center relative bg-white py-5"
                      style={{
                        "box-shadow": "0px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="text-[#2B6997] font-bold lg:text-[36px] md:text-[28px] text-[22px] text-left w-11/12 mb-2">
                          {d.title}
                        </div>
                        {d.lists.map((elem, indx) => {
                          return (
                            <div
                              key={indx}
                              className="w-11/12 flex justify-start items-start mb-1"
                            >
                              <div className="mr-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                >
                                  <path
                                    d="M8.6 15.0219L15.65 7.97187L14.25 6.57187L8.6 12.2219L5.75 9.37187L4.35 10.7719L8.6 15.0219ZM10 20.4219C8.61667 20.4219 7.31667 20.1592 6.1 19.6339C4.88333 19.1085 3.825 18.3962 2.925 17.4969C2.025 16.5969 1.31267 15.5385 0.788 14.3219C0.263333 13.1052 0.000666667 11.8052 0 10.4219C0 9.03854 0.262667 7.73854 0.788 6.52187C1.31333 5.30521 2.02567 4.24687 2.925 3.34687C3.825 2.44687 4.88333 1.73454 6.1 1.20987C7.31667 0.685208 8.61667 0.422542 10 0.421875C11.3833 0.421875 12.6833 0.684542 13.9 1.20987C15.1167 1.73521 16.175 2.44754 17.075 3.34687C17.975 4.24687 18.6877 5.30521 19.213 6.52187C19.7383 7.73854 20.0007 9.03854 20 10.4219C20 11.8052 19.7373 13.1052 19.212 14.3219C18.6867 15.5385 17.9743 16.5969 17.075 17.4969C16.175 18.3969 15.1167 19.1095 13.9 19.6349C12.6833 20.1602 11.3833 20.4225 10 20.4219Z"
                                    fill="#67C380"
                                  />
                                </svg>
                              </div>
                              <div className="md:text-[16px] text-[14px]">
                                {elem}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-1/2 h-full flex justify-center items-center relative">
                        {d.id === 1 ||
                        d.id === 3 ||
                        d.id === 5 ||
                        d.id === 7 ? (
                          <img src={module_image_even} alt="evenImage" />
                        ) : (
                          <img src={module_image_odd} alt="oddImage" />
                        )}
                        <div className="absolute top-0 end-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="220"
                            height="221"
                            viewBox="0 0 220 221"
                            fill="none"
                          >
                            <path
                              d="M89.0458 58.6174L16.402 31.9475C6.54912 28.3302 0 18.9492 0 8.4533C0 -5.36902 11.2052 -16.5742 25.0275 -16.5742H183.788C210.967 -16.5742 233 5.45856 233 32.6374V203.877C233 221.868 208.163 226.637 201.5 209.926L166.361 130.939C151.428 97.3702 123.536 71.2799 89.0458 58.6174Z"
                              fill="#EEF9EF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}

          {type === "bimis"
            ? bimis?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[100%] flex items-center my-[32px] ${
                      d.id === 1 || d.id === 3 || d.id === 5 || d.id === 7
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className="md:w-[1096px] w-full h-fit flex justify-center items-center relative bg-white py-5"
                      style={{
                        "box-shadow": "0px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="text-[#2B6997] font-bold lg:text-[36px] md:text-[28px] text-[22px] text-left w-11/12 mb-2">
                          {d.title}
                        </div>
                        {d.lists.map((elem, indx) => {
                          return (
                            <div
                              key={indx}
                              className="w-11/12 flex justify-start items-start mb-1"
                            >
                              <div className="mr-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                >
                                  <path
                                    d="M8.6 15.0219L15.65 7.97187L14.25 6.57187L8.6 12.2219L5.75 9.37187L4.35 10.7719L8.6 15.0219ZM10 20.4219C8.61667 20.4219 7.31667 20.1592 6.1 19.6339C4.88333 19.1085 3.825 18.3962 2.925 17.4969C2.025 16.5969 1.31267 15.5385 0.788 14.3219C0.263333 13.1052 0.000666667 11.8052 0 10.4219C0 9.03854 0.262667 7.73854 0.788 6.52187C1.31333 5.30521 2.02567 4.24687 2.925 3.34687C3.825 2.44687 4.88333 1.73454 6.1 1.20987C7.31667 0.685208 8.61667 0.422542 10 0.421875C11.3833 0.421875 12.6833 0.684542 13.9 1.20987C15.1167 1.73521 16.175 2.44754 17.075 3.34687C17.975 4.24687 18.6877 5.30521 19.213 6.52187C19.7383 7.73854 20.0007 9.03854 20 10.4219C20 11.8052 19.7373 13.1052 19.212 14.3219C18.6867 15.5385 17.9743 16.5969 17.075 17.4969C16.175 18.3969 15.1167 19.1095 13.9 19.6349C12.6833 20.1602 11.3833 20.4225 10 20.4219Z"
                                    fill="#67C380"
                                  />
                                </svg>
                              </div>
                              <div className="md:text-[16px] text-[14px]">
                                {elem}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-1/2 h-full flex justify-center items-center relative">
                        {d.id === 1 ||
                        d.id === 3 ||
                        d.id === 5 ||
                        d.id === 7 ? (
                          <img src={module_image_even} alt="evenImage" />
                        ) : (
                          <img src={module_image_odd} alt="oddImage" />
                        )}
                        <div className="absolute top-0 end-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="220"
                            height="221"
                            viewBox="0 0 220 221"
                            fill="none"
                          >
                            <path
                              d="M89.0458 58.6174L16.402 31.9475C6.54912 28.3302 0 18.9492 0 8.4533C0 -5.36902 11.2052 -16.5742 25.0275 -16.5742H183.788C210.967 -16.5742 233 5.45856 233 32.6374V203.877C233 221.868 208.163 226.637 201.5 209.926L166.361 130.939C151.428 97.3702 123.536 71.2799 89.0458 58.6174Z"
                              fill="#EEF9EF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        {/* vector bg */}
        <div></div>
      </div>
      <KeyModules />

      {type === "hims" ? <div></div> : ""}

      <div className="mt-[120px] w-screen h-[30vh] flex flex-col justify-center items-center bg-[#F9F9F9]">
        <div className="text-center md:text-[20px] text-[16px] text-[#3C4043] mb-[36px]">
          Have a question? We’d love to hear from you.
        </div>
        <Link
          to={"/contactus"}
          className="bg-[#146DFA] text-white h-[44px] w-[117px] flex justify-center items-center rounded-[6px]">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Products;
