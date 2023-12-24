import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// icons
import LeftIcon from "../Components/LeftIcon";
import RightIcon from "../Components/RightIcon";

import DMS from "../assets/Product Card Logos (2).png";
import Edukares from "../assets/Product Card Logos (3).png";
import BIMS from "../assets/Product Card Logos.png";
import SLIMS from "../assets/Product Card Logos (4).png";
import HIMS from "../assets/HIMS.png";
import RIS from "../assets/RIS.png";
import EMR from "../assets/EMR.png";

// /  import images
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

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
          currentScrollLeft + (targetScrollLeft - currentScrollLeft) * progress;
        requestAnimationFrame(scrollStep);
      } else {
        container.scrollLeft = targetScrollLeft;
      }
    }

    requestAnimationFrame(scrollStep);
  }
};

const ProductCarousel = () => {
  const scrollableProducts = useRef(null);
  const scrollableBlogs = useRef(null);

  //  states
  const [white, setWhite] = useState("#EBEDF0");
  const [black, setBlack] = useState("#001E41");
  const [left, setLeft] = useState(0);

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
      route: "/dms",
    },
    {
      id: 2,
      name: "Edukares",
      description: "Digital Campus Management System",
      image: product2,
      icon: Edukares,
      route: "/edukares",
    },
    {
      id: 3,
      name: "BI & MS",
      description: "Business Intelligence & MIS",
      image: product3,
      icon: BIMS,
      route: "/bimis",
    },
    {
      id: 4,
      name: "SLIMS",
      description: "Suvarna Laboratory Information Management System",
      image: product4,
      icon: SLIMS,
      route: "/slims",
    },
    {
      id: 5,
      name: "HIMS",
      description: "Hospital Information Management System",
      image: product3,
      icon: HIMS,
      route: "/hims",
    },
    {
      id: 6,
      name: "RIS-PACS",
      description: "Radio Inoformation System",
      image: product2,
      icon: RIS,
      route: "/products/rispacs",
    },
    {
      id: 7,
      name: "EMR",
      description: "Electronic Management Record",
      image: product4,
      icon: EMR,
      route: "/emr",
    },
  ];

  return (
    <div className="w-screen relative flex justify-center items-center bg-[#F9F9F9] py-[60px]" id="products">
      <div className="h-[583px] w-full flex flex-col justify-center items-center md:p-0 p-2">
        <div className="lg:w-10/12 md:w-11/12 w-full flex justify-between items-center py-2 mb-[64px]">
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
              className="mx-2 cursor-pointer"
              onClick={() => {
                handleLeft();
                scrollTo("left", window.innerWidth / 4, scrollableProducts);
              }}
            >
              {" "}
              <LeftIcon className="slider-3" color={white} stroke={black} />
            </div>

            <div
              className="mx-2 cursor-pointer"
              onClick={() => {
                handleRight();
                scrollTo("right", window.innerWidth / 4, scrollableProducts);
              }}
            >
              <RightIcon className="slider-3" color={black} stroke={white} />
            </div>
          </div>
        </div>

        {/*  product-card */}
        <div
          className="lg:w-10/12 md:w-11/12 w-full flex justify-start items-center overflow-hidden "
          ref={scrollableProducts}
        >
          <div className=" flex justify-center items-center">
            {products?.map((d, index) => {
              return (
                <div
                  key={index}
                  className="bg-white flex flex-col justify-center items-center h-[420px] w-[312px] product-card me-[24px] select-none"
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div className="h-1/2 rounded-t-[12px] overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                    />
                  </div>
                  <div className="h-1/2 w-full p-[28px] flex flex-col justify-between items-start">
                    <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-full flex justify-start items-center rounded-t-[12px] overflow-hidden">
                        <img
                          src={d.icon}
                          className="mr-[18px] rounded-tt-[12px]"
                          alt="icon"
                        />
                        <div className="text-[24px] font-medium text-[#08090A]">
                          {d.name}
                        </div>
                      </div>

                      <div className="w-full product-card-regular-text mt-2 mb-4 px-2">
                        {d.description}
                      </div>
                    </div>

                    <Link
                      to={"/products" + d.route}
                      className="product-card-button flex items-center justify-center px-2"
                    >
                      <div className="flex text-[16px] text-[#146DFA] font-bold">
                        know more
                      </div>
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
  );
};

export default ProductCarousel;
