import React from "react";
import Banner from "../Components/SupportService/Banner";
import Card from "../Components/SupportService/SupportCard";
import callIcon from "../assets/call_icon.svg";
import chatIcon from "../assets/chat_icon.svg";
import mailIcon from "../assets/mail_icon.svg";
import supportIcon from "../assets/support_icon.svg";

const SupportService = () => {
  // support data
  const supportData = [
    {
      icon: mailIcon,
      name: "Email",
      description:
        "Email is the most common and preferred way for our customers to reach us. We are able to respond to most emails within the agreed SLA, during business hours. ",
      optionText: "Reach us at",
      linkText: "support@suvarna.co.in",
    },
    {
      icon: callIcon,
      name: "Phone",
      description:
        "We’re available on phone when you have pressing needs. Please note that our phone channels are limited and the time spent would be limited.",
      text1: "Call us on",
      number: "+91-7413956956",
    },
    {
      icon: chatIcon,
      name: "Live Chat",
      description: "Coming soon...",
    },
    {
      icon: supportIcon,
      name: "Support Portal",
      description:
        "This is the best and our recommended mode of support. Customers can expect a quick turnaround for their queries/support requirements. Login credentials will be provided for post go-live and AMC support",
      linkText: "Visit Support Portal",
    },
  ];

  return (
    <div id="support">
      {/* banner here*/}
      <Banner />
      {/* banner close here*/}
      {/* support card here */}
      <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 my-4 sm:my-8 lg:my-12'>
        {supportData?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      {/* support card close here */}
    </div>
  );
};

export default SupportService;
