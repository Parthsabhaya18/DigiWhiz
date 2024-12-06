import React from "react";
import Rectangle6 from "../../public/assets/Rectangle6.png";
import skyline from "../../public/assets/skyline.png";
import building from "../../public/assets/building.png";
import wallpaper from "../../public/assets/wallpaper.png";

export default function House() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      
      <div className="w-full md:w-[50%]">
        
        <img
          className="h-auto md:h-[751px] w-full object-cover"
          src={Rectangle6}
          alt="House"
        />
      </div>
      <div className="bg-[#F8F8F8] w-full md:w-[50%] h-auto md:h-[751px] flex flex-col items-center justify-center gap-10 p-6 md:pr-[75px]">
        
        <div className="flex items-start">
          
          <div className="w-[68px] h-[68px] mr-5">
            
            <img src={skyline} alt="Skyline Icon" />
          </div>
          <div className="flex-1">
            
            <h2 className="font-[600] mb-3 text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-[#252C3A]">
              GENERAL BUILDER
            </h2>
            <p className="font-[400] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-[#5A5A5A]">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          
          <div className="w-[68px] h-[68px] mr-5">
            
            <img src={building} alt="Building Icon" />
          </div>
          <div className="flex-1">
            
            <h2 className="font-[600] mb-3 text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-[#252C3A]">
              HOUSE EXTENSIONS
            </h2>
            <p className="font-[400] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-[#5A5A5A]">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          
          <div className="w-[68px] h-[68px] mr-5">
            
            <img src={wallpaper} alt="Wallpaper Icon" />
          </div>
          <div className="flex-1">
            
            <h2 className="font-[600] mb-3 text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-[#252C3A]">
              REFURBISHMENT
            </h2>
            <p className="font-[400] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-[#5A5A5A]">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
