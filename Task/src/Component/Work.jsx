import React, { useState } from "react";
import Rectangle1 from "../../public/assets/Rectangle1.png";
import Rectangle2 from "../../public/assets/Rectangle2.png";
import Rectangle3 from "../../public/assets/Rectangle3.png";
import Rectangle4 from "../../public/assets/Rectangle4.png";
import Rectangle5 from "../../public/assets/Rectangle5.png";
import health1 from "../../public/assets/health1.png";
import health2 from "../../public/assets/health2.jpeg";
import health3 from "../../public/assets/health3.jpg";
import health4 from "../../public/assets/health4.jpg";
import health5 from "../../public/assets/health5.jpeg";
import health6 from "../../public/assets/health6.jpeg";
import int1 from "../../public/assets/int1.jpg";
import int2 from "../../public/assets/int2.jpeg";
import int3 from "../../public/assets/int3.jpg";
import int4 from "../../public/assets/int4.jpg";
import int5 from "../../public/assets/int5.jpg";
import int6 from "../../public/assets/int6.jpg";
import off1 from "../../public/assets/off1.jpg";
import off2 from "../../public/assets/off2.jpeg";
import off3 from "../../public/assets/off3.jpeg";
import off4 from "../../public/assets/off4.jpeg";
import off5 from "../../public/assets/off5.jpg";
import off6 from "../../public/assets/off6.jpg";
import link from "../../public/assets/link.png";
import plus from "../../public/assets/plus.png";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { Name: "All" },
    { Name: "Green Building" },
    { Name: "Healthcare" },
    { Name: "Interior Design" },
    { Name: "Office" },
  ];

  const works = [
    { id: 1, image: Rectangle1, category: "Green Building" },
    { id: 9, image: health3, category: "Healthcare" },
    { id: 15, image: int3, category: "Interior Design" },
    { id: 11, image: health5, category: "Healthcare" },
    { id: 19, image: off1, category: "Office" },
    { id: 2, image: Rectangle2, category: "Green Building" },
    { id: 8, image: health2, category: "Healthcare" },
    { id: 13, image: int1, category: "Interior Design" },
    { id: 24, image: off6, category: "Office" },
    { id: 4, image: Rectangle4, category: "Green Building" },
    { id: 7, image: health1, category: "Healthcare" },
    { id: 17, image: int5, category: "Interior Design" },
    { id: 21, image: off3, category: "Office" },
    { id: 5, image: Rectangle5, category: "Green Building" },
    { id: 10, image: health4, category: "Healthcare" },
    { id: 14, image: int2, category: "Interior Design" },
    { id: 20, image: off2, category: "Office" },
    { id: 6, image: Rectangle2, category: "Green Building" },
    { id: 12, image: health6, category: "Healthcare" },
    { id: 16, image: int4, category: "Interior Design" },
    { id: 22, image: off4, category: "Office" },
    { id: 3, image: Rectangle3, category: "Green Building" },
    { id: 18, image: int6, category: "Interior Design" },
    { id: 23, image: off5, category: "Office" },
  ];

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <div className="px-4 lg:px-24">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="font-[700] text-[32px] md:text-[44px] leading-[40px] md:leading-[66px] text-[#252C3A] text-center">
        <h1>Featured Works</h1>
      </div>
      <br />
      <div className="font-[400] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-[#5A5A5A] text-center">
        <p>
          Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus
          definiebas cum et. Duo id omnis persequeris neglegentur, facete
          commodo ea usu, possit lucilius sed ei. Esse efficiendi scripserit eos
          ex. Sea utamur iisque salutatus id. Mel autem animal.
        </p>
      </div>
      <br />
      <br />
      <div className="font-[500] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] w-full text-[#5A5A5A] flex flex-wrap items-center justify-center border-none">
        {categories.map((category) => (
          <button
            key={category.Name}
            className={`hover:bg-[#FFB700] border-none mx-2 md:mx-5 my-2  px-2 py-1 md:py-0 h-[30px] md:h-auto ${
              selectedCategory === category.Name ? "bg-[#FFB700]" : ""
            }`}
            onClick={() => setSelectedCategory(category.Name)}
          >
            {category.Name}
          </button>
        ))}
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[1.2px]">
        {filteredWorks.map((work) => (
          <div key={work.id} className="group relative overflow-hidden flex justify-center">
            <img
              src={work.image}
              alt={work.category}
              className="w-full h-[260px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-[83px] duration-500 ease-in-out bg-[#000000D9] flex items-center overflow-hidden justify-evenly">
              <div className="font-[600] text-[14px] md:text-[16px] leading-[36px] text-[#FFFFFF]">
                <h1>ARCHITECTURE AND DESIGN</h1>
                <hr className="text-[#FFFFFF] w-[58px] h-[2px]" />
              </div>
              <div className="flex items-center">
                <img
                  className="w-[30px] md:w-[35px] h-[30px] md:h-[35px] mr-2"
                  src={plus}
                  alt="Plus icon"
                />
                <img
                  className="w-[30px] md:w-[35px] h-[30px] md:h-[35px]"
                  src={link}
                  alt="Link icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
