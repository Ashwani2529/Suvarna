import React, { useEffect, useState } from "react";
import { Button } from "../Components/AboutUs/Button/Button";
import { Founder } from "../Components/AboutUs/Founder/Founder";
import "../styles/About.css";

//  importing spra Icons
import SmallBlueWave from "../Components/SmallBlueWave";
import SPRATick from "../assets/SPRA_Tick.png";
import SPRAThumbsUp from "../assets/SPRA_thumbs_Up.png";
import SPRADollar from "../assets/SRPA_Dollar.png";
import SPRASmilie from "../assets/SRPA_Smilie.png";

import about_us from "../assets/about_Us.png";

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

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <>
      <div className='w-[100vw] h-auto flex flex-col justify-start items-start about '>
        <div className='w-full h-[650px] flex flex-col justify-end items-center relative pb-[20px]'>
          <div className='w-10/12 flex flex-col justify-center items-start'>
            <div className='compliance-header'>ABOUT US</div>
            <div className=''>
              <p className=' lg:w-10/12 font-medium text-[#08090A] lg:text-[48px] md:text-[40px] text-[32px]'>
                <span className=''>We help healthcare businesses</span>
                <span className='text-[#2B6997]'> succeed </span>
                <span className=''>
                  in their digital transformation journey
                </span>
              </p>
              <p className='lg:w-[70%] text-[#3C4043] lg:text-[20px] md:text-[20px] text-[16px] my-2 '>
                As a leading provider of innovative technology enabled solutions
                for hospitals, diagnostic centres, medical colleges and other
                healthcare touch points, our intuitively designed products
                automates the administrative and clinical operations of
                healthcare organizations of all sizes. Our innovative solutions
                enables decision making by streamlining the processes,
                procedures, and workflows of the healthcare organization. Our
                customers have been able to meet all the healthcare standards
                &amp; compliances leading to successful accreditation&#39;s like
                NABH, NABL etc.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full my-[120px] flex justify-center items-center relative '>
          <div className='lg:w-10/12 md:w-11/12 w-full h-[690px] md:px-0 px-2 relative flex justify-start items-center '>
            <div className='frame-wrapper relative lg:w-[40vw] md:w-[50vw] w-[50vw] md:h-[10/12] lg:h-full py-[98.5px] lg:pl-[48px] flex flex-col justify-center items-start'>
              <div className='md:px-[12px] px-[24px]'>
                <p className='md:w-3/4 w-full lg:text-[48px] md:text-[40px] text-[32px] text-white font-medium'>
                  Delivering excellence since 23 years
                </p>
                <p className='md:w-10/12 w-11/12 lg:text-[24px] md:text-[20px] text-[16px] text-white'>
                  We are committed to organizational excellence and continual
                  improvement in process, to ensure our customers get
                </p>
                <div className='frame-9'>
                  <div className='frame-10'>
                    <img
                      className='material-symbols'
                      alt='Material symbols'
                      src='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle.svg'
                    />
                    <div className='lg:text-[24px] md:text-[20px] text-[16px] text-white'>
                      Error-free deliverables
                    </div>
                  </div>
                  <div className='frame-10'>
                    <img
                      className='material-symbols'
                      alt='Material symbols'
                      src='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle-1.svg'
                    />
                    <div className='lg:text-[24px] md:text-[20px] text-[16px] text-white'>
                      Innovative products &amp; services
                    </div>
                  </div>
                  <div className='frame-10'>
                    <img
                      className='material-symbols'
                      alt='Material symbols'
                      src='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle-2.svg'
                    />
                    <div className='lg:text-[24px] md:text-[20px] text-[16px] text-white'>
                      Responsive, agile and efficient
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute lg:w-[35vw] md:w-1/2 w-1/2 h-auto ms-[45%] overflow-hidden rounded-md'>
              <div className='w-full h-auto flex justify-center items-center'>
                <img src={about_us} alt='about_us' className='h-[102%]' />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full relative flex flex-col justify-center items-center mb-[120px] '>
          <div className='w-full flex flex-col justify-center items-center mb-[104px] '>
            <div className='w-full flex flex-col justify-center items-center '>
              <p className='lg:text-[48px] md:text-[40px] text-[32px] font-bold'>
                <span className='span'>OUR</span>
                <span className='text-wrapper-2'> VISION</span>
              </p>
              <img
                className='line'
                alt='Line'
                src='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/line-2.svg'
              />
            </div>
            <p className='md:w-3/4 w-full mt-[24px] lg:text-[28px] md:text-[20px] text-[16px] text-[#08090A] font-normal text-center'>
              We are strongly focused to be leaders in building unique
              technology enabled products and deliver world class solutions
              which are innovative, customized and blended to meet customer
              specific requirements.
            </p>
          </div>
          <div className='w-full flex flex-row-reverse justify-start items-center relative'>
            <div className='onMission md:h-[540px] lg:w-[45vw] md:w-[50%] w-[60%] h-[400px] rounded-[16px] relative flex justify-center items-center'>
              <div className='h-full w-full flex flex-col md:justify-center justify-center md:items-center items-end '>
                <div className='lg:text-[48px] md:text-[40px] text-[32px] md:w-1/2 w-2/3 font-medium text-[#08090A]'>
                  We’re on a mission...
                </div>
                <div className='text-[#3C4043] lg:text-[20px] md:text-[16px] text-[14px] md:w-1/2 w-2/3'>
                  Our mission is to empower the society through a wide range of
                  technology enabled services and deliver value based solutions
                  which keep our customers at the pinnacle of growth.
                </div>
              </div>
            </div>
            <img
              className='lg:w-[667px] w-[50vw] lg:h-[431.666px] absolute mx-[40vw]'
              alt='Pexels pixabay'
              src='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/pexels-pixabay-356040-1.png'
            />
          </div>
        </div>

        <div className='w-full relative flex flex-col justify-center items-center'>
          <div className='text-wrapper-6 mb-[48px]'>Why choose Suvarna?</div>

          <div className='flex flex-col items-center justify-center space-y-4 md:flex-row md:flex-wrap md:px-0 lg:px-0 px-10'>
            {chooseSuvarna?.map((d, index) => (
              <div
                key={index}
                className='choose_card w-full md:w-[312px] h-[360px] 
        flex flex-col justify-center items-center hover:scale-110 md:mx-[24px] mx-[12px] my-4'
                onMouseEnter={() => {
                  setIsMouseOver(true);
                  setId(d.id);
                }}
                onMouseOver={() => {
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
                  } text-center mb-4`}
                >
                  {d.title}
                </div>
                <div className='choose_card_logo my-4'>
                  <img src={d.image} alt={d.title} className='w-full h-auto' />
                </div>
                <div className='text-center md:text-[16px] text-[14px]'>
                  {d.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* blue wave three */}
        <SmallBlueWave
          heading='How our story began'
          subheading="Suvarna Technosoft's journey began with a simple yet profound vision: to revolutionize the healthcare industry through cutting-edge software solutions. Established in 1999, our founders, seasoned healthcare professionals and visionary technologists, recognized the critical need for seamless integration of technology in the healthcare ecosystem. With unwavering commitment and a deep understanding of the sector's intricacies, we embarked on a mission to streamline processes, enhance patient care, and empower healthcare providers. Over the years, we have tirelessly strived to bridge the gap between healthcare and technology, leveraging our expertise to develop bespoke, intuitive, and scalable solutions that cater to the unique needs of our clients. "
        />

        <div className='w-full flex justify-center items-center mt-[46px] mb-[60px] relative'>
          <div className='w-10/12 flex flex-col justify-center items-center'>
            <div className='frame-16'>
              <div className='frame-17'>
                <div className='text-wrapper-7 mb-[16px]'>
                  Meet our Leadership Team
                </div>
              </div>
              <p className='lg:w-2/3 md:w-4/5 text-[20px] text-[#6D747A] font-normal md:px-0 px-2 mb-[48px] text-center'>
                Our founding team combines seasoned professionals and tech
                visionaries with decades of experience, uniting their expertise
                to drive innovation in the industry.
              </p>
            </div>
            <div className='lg:w-10/12 md:w-11/12 w-full flex gap-[72px] flex-col justify-center items-center md:flex-row md:flex-wrap'>
              <Founder />
              <Founder
                maskGroup='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-2@2x.png'
                text='Subba Rao'
                text1='Director - HIMS'
              />
              <Founder
                maskGroup='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-3@2x.png'
                text='K.M.L.N Rao'
                text1='Director - SLIMS'
              />
              <Founder
                maskGroup='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-4@2x.png'
                text='Muni Kumar'
                text1='Director - EMR'
              />
            </div>
          </div>
        </div>

        <div className='w-full  flex justify-center items-center '>
          <div className='contact-us'>
            <div className='frame-20'>
              <p className='compliance-header-12'>
                Have a question? We’d love to hear from you.
              </p>
              <Button
                className='button-instance'
                property1='default-small'
                supportClassName='button-instance'
                text='Contact us'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
