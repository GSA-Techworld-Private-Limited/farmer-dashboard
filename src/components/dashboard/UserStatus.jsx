import React from "react";
import { FarmersIcon } from "../common/Icons";
import ChartBar from "../common/ChartBar";

const UserStatus = () => {
 
  const data = [
    {
      title: "Farmers",
      value: "932",
    },
    {
      title: "Vendors",
      value: "932",
    },
    {
      title: "Nurseries",
      value: "932",
    },
    {
      title: "Employees",
      value: "932",
    },
    {
      title: "Experts",
      value: "932",
    },
  ];
  return (
    <div className="py-7 pl-10 pr-12 w-full h-[calc(100vh-76px)] overflow-auto">
      <div className="grid grid-cols-3 w-[87%] mb-9 gap-x-[42px] gap-y-4">
        {data.map((obj, i) => (
          <div
            key={i}
            className={`w-full h-[126px] gap-[9px] flex items-center justify-center rounded-[5px] ${
              obj.title === "Farmers"
                ? "bg-farmer"
                : obj.title === "Vendors"
                ? "bg-vendors"
                : obj.title === "Nurseries"
                ? "bg-nurseries"
                : obj.title === "Employees"
                ? "bg-employees"
                : obj.title === "Experts"
                ? "bg-experts"
                : ""
            }`}
          >
            <FarmersIcon />
            <div>
              <p className="text-base leading-4 text-white font-poppins">
                {obj.title}
              </p>
              <p className="text-white font-poppins font-bold text-2xl leading-6 mt-[5px]">
                {obj.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div>
          <ChartBar />
        </div>
        <div className="w-[312px] px-[22px] pt-3 bg-[#F9F9F9] border border-[#c6c6c6] rounded-xl">
          <div className="flex items-center justify-between">
            <p className="text-[10px] opacity-0 pointer-events-none">
              {" "}
              View All
            </p>
            <p className="text-lg text-black leading-7 font-semibold font-poppins">
              Product List
            </p>
            <button className="text-[10px] underline text-[#303972] font-poppins font-semibold">
              View All
            </button>
          </div>
          <div className="flex justify-between border-b border-black border-opacity-50 pt-4">
            <p className="text-black leading-7 w-3/5 text-sm font-poppins font-semibold">
              Product Name
            </p>
            <p className="text-black leading-7 w-2/5 text-sm font-poppins font-semibold">
              Available Qty.
            </p>
          </div>
          <div className="flex flex-col h-[370px] overflow-auto gap-2 mt-2">
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-black leading-7 w-3/5 text-sm font-poppins">
                Product 1
              </p>
              <p className="text-black leading-7 w-2/5 text-sm font-poppins">
                145
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
