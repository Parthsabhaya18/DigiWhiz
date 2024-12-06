import React from "react";

export default function Table() {
  const tableData = {
    headers: ["Code", "Name", "Designation", "Contact Details", "Work Profile"],
    employees: [
      {
        id: 1,
        code: 26,
        name: "Unish Kumar",
        designation: "Front End Developer",
        contact: "9099201233",
        profile: "Total responsibilty to handle     Front End Work ",
      },
      {
        id: 2,
        code: 36,
        name: "Hari Parmar",
        designation: ".Net Developer",
        contact: "9898512345",
        profile: "Handle all .net development",
      },
      {
        id: 3,
        code: 78,
        name: "Jigar Gor",
        designation: "Web & Graphic Designer",
        contact: "9898123466",
        profile: "Create Website, Graphics etc.",
      },
      {
        id: 4,
        code: 28,
        name: "Vikash Shah",
        designation: ".Net Developer",
        contact: "9898123478",
        profile: "Handle all .net development",
      },
      {
        id: 5,
        code: 55,
        name: "Charmi Shah",
        designation: "SEO Executive",
        contact: "9789552451",
        profile: "SEO Work",
      },
      {
        id: 6,
        code: 70,
        name: "Peter Parker",
        designation: "SEO Executive",
        contact: "9789552451",
        profile: "SEO Work",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center px-4 lg:px-24">
      <br /> <br />
      <div className="font-[700] text-[32px] md:text-[44px] leading-[40px] md:leading-[66px] text-[#252C3A]">
        EMPLOYEE DETAILS
      </div>
      <br /> <br />
      <div className="w-full overflow-x-auto">
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-[#252C3A] font-[600] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#FFFFFF]">
              {tableData.headers.map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-2 md:px-4 border border-[#D9D9D9]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-[400] text-[14px] md:text-[18px] leading-[20px]  text-[#252C3A]">
            {tableData.employees.map((employee, index) => (
              <tr
                key={employee.id}
                className={index % 2 === 0 ? "bg-[#E7E7E7]" : "bg-[#F5F5F5]"}
              >
                <td className="py-2 px-2 md:px-4 border border-[#D9D9D9] text-center">
                  {employee.code}
                </td>
                <td className="py-2 px-2 md:px-4 border border-[#D9D9D9] text-center">
                  {employee.name}
                </td>
                <td className="py-2 px-2 md:px-4 border border-[#D9D9D9] text-center">
                  {employee.designation}
                </td>
                <td className="py-2 px-2 md:px-4 border border-[#D9D9D9] text-center">
                  {employee.contact}
                </td>
                <td className="py-2 px-2 md:px-4 border border-[#D9D9D9]">
                  {employee.profile}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br /> <br />
    </div>
  );
}
