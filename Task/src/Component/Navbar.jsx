import React, { useState } from "react";
import Layer from "../../public/assets/Layer.png";
import Group from "../../public/assets/Group.png";
import Rectangle from "../../public/assets/Rectangle.png";
import magnifying from "../../public/assets/magnifying.png";
import { PiList } from "react-icons/pi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-24 py-4">
        <div className="flex justify-between items-center w-full ">
          <img className="w-[144px] h-[50px]" src={Layer} alt="Logo" />
          <div className="">
            <div className="flex items-center">
              <button
                className="text-2xl right-24 top-15 absolute lg:hidden  mb-2"
                onClick={toggleMenu}
              >
                <PiList />
              </button>
            </div>
            <nav
              className={`nav ${
                isOpen ? "block" : "hidden"
              } lg:flex items-center justify-between font-[500] text-[#252C3A] text-[18px] leading-7 list-none gap-4  md:gap-6 `}
            >
              <li className="flex items-center font-[700] text-[#FFB700] ">
                <img
                  className="mr-1 h-[8px] w-[8px]"
                  src={Group}
                  alt="Home Icon"
                />
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <img
                className="w-[1px] h-[20px] text-[#D9D9D9] hidden sm:hidden lg:block"
                src={Rectangle}
                alt="Separator"
              />
              <img
                className="w-[40px] h-[40px] hidden sm:hidden lg:block"
                src={magnifying}
                alt="Search Icon"
              />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
