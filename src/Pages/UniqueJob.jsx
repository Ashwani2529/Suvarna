import React from "react";
// import "./style.css";
import "../styles/UniqueJob.css";
import SmallBlueWave from "../Components/SmallBlueWave";
import resume from "../assets/Resume-amico 1.png";

import { Footer } from "../Components/Footer";

export const UniqueJob = () => {

  const keyResponsibility= [{
    title : "Technical Support Excellence",
    content : "Provide first-class technical support to internal teams and clients, troubleshooting hardware and software issues with precision and empathy."},
    {
     title : "System Maintenance",
     content : "Monitor and maintain critical systems, ensuring optimal performance and uptime for our healthcare software platforms."
    },
    { title : "Network Security",
      content : "Collaborate with our security team to implement and maintain robust security measures, safeguarding sensitive healthcare data.",
    },
    { title : "Documentation and Training",
    content : "Create clear and comprehensive technical documentation and conduct training sessions to empower users and promote self-sufficiency.",
    },
    {
      title : "Innovative Problem Solving", 
      content : "Tackle complex technical challenges with creativity and adaptability, ensuring our healthcare software solutions meet the evolving needs of the industry."
  }]

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <SmallBlueWave
        carrers={true}
        package="1.0-1.3Lpa"
        role="IT Support Engineer"
        time="Full time"
        location="Hyderabad"
      />

      <div className="lg:w-10/12 md:w-11/12 w-full flex justify-center items-center mt-[120px]">
        <div className="max-w-3/4 flex-col justify-center items-start ">
          <div className="mb-[46px]">
            <div className="lg:text-[28px] md:text-[24px] text-[20px] text-[#08090A] font-medium">
              About The Role
            </div>
            <div className="text-[#3C4043] font-normal md:text-[16px] text-[14px]">
            Are you passionate about healthcare technology and dedicated to providing exceptional technical support? Join our dynamic team as an IT Support Engineer at [Healthcare Software Solutions Company]. As a pivotal member of our IT department, you will play a crucial role in ensuring the seamless operation of our cutting-edge healthcare software solutions.
            </div>
        
          </div>

          <div className="mb-[46px]">
            <div className="lg:text-[28px] md:text-[24px] text-[20px] text-[#08090A] font-medium">
            Key Responsibilities
            </div>
            <div className="text-[#3C4043] font-normal md:text-[16px] text-[14px]">
               <ul>
                  {keyResponsibility?.map((d,index)=>{
                    return <li className="list-disc my-2" key={index}>
                    <span className="font-semibold">{d.title}:</span>
                    <span>{d.content}</span>
                  </li>
                  })}
               </ul>
            </div>
        
          </div>
        </div>

        <div className="min-w-[500px] flex justify-center items-center">
            <img src={resume} className="w-[400px] h-[400px]" alt="resume" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
