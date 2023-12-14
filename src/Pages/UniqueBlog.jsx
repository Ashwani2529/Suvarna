import React, { useState, useRef, useEffect } from "react";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import "../styles/Blogs.css";
import { FaArrowRight } from "react-icons/fa";

import BlogCarousel from "../Components/BlogCarousel";

import LeftIcon from "../Components/LeftIcon";
import RightIcon from "../Components/RightIcon";

//  blog
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

import user_icon from "../assets/user_icon.png";

const UniqueBlog = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  const d = [
    {blog_introduction : "In today's rapidly evolving healthcare landscape, technology plays a pivotal role in enhancing patient care, streamlining operations, and improving overall efficiency. Creating a comprehensive technology roadmap is crucial for hospitals looking to leverage the latest advancements. This step-by-step guide will walk you through the process of crafting a technology roadmap tailored to the specific needs of a healthcare institution.",
    steps : [{
      id : 1,
      name : "Assess Current Technological Landscape",
      intro : "Before charting a new course, it's essential to have a clear understanding of the existing technological infrastructure. This involves evaluating current hardware, software, and systems in place. Consider factors such as:",
      content : [{
         title : "Hardware Inventory", 
         description : "Document all existing devices, including servers, computers, medical equipment, and networking components. Assess their age, capabilities, and compatibility with modern technologies."},{
         title : "Software Applications", 
         description : "Compile a list of software applications used for administrative tasks, electronic health records (EHR), billing, and clinical operations. Determine if any systems are outdated or redundant.",
         },{
         title : "Data Security Measures", 
         description : "Evaluate the hospital's data security protocols, including firewalls, encryption methods, and access controls. Identify any vulnerabilities that need addressing.",
         },{
         title : "Integration Capabilities",
         description : "Assess how well different systems communicate with one another. Identify areas where seamless integration can improve workflow efficiency."
         }]
    },{
      id : 2,
      name : "Define Strategic Goals and Objectives",
      intro : "Establish clear and measurable objectives that align with the hospital's mission and long-term vision. These goals should be specific, achievable, relevant, and time-bound (SMART). Consider objectives like:",
      content : [{
         title : "Enhancing Patient Care", 
         description : "Focus on technologies that can improve the quality and delivery of patient care, such as telemedicine solutions, remote monitoring tools, and patient portals."},{
         title : "Operational Efficiency", 
         description : "Identify opportunities to streamline administrative processes, optimize resource allocation, and reduce inefficiencies in workflows.",
         },{
         title : "Compliance and Data Security", 
         description : "Ensure that the hospital's technology infrastructure complies with industry standards, regulations (e.g., HIPAA), and data protection laws.",
         },{
         title : "Innovation and Research",
         description : "Allocate resources for emerging technologies, research initiatives, and pilot programs that can contribute to cutting-edge healthcare practices."
         }]
    },
    {
      id : 3,
      name : "Conduct a Needs Assessment",
      intro : "Engage key stakeholders, including clinicians, administrative staff, IT professionals, and department heads, to gather input on their specific technology needs. Consider factors like:",
      content : [{
         title : "Clinical Workflow Requirements", 
         description : "Understand how different departments function and identify technologies that can enhance their processes. For instance, surgical departments may require advanced imaging solutions."
        },{
         title : "Staff Training and Support", 
         description : "Assess the level of training required for different technologies. Plan for ongoing education and support to ensure successful adoption.",
         },{
         title : "Patient Engagement and Experience", 
         description : "Consider tools that can enhance patient interaction, such as mobile apps for appointment scheduling, virtual waiting rooms, and personalized health information portals.",
         }]
    }
  ]}]
 
  

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
        <div className="w-screen flex-grow-1 flex flex-col justify-start items-start">
          <div className="w-screen md:h-[100vh] h-auto flex justify-center items-center mt-32 blogs">
            <div className="lg:w-10/12 md:w-11/12 w-full md:h-full h-auto flex md:flex-row flex-col justify-evenly items-center">
              <div className="md:w-[65%] w-full h-full flex flex-col justify-center items-center">
                <div className="w-full my-2 flex">
                  <div className="rounded-full bg-[#146DFA] bg-opacity-10 px-2 py-1">
                    News & Trends
                  </div>
                </div>

                <div className="flex-grow-1 flex flex-col justify-center items-center">
                  <div className="blogs_header">
                    How to draw the technology roadmap for a hospital: A
                    step-by-step guide
                  </div>
                  <div className="blogs_regular_text w-full flex justify-start items-center my-2">
                    <img src={user_icon} alt="user_icon" />
                    <div className="font-bold mx-2">Suvarna Team</div>
                    <div className="mx-2 text-[#6D747A]">11 July 2023</div>
                  </div>
                </div>

                <div className="w-full h-3/4 flex flex-col justify-center items-center overflow-hidden">
                  <img
                    src={blog2}
                    alt="blog_image"
                    className="h-full min-w-full"
                  />
                </div>
              </div>
              <div className="h-full px-1 border-start border-[#EBEDF0]"></div>
              <div className="md:w-[30%] w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-32 flex flex-col justify-evenly items-start bg-[#f7f9fd] px-[24px] py-[24px]">
                  <div className="">Share this Article</div>
                  <div className="flex justify-start items-center">
                    <button type="button" className="mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_3191_8302)">
                          <path
                            d="M15.7497 25.537C21.3629 24.6926 25.6663 19.8491 25.6663 14.0006C25.6663 7.55733 20.4429 2.33398 13.9997 2.33398C7.55635 2.33398 2.33301 7.55733 2.33301 14.0006C2.33301 19.8491 6.63654 24.6926 12.2497 25.537V17.5006H10.4997C9.53317 17.5006 8.74967 16.7171 8.74967 15.7506C8.74967 14.7842 9.53317 14.0006 10.4997 14.0006H12.2497V11.6673C12.2497 9.41215 14.0778 7.58398 16.333 7.58398H16.9163C17.8828 7.58398 18.6663 8.36748 18.6663 9.33398C18.6663 10.3005 17.8828 11.084 16.9163 11.084H16.333C16.0109 11.084 15.7497 11.3452 15.7497 11.6673V14.0006H17.4997C18.4661 14.0006 19.2497 14.7842 19.2497 15.7506C19.2497 16.7171 18.4661 17.5006 17.4997 17.5006H15.7497V25.537Z"
                            fill="#3C4043"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3191_8302">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>

                    <button type="button" className="mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_3191_8308)">
                          <path
                            d="M23.0447 5.43494C23.469 4.95003 23.4198 4.21298 22.9349 3.78868C22.45 3.36438 21.7129 3.41352 21.2886 3.89843L15.3261 10.7127L10.2667 3.96668C10.0463 3.67291 9.70055 3.5 9.33333 3.5H4.66667C4.22477 3.5 3.8208 3.74969 3.62318 4.14494C3.42555 4.54018 3.4682 5.01317 3.73334 5.36668L11.2428 15.3794L4.95532 22.5651C4.53103 23.05 4.58017 23.7871 5.06508 24.2114C5.54998 24.6357 6.28704 24.5866 6.71134 24.1016L12.6738 17.2873L17.7333 24.0333C17.9537 24.3271 18.2994 24.5001 18.6667 24.5001H23.3333C23.7753 24.5001 24.1792 24.2503 24.3768 23.8551C24.5744 23.4598 24.5318 22.9868 24.2667 22.6333L16.7572 12.6207L23.0447 5.43494Z"
                            fill="#3C4043"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3191_8308">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>

                    <button type="button" className="mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_3191_8314)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21 3.5C22.9331 3.5 24.5 5.06701 24.5 7V21C24.5 22.9331 22.9331 24.5 21 24.5H7C5.06701 24.5 3.5 22.9331 3.5 21V7C3.5 5.06701 5.06701 3.5 7 3.5H21ZM9.33333 11.6667C8.68901 11.6667 8.16667 12.189 8.16667 12.8333V18.6667C8.16667 19.311 8.68901 19.8333 9.33333 19.8333C9.97766 19.8333 10.5 19.311 10.5 18.6667V12.8333C10.5 12.189 9.97766 11.6667 9.33333 11.6667ZM12.8333 10.5C12.189 10.5 11.6667 11.0223 11.6667 11.6667V18.6667C11.6667 19.311 12.189 19.8333 12.8333 19.8333C13.4777 19.8333 14 19.311 14 18.6667V14.3964C14.3557 13.9947 14.9575 13.5241 15.6255 13.2384C16.0138 13.0723 16.5979 13.0059 17.0043 13.1336C17.182 13.1895 17.2833 13.268 17.346 13.3526C17.4068 13.435 17.5 13.6158 17.5 14V18.6667C17.5 19.3109 18.0223 19.8333 18.6667 19.8333C19.311 19.8333 19.8333 19.3109 19.8333 18.6667V14C19.8333 13.2174 19.6348 12.5232 19.2218 11.9649C18.8104 11.4089 18.2555 11.0811 17.704 10.9077C16.6521 10.5769 15.4862 10.7601 14.7078 11.0931C14.4608 11.1987 14.2174 11.3217 13.9815 11.4582C13.8831 10.9133 13.4065 10.5 12.8333 10.5ZM9.33333 8.16667C8.68901 8.16667 8.16667 8.68901 8.16667 9.33333C8.16667 9.97766 8.68901 10.5 9.33333 10.5C9.97766 10.5 10.5 9.97766 10.5 9.33333C10.5 8.68901 9.97766 8.16667 9.33333 8.16667Z"
                            fill="#3C4043"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3191_8314">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>

                    <button type="button" className="mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.111 13.5749C17.5015 13.9654 18.1347 13.9654 18.5252 13.5749L21.0001 11.1C23.148 8.95214 23.148 5.46974 21.0001 3.32185C18.8522 1.17397 15.3698 1.17397 13.2219 3.32185L10.747 5.79673C10.3565 6.18725 10.3565 6.82042 10.747 7.21094C11.1376 7.60146 11.7707 7.60146 12.1613 7.21094L14.6361 4.73607C16.003 3.36923 18.219 3.36923 19.5859 4.73607C20.9527 6.1029 20.9527 8.31898 19.5859 9.68581L17.111 12.1607C16.7205 12.5512 16.7205 13.1844 17.111 13.5749Z"
                          fill="#3C4043"
                          stroke="#3C4043"
                        />
                        <path
                          d="M5.79673 10.748C6.18725 10.3575 6.82042 10.3575 7.21094 10.748C7.60147 11.1385 7.60147 11.7717 7.21094 12.1622L4.73606 14.6371C3.36922 16.0039 3.36922 18.22 4.73606 19.5868C6.10289 20.9537 8.31898 20.9537 9.68582 19.5868L12.1607 17.1119C12.5512 16.7214 13.1843 16.7214 13.5749 17.1119C13.9654 17.5025 13.9654 18.1356 13.5749 18.5262L11.1 21.001C8.95214 23.1489 5.46974 23.1489 3.32186 21.001C1.17396 18.8531 1.17396 15.3707 3.32186 13.2229L5.79673 10.748Z"
                          fill="#3C4043"
                          stroke="#3C4043"
                        />
                        <path
                          d="M8.97941 15.3424C8.58889 14.9519 8.58889 14.3187 8.97941 13.9282L13.9291 8.97844C14.3196 8.58791 14.9528 8.58791 15.3433 8.97844C15.7339 9.36896 15.7339 10.0021 15.3433 10.3926L10.3936 15.3424C10.0031 15.7329 9.36994 15.7329 8.97941 15.3424Z"
                          fill="#3C4043"
                          stroke="#3C4043"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="w-full my-3 border-bottom border-[#EBEDF0]"></div>

                <div className="w-full h-1/4 flex flex-col justify-evenly items-start gradient_card p-3">
                  <div className="gradient_card_header">
                    Subscribe for insights & updates
                  </div>
                  <div className="gradient_card_regular_text">
                    By submitting, you agree to our privacy policy. For more
                    information on our privacy practices, please review our
                    <div className="text-[#146DFA]">Privacy Policy</div>
                  </div>
                  <form className="w-full flex justify-center items-center px-2">
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="px-[13px] py-[16px] rounded-sm flex-grow-1"
                    />
                    <button
                      type="button"
                      className="h-[48px] min-w-[48px] flex justify-center items-center bg-[#2B6997] rounded-full ms-[16px]"
                    >
                      <FaArrowRight className="text-white" />
                    </button>
                  </form>
                </div>

                <div className="w-full my-3 border-bottom border-[#EBEDF0]"></div>

                <div className="md:w-full w-2/3 related-article ">
                  Related Article
                </div>

                <div className="w-full flex-grow-1 flex flex-col justify-evenly md:items-start items-center">
                  {blogs.slice(0, 3).map((d, index) => {
                    return (
                      <div
                        key={index}
                        className={`md:w-full w-2/3 h-[129px] flex flex-col justify-center items-center mb-3 border-bottom border-[#EBEDF0]`}
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
                          <div className="mx-1 flex w-40">{d.type}</div>
                        </div>
                        <div className="flex justify-start items-center lg:text-[20px] md:text-[16px] text-[14px]">
                          {d.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen flex flex-grow-1 justify-center items-center">
            <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-start items-center">
              <div className="md:w-[65%] w-full h-full flex flex-col justify-center items-start ms-3">
                <div className="w-full flex justify-start items-center py-3">
                  In today's rapidly evolving healthcare landscape, technology
                  plays a pivotal role in enhancing patient care, streamlining
                  operations, and improving overall efficiency. Creating a
                  comprehensive technology roadmap is crucial for hospitals
                  looking to leverage the latest advancements. This step-by-step
                  guide will walk you through the process of crafting a
                  technology roadmap tailored to the specific needs of a
                  healthcare institution.
                </div>

                <div className="w-full flex flex-col justify-center items-start">
                  <div className="font-medium text-[24px] my-4">
                    Step 1: Assess Current Technological Landscape
                  </div>

                  <div className="my-2">
                    Before charting a new course, it's essential to have a clear
                    understanding of the existing technological infrastructure.
                    This involves evaluating current hardware, software, and
                    systems in place. Consider factors such as:
                    <ul className="text-[#3C4043]">
                      <li className=" text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Hardware Inventory:
                        </span>
                        Document all existing devices, including servers,
                        computers, medical equipment, and networking components.
                        Assess their age, capabilities, and compatibility with
                        modern technologies.
                      </li>

                      <li className="  text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Software Applications:
                        </span>
                        Compile a list of software applications used for
                        administrative tasks, electronic health records (EHR),
                        billing, and clinical operations. Determine if any
                        systems are outdated or redundant.
                      </li>

                      <li className="text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Data Security Measures:
                        </span>
                        Evaluate the hospital's data security protocols,
                        including firewalls, encryption methods, and access
                        controls. Identify any vulnerabilities that need
                        addressing.
                      </li>

                      <li className="text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Integration Capabilities:
                        </span>
                        Assess how well different systems communicate with one
                        another. Identify areas where seamless integration can
                        improve workflow efficiency.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-center items-start">
                  <div className="font-medium text-[24px] my-4">
                    Step 2: Define Strategic Goals and Objectives
                  </div>

                  <div className="my-2">
                    Establish clear and measurable objectives that align with
                    the hospital's mission and long-term vision. These goals
                    should be specific, achievable, relevant, and time-bound
                    (SMART). Consider objectives like:
                    <ul className="text-[#3C4043]">
                      <li className=" text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Enhancing Patient Care:
                        </span>
                        Focus on technologies that can improve the quality and
                        delivery of patient care, such as telemedicine
                        solutions, remote monitoring tools, and patient portals.
                      </li>

                      <li className="  text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Operational Efficiency:
                        </span>
                        Identify opportunities to streamline administrative
                        processes, optimize resource allocation, and reduce
                        inefficiencies in workflows.
                      </li>

                      <li className="text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Compliance and Data Security:
                        </span>
                        Ensure that the hospital's technology infrastructure
                        complies with industry standards, regulations (e.g.,
                        HIPAA), and data protection laws.
                      </li>

                      <li className="text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Innovation and Research:
                        </span>
                        Allocate resources for emerging technologies, research
                        initiatives, and pilot programs that can contribute to
                        cutting-edge healthcare practices.
                      </li>
                    </ul>
                  </div>
                </div>

                <img
                  src={blog2}
                  alt="blog_image"
                  className="h-[565.333px] min-w-full my-[32px]"
                />

                <div className="w-full flex flex-col justify-center items-start">
                  <div className="font-medium text-[24px] my-4">
                    Step 3: Conduct a Needs Assessment
                  </div>

                  <div className="my-2">
                    Engage key stakeholders, including clinicians,
                    administrative staff, IT professionals, and department
                    heads, to gather input on their specific technology needs.
                    Consider factors like:
                    <ul className="text-[#3C4043]">
                      <li className=" text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Clinical Workflow Requirements:
                        </span>
                        Understand how different departments function and
                        identify technologies that can enhance their processes.
                        For instance, surgical departments may require advanced
                        imaging solutions.
                      </li>

                      <li className="  text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Staff Training and Support:
                        </span>
                        Assess the level of training required for different
                        technologies. Plan for ongoing education and support to
                        ensure successful adoption.
                      </li>

                      <li className="text-[#3C4043] my-2">
                        <span className="font-medium text-[16px]">
                          Patient Engagement and Experience:
                        </span>
                        Consider tools that can enhance patient interaction,
                        such as mobile apps for appointment scheduling, virtual
                        waiting rooms, and personalized health information
                        portals. Based on the identified needs and objectives,
                        research potential technology solutions. Consider
                        factors like cost, scalability, vendor reputation, and
                        compatibility with existing systems. Prioritize
                        solutions that align closely with the hospital's
                        strategic goals.
                      </li>
                    </ul>
                  </div>

                  <div className=" h-32 flex justify-start items-start py-[24px]">
                    Share this article:
                    <div className="mx-3 flex justify-start items-center">
                      <button type="button" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="29"
                          viewBox="0 0 28 29"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2795_12355)">
                            <path
                              d="M15.7506 25.871C21.3638 25.0265 25.6673 20.1831 25.6673 14.3346C25.6673 7.89131 20.4439 2.66797 14.0006 2.66797C7.55732 2.66797 2.33398 7.89131 2.33398 14.3346C2.33398 20.1831 6.63751 25.0265 12.2506 25.871V17.8346H10.5006C9.53415 17.8346 8.75065 17.0511 8.75065 16.0846C8.75065 15.1182 9.53415 14.3346 10.5006 14.3346H12.2506V12.0013C12.2506 9.74613 14.0788 7.91797 16.334 7.91797H16.9173C17.8838 7.91797 18.6673 8.70147 18.6673 9.66797C18.6673 10.6345 17.8838 11.418 16.9173 11.418H16.334C16.0119 11.418 15.7506 11.6791 15.7506 12.0013V14.3346H17.5006C18.4671 14.3346 19.2506 15.1182 19.2506 16.0846C19.2506 17.0511 18.4671 17.8346 17.5006 17.8346H15.7506V25.871Z"
                              fill="#146DFA"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2795_12355">
                              <rect
                                width="28"
                                height="28"
                                fill="white"
                                transform="translate(0 0.333984)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>

                      <button type="button" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="29"
                          viewBox="0 0 28 29"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2795_12361)">
                            <path
                              d="M23.0447 5.76893C23.469 5.28401 23.4198 4.54696 22.9349 4.12267C22.45 3.69836 21.7129 3.7475 21.2886 4.23242L15.3261 11.0467L10.2667 4.30067C10.0463 4.0069 9.70055 3.83398 9.33333 3.83398H4.66667C4.22477 3.83398 3.8208 4.08368 3.62318 4.47892C3.42555 4.87416 3.4682 5.34715 3.73334 5.70067L11.2428 15.7133L4.95532 22.8991C4.53103 23.3839 4.58017 24.121 5.06508 24.5454C5.54998 24.9697 6.28704 24.9206 6.71134 24.4356L12.6738 17.6213L17.7333 24.3673C17.9537 24.6611 18.2994 24.834 18.6667 24.834H23.3333C23.7753 24.834 24.1792 24.5843 24.3768 24.1891C24.5744 23.7938 24.5318 23.3208 24.2667 22.9673L16.7572 12.9546L23.0447 5.76893Z"
                              fill="#146DFA"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2795_12361">
                              <rect
                                width="28"
                                height="28"
                                fill="white"
                                transform="translate(0 0.333984)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>

                      <button type="button" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="29"
                          viewBox="0 0 28 29"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2795_12367)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21 3.83398C22.9331 3.83398 24.5 5.40099 24.5 7.33398V21.334C24.5 23.267 22.9331 24.834 21 24.834H7C5.06701 24.834 3.5 23.267 3.5 21.334V7.33398C3.5 5.40099 5.06701 3.83398 7 3.83398H21ZM9.33333 12.0007C8.68901 12.0007 8.16667 12.523 8.16667 13.1673V19.0007C8.16667 19.645 8.68901 20.1673 9.33333 20.1673C9.97766 20.1673 10.5 19.645 10.5 19.0007V13.1673C10.5 12.523 9.97766 12.0007 9.33333 12.0007ZM12.8333 10.834C12.189 10.834 11.6667 11.3563 11.6667 12.0007V19.0007C11.6667 19.645 12.189 20.1673 12.8333 20.1673C13.4777 20.1673 14 19.645 14 19.0007V14.7304C14.3557 14.3287 14.9575 13.8581 15.6255 13.5724C16.0138 13.4063 16.5979 13.3399 17.0043 13.4676C17.182 13.5235 17.2833 13.602 17.346 13.6866C17.4068 13.769 17.5 13.9498 17.5 14.334V19.0007C17.5 19.6449 18.0223 20.1673 18.6667 20.1673C19.311 20.1673 19.8333 19.6449 19.8333 19.0007V14.334C19.8333 13.5514 19.6348 12.8572 19.2218 12.2989C18.8104 11.7429 18.2555 11.4151 17.704 11.2417C16.6521 10.9109 15.4862 11.0941 14.7078 11.4271C14.4608 11.5327 14.2174 11.6557 13.9815 11.7921C13.8831 11.2473 13.4065 10.834 12.8333 10.834ZM9.33333 8.50065C8.68901 8.50065 8.16667 9.02299 8.16667 9.66732C8.16667 10.3116 8.68901 10.834 9.33333 10.834C9.97766 10.834 10.5 10.3116 10.5 9.66732C10.5 9.02299 9.97766 8.50065 9.33333 8.50065Z"
                              fill="#146DFA"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2795_12367">
                              <rect
                                width="28"
                                height="28"
                                fill="white"
                                transform="translate(0 0.333984)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>

                      <button type="button" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M17.11 13.9089C17.5005 14.2994 18.1337 14.2994 18.5242 13.9089L20.9991 11.434C23.147 9.28612 23.147 5.80372 20.9991 3.65583C18.8512 1.50795 15.3688 1.50795 13.2209 3.65583L10.746 6.13071C10.3555 6.52123 10.3555 7.1544 10.746 7.54492C11.1366 7.93544 11.7697 7.93544 12.1603 7.54492L14.6351 5.07005C16.002 3.70321 18.218 3.70321 19.5849 5.07005C20.9517 6.43688 20.9517 8.65296 19.5849 10.0198L17.11 12.4947C16.7195 12.8852 16.7195 13.5184 17.11 13.9089Z"
                            fill="#146DFA"
                            stroke="#146DFA"
                          />
                          <path
                            d="M5.79673 11.0819C6.18725 10.6914 6.82042 10.6914 7.21094 11.0819C7.60147 11.4724 7.60147 12.1056 7.21094 12.4961L4.73606 14.971C3.36922 16.3378 3.36922 18.5539 4.73606 19.9207C6.10289 21.2876 8.31898 21.2876 9.68582 19.9207L12.1607 17.4458C12.5512 17.0553 13.1843 17.0553 13.5749 17.4458C13.9654 17.8364 13.9654 18.4695 13.5749 18.8601L11.1 21.3349C8.95214 23.4828 5.46974 23.4828 3.32186 21.3349C1.17396 19.187 1.17396 15.7046 3.32186 13.5568L5.79673 11.0819Z"
                            fill="#146DFA"
                            stroke="#146DFA"
                          />
                          <path
                            d="M8.97844 15.6764C8.58792 15.2859 8.58792 14.6527 8.97844 14.2622L13.9282 9.31243C14.3187 8.9219 14.9519 8.9219 15.3424 9.31243C15.733 9.70295 15.733 10.3361 15.3424 10.7266L10.3927 15.6764C10.0022 16.0669 9.36897 16.0669 8.97844 15.6764Z"
                            fill="#146DFA"
                            stroke="#146DFA"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-[500px] flex justify-center items-center gradient-div">
          <div className="lg:w-10/12 md:w-11/12 w-full flex md:flex-row flex-col justify-center items-center ">
            <div className="md:min-w-1/2 flex flex-col justify-center md:items-start items-center text-left gradient-div-header  md:py-0 py-4">
              <div className="w-2/3 flex flex-col justify-center text-[36px] font-bold items-center text-left">
                <div className=" text-[#08090A]">
                  Get our latest insights right in your inbox,
                </div>
                <div className=" text-left w-full text-[#146DFA]">
                  completely free!
                </div>
              </div>
            </div>

            <div className="md:min-w-1/2 w-full flex flex-col justify-center items-center px-2">
              <form
                action=""
                className="w-full h-full flex flex-col justify-center md:items-start items-center"
              >
                <input
                  type="text"
                  placeholder="Your email address"
                  className="md:w-[360px] w-2/3 py-2.5 px-2 rounded-sm my-[10px]"
                />
                <div className="w-2/3 gradient-div-regular-text">
                  By submitting, you agree to our privacy policy. For more
                  information on our privacy practices, please review our
                  <div className="gradient-div-regular-text-blue">
                    Privacy Policy
                  </div>
                </div>
                <div className="md:w-40 w-2/3 flex justify-start items-center">
                  <input
                    type="submit"
                    className="gradient-div-button text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BlogCarousel />
      <Footer className="" />
    </>
  );
};

export default UniqueBlog;
