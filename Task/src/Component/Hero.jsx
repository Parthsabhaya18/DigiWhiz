import React, { useState, useEffect } from "react";
import Rectangle1 from "../../public/assets/Rectangle1.png";
import Rectangle8 from "../../public/assets/Rectangle8.jpg"
import Rectangle3 from "../../public/assets/Rectangle3.png";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: Rectangle8,
      title: "We Do Big Things With Big Ideas",
      description: "Talk To Our Experts and Get Your Dream Home Done. If you dream of designing a new home that takes full advantage of the unique geography and views of land that you love.",
      buttonText: "Explore Now"
    },
    {
      image: Rectangle1,
      title: "Innovative Solutions For Modern Living",
       description: "Talk To Our Experts and Get Your Dream Home Done. If you dream of designing a new home that takes full advantage of the unique geography and views of land that you love.",
      buttonText: "Explore Now"
    },
    {
      image: Rectangle3,
       title: "Designing Your Dream Home",
       description: "Talk To Our Experts and Get Your Dream Home Done. If you dream of designing a new home that takes full advantage of the unique geography and views of land that you love.",
      buttonText: "Explore Now"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[699px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-no-repeat ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start lg:px-24 px-4 sm:px-6 md:px-12 text-white">
  <h1 className="w-full sm:w-[400px] md:w-[500px] lg:w-[555px] font-[800] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[78px] mb-4 sm:mb-6 md:mb-8 lg:mb-9">{slide.title}</h1>
  <p className="w-full sm:w-[400px] md:w-[500px] lg:w-[555px] font-[400] text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] mb-4 sm:mb-6 md:mb-8 lg:mb-12">{slide.description}</p>
  <button className="w-[150px] sm:w-[160px] md:w-[170px] lg:w-[191px] h-[40px] sm:h-[48px] md:h-[52px] lg:h-[58px] flex items-center justify-center font-[600] text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] bg-[#F9B701]">{slide.buttonText}</button>
</div>

        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`w-4 h-4 border-2 rounded-full ${index === currentIndex ? 'bg-white' : 'border-[#FFB700] bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  );
}
