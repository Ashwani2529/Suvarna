import React, { useState , useEffect } from "react";
import { Button } from "../Components/AboutUs/Button/Button";
import { Founder } from "../Components/AboutUs/Founder/Founder";
import "../styles/About.css";
import Navbar from "../Components/Homepage/Navbar/Navbar";
import { Footer } from "../Components/Homepage/Footer/Footer";

//  importing spra Icons
import SPRASmilie from "../assets/SRPA_Smilie.png";
import SPRAThumbsUp from "../assets/SPRA_thumbs_Up.png";
import SPRADollar from "../assets/SRPA_Dollar.png";
import SPRATick from "../assets/SPRA_Tick.png";

export const AboutUs = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [id, setId] = useState(0);
  const chooseSuvarna = [
    {
      id: 1,
      title: "Simple",
      description:
        "Our solutions are engineered to optimize the workflows and provide a simple interaction with the system to take away the complexities of the daily operations",
      image: SPRASmilie,
    },
    {
      id: 2,
      title: "Reliable",
      description:
        "Our products undergo multi level testing to ensure that our clients get the desired & consistent outcomes all the time.",
      image: SPRAThumbsUp,
    },
    {
      id: 3,
      title: "Proven",
      description:
        "We take pride in the fact that our products and solutions are being used and accepted by 500+ healthcare organizations of all sizes.",
      image: SPRATick,
    },
    {
      id: 4,
      title: "Affordable",
      description:
        "We firmly believe that proven & reliable products and solutions should be accessible to every healthcare provider.",
      image: SPRADollar,
    },
  ];
  
  useEffect(()=>{
    window.scrollTo(0,0);
    return(()=>{
      return null
    });
  },[])

  return (
    <div className="about">
      <div className="sections">
        <div className="frame-6">
          <div className="compliance-header">ABOUT US</div>
          <div className="frame-7">
            <p className="p">
              <span className="span">We help healthcare businesses </span>
              <span className="text-wrapper-2"> {" "} succeed { " " }</span>
              <span className="span">
                in their digital transformation journey
              </span>
            </p>
            <p className="compliance-header-2">
              As a leading provider of innovative technology enabled solutions
              for hospitals, diagnostic centres, medical colleges and other
              healthcare touch points, our intuitively designed products
              automates the administrative and clinical operations of healthcare
              organizations of all sizes. Our innovative solutions enables
              decision making by streamlining the processes, procedures, and
              workflows of the healthcare organization. Our customers have been
              able to meet all the healthcare standards &amp; compliances
              leading to successful accreditation&#39;s like NABH, NABL etc.
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="overlap">
            <div className="frame-wrapper">
              <div className="frame-8">
                <p className="compliance-header-3">
                  Delivering excellence since 23 years
                </p>
                <p className="compliance-header-4">
                  We are committed to organizational excellence and continual
                  improvement in process, to ensure our customers get
                </p>
                <div className="frame-9">
                  <div className="frame-10">
                    <img
                      className="material-symbols"
                      alt="Material symbols"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle.svg"
                    />
                    <div className="text-wrapper-4">
                      Error-free deliverables
                    </div>
                  </div>
                  <div className="frame-10">
                    <img
                      className="material-symbols"
                      alt="Material symbols"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle-1.svg"
                    />
                    <div className="text-wrapper-5">
                      Innovative products &amp; services
                    </div>
                  </div>
                  <div className="frame-10">
                    <img
                      className="material-symbols"
                      alt="Material symbols"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle-2.svg"
                    />
                    <div className="text-wrapper-5">
                      Responsive, agile and efficient
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="video-overlay">
                  <div className="polygon-wrapper">
                    <img
                      className="polygon"
                      alt="Polygon"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/polygon-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="frame-13">
              <p className="compliance-header-5">
                <span className="span">OUR</span>
                <span className="text-wrapper-2"> VISION</span>
              </p>
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/line-2.svg"
              />
            </div>
            <p className="compliance-header-6">
              We are strongly focused to be leaders in building unique
              technology enabled products and deliver world class solutions
              which are innovative, customized and blended to meet customer
              specific requirements.
            </p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="div-wrapper relative flex justify-center items-center">
                <div className="h-full w-full flex flex-col justify-center items-center ">
                  <div className="compliance-header-7 w-1/2">
                    We’re on a mission...
                  </div>
                  <div className="compliance-header-8 w-1/2">
                    Our mission is to empower the society through a wide range
                    of technology enabled services and deliver value based
                    solutions which keep our customers at the pinnacle of
                    growth.
                  </div>
                </div>
              </div>
              <img
                className="pexels-pixabay"
                alt="Pexels pixabay"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/pexels-pixabay-356040-1.png"
              />
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper-6">Why choose Suvarna?</div>

          <div className=" w-full h-full flex items-center justify-center ">
            {chooseSuvarna?.map((d, index) => {
              return (
                <div
                  key={index}
                  className="choose_card flex justify-center items-center hover:scale-110 mx-[24px]"
                  onMouseEnter={() => {
                    setIsMouseOver(true);
                    setId(d.id);
                  }}
                  onMouseOver={()=>{
                    setIsMouseOver(true);
                    setId(d.id);
                  }}
                  onMouseLeave={() => {
                    setIsMouseOver(false);
                    setId(0);
                  }}
                >
                  <div
                    className={`choose_card_header ${
                      isMouseOver && id === d.id ? "text-blue-400" : "text-black"
                    }`}
                  >
                    {d.title}
                  </div>
                  <div className="choose_card_logo my-8">
                    <img src={d.image} alt={d.title} />
                  </div>

                  <div className="choose_card_description">{d.description}</div>
                </div>
              );
            })}
          </div>
{/* 
          <Srpa
            property1="default"
            tileSecureSvgrepoCom="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/secure-svgrepo-com-1-2.svg"
            tileThumbUpFill="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/thumb-up-2-fill-1-7.svg"
          /> */}
        </div>
        <div className="story-and-team">
          <div className="story">
            <div className="overlap-group-3">
              <img
                className="vector my-6"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/vector-3.svg"
              />
              <img
                className="vector-2 mb-4"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/vector-2.svg"
              />
              <img
                className="vector-3 mt-2"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/vector-1.svg"
              />
              <div className="frame-15">
                <div className="compliance-header-9">How our story began</div>
                <p className="compliance-header-10">
                  Suvarna Technosoft&#39;s journey began with a simple yet
                  profound vision: to revolutionize the healthcare industry
                  through cutting-edge software solutions. Established in 1999,
                  our founders, seasoned healthcare professionals and visionary
                  technologists, recognized the critical need for seamless
                  integration of technology in the healthcare ecosystem. With
                  unwavering commitment and a deep understanding of the
                  sector&#39;s intricacies, we embarked on a mission to
                  streamline processes, enhance patient care, and empower
                  healthcare providers. Over the years, we have tirelessly
                  strived to bridge the gap between healthcare and technology,
                  leveraging our expertise to develop bespoke, intuitive, and
                  scalable solutions that cater to the unique needs of our
                  clients.
                </p>
              </div>
            </div>
          </div>
          <div className="div-2">
            <div className="frame-16">
              <div className="frame-17">
                <div className="text-wrapper-7">Meet our Leadership Team</div>
              </div>
              <p className="text-[20px] text-[#6D747A] font-normal md:px-0 px-2">
                Our founding team combines seasoned professionals and tech
                visionaries with decades of experience, uniting their expertise
                to drive innovation in the industry.
              </p>
            </div>
            <div className="lg:w-10/12 md:w-11/12 w-full flex md:flex-row flex-col justify-evenly items-center">
              <Founder />
              <Founder
                maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-2@2x.png"
                text="Subba Rao"
                text1="Director - HIMS"
              />
              <Founder
                maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-3@2x.png"
                text="K.M.L.N Rao"
                text1="Director - SLIMS"
              />
              <Founder
                maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-4@2x.png"
                text="Muni Kumar"
                text1="Director - EMR"
              />
            </div>
          </div>
        </div>
        <div className="frame-19">
          <div className="contact-us">
            <div className="frame-20">
              <p className="compliance-header-12">
                Have a question? We’d love to hear from you.
              </p>
              <Button
                className="button-instance"
                property1="default-small"
                supportClassName="button-instance"
                text="Contact us"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
