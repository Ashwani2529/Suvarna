import React, { useEffect, useState, useMemo, useRef } from "react";
import "../styles/Clients.css";
import { Footer } from "../Components/Homepage/Footer/Footer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

    const length = 90;
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

  return (
    <div className="clients flex flex-col justify-start items-center relative">
      <div className="w-screen h-screen flex items-center justify-center relative">
        {/*  frame -6 */}
        <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col justify-start items-start relative z-10 ">
          <div className="compliance-header lg:w-4/6 w-screen">
            A legacy of collaboration, with 1000+ satisfied clients worldwide.
          </div>
          <div className="frame-7">
            <p className="compliance-header-2">
              Our philosophy of attention to detail & quality has given us an
              opportunity to work with the best healthcare providers globally.
              Our clients implicitly trust us and consider us as their trusted
              partner in their digital transformation.
            </p>
            <p className="compliance-header-2">
              In the 2 decades of our journey, we have worked with 1000+
              healthcare providers of all sizes. Today we are proud to say that
              we are here because of our clients and they are our brand
              ambassadors.
            </p>
            <p className="compliance-header-2">
              Our clients include nursing homes, small hospitals, multi
              specialty hospitals, corporate hospital chains, medical colleges,
              standalone labs, multi-city diagnostic chains, pharmacy outlets
              etc.
            </p>
          </div>
          <button type="button" className="header-button">
            See Testimonial
          </button>
        </div>
        {/*  frame-6 ends here */}

        <div className="header-polygon absolute top-0">
          <img
            src="../../assets/Ellipse 301.png"
            alt="polygon"
            className="w-screen lg:h-auto md:min-h-screen min-h-screen flex justify-center items-center"
          />
        </div>
      </div>

      {/*  clients  */}
      <div className="w-screen h-screen flex flex-col justify-start items-center relative mt-64">
        <div className="w-10/12 compliance-header text-black flex justify-start items-center">
          Our Clientele
        </div>

        <div className="w-10/12 flex justify-start items-center my-9">
          <button
            type="button"
            onClick={() => {
              setFilter("all");
            }}
            className={`sub-header-2 mx-2 ${
              filter === "all" ? "border-b-4 border-blue-500" : "border-0"
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
                className={`sub-header-2 mx-2 ${
                  filter === d ? "border-b-4 border-blue-500" : "border-0"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>

        <div
          className="lg:w-10/12 md:w-11/12 w-full h-[850px] flex flex-wrap justify-start items-start overflow-x-scroll removeScrollDefaultStyling"
          ref={scrollableClientRef}
        >
          <div className="min-w-[4000px] h-full overflow-x-hidden overflow-y-hidden flex flex-wrap ">
            {filteredData?.map((d, index) => {
              return (
                <div key={index} className="w-[200px] my-3 mx-[30px]">
                  <img src={d.logo} alt="logo" className="w-full " />
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[324px] flex justify-between items-center">
          <button
            type="button"
            className={`h-12 w-12 ${
              index === 1
                ? "bg-[#EBEDF0] text-[#001E41]"
                : "bg-[#001E41] text-[#EBEDF0]"
            } rounded-full`}
            onClick={(e) => {
              if (index > 1 && scrollableClientRef.current) {
                setIndex(index - 1);
                scrollTo(
                  "left",
                   (window.innerWidth / 4),
                  scrollableClientRef
                );
              }
            }}
          >
            <FaArrowLeft />
          </button>
          <div className="text-[#6D747A] font-medium sub-header-4">
            {index}/4
          </div>

          <button
            type="button"
            className={`h-12 w-12 rounded-full ${
              index === 4
                ? "bg-[#EBEDF0] text-[#001E41]"
                : "bg-[#001E41] text-[#EBEDF0]"
            } `}
            onClick={(e) => {
              if (index < 4 && scrollableClientRef.current) setIndex(index + 1);
              scrollTo(
                "right",
                (window.innerWidth / 4),
                scrollableClientRef
              );
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/*  reviews */}

      <div className="w-screen h-screen flex justify-center items-center bg-white mt-64">
        <div className="w-10/12 h-full flex flex-row justify-start items-center relative bg-white">
          <div className="w-1/3 h-5/6 compliance-header text-black flex justify-start items-start ">
            <div className="w-3/4">Here’s what clients have to say</div>
          </div>

          <div className="w-2/3 h-5/6 flex flex-col justify-end items-end ">
            <div className="w-full flex flex-grow-1 flex-row justify-end items-center">
              <div
                className="w-[852px] h-full flex justify-center items-center overflow-x-scroll overflow-y-hidden scroll-smooth removeScrollDefaultStyling"
                ref={scrollableReviewRef}
              >
                <div className="w-[3408px] h-full flex justify-start items-start scroll-smooth removeScrollDefaultStyling">
                  {memoizedClientsReview?.map((d, index) => {
                    return (
                      <div className="h-full bg-white rounded-xl m-2 review-card overflow-hidden">
                        <div className="h-1/2 w-full flex justify-center items-center relative overflow-hidden bg-[#F1F6F9] ">
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
                        <div className="h-1/2 w-full flex flex-col justify-center items-start">
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
                          <div className="client-review mb-4 mt-3">{d.client_review}</div>
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

            <div className="lg:w-3/4 w-full h-16 flex justify-between items-center mx-2">
              <button
                type="button"
                className={`h-12 w-12 ${
                  reviewIndex === 1
                    ? "bg-[#EBEDF0] text-[#001E41]"
                    : "bg-[#001E41] text-[#EBEDF0]"
                } rounded-full`}
                onClick={(e) => {
                  if (reviewIndex > 1 && scrollableReviewRef.current) {
                    setReviewIndex(reviewIndex - 1);
                    scrollTo("left", 852, scrollableReviewRef);
                  }
                }}
              >
                <FaArrowLeft />
              </button>
              <div className="sub-header-4">{reviewIndex}/4</div>
              <button
                type="button"
                className={`h-12 w-12 rounded-full ${
                  reviewIndex === 4
                    ? "bg-[#EBEDF0] text-[#001E41]"
                    : "bg-[#001E41] text-[#EBEDF0]"
                } `}
                onClick={(e) => {
                  if (reviewIndex < 4 && scrollableReviewRef.current) {
                    setReviewIndex(reviewIndex + 1);
                    scrollTo("right", 852, scrollableReviewRef);
                  }
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-screen bottom-0">
        <Footer />
      </div>
    </div>
  );
};
