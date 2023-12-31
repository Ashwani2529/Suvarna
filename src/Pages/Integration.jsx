import React, { useEffect, useRef, useState, useMemo } from "react";
import { IntegrationAppcard } from "../Components/Integrations/IntegrationAppcard/IntegrationAppcard";
import { Footer } from "../Components/Footer";
import "../styles/integration.css";
import SmallGreenWave from "../Components/SmallGreenWave";

export const Integration = () => {

  const [isSticky, setIsSticky] = useState(false);
  const [category, setCategory] = useState("All");

  const data = [
    {
      id: 1,
      name: "Accounting/ERP/CRM",
    },
    {
      id: 2,
      name: "Picture Archiving and Communications System (PACS)",
    },
    {
      id: 3,
      name: "Lab Analyzers",
    },
    {
      id: 4,
      name: "EDC & POS Machines",
    },
    {
      id: 5,
      name: "Modalities",
    },
    {
      id: 6,
      name: "Payments",
    },
    {
      id: 7,
      name: "Communication",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const secondDiv = document.getElementById("stickToTopRef"); // Replace with your actual ID
      const secondDivOffset = secondDiv.offsetTop;

      if (offset > secondDivOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="max-w-screen flex flex-col justify-center items-start">
        <SmallGreenWave
          heading="Supercharge your business with integrations."
          subheading="Integrate with your favourite third-party apps & medical devices for seamless operations & patient care."
        />

        <div
          className={`w-screen flex flex-col justify-center items-center my-[120px] ${
            isSticky ? "sticky top-0" : ""
          }`}
        >
          <div
            className={`lg:w-10/12 md:w-11/12 w-full relative flex justify-evenly items-start p-4 `}
            id="stickToTopRef"
          >
            <div className="w-full h-full flex md:flex-row flex-col md:justify-evenly justify-center items-start relative overflow-y-scroll overflow-x-hidden removeDefaultScrollStyle">
              {/*  filter by category */}
              <div
                className={`min-w-[312px] h-[483px] flex flex-col justify-center items-center md:sticky top-0`}
              >
                <div className="text-[18px] text-[#6D747A] font-medium text-left w-full justify-start items-center mb-[16px] p-2">
                  FILTER BY CATEGORY
                </div>

                <div className="w-full h-full flex flex-col justify-center items-start list-unstyled">

                <li  className={`w-full  list-style-none`}>
                        <a
                          href={`#` + "Accounting/ERP/CRM"}
                          className={`text-decoration-none w-full h-full flex justify-start items-center p-2   text-[16px] mb-[10px] ${
                            category === "All"
                              ? "bg-[#EBEDF0] rounded-[5px] font-medium text-black"
                              : "font-normal text-[#3C4043]"
                          }`}
                          onClick={() => {
                            setCategory("All");
                          }}
                        >
                          All
                        </a>
                      </li>

                  {data.map((d, index) => {
                    return (
                      <li key={index} className={`w-full  list-style-none`}>
                        <a
                          href={`#` + d.name}
                          className={`text-decoration-none w-full h-full flex justify-start items-center p-2   text-[16px] mb-[10px] ${
                            category === d.name
                              ? "bg-[#EBEDF0] rounded-[5px] font-medium text-black"
                              : "font-normal text-[#3C4043]"
                          }`}
                          onClick={() => {
                            setCategory(d.name);
                          }}
                        >
                          {d.name}
                        </a>
                      </li>
                    );
                  })}
                </div>
              </div>

              {/* cards  */}
              <div className="h-auto flex flex-grow-1 flex-col justify-start items-center py-4">
                <div
                  className="w-11/12 flex flex-col justify-center items-start"
                  id="Accounting/ERP/CRM"
                >
                  <div className="text-[28px] text-[#2B6997] font-medium  ps-16">
                    Accounting/ ERP/ CRM
                  </div>
                  <div className="w-full flex flex-grow flex-wrap justify-center items-start ">
                    <IntegrationAppcard property1="accounting" />
                    <IntegrationAppcard
                      integrationLogoProperty1="SAP"
                      property1="accounting"
                      text="SAP"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="focus"
                      property1="accounting"
                      text="Focus"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="MS-dynamics-AX"
                      property1="accounting"
                      text="Microsoft Dynamics AX"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="tally"
                      property1="accounting"
                      text="Tally"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="MS-dynamics-NAV"
                      property1="accounting"
                      text="Microsoft Dynamics NAV"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="a-ayush"
                      property1="accounting"
                      text="Aayush Hospitals"
                    />
                  </div>
                </div>

                <div
                  className="w-11/12 flex flex-col justify-center items-start"
                  id="Lab Analyzers"
                >
                  <div className="text-[28px] text-[#2B6997] font-medium  ps-16">
                    Lab Analyzers
                  </div>
                  <div className="w-full flex flex-grow flex-wrap justify-center items-start">
                    <IntegrationAppcard
                      integrationLogoProperty1="abott"
                      property1="lab-analyzer"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="accurex"
                      property1="lab-analyzer"
                      text2="Accurex"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="acon"
                      property1="lab-analyzer"
                      text2="Acon"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="adonis"
                      property1="lab-analyzer"
                      text2="Adonis"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="agappe"
                      property1="lab-analyzer"
                      text2="Agappe"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="alere"
                      property1="lab-analyzer"
                      text2="Alere"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="alifax"
                      property1="lab-analyzer"
                      text2="Alifax"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="arkray"
                      property1="lab-analyzer"
                      text2="Arkray"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="veckman"
                      property1="lab-analyzer"
                      text2="Beckman Coulter"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="aspen"
                      property1="lab-analyzer"
                      text2="Aspen Healthcare"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="biomerieux"
                      property1="lab-analyzer"
                      text2="Biomerieux"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="biorad"
                      property1="lab-analyzer"
                      text2="Bio-Rad"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="biosystems"
                      property1="lab-analyzer"
                      text2="BioSystems"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="e-verlife"
                      property1="lab-analyzer"
                      text2="Everlife CPC Diagnostics"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="dia-tek"
                      property1="lab-analyzer"
                      text2="DiaTek"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="diatron"
                      property1="lab-analyzer"
                      text2="Diatron"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="diesse"
                      property1="lab-analyzer"
                      text2="Diesse"
                    />
                  </div>
                </div>

                <div
                  className="w-11/12 flex flex-col justify-center items-start"
                  id="Picture Archiving and Communications System (PACS)"
                >
                  <div className="text-[28px] text-[#2B6997] font-medium  ps-16">
                    Picture Archiving and Communications System (PACS)
                  </div>
                  <div className="w-full flex flex-grow flex-wrap justify-center items-start">
                    <IntegrationAppcard
                      integrationLogoProperty1="radspa"
                      property1="PACS"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="med-synapse"
                      property1="PACS"
                      text1="medSynapse"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="CGE-centricity"
                      property1="PACS"
                      text1="GE Centricity"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="ANIDS"
                      property1="PACS"
                      text1="ANIDS"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="tally"
                      property1="PACS"
                      text1="Tally"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="GEMS"
                      property1="PACS"
                      text1="GEMS Srikakulam"
                    />
                  </div>
                </div>

                <div
                  className="w-11/12 h-[639px] flex flex-col justify-center items-start"
                  id="EDC & POS Machines"
                >
                  <div className="text-[28px] text-[#2B6997] font-medium  ps-16">
                    EDC and POS Machines
                  </div>
                  <div className="w-full flex flex-grow flex-wrap justify-center items-start">
                    <IntegrationAppcard
                      integrationLogoProperty1="pos1"
                      property1="POS"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="pos2"
                      property1="POS"
                      text3="POS2"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="pos3"
                      property1="POS"
                      text3="POS3"
                    />
                  </div>
                </div>

                <div
                  className="w-11/12 h-[639px] flex flex-col justify-center items-start"
                  id="Communication"
                >
                  <div className="text-[28px] text-[#2B6997] font-medium  ps-16">
                    Communication
                  </div>
                  <div className="w-full flex flex-grow flex-wrap justify-center items-start">
                    <IntegrationAppcard
                      integrationLogoProperty1="whats-app"
                      property1="comm"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="SMS"
                      property1="comm"
                      text6="SMS"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="gmail"
                      property1="comm"
                      text6="Gmail"
                    />
                  </div>
                </div>

                <div
                  className="w-11/12 h-[639px] flex flex-col justify-center items-start"
                  id="Payments"
                >
                  <div className="text-[28px] text-[#2B6997] font-medium  ps-16">
                    Payments
                  </div>
                  <div className="w-full flex flex-grow flex-wrap justify-center items-start">
                    <IntegrationAppcard
                      integrationLogoProperty1="UPI"
                      property1="payments"
                      text5="UPI"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="razorpay"
                      property1="payments"
                      text5="Razorpay"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="paytm"
                      property1="payments"
                      text5="Paytm"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="pay-u-money"
                      property1="payments"
                      text5="PayUMoney"
                    />
                  </div>
                </div>

                <div
                  className="w-11/12 h-[639px] flex flex-col justify-center items-start"
                  id="Modalities"
                >
                  <div className="text-[28px] text-[#2B6997] font-medium  ps-16">
                    Modalities
                  </div>
                  <div className="w-full flex flex-grow flex-wrap justify-center items-start">
                    <IntegrationAppcard
                      integrationLogoProperty1="c-tscan"
                      property1="modalities"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="MR-iscan"
                      property1="modalities"
                      text4="MRI Scan"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="petscan"
                      property1="modalities"
                      text4="PET-Scan"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="xray"
                      property1="modalities"
                      text4="X-Ray"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="ultrasound"
                      property1="modalities"
                      text4="Ultrasound"
                    />
                    <IntegrationAppcard
                      integrationLogoProperty1="two-decho"
                      property1="modalities"
                      text4="2D-Echo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};
