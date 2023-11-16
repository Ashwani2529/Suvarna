import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Property1LeftDisabled } from "../Components/Homepage/icons/Property1LeftDisabled/Property1LeftDisabled";
import { Property1Right } from "../Components/Homepage/icons/Property1Right/Property1Right";
import SmallGreenWave from "../Components/SmallGreenWave";
import { Footer } from "../Components/Homepage/Footer/Footer";

import "../styles/Blogs.css";

//  blog
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
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

  return (
    <div className="w-srceen h-[2493px] flex flex-col justify-start items-start">
      <SmallGreenWave
        heading="Suvarna Insights"
        subheading="Explore curated content and practical tips from experts on growing your healthcare business, and more..."
      />

      <div className="w-screen h-[100vh] flex justify-center items-center mt-64 mb-64 blogs">
        <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-evenly items-center   ">
          <div className="w-[65%] h-full flex flex-col justify-center items-center">
            <div className="w-full h-3/4 flex flex-col justify-center items-center overflow-hidden">
              <img src={blog2} alt="blog_image" className="h-full min-w-full" />
            </div>
            <div className="h-1/4 flex flex-col justify-center items-center">
              <div className="blogs_header">
                How to draw the technology roadmap for a hospital: A
                step-by-step guide
              </div>
              <div className="blogs_regular_text">
                How to draw the tech roadmap for a healthcare centre: A
                step-by-step guide How to draw the tech roadmap for a healthcare
                centre: A step-by-step guide How to draw the tech roadmap for a
                healthcare centre.
              </div>
            </div>
          </div>
          <div className="h-full px-1 border-start border-[#EBEDF0]"></div>
          <div className="w-[30%] h-full flex flex-col justify-center items-center">
            <div className="w-full flex-grow-1 flex flex-col justify-evenly items-start">
              {blogs.slice(0,4).map((d, index) => {
                return (
                  <div key={index} className={`w-full h-[129px] flex flex-col justify-center items-center mb-3 border-bottom border-[#EBEDF0]`}>
                    <div className="w-full flex justify-start items-center my-2">
                      <div className="mx-1 flex justify-center items-center other_blog_regular_text">{d.date}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="5"
                        className="w-[5px] h-[5px] mx-2"
                        viewBox="0 0 4 5"
                        fill="none"
                      >
                        <circle cx="2" cy="2.5" r="2" fill="#6D747A" />
                      </svg>
                      <div className="mx-1 flex w-40   other_blog_regular_text">{d.type}</div>
                    </div>
                    <div className="flex justify-start items-center other_blog_headers">
                      {d.title}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-1/4 flex flex-col justify-evenly items-start gradient_card p-2">
              <div className="gradient_card_header">
                Subscribe for insights & updates
              </div>
              <div className="gradient_card_regular_text">
                By submitting, you agree to our privacy policy. For more
                information on our privacy practices, please review our
                <div className="text-[#146DFA]">Privacy Policy</div>
              </div>
              <form className="w-full flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="px-[13px] py-[16px] rounded-sm flex-grow-1"
                />
                <button
                  type="button"
                  className="h-[48px] w-[48px] flex justify-center items-center bg-[#2B6997] rounded-full ms-[16px]"
                >
                  <FaArrowRight className="text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col justify-center items-center index">
        {/*  blog section header  */}
        <div className="w-screen flex items-center justify-center">
          <div className="lg:w-10/12 md:w-11/12 w-full flex justify-between items-center ">
            <div className="frame-35">
              <p className="text-wrapper-16">Check out our latest insights</p>
            </div>
            <div className="flex justify-center items-center">
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
        <div className=" w-screen flex justify-center items-center">
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
                          <div className="flex ">Read more</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            className="w-[20px] h-[20px] mx-1 "
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
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
