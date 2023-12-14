import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import "../styles/Carrers.css";

//  imported icons
import moneyBag from "../assets/money-bag-svgrepo-com 1 (1).png";
import stock from "../assets/exponentially-rising-graph-svgrepo-com 1.png";
import frame from "../assets/Frame 482716.png";

import intro_vector from "../assets/Business merger-amico 1.png";
import job_hunt from "../assets/Job hunt-amico 1.png";

import money_bag from "../assets/money-bag-svgrepo-com 1 (2).png";
import location from "../assets/location-pin-svgrepo-com 1.png";
import timer from "../assets/Group.png";

export const Carrers = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [id, setId] = useState(0);

  const data = [
    {
      id: 1,
      role: "IT Support Engineer",
      time: "Full time",
      location: "Hyderabad",
      package: "1.0-1.3Lpa",
      additionalData: [
        {
          title: "Qualification",
          content: "Any graduate with good knowledge of computers",
        },
        {
          title: "Salary Range",
          content: "(Salary INR 1.0 - 1.3 L per Annum)",
        },
        {
          title: "Skills",
          content:
            "Should be proficient in soft skills, preferable knowledge of software life-cycle and networking.",
        },
        {
          title: "Description",
          content:
            "After successful completion of training, candidates will be placed as Support Engineer IT, at our client locations. IT Support Engineer is responsible for taking care of all the Network equipment and server maintenance. Need to ensure uninterrupted execution of Client’s Business, in terms of Network and Application availability.",
        },
      ],
    },
    {
      id: 2,
      role: "Data Engineer",
      time: "Full Time",
      location: "Hyderabad",
      package: "1.0-1.3Lpa",
      additionalData: [
        {
          title: "Qualification",
          content: "Any graduate with good knowledge of computers",
        },
        {
          title: "Salary Range",
          content: "(Salary INR 1.0 - 1.3 L per Annum)",
        },
        {
          title: "Skills",
          content:
            "Should be proficient in soft skills, preferable knowledge of software life-cycle and networking.",
        },
        {
          title: "Description",
          content:
            "After successful completion of training, candidates will be placed as Support Engineer IT, at our client locations. IT Support Engineer is responsible for taking care of all the Network equipment and server maintenance. Need to ensure uninterrupted execution of Client’s Business, in terms of Network and Application availability.",
        },
      ],
    },
    {
      id: 3,
      role: "HR - Talent Acquisition Lead",
      time: "Full Time",
      location: "Hyderabad",
      package: "1.0-1.3Lpa",
      additionalData: [
        {
          title: "Qualification",
          content: "Any graduate with good knowledge of computers",
        },
        {
          title: "Salary Range",
          content: "(Salary INR 1.0 - 1.3 L per Annum)",
        },
        {
          title: "Skills",
          content:
            "Should be proficient in soft skills, preferable knowledge of software life-cycle and networking.",
        },
        {
          title: "Description",
          content:
            "After successful completion of training, candidates will be placed as Support Engineer IT, at our client locations. IT Support Engineer is responsible for taking care of all the Network equipment and server maintenance. Need to ensure uninterrupted execution of Client’s Business, in terms of Network and Application availability.",
        },
      ],
    },
    {
      id: 4,
      role: "Business Analyst",
      time: "Full Time",
      location: "Hyderabad",
      package: "1.0-1.3Lpa",
      additionalData: [
        {
          title: "Qualification",
          content: "Any graduate with good knowledge of computers",
        },
        {
          title: "Salary Range",
          content: "(Salary INR 1.0 - 1.3 L per Annum)",
        },
        {
          title: "Skills",
          content:
            "Should be proficient in soft skills, preferable knowledge of software life-cycle and networking.",
        },
        {
          title: "Description",
          content:
            "After successful completion of training, candidates will be placed as Support Engineer IT, at our client locations. IT Support Engineer is responsible for taking care of all the Network equipment and server maintenance. Need to ensure uninterrupted execution of Client’s Business, in terms of Network and Application availability.",
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <div className="Carrers flex flex-col justify-start items-center relative">
      {/*  header */}
      <div className="w-full h-[800px] flex items-center justify-center relative ">
        {/*  frame -6 */}
        <div className="md:w-10/12 w-11/12 flex flex-col justify-center items-start relative z-10 text-white ">
          <div className="lg:text-[48px] md:text-[40px] text-[32px] font-bold  lg:w-4/6 w-screen">
            Work with us. Build the future of healthcare.
            <div className="lg:text-[32px] md:text-[28px] text-[24px] font-medium">
              We’re hiring. Come pursue an exciting & fulfilling career with us.
            </div>
          </div>
          <div className="lg:w-2/3 md:w-2/3 w-full text-left">
            <p className="lg:text-[20px] md:text-[16px] text-[14px] my-3">
              We are a team of 250+ committed employees who share our passion
              for digital transformation at all healthcare touch points. We
              believe our employees are our most valuable asset and we provide
              opportunities to build a rewarding career.
            </p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] my-3">
              We are constantly looking for the right people to help us deliver
              cutting edge products and solutions, that can change the way
              healthcare is delivered.
            </p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] my-3">
              If you are up for the challenge of being a part of the team that
              will develop next generation of products, scroll down to view our
              current openings.
            </p>
          </div>
          <button type="button" className="header-button">
            View Openings
          </button>
        </div>
        {/*  frame-6 ends here */}

        <div className="header-polygon w-full h-full absolute top-0">
          <img
            src="../../assets/Ellipse 301.png"
            alt="polygon"
            className="w-full h-[800px] flex justify-center items-center"
          />
        </div>
      </div>

      {/* body */}
      <div className="w-full bg-white flex flex-col justify-start items-center ">
        {/*  intro */}
        <div className="lg:w-10/12 md:w-11/12 w-full flex justify-center items-center my-[120px]">
          <div className="w-1/2 flex justify-center items-center">
            <img src={intro_vector} alt="intro_vector" />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start">
            <div className="lg:text-[32px] md:text-[28px] text-[24px] font-medium">
              Why join Suvarna?
            </div>
            <div className="lg:text-[20px] md:text-[16px] text-[14px] font-normal mb-4">
              We’re consistently looking for the right people to join our team.
              If you join us, here’s what you can expect, and more...
            </div>

            {/*  list 1 */}
            <div className="h-24 flex justify-start items-center mb-1">
              <div className="h-full flex justify-start items-start me-2 py-2">
                <img src={moneyBag} alt="list-icon" />
              </div>
              <div className="h-full flex flex-grow-1 flex-col justify-start items-start">
                <div className="intro-list-header  w-full flex justify-start items-center">
                  Benefits
                </div>
                <div className="lg:text-[20px] md:text-[16px] text-[14px] font-normal">
                  Competitive salaries, Financial rewards for high performance,
                  Health insurance, Life Insurance
                </div>
              </div>
            </div>

            {/* list 2 */}
            <div className="h-24 flex justify-start items-center mb-1">
              <div className="h-full flex justify-start items-start me-2 py-2">
                <img src={stock} alt="list-icon" />
              </div>
              <div className="h-full flex flex-grow-1 flex-col justify-start items-center">
                <div className="intro-list-header  w-full flex justify-start items-center">
                  Career
                </div>
                <div className="lg:text-[20px] md:text-[16px] text-[14px] font-normal">
                  Training, work with advanced technologies, innovation
                  opportunities
                </div>
              </div>
            </div>

            {/*  list 3 */}
            <div className="h-24 flex justify-start items-center mb-1">
              <div className="h-full flex justify-start items-start me-2 py-2">
                <img src={frame} alt="list-icon" />
              </div>
              <div className="h-full flex flex-grow-1 flex-col justify-start items-center">
                <div className="intro-list-header  w-full flex justify-start items-center">
                  Balance
                </div>
                <div className="lg:text-[20px] md:text-[16px] text-[14px] font-normal">
                  We understand what’s important to you and provide flexibility
                  that works with your life.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  opening */}
        <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col justify-center items-start mb-[120px]">
          <div className="font-medium lg:text-[48px] md:text-[40px] text-[32px]">
            Our current openings
          </div>
          <div className="w-full flex flex-grow-1 justify-center items-center ">
            <div className="opening_lists flex-grow-1 h-full flex flex-col justify-start items-start">
              {data.map((d, index) => {
                return (
                  <div
                    key={index}
                    className={`lg:max-w-[872px] w-full my-3 px-2 py-2 bg-gray-100 flex lg:flex-row flex-col justify-between items-center rounded-[6px] ${
                      isExpanded && id === d.id ? "h-[462px]" : "h-auto"
                    }`}
                  >
                    <div className="md:w-3/4 w-full h-full flex flex-col justify-start items-start px-2">
                      <div className="opening_list_header my-3">{d.role}</div>
                      <div className="w-full flex justify-start items-center">
                        {/*  details */}
                        <div className="me-[24px] flex justify-center items-center ">
                          <img
                            src={money_bag}
                            alt="details_icon"
                            className="mx-1"
                          />
                          <div className="md:text-[16px] text-[14px] font-normal text-[#3C4043]">
                            {d.time}
                          </div>
                        </div>
                        {/*  details */}
                        <div className="me-[24px] flex justify-center items-center ">
                          <img
                            src={location}
                            alt="details_icon"
                            className="mx-1"
                          />
                          <div className="md:text-[16px] text-[14px] font-normal text-[#3C4043]">
                            {d.location}
                          </div>
                        </div>
                        {/*  details */}
                        <div className="me-[24px] flex justify-center items-center ">
                          <img
                            src={timer}
                            alt="details_icon"
                            className="mx-1"
                          />
                          <div className="md:text-[16px] text-[14px] font-normal text-[#3C4043]">
                            INR {d.package}
                          </div>
                        </div>
                      </div>

                      {isExpanded && id === d.id ? (
                        <div
                          className="
                  w-full flex-grow-1 justify-center items-center p-[16px]  "
                        >
                          {d?.additionalData?.map((elem, i) => {
                            return (
                              <div
                                key={i}
                                className="flex flex-grow-1 flex-col justify-center items-start  "
                              >
                                <div className="font-medium text-[16px] text-[#000]">
                                  {elem.title}
                                </div>
                                <div className="text-[#6D747A] text-[16px] font-normal">
                                  {elem.content}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className={`flex-grow-1 ${isExpanded && d.id === id ? "h-full" : "h-[120px]"} flex lg:justify-center justify-start lg:items-end p-2  `}>
                      <Link
                        to={`/carrers/1`}
                        className="bg-[#146DFA] text-white w-[118px] h-[48px] mx-1 text-[16px] rounded-[6px] flex justify-center items-center"
                      >
                        Apply
                      </Link>
                      <button
                        type="button"
                        className="w-[118px] h-[48px] bg-white text-[#146DFA] rounded-[6px] text-[16px] border-[#146DFA]"
                        onClick={() => {
                          console.log(id , "locale-id" ,d.id);
                          setId(d.id);
                          setIsExpanded(!isExpanded);
                        }}
                      >
                        {isExpanded ? "Less Info" : "More Info"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`lg:min-w-[500px] h-full flex-grow-1 lg:flex hidden ${isExpanded ? "justify-start items-start" : "justify-center items-center"} `}>
              <img src={job_hunt} className="w-[400px] h-[400px]" alt="job_hunt" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
