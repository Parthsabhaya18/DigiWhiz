import React from "react";

export default function Line() {
  return (
    <div className="bg-[#FAB702] flex flex-col md:flex-row items-center justify-between h-auto md:h-[104px] w-full px-4 md:px-24 py-4 md:py-0">
      
      <div className="w-full md:w-[726px] mb-4 md:mb-0 font-[600] text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-center md:text-left">
        
        <p className="text-[#FFFFFF]">
          
          Consulting And Estimate For Your Project,
          <span className="underline text-black font-[700]">
            Contact Us Today
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center w-full md:w-[190px] h-[48px] md:h-[58px] text-[#252C3A] bg-[#FFFFFF] font-[600] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
        
        <button>Get a Quote</button>
      </div>
    </div>
  );
}
