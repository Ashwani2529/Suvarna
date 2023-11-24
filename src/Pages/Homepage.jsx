import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

//  import
import { ClientLogos } from "../Components/Homepage/ClientLogos/ClientLogos";
import { ClientLogos1 } from "../Components/Homepage/ClientLogos/ClientLogos1";
import { ContactUsSection } from "../Components/ContactUsSection";
import { Metric } from "../Components/Homepage/Metric/Metric";
import { Partners } from "../Components/Homepage/Partners/Partners";
import { SliderV } from "../Components/Homepage/SliderV/SliderV";
import { TestimonialSingle } from "../Components/Homepage/TestimonialSingle/TestimonialSingle";
import { Component215 } from "../Components/Homepage/icons/Component215/Component215";
import { Component217 } from "../Components/Homepage/icons/Component217/Component217";
import { Component25 } from "../Components/Homepage/icons/Component25/Component25";
import { Component27 } from "../Components/Homepage/icons/Component27/Component27";
import { Line51 } from "../Components/Homepage/icons/Line51/Line51";
import { Line52 } from "../Components/Homepage/icons/Line52/Line52";

// icons
import { Property1LeftDisabled } from "../Components/Homepage/icons/Property1LeftDisabled/Property1LeftDisabled";
import { Property1Right } from "../Components/Homepage/icons/Property1Right/Property1Right";

//  stylesimports
import "../styles/homestyle.css";

//  import compoenets
import { Footer } from "../Components/Homepage/Footer/Footer";
import SmallBlueWave from "../Components/SmallBlueWave";

// /  import images
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

//  blog
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

import DMS from "../assets/Product Card Logos (2).png";
import Edukares from "../assets/Product Card Logos (3).png";
import BIMS from "../assets/Product Card Logos.png";
import SLIMS from "../assets/Product Card Logos (4).png";
import HIMS from "../assets/HIMS.png";
import RIS from "../assets/RIS.png";
import EMR from "../assets/EMR.png"

