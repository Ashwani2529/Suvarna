import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Homepage/Footer/Footer";
import "../styles/Carrers.css";

//  imported icons
import moneyBag from "../assets/money-bag-svgrepo-com 1 (1).png";
import stock from "../assets/exponentially-rising-graph-svgrepo-com 1.png";
import frame from "../assets/Frame 482716.png";

import intro_vector from "../assets/Business merger-amico 1.png";
import job_hunt from "../assets/Job hunt-amico 1.png";

import money_bag from "../assets/money-bag-svgrepo-com 1 (2).png"
import location from "../assets/location-pin-svgrepo-com 1.png";
import timer from "../assets/Group.png";

export const Carrers = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [id, setId] = useState(0);

  useEffect(()=>{
    window.scrollTo(0,0);
    return(()=>{
      return null
    });
  },[])

  return (
    <div className="Carrers flex flex-col justify-start items-center relative">
      {/*  header */}
      <div className="w-screen h-screen flex items-center justify-center relative">
        {/*  frame -6 */}
        <div className="w-10/12 flex flex-col justify-center items-start relative z-10">
          <div className="heading lg:w-4/6 w-screen">
            Work with us. Build the future of healthcare.
            <div className="sub-heading">
              We’re hiring. Come pursue an exciting & fulfilling career with us.
            </div>
          </div>
          <div className="lg:w-2/3 md:w-2/3 w-full text-left">
            <p className="header-regular-text my-3">
              We are a team of 250+ committed employees who share our passion
              for digital transformation at all healthcare touch points. We
              believe our employees are our most valuable asset and we provide
              opportunities to build a rewarding career.
            </p>
            <p className="header-regular-text my-3">
              We are constantly looking for the right people to help us deliver
              cutting edge products and solutions, that can change the way
              healthcare is delivered.
            </p>
            <p className="header-regular-text my-3">
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

        <div className="header-polygon absolute top-0">
          <img
            src="../../assets/Ellipse 301.png"
            alt="polygon"
            className="w-screen lg:h-auto md:min-h-screen min-h-screen flex justify-center items-center"
          />
        </div>
      </div>

      {/* body */}
      <div className="w-screen min-h-[2000px] bg-white flex flex-col justify-start items-center ">
        {/*  intro */}
        <div className="lg:w-10/12 md:w-11/12 w-full h-screen flex justify-center items-center">
          <div className="w-1/2 flex justify-center items-center">
            <img src={intro_vector} alt="intro_vector" />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start">
            <div className="intro-header">Why join Suvarna?</div>
            <div className="intro-list-regular-text mb-4">
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
                <div className="intro-list-regular-text">
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
                <div className="intro-list-regular-text">
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
                <div className="intro-list-regular-text">
                  We understand what’s important to you and provide flexibility
                  that works with your life.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  opening */}
        <div className="lg:w-10/12 md:w-11/12 w-full h-screen flex flex-col justify-center items-start">
          <div className="opening_header">Our current openings</div>
          <div className="w-full flex flex-grow-1 justify-center items-center">
            <div className="opening_lists w-3/4 h-full flex flex-col justify-start items-start">
              <div className={`min-w-full my-3 px-2 py-2 bg-gray-100 flex justify-between items-center ${isExpanded ? "h-[462px]" : "h-[120px]"  }`}>
                <div className="w-3/4 h-full flex flex-col justify-start items-start px-2">
                  <div className="opening_list_header my-3">IT Support Engineer</div>
                  <div className="w-full flex justify-start items-center">
                    {/*  details */}
                    <div className="opening_list_details flex justify-center items-center ">
                       <img src={money_bag} alt="details_icon" className="mx-1" />
                       <div  className="text-[16px] font-normal text-[#3C4043]">
                         Full-time
                       </div>
                    </div>
                    {/*  details */}
                    <div className="opening_list_details flex justify-center items-center ">
                       <img src={location} alt="details_icon" className="mx-1" />
                       <div  className="text-[16px] font-normal text-[#3C4043]">
                         Hyderabad
                       </div>
                    </div>
                    {/*  details */}
                    <div className="opening_list_details flex justify-center items-center ">
                       <img src={timer} alt="details_icon" className="mx-1" />
                       <div  className="text-[16px] font-normal text-[#3C4043]">
                         INR 1.0-1.3 Lpa
                       </div>
                    </div>
                  </div>

                  {isExpanded ? <div className="
                  w-full flex-grow-1 justify-center items-center">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iure, commodi libero ratione eos minus non? Non voluptatibus dicta eligendi recusandae delectus eius veniam totam explicabo exercitationem odio fuga, fugiat earum aspernatur facere et!
                  </div> : ""}
                </div>

                <div className="w-1/4 min-h-full flex justify-center items-end p-2">
                  <Link to={`/carrers/1`} className="btn btn-primary text-white mx-1">
                    Apply
                  </Link>
                  <button type="button" className="btn btn-outline-primary mx-1" onClick={()=>{
                    setIsExpanded(!isExpanded);
                    setId(1);
                  }}>
                    More Info
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/4 flex justify-center items-center">
              <img src={job_hunt} alt="job_hunt" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen ">
        <Footer />
      </div>
    </div>
  );
};
