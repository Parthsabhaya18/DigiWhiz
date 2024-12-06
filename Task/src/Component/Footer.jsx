import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#252C3A] w-full py-4 md:py-0 md:h-[60px] flex flex-col md:flex-row items-center justify-between px-4 md:px-24">
      
      <div className="font-[600] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-[#FFFFFF] mb-4 md:mb-0">
        
        <span>© DIGIWHIZ 2019</span>
      </div>
      <ul className="font-[500] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-[#FFFFFF] flex flex-wrap items-center justify-center md:justify-around gap-4 md:gap-8">
        
        <li>Home</li> <li>About us</li> <li>Features</li> <li>Project</li>
        <li>Pages</li> <li>Contact</li>
      </ul>
    </div>
  );
}
