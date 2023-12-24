import React from "react";

const SupportCard = ({ item }) => {
  return (
    <div className='px-[24px] py-[36px] w-[312px] h-[400px] rounded-lg border-2 border-solid border-[#F1F7F9] '>
      <img src={item?.icon} alt='icon-img' />
      <p className='text-[24px] text-[#08090A] font-semibold mt-[16px]'>{item?.name}</p>
      <p className='text-[16px] text-[#6D747A] font-medium mt-[24px]'>
        {item?.description}
      </p>
      <p className='text-[16px] text-[#6D747A] font-medium mt-[14px]'>
        {item?.optionText}
      </p>
      <div className='d-flex items-center'>
        <p className='text-[16px] text-[#146DFA] font-semibold '>
          {item?.linkText}
        </p>
        <p className='text-[16px] text-[#6D747A] font-medium mr-2'>
          {item?.text1}
        </p>
        <p className='text-[16px] text-[#146DFA] font-semibold '>
          {item?.number}
        </p>
      </div>
    </div>
  );
};

export default SupportCard;
