import React, { useEffect } from "react";
import SmallGreenWave from "../Components/SmallGreenWave";
import { Footer } from "../Components/Footer";
import BlogCarousel from "../Components/BlogCarousel";

import "../styles/Blogs.css";

//  blog
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <>
      <div className="w-srceen h-auto flex flex-col justify-start items-start">
        <SmallGreenWave
          heading="Suvarna Insights"
          subheading="Explore curated content and practical tips from experts on growing your healthcare business, and more..."
        />

        <div className="w-full  flex justify-center items-center blogs mt-[120px] relative ">
          <div className="lg:w-10/12 md:w-11/12 w-full h-[70%] flex md:flex-row flex-col md:justify-evenly justify-center items-center  ">
            <div className="md:w-[65%] w-full h-full flex flex-col justify-start items-center">
              <div className="w-full h-3/4 flex flex-col justify-start items-center overflow-hidden ">
                <img
                  src={blog2}
                  alt="blog_image"
                  className="h-full min-w-full"
                />
              </div>
              <div className="md:h-1/4 h-[50vh] flex flex-col justify-center items-center md:px-0 px-2">
                <div className="blogs_header">
                  How to draw the technology roadmap for a hospital: A
                  step-by-step guide
                </div>
                <div className="blogs_regular_text">
                  How to draw the tech roadmap for a healthcare centre: A
                  step-by-step guide How to draw the tech roadmap for a
                  healthcare centre: A step-by-step guide How to draw the tech
                  roadmap for a healthcare centre.
                </div>
              </div>
            </div>
            <div className="h-full px-1 border-start border-[#EBEDF0] "></div>
            <div className=" w-full md:w-[30%] md:h-full h-auto flex flex-col justify-center items-center md:p-0 p-3">
              <div className="w-full flex-grow-1 flex flex-col justify-evenly items-start">
                {blogs.slice(0, 4).map((d, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-full h-[129px] flex flex-col justify-center items-center mb-3 border-bottom border-[#EBEDF0]`}
                    >
                      <div className="w-full flex justify-start items-center my-2">
                        <div className="mx-1 flex justify-center items-center other_blog_regular_text">
                          {d.date}
                        </div>
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
                        <div className="mx-1 flex w-40   other_blog_regular_text">
                          {d.type}
                        </div>
                      </div>
                      <div className="flex justify-start items-center lg:text-[20px] md:text-[16px] text-[14px]">
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
                    required
                  />
                  <button
                    type="button"
                    className="h-[48px] min-w-[48px] flex justify-center items-center bg-[#2B6997] rounded-full ms-[16px]"
                  >
                    <FaArrowRight className="text-white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* blogCarousel carousel */}
        <BlogCarousel />
      </div>
    </>
  );
};

export default Blogs;