export const Homepage = () => {
  const scrollableProducts = useRef(null);
  const scrollableBlogs = useRef(null);

  //  states
  const [white, setWhite] = useState("#EBEDF0");
  const [black, setBlack] = useState("#001E41");
  const [left, setLeft] = useState(0);
  const [isMouseOverLogistic, setIsMouseOverLogistic] = useState(false);
  const [id, setId] = useState(0);
  //  onclick functions
  const handleRight = () => {
    setLeft(1);
    setWhite("#001E41");
    setBlack("#EBEDF0");
  };
  const handleLeft = () => {
    setLeft(0);
    setWhite("#EBEDF0");
    setBlack("#001E41");
  };

  const products = [
    {
      id: 1,
      name: "DMS",
      description: "Document Management System",
      image: product1,
      icon: DMS,
      route : "/dms"
    },
    {
      id: 2,
      name: "Edukares",
      description: "Digital Campus Management System",
      image: product2,
      icon: Edukares,
      route : "/edukares"
    },
    {
      id: 3,
      name: "BI & MS",
      description: "Business Intelligence & MIS",
      image: product3,
      icon: BIMS,
      route : "/bimis"
    },
    {
      id: 4,
      name: "SLIMS",
      description: "Suvarna Laboratory Information Management System",
      image: product4,
      icon: SLIMS,
      route : "/slims"
    },
    {
      id: 5,
      name: "HIMS",
      description: "Hospital Information Management System",
      image: product3,
      icon: HIMS,
      route : "/hims"
    },
    {
      id: 6,
      name: "RIS-PACS",
      description: "Radio Inoformation System",
      image: product2,
      icon: RIS,
      route : "/ris"
    },
    {
      id: 7,
      name: "EMR",
      description: "Electronic Management Record",
      image: product4,
      icon: EMR,
      route : "/emr"
    },
  ];

  const blogs = [
    {
      id: 1,
      title:
        "Revolutionising Healthcare: The Power of Custom Software Solutions",
      image: blog1,
      date: "Aug 30",
      type: "News & Trends",
    },

    {
      id: 2,
      title:
        "Interoperability in Healthcare: Bridging the Gap with Innovative Software",
      image: blog2,
      date: "Aug 30",
      type: "Technology",
    },
    {
      id: 3,
      title:
        "Enhancing Patient Engagement: How Suvarna's Solutions Empower Healthcare Providers",
      image: blog3,
      date: "Aug 30",
      type: "Research",
    },
    {
      id: 4,
      title:
        "Navigating Regulatory Compliance: A Guide to Healthcare Software Solutions",
      image: blog4,
      date: "Aug 30",
      type: "Legal & Regulatory",
    },
    {
      id: 5,
      title:
        "Revolutionising Healthcare: The Power of Custom Software Solutions",
      image: blog1,
      date: "Aug 30",
      type: "News & Trends",
    },

    {
      id: 6,
      title:
        "Interoperability in Healthcare: Bridging the Gap with Innovative Software",
      image: blog2,
      date: "Aug 30",
      type: "Technology",
    },
    {
      id: 7,
      title:
        "Enhancing Patient Engagement: How Suvarna's Solutions Empower Healthcare Providers",
      image: blog3,
      date: "Aug 30",
      type: "Research",
    },
    {
      id: 8,
      title:
        "Navigating Regulatory Compliance: A Guide to Healthcare Software Solutions",
      image: blog4,
      date: "Aug 30",
      type: "Legal & Regulatory",
    },
  ];

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
    <div className="index">
      <div className="relative w-screen h-screen bg-gray-100 flex justify-center items-center">
        <SliderV
          className="slider-v2"
          frameIcon={<Component215 className="icon-instance-node" />}
          frameIcon1={<Component27 className="icon-instance-node" />}
          frameIcon2={<Component217 className="icon-instance-node" />}
          largeButtonDivClassName="slider-4"
          largeButtonPropertyOutlineClassName="slider-5"
          override={<Component25 className="icon-instance-node" />}
          property1="green"
          sliderNewVector84Color="url(#paint0_linear_2082_1182)"
          sliderNewVectorPropertyDefaultClassName="slider-v-instance"
          sliderNewVectorPropertyDefaultClassNameOverride="slider-v2-instance"
        />
      </div>

      {/*  product cards */}
      <div className="w-screen relative flex justify-center items-center my-[60px] py-[84px] bg-[#F9F9F9]">
        <div className="h-[583px] w-full flex flex-col justify-center items-center md:p-0 p-2">
          <div className="lg:w-10/12 md:w-11/12 w-full flex justify-between items-center py-2">
            <div className="flex flex-1 flex-col flex-grow-1">
              <div className="md:text-[36px] text-[30px] text-[#08090A] font-bold">
                Products
              </div>
              <p className="md:text-[24px] text-[20px] font-normal text-[#6D747A]">
                Explore our wide range of healthcare solutions
              </p>
            </div>
            <div
              className="w-[120px] h-full flex justify-center items-start product-slider"
              style={{ display: "flex" }}
            >
              <div
                onClick={() => {
                  handleLeft();
                  scrollTo("left", window.innerWidth / 4, scrollableProducts);
                }}
              >
                {" "}
                <Property1LeftDisabled
                  className="slider-3"
                  color={white}
                  stroke={black}
                />
              </div>

              <div
                onClick={() => {
                  handleRight();
                  scrollTo("right", window.innerWidth / 4, scrollableProducts);
                }}
              >
                <Property1Right
                  className="slider-3"
                  color={black}
                  stroke={white}
                />
              </div>
            </div>
          </div>

          {/*  product-card */}
          <div
            className="lg:w-10/12 md:w-11/12 w-full flex justify-start items-center overflow-hidden mt-6 md:p-0 p-2"
            ref={scrollableProducts}
          >
            <div className="w-[4000px] flex justify-center items-center">
              {products?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white flex flex-col justify-center items-center h-[420px] w-[312px] product-card overflow-hidden me-[24px] select-none"
                  >
                    <div className="h-1/2">
                      <img src={d.image} alt={d.name} />
                    </div>
                    <div className="h-1/2 w-full p-2 flex flex-col justify-center items-start">
                      <div className="flex justify-start items-center">
                        <img src={d.icon} className="mx-1" alt="icon" />
                        <div className="product-card-header">{d.name}</div>
                      </div>

                      <div className="product-card-regular-text mt-2 mb-4 px-2">
                        {d.description}
                      </div>

                      <Link
                        to={"/products" + d.route }
                        className="product-card-button flex items-center justify-center px-2"
                      >
                        <div className="flex">know more</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="mx-1 w-[20px] h-[20px]"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3.3335 8H12.6668"
                            stroke="#146DFA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 3.33331L12.6667 7.99998L8 12.6666"
                            stroke="#146DFA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/*  logistic cards */}
      <div className="w-screen h-screen relative flex flex-col justify-evenly items-center my-[60px]">
        <div className="frame-37 md:p-0 p-2">
          <div className="md:text-[36px] text-[30px] text-[#08090A] font-bold">
            23+ years of excellence
          </div>
          <p className="w-screen text-center md:text-[24px] text-[20px] font-normal text-[#6D747A]">
            in delivering innovative solutions to 1000+ healthcare providers
          </p>
        </div>
        <div className="lg:w-10/12 md:w-11/12 w-full flex items-center justify-center select-none">
          <div className="w-[968px] md:h-[576px] flex md:flex-row flex-col md:flex-wrap justify-evenly items-center">
            {/*  1st card */}
            <div
              className="w-[352px] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2"
              onMouseOver={() => {
                setIsMouseOverLogistic(true);
                setId(1);
              }}
              onMouseLeave={() => {
                setIsMouseOverLogistic(false);
                setId(0);
              }}
            >
              <div className="w-full flex flex-col justify-center items-start mb-[36px]">
                <div
                  className={`font-medium text-[64px] ${
                    id === 1 && isMouseOverLogistic === true
                      ? "text-[#146DFA]"
                      : "text-[#001E41]"
                  }  `}
                >
                  15000+
                </div>
                <div className="text-[20px] font-normal text-[#6D747A]">
                  Physicians
                </div>
              </div>
              <svg
                width="352"
                height="6"
                viewBox="0 0 352 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="352" height="5" fill="#67C380" />
              </svg>
            </div>

            {/*  2nd card */}
            <div
              className="w-[352px] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2"
              onMouseOver={() => {
                setIsMouseOverLogistic(true);
                setId(2);
              }}
              onMouseLeave={() => {
                setIsMouseOverLogistic(false);
                setId(0);
              }}
            >
              <div className="w-full flex flex-col justify-center items-start mb-[36px]">
                <div
                  className={`font-medium text-[64px] ${
                    id === 2 && isMouseOverLogistic === true
                      ? "text-[#146DFA]"
                      : "text-[#001E41]"
                  }  `}
                >
                  36000+
                </div>
                <div className="text-[20px] font-normal text-[#6D747A]">
                  Healthcare Professionals
                </div>
              </div>

              <svg
                width="352"
                height="6"
                viewBox="0 0 352 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="352" height="5" fill="#FF7878" />
              </svg>
            </div>

            {/*  3rd card */}

            <div
              className="w-[352px] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2 "
              onMouseOver={() => {
                setIsMouseOverLogistic(true);
                setId(3);
              }}
              onMouseLeave={() => {
                setIsMouseOverLogistic(false);
                setId(0);
              }}
            >
              <div className="w-full flex flex-col justify-center items-start mb-[36px]">
                <div
                  className={`font-medium text-[64px] ${
                    id === 3 && isMouseOverLogistic === true
                      ? "text-[#146DFA]"
                      : "text-[#001E41]"
                  }  `}
                >
                  4000+
                </div>
                <div className="text-[20px] font-normal text-[#6D747A]">
                  Organisations
                </div>
              </div>
              <svg
                width="352"
                height="6"
                viewBox="0 0 352 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="352" height="5" fill="#391E66" />
              </svg>
            </div>

            {/*  4th card */}
            <div
              className="w-[352px] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2 "
              onMouseOver={() => {
                setIsMouseOverLogistic(true);
                setId(4);
              }}
              onMouseLeave={() => {
                setIsMouseOverLogistic(false);
                setId(0);
              }}
            >
              <div className="w-full flex flex-col justify-center items-start mb-[36px]">
                <div
                  className={`font-medium text-[64px] ${
                    id === 4 && isMouseOverLogistic === true
                      ? "text-[#146DFA]"
                      : "text-[#001E41]"
                  }  `}
                >
                  60M+
                </div>
                <div className="text-[20px] font-normal text-[#6D747A]">
                  Patient Records
                </div>
              </div>
              <svg
                width="352"
                height="6"
                viewBox="0 0 352 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="352" height="5" fill="#2CA49C" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/*  blue small wave */}

      <SmallBlueWave
        heading="Our top clients"
        subheading="We have a legacy of successful collaboration with healthcare providers in their digital transformation journey"
      />

      <div className="w-screen h-[300px] flex justify-center items-center my-[60px]">
        <div className="lg:w-10/12 md:w-11/12 w-full h-full flex flex-col justify-evenly items-center">
          <ClientLogos
            className="design-component-instance-node-2"
            property1="variant-2"
          />
          <ClientLogos1
            className="design-component-instance-node-2"
            property1="variant-2"
          />
        </div>
      </div>

      <div
        className="w-screen h-screen flex flex-col justify-center items-center my-[60px]"
        id="testimonial"
      >
        <p className="md:text-[36px] text-[30px] text-[#08090A] font-bold mb-[64px]">
          What our customers have to say
        </p>
        <div className="frame-44">
          <div className="frame-45">
            <TestimonialSingle
              className="testimonial-single-instance"
              frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390.svg"
            />
            <Line52
              className="line-5-2"
              color="url(#paint0_linear_1971_10008)"
            />
            <TestimonialSingle
              className="testimonial-single-instance"
              frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-1.svg"
              maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group@2x.png"
              text="Dr. Sumit Wankhade"
              text1="Mumbai, IN"
            />
          </div>
          <div className="frame-46">
            <Line51 className="line-6" color="url(#paint0_linear_1971_10012)" />
            <Line51 className="line-6" color="url(#paint0_linear_1971_10012)" />
          </div>
          <div className="frame-45">
            <TestimonialSingle
              className="testimonial-single-instance"
              frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-2.svg"
              line="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3-3.svg"
              maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group-1@2x.png"
              text="Dr. Ravi G. Kumar"
              text1="Hyderabad, IN"
              text2="We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction."
            />
            <Line52
              className="line-5-2"
              color="url(#paint0_linear_1971_10008)"
            />
            <TestimonialSingle
              className="testimonial-single-instance"
              frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-3.svg"
              line="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3.svg"
              maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group-2@2x.png"
              text="Dr. B Sarita Rao"
              text1="Bengaluru, IN"
              text2="We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction. We are happy to have a partner like Suvarna Technosoft for our healthcare software requirements."
            />
          </div>
        </div>
      </div>

      <Partners id="partners" text="Global strategic partners" />

      <div className="mt-[60px]">
        {/*  blog section header  */}
        <div className="w-screen flex items-center justify-center">
          <div className="lg:w-10/12 w-11/12 flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start">
            <div className="flex flex-grow-1 justify-start items-center">
              <p className="w-5/6 flex flex-wrap text-[36px] font-bold">
                Check out our latest insights
              </p>
            </div>
            <div className="w-32 flex justify-center items-center">
              <div
                className="mx-2"
                onClick={() => {
                  handleLeft();
                  scrollTo("left", window.innerWidth / 4, scrollableBlogs);
                }}
              >
                {" "}
                <Property1LeftDisabled
                  className="slider-3"
                  color={white}
                  stroke={black}
                />
              </div>

              <div
                className="mx-2"
                onClick={() => {
                  handleRight();
                  scrollTo("right", window.innerWidth / 4, scrollableBlogs);
                }}
              >
                <Property1Right
                  className="slider-3"
                  color={black}
                  stroke={white}
                />
              </div>
            </div>
          </div>
        </div>

        {/* blog cards */}

        <div className="h-[583px] w-full flex flex-col justify-center items-center">
          {/*  product-card */}
          <div
            className="w-10/12 flex justify-start items-center overflow-hidden"
            ref={scrollableBlogs}
          >
            <div className="w-[4000px] flex justify-center items-center">
              {blogs?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white flex flex-col justify-center items-center h-[420px] w-[312px] overflow-hidden me-[24px] select-none"
                    style={{
                      borderRadius: "12px",
                    }}
                  >
                    <div className="h-1/2">
                      <img src={d.image} alt={d.name} />
                    </div>
                    <div className="h-1/2 w-full flex flex-col justify-start items-start">
                      <div className="flex flex-col justify-start items-center h-1/2">
                        {/* title */}
                        <div className="blog-card-header">{d.title}</div>

                        {/*  date and type */}
                        <div className="w-full blog-card-regular-text mt-2 mb-4 me-2 flex justify-start items-start">
                          <div className="mx-1">{d.date}</div>
                          <div className="mx-1">{d.type}</div>
                        </div>
                      </div>

                      <Link
                        to={`/blogs/${d.id}`}
                        className="product-card-button flex items-center justify-center my-4"
                      >
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="mx-1 w-[20px] h-[20px]"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3.3335 8H12.6668"
                            stroke="#146DFA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 3.33331L12.6667 7.99998L8 12.6666"
                            stroke="#146DFA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ContactUsSection />
      <Footer />
    </div>
  );
};
