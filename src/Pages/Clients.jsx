import React, { useEffect, useState, useMemo, useRef } from "react";
import "../styles/Clients.css";
import { Footer } from "../Components/Footer";
import LeftIcon from "../Components/LeftIcon";
import RightIcon from "../Components/RightIcon";

//  importing images
import omega from "../assets/Omega.png";
import lucid from "../assets/Lucid.png";
import dypatil from "../assets/DYPatil.png";
import lotus from "../assets/Lotus.png";
import kingston from "../assets/Kingston.png";
import anilDental from "../assets/Client_Card.png";

//  import for reviews
import ravi from "../assets/pexels-koolshooters-6976943 1.png";
import lotus_logo from "../assets/image 133.png";
import omega_logo from "../assets/image 128.png";
import hema from "../assets/pexels-cottonbro-studio-4100672 1.png";

import polygon from "../assets/Ellipse 301.png";
import SupportService from "./SupportService";

export const Clients = () => {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(1);
  const [reviewIndex, setReviewIndex] = useState(1);
  const [filterOptions, setFilterOptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const scrollableClientRef = useRef(null);
  const scrollableReviewRef = useRef(null);

  const memoizedClientsData = useMemo(
    () => [
      {
        id: 1,
        name: "Lotus",
        type: "Hospital & Nursing Homes",
        logo: lotus,
      },
      {
        id: 2,
        name: "Lucid",
        type: "Diagnostic Centres & Referral Labs",
        logo: lucid,
      },
      {
        id: 3,
        name: "Kingston Hospitals",
        type: "Hospital & Nursing Homes",
        logo: kingston,
      },
      {
        id: 4,
        name: "Anil Neerukonda Institute of Dental Science",
        type: "Medical College",
        logo: anilDental,
      },
      {
        id: 5,
        name: "D Y Patil University",
        type: "Medical College",
        logo: dypatil,
      },
      {
        id: 6,
        name: "Omega Hospitals",
        type: "Hospital & Nursing Homes",
        logo: omega,
      },
    ],
    []
  );

  const memoizedClientsReview = useMemo(
    () => [
      {
        id: 1,
        client_profile: ravi,
        client_review:
          "We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction. We are happy to have a partner like Suvarna Technosoft for our healthcare software requirements.",
        client_name: "Dr. Ravi G. Kumar",
        logo: lotus_logo,
        organization_name: "Lotus Hospitals",
        location: "Hyderabad, IN",
      },
      {
        id: 2,
        client_profile: hema,
        client_review:
          "We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction. We are happy to have a partner like Suvarna Technosoft for our healthcare software requirements.",
        client_name: "Dr. Hema Kulkarni",
        logo: omega_logo,
        organization_name: "Omega Hospitals",
        location: "Kolkata, IN",
      },
    ],
    []
  );

  useEffect(() => {
    const shuffledArray = [...memoizedClientsData];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    const length = 130;
    for (let i = 0; i < length; i++) {
      const object = shuffledArray[i % shuffledArray.length];
      memoizedClientsData.push(object);
    }

    console.log(memoizedClientsData);

    const options = memoizedClientsData.reduce((unique, item) => {
      if (!unique.includes(item.type)) {
        unique.push(item.type);
      }
      return unique;
    }, []);

    console.log(options);
    setFilterOptions(options);

    if (filter === "all") {
      setFilteredData(memoizedClientsData);
    } else if (filter === "Hospital & Nursing Homes") {
      const filtered = memoizedClientsData?.filter((item) => {
        return item.type === "Hospital & Nursing Homes";
      });
      console.log(filtered);
      setFilteredData(filtered);
      console.log(filtered);
    } else if (filter === "Medical College") {
      const filtered = memoizedClientsData?.filter((item) => {
        return item.type === "Medical College";
      });
      console.log(filtered);
      setFilteredData(filtered);
    } else if (filter === "Diagnostic Centres & Referral Labs") {
      const filtered = memoizedClientsData?.filter((item) => {
        return item.type === "Diagnostic Centres & Referral Labs";
      });
      console.log(filtered);
      setFilteredData(filtered);
    } else if (filter === "Pharmacy Chains") {
      const filtered = memoizedClientsData?.filter((item) => {
        return item.type === "Pharmacy Chains";
      });
      console.log(filtered);
      setFilteredData(filtered);
    }
  }, [filter, memoizedClientsData]);

  useEffect(() => {
    const shuffledArray = [...memoizedClientsReview];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    const length = 6;
    for (let i = 0; i < length; i++) {
      const object = shuffledArray[i % shuffledArray.length];
      memoizedClientsReview.push(object);
    }
  }, [memoizedClientsReview]);

  const scrollTo = (direction, amount, ref) => {
    if (ref.current) {
      const container = ref.current;
      const currentScrollLeft = container.scrollLeft;
      const targetScrollLeft =
        direction === "left"
          ? currentScrollLeft - amount
          : currentScrollLeft + amount;
      const duration = 500; // Animation duration in milliseconds, adjust as needed
      const startTime = performance.now();

      function scrollStep(timestamp) {
        const progress = (timestamp - startTime) / duration;
        if (progress < 1) {
          container.scrollLeft =
            currentScrollLeft +
            (targetScrollLeft - currentScrollLeft) * progress;
          requestAnimationFrame(scrollStep);
        } else {
          container.scrollLeft = targetScrollLeft;
        }
      }
      requestAnimationFrame(scrollStep);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <>
      <div
        className="clients w-screen flex flex-col justify-start items-center relative overflow-hidden mt-14 sm:mt-0"
        id="clients"
      >
        <div className="w-screen h-[755px] flex flex-col items-center justify-end relative mb-[60px]">
          {/*  frame -6 */}
          <div className="lg:w-10/12 md:w-11/12 w-full h-full flex flex-col justify-end items-start relative z-10 md:p-0 p-2 mb-[101px]">
            <div className="lg:text-[48px] md:text-[40px] text-[32px] text-white font-bold lg:w-[90%] ">
              A legacy of collaboration, with 1000+ satisfied clients worldwide.
            </div>
            <div className="w-[85%] flex flex-col justify-center items-start mt-[14px]">
              <p className="lg:text-[20px] md:text-[16px] text-[14px] text-white font-normal md:my-3 my-0.5">
                Our philosophy of attention to detail & quality has given us an
                opportunity to work with the best healthcare providers globally.
                Our clients implicitly trust us and consider us as their trusted
                partner in their digital transformation.
              </p>
              <p className="lg:text-[20px] md:text-[16px] text-[14px] text-white font-normal md:my-3 my-0.5">
                In the 2 decades of our journey, we have worked with 1000+
                healthcare providers of all sizes. Today we are proud to say
                that we are here because of our clients and they are our brand
                ambassadors.
              </p>
              <p className="lg:text-[20px] md:text-[16px] text-[14px] text-white font-normal md:my-3 my-0.5">
                Our clients include nursing homes, small hospitals, multi
                specialty hospitals, corporate hospital chains, medical
                colleges, standalone labs, multi-city diagnostic chains,
                pharmacy outlets etc.
              </p>
            </div>
            <button type="button" className="header-button mt-[24px]">
              See Testimonial
            </button>
          </div>
          {/*  frame-6 ends here */}

          <div className="w-full h-full absolute top-0 ">
            <img
              src={polygon}
              alt="polygon"
              className="w-full h-[800px] flex justify-center items-center"
            />
          </div>
        </div>
        {/*  clients  */}
        <div className="w-screen md:h-[990px] h-auto flex flex-col justify-start items-center relative mt-[30px]">
          <div className="w-10/12 lg:text-[48px] md:text-[40px] text-[32px]  font-bold text-black flex justify-start items-center">
            Our Clientele
          </div>

          <div className="w-10/12 flex justify-start items-center my-9">
            <button
              type="button"
              onClick={() => {
                setFilter("all");
              }}
              className={`font-medium lg:text-[20px] md:text-[16px] text-[14px] mx-2 ${
                filter === "all" ? "border-b-2 border-blue-500" : "border-0"
              }`}
            >
              All
            </button>
            {filterOptions?.map((d, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  onClick={(e) => {
                    setFilter(d);
                  }}
                  className={`font-medium mx-2 lg:text-[20px] md:text-[16px] text-[14px] ${
                    filter === d ? "border-b-2 border-blue-500" : "border-0"
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>

          <div className="lg:w-10/12 md:w-11/12 h-[750px] flex justify-start items-start overflow-hidden relative ">
            <div
              className="sm:w-[4000px] h-full overflow-x-scroll removeScrollDefaultStyling flex flex-col flex-wrap justify-start items-start"
              ref={scrollableClientRef}
            >
              {filteredData?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className="sm:w-[200px] my-3 lg:mx-[30px] md:mx-[8px] mx-[4px]"
                  >
                    <img src={d.logo} alt="logo" className="w-full " />
                  </div>
                );
              })}
            </div>
            <div className="w-full flex justify-between items-center lg:py-4 md:py-8 py-[60px] z-10 absolute top-[40%] sm:top-[50%]">
              <button
                type="button"
                onClick={(e) => {
                  scrollTo(
                    "left",
                    window.innerWidth - 200,
                    scrollableClientRef
                  );
                }}
              >
                <LeftIcon />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  scrollTo(
                    "right",
                    window.innerWidth - 200,
                    scrollableClientRef
                  );
                }}
              >
                <RightIcon />
              </button>
            </div>
          </div>
          {/* <div className="text-[#6D747A] font-medium sub-header-4 md:block hidden">
            {index}/4
          </div> */}
        </div>
        {/*  reviews */}
        <div
          className="w-screen h-screen flex justify-center items-center bg-white relative mt-5 sm:mt-0"
          id="testimonial"
        >
          <div className="lg:w-10/12 md:w-11/12 w-full md:h-full min-h-full flex md:flex-row flex-col justify-start items-center relative bg-white">
            <div className="md:w-1/3 w-full md:h-5/6  text-black flex justify-start items-start">
              <div className="md:w-3/4 w-full px-2 lg:text-[48px] md:text-[40px] text-[32px] font-medium">
                Here’s what clients have to say
              </div>
            </div>

            <div className="md:w-2/3 w-full h-5/6 flex flex-col justify-end items-end ">
              <div className="w-full flex flex-grow-1 flex-row justify-end items-center">
                <div
                  className="md:w-[860px] w-[500px] h-[700px] flex md:justify-start md:items-start justify-start items-start overflow-x-scroll overflow-y-hidden scroll-smooth removeScrollDefaultStyling md:px-0 px-2"
                  id="testimonials"
                  ref={scrollableReviewRef}
                >
                  <div className="w-[3408px] h-[700px] flex justify-start items-start scroll-smooth removeScrollDefaultStyling">
                    {memoizedClientsReview?.map((d, index) => {
                      return (
                        <div
                          key={index}
                          className="h-[611px] rounded-xl m-2 min-w-[426px] overflow-hidden relative "
                        >
                          <div className="h-[50%] w-full flex justify-center items-center relative overflow-hidden bg-[#F1F6F9] ">
                            <img
                              src={d.client_profile}
                              alt="profile"
                              className="h-full w-auto relative"
                            />
                            <img
                              src={d.logo}
                              alt="logo"
                              className="absolute bottom-0 end-0 z-10 m-4"
                            />
                          </div>
                          <div className="h-[50%] w-full flex flex-col justify-center items-start pt-[26px] px-1">
                            <div className="w-full flex justify-start items-start relative">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="w-[24px] h-[24px]"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_2637_22361)">
                                  <path
                                    d="M6.64424 3.29933C7.3053 2.80354 8.24311 2.9375 8.7389 3.59855C9.23473 4.25961 9.10067 5.19742 8.43968 5.69323C6.09969 7.44824 4.75764 9.15457 3.99167 10.6451C4.40915 10.5379 4.84675 10.4809 5.29766 10.4809C8.18979 10.4809 10.5343 12.8255 10.5343 15.7176C10.5343 18.6097 8.18979 20.9542 5.29766 20.9542C2.43448 20.9542 0.107983 18.6564 0.0617064 15.8042C-0.0732497 14.51 -0.0535452 12.6009 0.821126 10.3967C1.71501 8.14416 3.46097 5.68681 6.64424 3.29933ZM20.1099 3.29933C20.7709 2.80354 21.7087 2.9375 22.2046 3.59855C22.7004 4.25961 22.5664 5.19742 21.9053 5.69323C19.5653 7.44824 18.2234 9.15457 17.4573 10.6451C17.8748 10.5379 18.3124 10.4809 18.7633 10.4809C21.6555 10.4809 24 12.8255 24 15.7176C24 18.6097 21.6555 20.9542 18.7633 20.9542C15.9001 20.9542 13.5737 18.6564 13.5274 15.8042C13.3925 14.51 13.4121 12.6009 14.2868 10.3967C15.1807 8.14416 16.9266 5.68681 20.1099 3.29933Z"
                                    fill="#6D747A"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2637_22361">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="text-[#3C4043] h-1/2 lg:text-[16px] md:text-[16px] text-[14px] mb-4 mt-3">
                              {d.client_review}
                            </div>
                            <div className="client-name">{d.client_name}</div>
                            <div className="client-org-location">
                              {d.organization_name} {d.location}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:w-[862px] w-full flex justify-between items-center mx-2 md:px-0 px-2">
                <button
                  type="button"
                  onClick={(e) => {
                    scrollTo("left", 850, scrollableReviewRef);
                  }}
                >
                  <LeftIcon />
                </button>
                <div
                  className="sub-header-4  md:block hidden"
                  id="pageIndicator"
                >
                  {reviewIndex}/4
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    scrollTo("right", 850, scrollableReviewRef);
                  }}
                >
                  <RightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* support  */}
        <div id="support">
          <SupportService />
        </div>
      </div>
    </>
  );
};
