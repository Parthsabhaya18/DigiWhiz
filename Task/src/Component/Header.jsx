import React from "react";
import Vector from "../../public/assets/Vector.png";
import telephone from "../../public/assets/telephone-call.png";
import Rectangle from "../../public/assets/Rectangle.png";

export default function Header() {
  return (
    <>
      <div className="bg-[#EBEBEB] w-full h-auto flex flex-col md:flex-row items-center px-4 md:px-24 py-2 ">
        <span className="w-full md:w-[50%] leading-6 text-[#464646] font-[500] text-[14px] md:text-[16px] sm:text-[18px] text-center md:text-left">
          Have any question?
        </span>
        <div className="w-full md:w-[50%] sm:flex  flex flex-row md:flex-row items-center justify-center md:justify-end mt-2 md:mt-0">
          <div className="flex items-center mr-4 md:mr-7 ">
            
            <img
              className="w-4 h-4 md:w-5 md:h-5 mr-2"
              src={Vector}
              alt=""
            />
            <a
              className="text-[#464646] outline-none font-[500] text-[14px] md:text-[16px] leading-6"
              href=""
            >
              contact@mail.com
            </a>
          </div>
          <div className="hidden md:block">
            
            <img
              className="w-[1px] h-5 md:h-[20px] bg-gray-300"
              src={Rectangle}
              alt=""
            />
          </div>
          <div className="flex items-center ml-4 md:ml-7 mt-2 md:mt-0 min-w-[170px]">
            
            <img
              className="w-4 h-4 md:w-5 md:h-5 mr-2"
              src={telephone}
              alt=""
            />
            <a
              className="text-[#464646] font-[500] text-[14px] md:text-[16px] "
              href=""
            >
              +080 0444 333 444
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
